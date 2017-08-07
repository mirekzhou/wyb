(function () {
	function DailyTask () {
		this.initDom();
	}
	
	DailyTask.prototype.initDom = function () {
		var temp =	'<div class="daily-task">' +
						'<div class="section1">' +
							'<div class="section-left">' +
								'<span class="slot-rescue-icon"></span>' +
							'</div>' +

							'<div class="section-middle">' +
								'<div class="middle-info info1">' +
									'<span>老虎机救援金</span>' +
									'<span class="icon-question"></span>' + 
								'</div>' +

								'<div class="middle-info">' +
									'<span>任务目标：负盈利≥500，账户余额&lt;10</span>' +
								'</div>' +

								'<div class="middle-info">' +
									'<span>奖励：<span class="tc-coin-icon"></span> * 30%</span>' +
								'</div>' +
							'</div>' +

							'<div class="section-right">' +
								'<div class="get-bonus">' +
									'立即领取' +
								'</div>' +

								'<div class="bonus-info">' +
									'(可领取<span class="bonus-value">100</span>元)' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="section2">' +
							'<div class="section-left">' +
								'<span class="money-return-icon"></span>' +
							'</div>' +

							'<div class="section-middle">' +
								'<div class="middle-info info1">' +
									'<span>天天返水</span>' +
									'<span class="icon-question"></span>' + 
								'</div>' +

								'<div class="middle-info">' +
									'<span>任务目标：有效投注≥500</span>' +
								'</div>' +

								'<div class="middle-info">' +
									'<span>奖励：</span>' +
									'<ul class="bonus-rates">' +
										'<li>' +
										 	'<span class="tc-slot-icon"></span>' +
										 	'<span class="times-icon">*</span>' +
										 	'<span class="value">1%</span>' +
										'</li>' +
										'<li>' +
										 	'<span class="tc-live-icon"></span>' +
										 	'<span class="times-icon">*</span>' +
										 	'<span class="value">1%</span>' +
										'</li>' +
										'<li>' +
										 	'<span class="tc-sport-icon"></span>' +
										 	'<span class="times-icon">*</span>' +
										 	'<span class="value">1%</span>' +
										'</li>' +
										'<li>' +
										 	'<span class="tc-lottery-icon"></span>' +
										 	'<span class="times-icon">*</span>' +
										 	'<span class="value">1%</span>' +
										'</li>' +
									'</ul>' +
								'</div>' +
							'</div>' +

							'<div class="section-right">' +
								'<div class="get-bonus">' +
									'立即领取' +
								'</div>' +

								'<div class="bonus-info">' +
									'(可领取<span class="bonus-value">50</span>元)' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="section3">' +
							'<div class="section3-title">' +
								'<span class="effective-betting-detail">有效投注详情</span>' +
							'</div>' +

							'<ul class="water-sticks">' +
								'<li>' +
									'<span class="name">老虎机</span>' +
									'<div class="stick-wrapper"><div class="stick slot"></div></div>' +
								'</li>' +
								'<li>' +
									'<span class="name">真人视讯</span>' +
									'<div class="stick-wrapper"><div class="stick live"></div></div>' +
								'</li>' +
								'<li>' +
									'<span class="name">体育竞技</span>' +
									'<div class="stick-wrapper"><div class="stick sport"></div></div>' +
								'</li>' +
								'<li>' +
									'<span class="name">彩票游戏</span>' +
									'<div class="stick-wrapper"><div class="stick lottery"></div></div>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	DailyTask.prototype.getDom = function () {
		return this.el;
	};

	DailyTask.prototype.show = function () {
		this.zone.show();
		this.getTasks();
		this.setSticks();
	};

	DailyTask.prototype.hide = function () {
		this.zone.hide();
	};

	DailyTask.prototype.setSticks = function (type, value) {
		var i;
		var data = [
			{
				type: 'slot',
				value: 199900
			},
			{
				type: 'live',
				value: 150000
			},
			{
				type: 'sport',
				value: 100000
			},
			{
				type: 'lottery',
				value: 50000
			}
		];

		for (i = 0; i < data.length; i++) {
			this.setStick(data[i].type, data[i].value);
		}
	};

	DailyTask.prototype.setStick = function (type, value) {
		var base  = 200000;
		var width = parseFloat(value) / base * 100;

		this.zone.find('.water-sticks .' + type).text(value);
		this.zone.find('.water-sticks .' + type).css('width', width + '%');
	};

	DailyTask.prototype.getTasks = function () {
		var opt;
		var callback;
		var that = this;

/*		opt = {
			url: app.urls.getBonusList,
			data: {
				type: '13',
				beginTime: '2016-04-01 00:00:00',
				endTime: '2019-06-01 23:59:59',
				pageSize: 10,
				pageIndex: 0
			}
		};
*/
/*		opt = {
			url: app.urls.getRecommendList,
			data: {
				beginTime: '2016-04-01 00:00:00',
				endTime: '2019-06-01 23:59:59',
				pageSize: 10,
				pageIndex: 0
			}
		};*/

		opt = {
			url: app.urls.getBonusTypeList,
			data: {
				BonusName: '转运金'
			}
		};

		callback = function (json) {
			console.log(JSON.stringify(json));
		};

		Service.get(opt, callback);
	};

	DailyTask.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('.daily-task');
	};

	window.DailyTask = DailyTask;
}());
