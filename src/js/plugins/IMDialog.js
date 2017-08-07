//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !window.Util.isMobile.any();

		/*
		**  IOS系统弹出框不能点击bug, 解决方法
		*/

		// if (this.isPC) {
		// 	this.zone.find('.dialog').css('transition', 'all .5s');
		// }

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	IMDialog.prototype.removeOverlayEvents = function () {
		this.zone.next('.overlay').unbind('click');	
	};

	window.IMDialog = IMDialog;
}());