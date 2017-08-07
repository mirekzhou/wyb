(function () {
	function Input(opt) {
		this.opt     = opt;
		this.id      = opt.id;
		this.pass    = false;
		this.opt.reg = this.opt.reg || '';
		this.initDom();
	}

	Input.prototype.initDom = function() {
		var temp =	'<div class="input" id="' + this.id + '">' +
						'<input value="" type="' + (this.opt.type?this.opt.type: 'text') + 
									  '" placeholder="' + (this.opt.placeholder? this.opt.placeholder: '') + '"' +
									  (this.opt.disabled?' disabled="disabled"': '') +
									  '>' +
						'<span class="warning-icon"></span>' +
						'<div class="clear"></div>' +
					'</div>';

		this.el = temp;
	};

	Input.prototype.getDom = function() {
		return this.el;
	};

	Input.prototype.isPass = function() {
		var value = this.getValue();

		if (!this.opt.canBlank) {
			if (value && value.match(this.opt.reg)) {
				return true;
			} else {
				return false;
			}
		}

		if (this.opt.canBlank) {
			if (!this.getValue()) {
				return true;
			} else {
				if (value.match(this.opt.reg)) {
					return true;
				} else {
					return false;
				}
			}
		}
	};

	Input.prototype.getValue = function() {
		return $.trim(this.zone.children('input').val());
	};

	Input.prototype.setValue = function(value) {
		this.zone.children('input').val(value);
	};

	Input.prototype.showWarning = function() {
		this.zone.children('.warning-icon').show();
	};

	Input.prototype.hideWarning = function() {
		this.zone.children('.warning-icon').hide();
	};

	Input.prototype.disable = function() {
		this.zone.find('input').attr('disabled', 'disabled');
	};

	Input.prototype.enable = function() {
		this.zone.find('input').attr('disabled', false);
	};

	Input.prototype.isAble = function() {
		return !(this.zone.find('input').attr('disabled') === 'disabled');
	};

	Input.prototype.setPass = function(val) {
		this.pass = val;
	};

	Input.prototype.checkInput = function() {
		if (this.isPass()) {
			this.hideWarning();
		} else {
			this.showWarning();
		}
	};

	Input.prototype.bindEvents = function(callback) {
		var value;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.children('input').bind('input', function () {
			that.checkInput();

			if (typeof callback === 'function') {
				callback();
			}
		});

		this.zone.children('input').bind('focus', function () {
			that.hideWarning();
		});

		this.resetStyles();
	};

	Input.prototype.resetStyles = function() {
		if (this.opt.height) {
			this.zone.css({
				'height': this.opt.height + 'px',
				'line-height': this.opt.height + 'px'
			});

			this.zone.children('input').css({
				'height': (parseInt(this.opt.height) - 3) + 'px',
				'line-height': (parseInt(this.opt.height) - 3) + 'px'
			});
		}

		if (this.opt.width) {
			this.zone.css('width', this.opt.width + 'px');			
		}

		if (this.opt.backgroundColor) {
			this.zone.css('background-color', this.opt.backgroundColor);			
		}

		if (this.opt.color) {
			this.zone.css('color', this.opt.color);			
		}

		if (this.opt.fontSize) {
			this.zone.css('font-size', this.opt.fontSize);
		}
	};

	window.Input = Input;
}());