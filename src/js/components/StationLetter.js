$(function(){
	function StationLetter(opt){
		this.opt = opt;
		this.initDom();
	}

	StationLetter.prototype.initDom = function(){
		var temp;

		this.button = new Button({
			id: 'station-letter-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28	
		});

		this.pager = new Pager({
			id: 'station-letter-pager',
			callback: this.bindData.bind(this),
			right: true
		});

		temp = '<div class="station-letter znx-info-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' +
									'<th colspan="2">通知内容</th><th>时间</th>' +
								'</tr><thead>' +
								'<tbody>' +
								'</tbody>' +
							'</table>' + 

							 '<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +

 							'<div class="operations">' +
 								'<input type="checkbox" id="checkAll">' +
 								'<label for="checkAll">全选</label>' +
 								'<span class="mark-read">标记为已读</span>' +
 								'<span class="delete">删除</span>' +
 							'</div>' +
						'</div>' +
				'</div>';

		this.el = temp;
	};

	StationLetter.prototype.getDom = function() {
		return this.el;
	};

	StationLetter.prototype.show = function() {
		this.zone.show();
		this.queryData(0, true);
	};

	StationLetter.prototype.hide = function () {
		this.zone.hide();
	};

    StationLetter.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	StationLetter.prototype.queryData = function(pageIndex, firstTime) {
		var opt;
		var callback;
		var that      = this;
		var starttime = this.zone.find('.starttime').val();
		var endtime   = this.zone.find('.endtime').val();

		this.loader1.play();

		opt = {
			url: app.urls.getStationLetters,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex || 0,
				pageSize: 10,
				status: ''
			}
		};

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	StationLetter.prototype.setData = function(data) {
		var dom = '';
		var i   = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++) {
			if (i % 2 == 0) {
				dom +=	'<tr class="odd' + (!currentData[i].ReadTime?'': ' readed') + '" data-id="' + currentData[i].Id + '" data-read=' + (currentData[i].ReadTime?true: false) + '>' +
							'<td><input type="checkbox" /></td>' +
							'<td class="letter"><p>' + currentData[i].Message + '</p></td>' +
							'<td class="datetime">' + currentData[i].SendTime + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even' + (!currentData[i].ReadTime?'': ' readed') + '" data-id="' + currentData[i].Id + '" data-read=' + (currentData[i].ReadTime?true: false) + '>' +
							'<td><input type="checkbox" /></td>' +
							'<td class="letter"><p>' + currentData[i].Message + '</p></td>' +
							'<td class="datetime">' + currentData[i].SendTime + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	StationLetter.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	StationLetter.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + '23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	StationLetter.prototype.readMessage = function (Id) {
		var opt;
		var callback;
		var that      = this;

		this.loader1.play();

		opt = {
			url: app.urls.readMessage,
			data: {
				Id: Id
			}
		};

		callback = function (json) {
			if (json == true) {
				that.queryData(0, true);
			}
		};

		Service.post(opt, callback);
	};

	StationLetter.prototype.deleteMessage = function (Id) {
		var opt;
		var callback;
		var that      = this;

		this.loader1.play();

		opt = {
			url: app.urls.deleteMessage,
			data: {
				Id: Id
			}
		};

		callback = function (json) {
			if (json == true) {
				that.queryData(0, true);
			}
		};

		Service.post(opt, callback);
	};

	StationLetter.prototype.bindEvents = function () {
		var id;
		var trs;
		var tr;
		var i;
		var inputs;
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -100);

		this.zone    = $('.station-letter');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';;
        endDay   = endDay.formatDate() + '23:59';
        
        this.zone.find('.starttime').datetimepicker({
        	value: beginDay,
        	timepicker: false, 
        	theme: 'dark', 
        	lang: 'zh',
        	minDate: minDate
        });

        this.zone.find('.endtime').datetimepicker({
        	value: endDay,
        	timepicker: false, 
        	theme: 'dark', 
        	lang: 'zh',
        	minDate: minDate
        });

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        });

        this.zone.find('#station-letter-button').click(function () {
        	that.queryData(0, true);
        });

        this.zone.find('table tbody').delegate('.letter p', 'click', function () {
        	tr = $(this).parent('.letter').parent('tr');

        	app.showReadMessageDialog({
        		id: tr.attr('data-id'),
        		datetime: tr.children('.datetime').text(),
        		letter: tr.find('.letter p').text(),
        		status: tr.attr('data-read'),
        		type: 'stationLetter',
        		title: '站内信'
        	});
        });

        this.zone.find('#checkAll').click(function () {
        	inputs = that.zone.find('table td input');

        	if ($(this).prop('checked')) {
        		inputs.prop('checked', true);
        	} else {
        		inputs.prop('checked', false);
        	}
        });

        this.zone.find('.mark-read').click(function () {
        	trs = that.zone.find('table tr');
        	id  = '';

        	for (i = 0; i < trs.length; i++) {
        		if ($(trs[i]).find('input[type=checkbox]').prop('checked')) {
        			if (id === '') {
        				id += $(trs[i]).attr('data-id');
        			} else {
        				id += ',' + $(trs[i]).attr('data-id');
        			}
        		}
        	}

        	if (id === '') {
        		return;
        	}

        	that.readMessage(id);
        });

        this.zone.find('.delete').click(function () {
        	trs = that.zone.find('table tr');
        	id  = '';

        	for (i = 0; i < trs.length; i++) {
        		if ($(trs[i]).find('input[type=checkbox]').prop('checked')) {
        			if (id === '') {
        				id += $(trs[i]).attr('data-id');
        			} else {
        				id += ',' + $(trs[i]).attr('data-id');
        			}
        		}
        	}

        	if (id === '') {
        		return;
        	}
        	
        	that.deleteMessage(id);
        });

        PubSub.subscribe('onMessageRead', function (msg, data) {
        	that.readMessage(data.id);
        });

        this.button.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.StationLetter = StationLetter;
}());