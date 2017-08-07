(function () {
	function NewbieTask () {
		this.initDom();
	}
	
	NewbieTask.prototype.initDom = function () {
		var temp =	'<div class="newbie-task">' +
						'<div class="newbie-task-header">' +
							'<div class="header-left">' +
								'<span class="text">新手任务</span>' +
								'<span class="icon-question"></span>' + 
							'</div>' +

							'<div class="header-right">' +
								'<span class="text">任务进度</span>' +
								'<span class="value">3/4</span>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="newbie-task-body">' +
							'<ul class="tasks"></ul>' +

							'<div class="body-bottom">' +
								'<div class="get-bonus">领取<span class="bonus-value">56</span>元彩金</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	NewbieTask.prototype.getDom = function () {
		return this.el;
	};

	NewbieTask.prototype.setTasks = function () {
		var i;
		var temp = '';
		var statusDict = {
			0: '做任务',
			1: '已完成'
		};

		for (i = 0; i < this.arr.length; i++) {
			temp += '<li>' +
						'<div class="task-info">' +
							'<span>♦</span>' +
							'<span class="info-name">' + this.arr[i].name + '</span>' +
							'<span>♦</span>' +
						'</div>' +

						'<div class="icon-zone">' +
							'<span class="' + this.arr[i].iconClassName + '">' +
						'</div>' +

						'<div class="status' + ((this.arr[i].status == 1)? ' finished' : '') + '" data-action="' + this.arr[i].action + '">' +
							statusDict[this.arr[i].status] +
						'</div>' +
					'</li>';
		}

		this.zone.find('.tasks').html(temp);
	};

	NewbieTask.prototype.show = function () {
		this.zone.show();
		this.checkTaskStatus();
		this.setTasks();
	};

	NewbieTask.prototype.hide = function () {
		this.zone.hide();
	};

	NewbieTask.prototype.checkTaskStatus = function () {
		var count = 0;

		this.arr  = [
			{
				name: '真实姓名',
				status: 0,
				iconClassName: 'tc-icon-truename',
				action: 'truename'
			},
			{
				name: '电话验证',
				status: 0,
				iconClassName: 'tc-icon-phone',
				action: 'phone'
			},
			{
				name: '邮箱验证',
				status: 0,
				iconClassName: 'tc-icon-mail',
				action: 'mail'
			},
			{
				name: '首存金额≥50',
				status: 0,
				iconClassName: 'tc-icon-deposit',
				action: 'deposit'
			}
		];

		if (app.checkUserTrueName()) {
			count++;
			this.arr[0].status = 1;
		}

		if (app.checkUserPhone()) {
			count++;
			this.arr[2].status = 1;
		}

		if (app.checkUserEmail()) {
			count++;
			this.arr[2].status = 1;
		}

		if (parseFloat(app.userTotalInfo.Cash) > 0) {
			count++;
			this.arr[3].status = 1;
		}

		this.zone.find('.header-right .value').text(count + '/4');
	};

	NewbieTask.prototype.bindEvents = function () {
		var action;
		var that = this;

		this.zone = $('.newbie-task');

		this.zone.find('.tasks').delegate('li .status', 'click', function () {
/*			if ($(this).hasClass('finished')) {
				return;
			}*/

			PubSub.publish('closeTaskCenter', {});
			action = $(this).attr('data-action');

			if (action == 'truename') {
				app.personCenterRouter(2, 0);
			} else if (action == 'phone') {
				app.personCenterRouter(2, 1);
				app.showSetPhoneNumberDialog();
			} else if (action == 'mail') {
				app.personCenterRouter(2, 1);
				app.showSetEmailDialog();
			} else if (action == 'deposit') {
				app.personCenterRouter(0, 0);
			}
		});
	};

	window.NewbieTask = NewbieTask;
}());
