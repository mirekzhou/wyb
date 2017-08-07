(function () {
	function Advertisement () {
		this.footballUrl  = 'http://soccer.vebets.com';
		this.adVideoTitle = '2017伟易博与您携手观战4月西班牙人VS巴塞罗那大战!';
		this.adVideoSrc   = 'https://ojrcjvo0a.qnssl.com/football.mp4';
		this.initDom();
	}

	Advertisement.prototype.initDom = function () {
		var temp =	'<div class="advertisement">' +
						'<span class="close">×</span>' +
						'<img src="../img/advertisement.png">' +
						'<div class="video-zone">' +
							'<div class="title">' + this.adVideoTitle + '</div>' +
							'<video controls="controls" autoplay="autoplay" preload="none" src="' + this.adVideoSrc + '"></video>' +
						'</div>' +
					'</div>' + 

					'<div class="advertise-overlay"></div>';
		
		this.el  = temp;
	};

	Advertisement.prototype.show = function() {
		this.zone.show();
		this.zone.next('.advertise-overlay').show();
	};

	Advertisement.prototype.hide = function() {
		this.zone.hide();
		this.zone.next('.advertise-overlay').hide();
		this.zone.find('video')[0].pause();
	};

	Advertisement.prototype.getDom = function () {
		return this.el;
	};

	Advertisement.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('.advertisement');

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.zone.next('.advertise-overlay').click(function () {
			that.hide();
		});

		this.zone.find('.title').click(function () {
			window.open(that.footballUrl);
		});
	};

	window.Advertisement = Advertisement;
}());
