(function () {
	function TournamentTask () {
		this.initDom();
	}
	
	TournamentTask.prototype.initDom = function () {
		var temp =	'<div class="tournament-task">' +
						'<div class="tournament-task-header">' +
							'<div class="header-left">' +
								'<span class="text">累积投注</span>' +
								'<span class="icon-question"></span>' + 
							'</div>' +

							'<div class="header-right">' +
								'<span class="text">倒计时：</span>' +
								'<span class="value">0天0时59分59秒</span>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="tournament-task-body">' +
							'<div class="task-info">' +
								'<div class="task-info-wrapper">' +
									'<span>您的累积投注总额为：</span>' +
									'<span class="value">110</span>' +
									'<span>万元</span>' +
									'<span class="tc-icon-refresh"></span>' +
								'</div>' +
							'</div>' +

							'<div class="route">' +
								'<span  class="route-icon"></span>' +
								'<span class="tc-icon-tour-start"></span>' +
								'<span class="tc-icon-tour-end"></span>' +
							'</div>' +
 						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	TournamentTask.prototype.getDom = function () {
		return this.el;
	};

	TournamentTask.prototype.show = function () {
		this.zone.show();
	};

	TournamentTask.prototype.hide = function () {
		this.zone.hide();
	};

	TournamentTask.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('.tournament-task');
	};

	window.TournamentTask = TournamentTask;
}());
