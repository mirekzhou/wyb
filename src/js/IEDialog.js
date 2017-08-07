(function() {
	function IEDialog(opt) {
		this.initDom();
	}

	IEDialog.prototype.initDom = function() {
		var temp = '<div class="ie-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">' +	
									'您的浏览器版本过低' +
								'</div>'+

								'<div class="content">' +
									'系统检测到您的浏览器版本过低，本站于2016年1月1日停止对IE8的维护与支持，建议您下载最新版本，体验最严密的安全防护和最佳的浏览体验!' +
								'</div>'+

								'<ul>' +
									'<li class="chrome">' +
										'<span class="browser-icon chrome-icon"></span>' +
										'<div class="browser-name">Chrome</div>' +
										'<div class="browser-button">马上下载</div>' +
									'</li>' +

									'<li class="firefox">' +
										'<span class="browser-icon firefox-icon"></span>' +
										'<div class="browser-name">Firefox</div>' +
										'<div class="browser-button">马上下载</div>' +
									'</li>' +

									'<li class="ie">' +
										'<span class="browser-icon ie-icon"></span>' +
										'<div class="browser-name">IE11</div>' +
										'<div class="browser-button">马上下载</div>' +
									'</li>' +
								'</ul>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay10"></div>';

		this.el = temp;
	};

	IEDialog.prototype.getDom = function() {
		return this.el;
	};

	IEDialog.prototype.show = function() {
		this.zone.show();
	};

	IEDialog.prototype.hide = function() {
		this.zone.hide();
	};

	IEDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.ie-dialog');

		this.zone.find('ul').delegate('li', 'click', function () {
			browserName = $(this).attr('class');

			if (browserName === 'ie') {
				window.open('https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads');
			} else if (browserName === 'chrome') {
				window.open('https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html');
			} else if (browserName === 'safari') {
				window.open('http://www.apple.com/cn/safari/');
			} else if (browserName === 'firefox') {
				window.open('http://www.firefox.com.cn/download/');
			}
		});

		//this.bindOverlayEvents();
	};

	window.ieDialog = new IEDialog();
	$('.app').append(window.ieDialog.getDom());
	window.ieDialog.bindEvents();
	window.ieDialog.show();
}());