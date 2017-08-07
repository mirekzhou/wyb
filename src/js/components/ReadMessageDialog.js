$(function() {
	function ReadMessageDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ReadMessageDialog.prototype = new IMDialog();

	ReadMessageDialog.prototype.initDom = function() {
		var temp =	'<div class="read-message-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name"></span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<div class="datetime"></div>' +
									'<div class="letter-content"></div>' +
								'</div>'+
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	ReadMessageDialog.prototype.getDom = function() {
		return this.el;
	};

	ReadMessageDialog.prototype.show = function(opt) {
		this.letterId   = opt.id;
		this.readStatus = opt.status;
		this.type       = opt.type;
		this.zone.find('.title-name').text(opt.title);
		this.zone.find('.datetime').text(opt.datetime);
		this.zone.find('.letter-content').text(opt.letter);
		this.showOverlay();
	};

	ReadMessageDialog.prototype.hide = function() {
		this.hideOverlay();

		if (this.readStatus == 'false' && this.type == 'stationLetter') {
			PubSub.publish('onMessageRead', {id: this.letterId});
		}
	};

	ReadMessageDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.read-message-dialog');

		this.zone.find('.close').click(function () {
			that.hide();
		});

        this.bindOverlayEvents();
	};

	window.ReadMessageDialog = ReadMessageDialog;
}());