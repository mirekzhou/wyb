(function(){
	function Alert(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	Alert.prototype = new IMDialog();

	Alert.prototype.initDom = function() {
		var temp = '<div class="alert">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="content">' +
								'</div>'+

								'<div class="button-zone">' +
									'<div class="button ok">确定</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay10"></div>';

		this.el = temp;
	};

	Alert.prototype.getDom = function() {
		return this.el;
	};

	Alert.prototype.show = function(content, cb, cb2) {
		content     = content || '';
		this.cb     = cb || '';
		this.cb2    = cb2 || '';
		this.okFlag = false;

		this.zone.find('.content').text(content);
		this.showOverlay();
	};

	Alert.prototype.hide = function() {
		this.hideOverlay();
		this.zone.find('.content').text('');

		if (!this.okFlag && this.cb2 && typeof this.cb2 === 'function') {
			this.cb2();
		}
	};

	Alert.prototype.isOpen = function() {
		return this.zone.css('display') !== 'none';
	};

	Alert.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.alert');

		this.zone.delegate('.ok', 'click', function () {
			that.okFlag = true;
			that.hide();

			if (typeof that.cb === 'function') {
				that.cb();
			}
		});

		$(document).keypress(function(e) {
		    if(e.which == 13) {
		    	that.okFlag = true;
		        that.hide();
		    }
		});

		this.bindOverlayEvents();
	};

	window.Alert = Alert;
}());