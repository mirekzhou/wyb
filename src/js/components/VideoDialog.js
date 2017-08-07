(function(){
	function VideoDialog(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	VideoDialog.prototype = new IMDialog();

	VideoDialog.prototype.initDom = function() {
		var temp = '<div class="video-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name"></span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<video controls="controls" autoplay="autoplay" preload="none"></video>' +
								'</div>'+
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	VideoDialog.prototype.getDom = function() {
		return this.el;
	};

	VideoDialog.prototype.show = function(src) {
		this.zone.find('video').attr('src', src);
		this.showOverlay();
	};

	VideoDialog.prototype.hide = function() {
		//this.zone.find('video')[0].pause();
		this.zone.find('video').attr('src', '');
		this.hideOverlay();
	};

	VideoDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.video-dialog');

		this.zone.delegate('.close', 'click', function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.VideoDialog = VideoDialog;
}());