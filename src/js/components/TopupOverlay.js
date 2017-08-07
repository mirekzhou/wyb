$(function() {
	function TopupOvelay(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	};

	TopupOvelay.prototype = new IMDialog();

	TopupOvelay.prototype.initDom = function() {
		this.button1 = new Button({
			id: 'topup-overlay-finish-button',
			name: '已完成充值',
			width: 150,
			height: 40
		});

		this.button2 = new Button({
			id: 'topup-overlay-failed-button',
			name: '充值遇到问题',
			width: 150,
			height: 40
		});

		var temp = '<div class="topup-overlay">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name">充值提示</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'充值完成前，请不要关闭此窗口！' +
								'</div>'+

								'<div class="buttons">' +
									this.button1.getDom() +
									this.button2.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay9"></div>';
		this.el = temp;
	};

	TopupOvelay.prototype.getDom = function() {
		return this.el;
	};

	TopupOvelay.prototype.show = function() {
		this.showOverlay();
	};

	TopupOvelay.prototype.hide = function() {
		this.hideOverlay();
		app.refreshWallet();
	};

	TopupOvelay.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.topup-overlay');

		this.zone.find('#topup-overlay-finish-button').click(function () {
			that.hide();
		});

		this.zone.find('#topup-overlay-failed-button').click(function () {
			PubSub.publish('onlineCS', {});
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.button1.bindEvents();
		this.button2.bindEvents();
	};

	window.TopupOvelay = TopupOvelay;
}());