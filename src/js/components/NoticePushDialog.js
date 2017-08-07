(function () {
	function NoticePushDialog (opt) {
		this.initDom();
	}
	
	NoticePushDialog.prototype = new IMDialog();

	NoticePushDialog.prototype.initDom = function () {
		var temp =	'<div class="notice-push-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	NoticePushDialog.prototype.getDom = function () {
		return this.el;
	};

	NoticePushDialog.prototype.show = function (opt) {
		var temp = this.generateItems(opt);

		this.zone.find('.dialog').append(temp);
		this.zone.find('.dialog-wrapper').css('bottom', '0');
	};

	NoticePushDialog.prototype.hide = function () {
		this.zone.find('.dialog-wrapper').css('bottom', '-300px');
	};

	NoticePushDialog.prototype.generateItems = function (item) {
		var temp =	'<div class="section">' +
						'<div class="subtitle">' +
							'<span class="title-name">' + item.title + '</span>' +
							'<span class="close">×</span>' +
						'</div>' +

						'<div class="content">' +
							'<div class="content-text">' + item.content + '</div>' +
						'</div>'+
					'</div>';

		return temp;
	};

	NoticePushDialog.prototype.bindEvents = function () {
		var that  = this;

		this.zone = $('.notice-push-dialog');

		this.zone.delegate('.close', 'click', function () {
			$(this).parent('.subtitle').parent('.section').remove();
		});
	};

	window.NoticePushDialog = NoticePushDialog;
}());
