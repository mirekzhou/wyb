(function () {
	function LiveVideo () {
		this.firstShow = true;
		this.firstSignedQuery = true;
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<div class="picture picture1" data-value="BBIN">' +
									'<img>' +
									'<div class="info">' +
										'<p>老牌真人视讯平台，游戏丰富精彩万分！</p>' +
										// '<div class="players">' +
										// 	'<img src="../img/people.png" >' +
										// 	'<span>693358</span>' +
 									// 	'</div>' +
 									    '<p class="limit-text">' +
 									    	'平台限制，每次进入间隔30秒' +
 									    '</p>'+
 										'<div class="button count-down-btn">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture2" data-value="AG">' +
									'<img>' +
									'<div class="info">' +
										'<p>首创6张牌先发、美女主播互动 、体验至尊感觉！</p>' +
										// '<div class="players">' +
										// 	'<img src="../img/people.png" >' +
										// 	'<span>693358</span>' +
 									// 	'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture3" data-value="AB">' +
									'<img>' +
									'<div class="info">' +
										'<p>VIP包桌与超级多台游戏，尽享游戏！</p>' +
										// '<div class="players">' +
										// 	'<img src="../img/people.png" >' +
										// 	'<span>693358</span>' +
 									// 	'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture4" data-value="OG">' +
									'<img>' +
									'<div class="info">' +
										'<p>极速百家乐, 体验畅快游戏！</p>' +
										// '<div class="players">' +
										// 	'<img src="../img/people.png" >' +
										// 	'<span>693358</span>' +
 									// 	'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture5">' +
									'<img>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.show = function (subRouter) {
		this.zone.fadeIn(500);

		this.subRouter = subRouter || '';

		if (this.firstShow) {
			this.getAds();
			this.getPictures();
			this.firstShow = false;
		}

		if (app.signedIn && this.firstSignedQuery) {
			this.getGameLoginUrls();
			this.firstSignedQuery = false;
			return;
		}

		if (this.subRouter) {
			this.trigger();
		}
	};

	LiveVideo.prototype.trigger = function () {
		var that = this;

		if (!app.signedIn) {
			app.showSignInDialog();
			return;
		}

		if (this.firstSignedQuery) {
			this.getGameLoginUrls();
			this.firstSignedQuery = false;
			return;
		}

		var timeout = setTimeout(function () {
			that.zone.find('.picture' + (parseInt(that.subRouter) + 1) + ' .info .button').click();
			clearTimeout(timeout);
		}, 1000);
	};

	LiveVideo.prototype.hide = function () {
		this.zone.fadeOut(500);
		this.subRouter = '';
	};

    LiveVideo.prototype.createLoader = function() {
        var wrapper = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	LiveVideo.prototype.addSliders = function (data) {
		var i;
		var pos;
		var temp;
		var link;
		var route;
		var arr = data.list;
		var len = arr.length;
		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			if (arr[i].Link.indexOf('/promoActivity/') != -1) {
				pos  = arr[i].Link.indexOf('/promoActivity/');
				temp = arr[i].Link.substring(pos + 15).split('/');
				
				if (!temp[0]) {
					temp[0] = 0;
				}

				if (!temp[1]) {
					temp[1] = 0;
				}
				
				logoTemp += 	'<li data-route="' + temp[0] + ' ' + temp[1] + '">' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
			} else if (arr[i].Link.substring(0,4) === 'http') {
				logoTemp += 	'<li data-link="' + arr[i].Link + '">' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
			} else {
				logoTemp += 	'<li>' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
			}
		}

		logoTemp +=		'</ul>';

		this.logoHtml = logoTemp;
		this.zone.find('.sliders').html(logoTemp);
		this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.zone.find('.sliders .unslider-carousel li').click(function () {
			link  = $(this).attr('data-link');
			route = $(this).attr('data-route');

			if (link) {
				window.open(link);
				return;
			}

			if (route) {
				route = route.split(' ');
				app.router.setRoute('/promoActivity/' + route[0] + '/' + route[1]);
				return;
			}
		});
	};

	LiveVideo.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_casino_ads',
				pageIndex: 0,
				pageSize: 1
			}
		};

		callback = function (data) {
			that.loader1.stop();

			if (!data) {
				return;
			}
			
			that.addSliders(data);
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	LiveVideo.prototype.setPictures = function (data) {
		var i;
		var imgs = this.zone.find('.picture > img');

		for (i = 0; i < imgs.length; i++) {
			$(imgs[i]).attr('src', app.imageServer + data[i].ImgUrl);
		}
	};

	LiveVideo.prototype.getPictures = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_casino_pictures',
				pageIndex: 0,
				pageSize: 5
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.setPictures(json.list);
		};

		Service.get(opt, callback);
	};

	LiveVideo.prototype.getGameLoginUrls = function () {
		var i;
		var platforms = ['BBIN', 'AG', 'AB', 'OG'];
		var imgs      = this.zone.find('.picture');
		
		for (i = 0; i < platforms.length; i++) {
			this.getGameLoginUrl(platforms[i], $(imgs[i]), i);
		}
	};

    LiveVideo.prototype.getGameLoginUrl = function (platform, item, index) {
    	var that  = this;
    	var opt   =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: platform,
				gameType: 'casino'
			}
		};
		
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				that[platform + 'APIWarning'] = json.Message;
				return;
			}

			item.attr('data-url', json);

			if (that.subRouter && parseInt(that.subRouter) === index) {
				var w = window.open(json);

				if (!w) {
					app.alert('请在设置中允许弹出式窗口，再进行尝试!');
				}
			}
		};

		Service.get(opt, callback);
    };

    LiveVideo.prototype.countDown = function (ele) {
    	var that = this;
    	var count;
		this.zone = $('.live-video');
        var $ele = $(ele);
		if (!$ele.hasClass('active')) {
			count = 30;
			$ele.addClass('active');
			$ele.siblings('.limit-text').show();
			that.tm = setInterval(function() {
				count--;
				if (count > 0) {
					$ele.text(count + 's');
				} else {
					$ele.removeClass('active');
					$ele.text('进入游戏');
					$ele.siblings('.limit-text').hide();
					clearInterval(that.tm);
				}
			}, 1000);
		}
    }

	LiveVideo.prototype.bindEvents = function () {
		var platform;
		var picture;
		var url;
		var that = this;
        var countDownBtn = $('.live-video').find('.count-down-btn');
		this.zone = $('.live-video');

		this.zone.find('.button').click(function () {
			picture  = $(this).parents('.picture');
			url      = picture.attr('data-url');
			platform = picture.attr('data-value');

			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			if (that[platform + 'APIWarning']) {
				app.alert(that[platform + 'APIWarning']);
				return;
			}

			if (!url) {
				return;
			}

			if ($(this).hasClass('count-down-btn')) {
				if ($(this).hasClass('active')) return;
				that.countDown(this);
			}

			var w = window.open(url);

			if (!w) {
				app.alert('请在设置中允许弹出式窗口，再进行尝试!');
			}
		});

		this.createLoader();
	};

	window.LiveVideo = LiveVideo;
}());
