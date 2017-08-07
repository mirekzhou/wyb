(function () {
	function TaskCenter (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	TaskCenter.prototype = new IMDialog();

	TaskCenter.prototype.initDom = function () {
		var temp =	'<div class="task-center">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="dialog-header">' +
									'<div class="header-left">' +
										'<span class="tc-icon-flag"></span>' +
										'<span class="title">任务中心</span>' +
									'</div>' +

									'<div class="header-right">' +
										'<span class="close">×</span>' +
									'</div>' +

									'<div class="clear"></div>' +
								'</div>' +

								'<div class="dialog-body">' +
									'<ul class="body-tree">' +
										'<li class="tree-item newbie-task-li">' +
											'<span class="tc-icon-newbie-task"></span>' +
											'<span class="task-name">新手任务</span>' +
										'</li>' +
										'<li class="tree-item daily-task-li">' +
											'<span class="tc-icon-daily-task"></span>' +
											'<span class="task-name">每日任务</span>' +
										'</li>' +
										'<li class="tree-item tournament-task-li">' +
											'<span class="tc-icon-tournament-task"></span>' +
											'<span class="task-name">闯关活动</span>' +
										'</li>' +
									'</ul>' +

									'<div class="body-container">' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay4"></div>';
		
		this.el  = temp;
	};

	TaskCenter.prototype.getDom = function () {
		return this.el;
	};

	TaskCenter.prototype.show = function () {
		this.zone.show();
		this.showOverlay();

		this.zone.find('.newbie-task-li').click();
	};

	TaskCenter.prototype.hide = function () {
		this.hideOverlay();
	};

	TaskCenter.prototype.bindEvents = function () {
		var treeItemClass;
		var that = this;

		this.zone = $('.task-center');

		this.zone.find('.body-tree').delegate('li', 'click', function () {
			$(this).siblings().removeClass('selected');
			$(this).addClass('selected');

			if ($(this).hasClass('newbie-task-li')) {
				if (!that.newbieTask) {
					that.newbieTask = new NewbieTask();
					that.zone.find('.body-container').append(that.newbieTask.getDom());
					that.newbieTask.bindEvents();
				}

				if (that.dailyTask) {
					that.dailyTask.hide();
				}

				if (that.tournamentTask) {
					that.tournamentTask.hide();
				}

				that.newbieTask.show();
			} else if ($(this).hasClass('daily-task-li')) {
				if (!that.dailyTask) {
					that.dailyTask = new DailyTask();
					that.zone.find('.body-container').append(that.dailyTask.getDom());
					that.dailyTask.bindEvents();
				}

				if (that.newbieTask) {
					that.newbieTask.hide();
				}

				if (that.tournamentTask) {
					that.tournamentTask.hide();
				}

				that.dailyTask.show();
			} else if ($(this).hasClass('tournament-task-li')) {
				if (!that.tournamentTask) {
					that.tournamentTask = new TournamentTask();
					that.zone.find('.body-container').append(that.tournamentTask.getDom());
					that.tournamentTask.bindEvents();
				}

				if (that.newbieTask) {
					that.newbieTask.hide();
				}

				if (that.dailyTask) {
					that.dailyTask.hide();
				}

				that.tournamentTask.show();
			}
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

        PubSub.subscribe('closeTaskCenter', function (msg, data) {
        	that.hide();
        });

		//this.bindOverlayEvents();
	};

	window.TaskCenter = TaskCenter;
}());
