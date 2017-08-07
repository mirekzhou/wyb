(function () {
	function Button(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.initDom();
	}

	Button.prototype.initDom = function() {
		var temp = 	'<div class="button' + (this.opt.className? (' ' + this.opt.className):'') + '" id="' + this.id + '">' +
						(this.opt.search?'<span class="pc-serach-icon"></span>': '') +
						'<span class="name">' +
							this.opt.name +
						'</span>' +
					'</div>';

		this.el = temp;
	};

	Button.prototype.getDom = function() {
		return this.el;
	};

	Button.prototype.setName = function(name) {
		this.zone.find('.name').text(name);
	};

	Button.prototype.active = function(name) {
		this.zone.addClass('btn-plugin-active');
		this.enable();
	};

	Button.prototype.deactive = function(name) {
		this.zone.removeClass('btn-plugin-active');
	};

	Button.prototype.isActive = function() {
		return this.zone.hasClass('btn-plugin-active');
	};

	Button.prototype.disable = function() {
		this.deactive();
		this.zone.addClass('btn-disabled');
	};

	Button.prototype.enable = function() {
		return this.zone.removeClass('btn-disabled');
	};

	Button.prototype.isDisable = function() {
		return this.zone.hasClass('btn-disabled');
	};

	Button.prototype.bindCallback = function (cb) {
		var that = this;

		this.zone = $('#' + this.id);

		if (this.opt.clickWaiting) {
			this.zone.click(function () {
				if (that.isDisable()) {
					return;
				}

				that.disable();
				that.deactive();
				cb();

				var st = setTimeout(function () {
					that.enable();
					clearTimeout(st);
				}, that.opt.clickWaiting);
			});
		} else {
			this.zone.click(function () {
				cb();
			});
		}
	};

	Button.prototype.bindEvents = function() {
		this.zone = $('#' + this.id);
		this.resetStyles();
	};

	Button.prototype.resetStyles = function() {
		if (this.opt.height) {
			this.zone.css({
				'height': this.opt.height + 'px',
				'line-height': this.opt.height + 'px'
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

	window.Button = Button;
}());