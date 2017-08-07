(function () {
	function TopupRecord () {
		this.initDom();
	}

	TopupRecord.prototype.initDom = function () {
		var temp;

		this.select = new Select({
			id: 'topup-record-select',
			width: 100,
			height: 32,
			data: [
				{
					'text': '充值类型',
					'value': '-1',
				},
				{
					'text': '银行存款',
					'value': '0',
				},
				{
					'text': '在线支付',
					'value': '1',
				},
				{
					'text': '代理转账',
					'value': '2',
				},
/*				{
					'text': '亚联支付',
					'value': '3',
				}*/
			]
		});

		this.button = new Button({
			id: 'topup-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'topUp-record-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="topup-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								this.select.getDom() +

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
								'<span class="text">当前页小计</span>' +
								'<span class="value sub-total">0.00</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">0.00</span>' +
								'<span class="text">元</span>' +
							'</div>' +				
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead>' +
									'<tr>' + 
										'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
										'<th>订单号</th>' +
										'<th>充值类型</th>' +
										'<th>充值金额</th>' +
										'<th>状态</th>' +
									'</tr>' +
								'</thead>' +
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

	TopupRecord.prototype.getDom = function () {
		return this.el;
	};

	TopupRecord.prototype.show = function(){
		this.zone.show();
		this.queryData(0, true);
		this.queryTotal();
	};

	TopupRecord.prototype.hide = function(){
		this.zone.hide();
	};

    TopupRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	TopupRecord.prototype.queryData = function(pageIndex, firstTime) {
		var opt;
		var callback;
		var params    = '';
		var that      = this;
		var type      = this.select.getValue();
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		
		this.loader1.play();

		opt = {
			url: app.urls.topupRecords,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10
			}
		};

		if (type != -1) {
			opt.data.type = type;
		}

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	TopupRecord.prototype.queryTotal = function() {
		var that      = this;
		var type      = this.select.getValue();
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		
		var opt = {
			url: app.urls.getTopUpTotal,
			data: {
				status: '',
				type: '',
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

	TopupRecord.prototype.setData = function(data){
		var i           = 0;
		var dom         = '';
		var subTotal    = 0;
		var currentData = data.list;
		 
		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}

			subTotal += parseFloat(currentData[i].Amount);
		}

		this.zone.find('.table-zone tbody').html(dom);
		this.zone.find('.bar-zone .sub-total').text(subTotal.toFixed(2));
	};

	TopupRecord.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	TopupRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	TopupRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -15);

		this.zone    = $('.topup-record');
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

        this.zone.find('#topup-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.button.bindEvents();
		this.select.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.TopupRecord = TopupRecord;
}());
