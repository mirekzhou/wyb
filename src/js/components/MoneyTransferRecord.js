(function () {
	function MoneyTransferRecord () {
		this.initDom();
	}
	
	MoneyTransferRecord.prototype.initDom = function () {
		var temp;

		this.selectFrom = new Select({
			id: 'money-transfer-record-select-from',
			width: 100,
			height: 32,
			data: []
		});

		this.selectTo = new Select({
			id: 'money-transfer-record-select-to',
			width: 100,
			height: 32,
			data: []
		});

		this.button = new Button({
			id: 'money-transfer-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'money-transfer-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="money-transfer-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<span class="text">从</span>' +
								this.selectFrom.getDom() +
								'<span class="text">至</span>' +
								this.selectTo.getDom() +

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

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">0.00</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">0.00</span>' +
								'<span class="text">元</span>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' + 
									'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
									'<th>转账金额</th>' +
									'<th>游戏平台</th>' +
									'<th>类别</th>' +
									'<th>状态</th>' +
								'</tr></thead>' +
								'<tbody>' +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	MoneyTransferRecord.prototype.getDom = function () {
		return this.el;
	};

	MoneyTransferRecord.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.setPlatforms(app.allApiData);
			this.firstTime = true;
		}

		this.queryData(0, true);
		this.queryTotal();
	};

	MoneyTransferRecord.prototype.hide = function() {
		this.zone.hide();
	};

	MoneyTransferRecord.prototype.setPlatforms = function(data) {
		var i;
		var temp = 	'<option data-value="-1">全部</option>' +
					'<option data-value="0">主账户</option>';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].GamePlatform + '">' +
						data[i].GameName +
					'</option>';
		}

		this.selectFrom.setOptions(temp);
		this.selectTo.setOptions(temp);
	};

    MoneyTransferRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	MoneyTransferRecord.prototype.queryData = function(pageIndex, firstTime){
		var opt;
		var callback;
		var gamePlatform = '';
		var type         = '';
		var params       = '';
		var that         = this;
		var starttime    = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime      = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		var from         = this.selectFrom.getValue();
		var to           = this.selectTo.getValue();

		if (from == 0) {
			type = 0;

			if (to == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = to;
			}
		}

		if (to == 0) {
			type = 1;

			if (from == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = from;
			}
		}

    	opt   =  {
			url: app.urls.transferRecords,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10,
				type: type,
				status: '',
				gamePlatform: gamePlatform
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

	MoneyTransferRecord.prototype.queryTotal = function() {
		var gamePlatform = '';
		var type         = '';
		var params       = '';
		var that         = this;
		var starttime    = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime      = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		var from         = this.selectFrom.getValue();
		var to           = this.selectTo.getValue();

		if (from == 0) {
			type = 0;

			if (to == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = to;
			}
		}

		if (to == 0) {
			type = 1;

			if (from == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = from;
			}
		}
		
		var opt = {
			url: app.urls.getTransferTotal,
			data: {
				type: type,
				status: '',
				gamePlatform: gamePlatform,
				beginTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total').text(json.toFixed(2));
		};

		Service.get(opt, callback);
	};

	MoneyTransferRecord.prototype.setData = function(data){
		var i           = 0;
		var dom         = '';
		var subTotal    = 0;
		var currentData = data.list;	

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].GameType + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].GameType + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}

			subTotal += currentData[i].Amount;
		}

		this.zone.find('.table-zone tbody').html(dom);
		this.zone.find('.bar-zone .sub-total').text(subTotal.toFixed(2));
	};

	MoneyTransferRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	MoneyTransferRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	MoneyTransferRecord.prototype.bindEvents = function () {
		var value1;
		var value2;
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -15);

		this.zone    = $('.money-transfer-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#money-transfer-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#money-transfer-record-select-from' ).change(function () {
        	value1 = that.selectFrom.getValue();
        	value2 = that.selectTo.getValue();

        	if (value1 == 0) {
        		that.selectTo.setValue('-1');
        	}

        	if (value1 != 0) {
        		that.selectTo.setValue('0');
        	}
        });

        this.zone.find('#money-transfer-record-select-to' ).change(function () {
        	value1 = that.selectFrom.getValue();
        	value2 = that.selectTo.getValue();

        	if (value2 == 0) {
        		that.selectFrom.setValue('-1');
        	}

        	if (value2 != 0) {
        		that.selectFrom.setValue('0');
        	}
        });

        this.button.bindEvents();
		this.selectFrom.bindEvents();
		this.selectTo.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.MoneyTransferRecord = MoneyTransferRecord;
}());
