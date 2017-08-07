(function () {
	function HomePage () {
		this.firstShow  = true;
		this.currentTab = 0;
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		var temp = 	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<ul class="page-nav">' +
									this.createPageNav() +
								'</ul>' +

								'<div class="bottom-left">' +
									'<ul class="home-tab">' +
										this.createHomeTab() +
										'<div class="stick"></div>' +
									'</ul>' +

									'<div class="tab-content">' +
										'<div class="tab-sliders">' +
											this.createTabSliders() +
										'</div>' +

										'<div class="video-play-overlay">' +
											'<img src="../img/video-play.png">' +
										'</div>' +

										'<ul class="tab-ul">' +
											this.createTabUl() +
										'</ul>' +
									'</div>' +
								'</div>' +

								'<div class="bottom-right 3DLottery">' +
									'<div class="title">' +
										'<div class="cup-icon"></div>' +
										'<span>百万现金大抽奖</span>' +
										'<div class="go-lucky-draw">' +
 											'<span>参与抽奖</span>' +
 											'<span>&gt;&gt;</span>' +
 										'</div>' +
 										'<span class="clear"></span>' +
 									'</div>' +

 									'<div class="jackpot">' +
 										// '<ul class="jackpot-vendor">' +
 										// 	'<li>' +
		 								// 		'<div class="ag-icon"></div>' +
		 								// 		'<span>3D福彩中奖名单</span>' +
 										// 	'</li>' +
 										// '</ul>' +

 										// '<div class="jackpot-value">' +
 										// '</div>' +

 										this.createJackpotsTable() +
 										'<img class="coming-soon" src="../img/3DEntrance.jpg" />' +
 									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.createPageNav = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				name: '电子游艺',
				title: '立即游戏',
				className: 'home-casino-icon',
				pageName: 'eEntertainment',
				liClassName: 'home-casino-li'
			},
			{
				name: '真人视讯',
				title: '立即游戏',
				className: 'home-video-icon',
				pageName: 'liveVideo',
				liClassName: 'home-video-li'
			},
			{
				name: '体育赛事',
				title: '立即游戏',
				className: 'home-sports-icon',
				pageName: 'sportsCompetition',
				liClassName: 'home-sports-li'
			},
			{
				name: '彩票游戏',
				title: '立即游戏',
				className: 'home-lottery-icon',
				pageName: 'lotteryGame',
				liClassName: 'home-lottery-li'
			},
			{
				name: '马上充值',
				title: '立即充值',
				className: 'home-deposit-icon',
				pageName: 'deposit',
				liClassName: 'home-deposit-li hide'
			},
			{
				name: '免费开户',
				title: '立即注册',
				className: 'home-signup-icon',
				pageName: 'signup',
				liClassName: 'home-signup-li'
			},
			{
				name: 'VIP计划',
				title: '立即加入',
				className: 'home-vip-icon',
				pageName: 'promoActivity',
				liClassName: 'home-vip-li'
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li class="' + arr[i].liClassName + '" data-page="' + (arr[i].pageName || '') + '">' +
						'<div class="li-zone1">' +
							'<div class="home-icon ' + arr[i].className + '"></div>' +
							'<div class="li-name">' + arr[i].name + '</div>' +
							'<div class="overlay"></div>' +
						'</div>' +

						'<div class="li-zone2">' +
							arr[i].title +
						'</div>' +
					'</li>';
		}

		return temp;
	};

	HomePage.prototype.createHomeTab = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				title: '品牌视频',
				tabId: '0',
				value: 'pd_wyb_index_video_ads'
			},
			{
				title: '优惠活动',
				tabId: '1',
				value: 'pd_wyb_index_promo_ads'
			},
			{
				title: '热门推荐',
				tabId: '2',
				value: 'pd_wyb_index_recommend_ads'
			},
			{
				title: '活动宣传',
				tabId: '3',
				value: 'pd_wyb_index_activity_ads'
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li data-tab="' + arr[i].tabId + '" data-value="' + arr[i].value + '"' + ((i == 0)?' class="active"':'') + '>' +
						'<div class="tab-title">' + arr[i].title + '</div>' +
						'<div class="dot"></div>' +
					'</li>';
		}

		return temp;
	};

	HomePage.prototype.createTabSliders = function () {
		var i;
		var temp = 	'<ul>';

		for (i = 0; i < 5; i++) {
			temp += 	'<li>' +
							'<img src="">' +
						'</li>';
		}

		temp +=		'</ul>';

		return temp;
	};

	HomePage.prototype.initTabSliders = function () {
		var src;
		var index;
		var that = this;

		this.tabSlider = this.zone.find('.tab-sliders').unslider({
			animation: 'fade',
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.tabSlider.on('unslider.change', function(event, index, slide) {
			that.zone.find('.tab-ul li').removeClass('active');
			that.zone.find('.tab-ul li:nth-child(' + (parseInt(index) + 1) + ')').addClass('active');

			if (that.zone.find('.tab-content').hasClass('video') && 
				that.videoGalleryData.length < 5 && 
				index == that.videoGalleryData.length - 1) {

				var st = setTimeout(function () {
					that.tabSlider.unslider('animate:first');
					clearTimeout(st);
				}, 4000);
			}
		});

		this.zone.find('.tab-content .tab-ul').delegate('li', 'mouseover', function () {
			index = $(this).index();

			if (that.zone.find('.tab-content').hasClass('video') && index > that.videoGalleryData.length - 1) {
				return;
			}

			that.tabSlider.unslider('animate:' + index);
		});

		this.zone.find('.tab-content').mouseover(function () {
			if (that.zone.find('.tab-content').hasClass('video')) {
				that.zone.find('.tab-content .video-play-overlay').show();
			}
		}).mouseout(function () {
			if (that.zone.find('.tab-content').hasClass('video')) {
				that.zone.find('.tab-content .video-play-overlay').hide();
			}
		});

		this.zone.find('.tab-content .video-play-overlay').click(function () {
			index = that.zone.find('.tab-content .tab-sliders .unslider-wrap li.unslider-active').index();
			src = that.zone.find('.tab-content .tab-ul li:eq(' + index + ')').attr('data-link');
			app.showVideoDialog(src);
		});
	};

	HomePage.prototype.createTabUl = function () {
		var i;
		var temp = '';

		for (i = 0; i < 5; i++) {
			if (i % 2 === 0) {
				if (i === 0) {
					temp +=	'<li class="odd active">';
				} else {
					temp +=	'<li class="odd">';
				}
			} else {
				temp +=		'<li class="even">';
			}

			temp +=				'<div class="time">--</div>' +
								'<div class="info">--</div>' +
							'</li>';
		}

		return temp;
		debugger;
	};

	HomePage.prototype.createJackpotsTable = function () {
		var i;
		var temp =	'<div class="table jackpots-table signout">' +
						'<div class="thead">' +
							'<div class="tr even">' +
								// '<div class="td td1">时间</div>' +
								'<div class="td td2">中奖用户</div>' +
								'<div class="td td3">奖品信息</div>' +
							'</div>' +
						'</div>' +

						'<div class="tbody">' +
							'<span>登录后可查看中奖记录</span>' +
						'</div>' +
					'</div>';

		return temp;
	};

	HomePage.prototype.setJackpotsTable = function (data) {
		var i;
		var temp = '';

		if (data.length === 0) {
			this.zone.find('.jackpots-table .tbody span').text('暂无数据');
			return;
		}

		for (i = 0; i < data.length; i++) {
			temp +=	'<div class="tr ' + (i%2 === 0? 'odd': 'even') + '">' +

						'<div class="td td2">' +
							data.User +
						'</div>' +

						'<div class="td td3">' +
							data.UsLuckyItemer +
						'</div>' +
					'</div>';
		}

		this.zone.find('.jackpots-table .tbody').html(temp);
		this.zone.find('.jackpots-table').removeClass('signout');
	};

	HomePage.prototype.show = function () {
		this.zone.fadeIn(500);

		if (this.firstShow) {
			this.getAds();
			this.getSmallGalleryData('pd_wyb_index_video_ads');
			this.firstShow = false;
		}

		if (app.signedIn) {
			this.showDepositLi();
		} else {
			this.hideDepositLi();
		}
	};

	HomePage.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	HomePage.prototype.reset = function () {
		this.hideDepositLi();
		this.zone.find('.jackpots-table').addClass('signout');
		this.zone.find('.jackpots-table .tbody span').text('登录后可查看中奖记录');
	};

	HomePage.prototype.showDepositLi = function () {
		this.zone.find('.home-deposit-li').removeClass('hide');
		this.zone.find('.home-signup-li').addClass('hide');
	};

	HomePage.prototype.hideDepositLi = function () {
		this.zone.find('.home-deposit-li').addClass('hide');
		this.zone.find('.home-signup-li').removeClass('hide');
	};

    HomePage.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.sliders')[0];
        var wrapper2 = this.zone.find('.tab-sliders')[0];
        var wrapper3 = this.zone.find('.jackpots-table .tbody')[0];
        
        this.loader1 = new Loader(wrapper1, {
        	top: '50%'
        });

        this.loader2 = new Loader(wrapper2, {
        	top: '50%'
        });

        this.loader3 = new Loader(wrapper3, {
        	top: '50%'
        });
    };

	HomePage.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_index_ads',
				pageIndex: 0,
				pageSize: 10
			}
		};

		this.loader1.play();
		callback = function (data) {
			that.loader1.stop();
			
			if (!data) {
				return;
			}
			
			that.addSliders(data);
			$('body').scrollTop(0);
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.getSmallGalleryData = function (type) {
		var arr;
		var callback;
		var that  =  this;
		var opt   =  {
			url: app.urls.getAds,
			data: {
				type: type,
				pageIndex: 0,
				pageSize: 5
			}
		};

		this.loader2.play();

		callback = function (json) {
			that.loader2.stop();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			arr = type.split('_');
			that[arr[3] + 'GalleryData'] = json.list;
			
			that.setSmallGalleryImages(type);
			that.setSmallGalleryInfo(type);

			if (type == 'pd_wyb_index_recommend_ads') {
				that.getHotGameInfos();
			}
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.setSmallGalleryImages = function (type) {
		var i;
		var arr    = type.split('_');
		var data   = this[arr[3] + 'GalleryData'];
		var images = this.zone.find('.tab-sliders .unslider-wrap img');

		for (i = 0; i < images.length; i++) {
			$(images[i]).attr('src', '');
		}

		for (i = 0; i < data.length; i++) {
			$(images[i]).attr('src', app.imageServer + data[i].ImgUrl);
		}

		if (type == 'pd_wyb_index_video_ads') {
			this.zone.find('.bottom-left .tab-content').addClass('video');
		} else {
			this.zone.find('.bottom-left .tab-content').removeClass('video');
		}
	};

	HomePage.prototype.setSmallGalleryInfo = function (type) {
		var i;
		var temp;
		var lis    = this.zone.find('.tab-ul li');
		var arr    = type.split('_');
		var data   = this[arr[3] + 'GalleryData'];

		for (i = 0; i < lis.length; i++) {
			$(lis[i]).children('.time').text('--');
			$(lis[i]).children('.info').text('--');
		}

		for (i = 0; i < data.length; i++) {
			temp = data[i].Description.split('|');
			$(lis[i]).children('.time').text(temp[0]);
			$(lis[i]).children('.info').text(temp[1]);

			if (type == 'pd_wyb_index_video_ads') {
				$(lis[i]).attr('data-link', data[i].Link);
			}
		}
	};

	HomePage.prototype.getHotGameInfos = function () {
		var name;
		var lis = this.zone.find('.tab-ul li');

		for (i = 0; i < lis.length; i++) {
			name = $(lis[i]).children('.info').text();
			this.getHotGameInfo(name, $(lis[i]));
		}
	};

	HomePage.prototype.getHotGameInfo = function (name, item) {
		var opt;
		var i;
		var callback;
		var tabUl  = this.zone.find('.tab-ul');
		var that   =  this;

		opt  =  {
			url: app.urls.getGameList,
			data: {
				title: name,
				pageIndex: 0,
				pageSize: 1
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data.list.length < 1) {
				app.alert('获取游戏"' + name + '"信息失败!');
				return;
			}
			
			item.attr({
				'data-identify': data.list[0].GameIdentify,
				'data-platform': data.list[0].Api.GamePlatform,
				'data-gametype': data.list[0].GameTypeText_EN
			});
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.get3DWinRecords = function (d) {
		var opt;
		var callback;
		var that  = this;
		var today = new Date();

		today = today.formatDate().replace(/\//g, '' );

		opt  =  {
			url: app.urls.luckyDrawWinRecords,
			data: {
				beginTime: '20150101',
				endTime: today,
				status: 1,
				pageIndex: 0,
				pageSize: 7
			}
		};

		callback = function (data) {
			that.loader3.stop();

			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			that.setJackpotsTable(data.Data.list);
		};

		this.loader3.play();
		Service.get(opt, callback);
	};

	HomePage.prototype.queryPromoListsByType = function (type) {
		var opt;
		var callback;
		var that = this;

		opt = {
			url: app.urls.queryPromoListByType,
			data: {
				type: type,
				pageIndex: 0,
				pageSize: 5
			}
		};

		callback = function (json) {
			that.loader2.stop();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.promoData = json.list;
        	that.setPromoTabUl();
        	that.setPromoSliders();
		};

		this.loader2.play();
		Service.get(opt, callback);
	};

	HomePage.prototype.setPromoSliders = function () {
		var i;
		var data   = this.promoData; 
		var images = this.zone.find('.tab-sliders img');

		this.promoSliderData = data;

		for (i = 0; i < data.length; i++) {
			$(images[i]).attr('src', app.imageServer + data[i].Thumbnail);
		}
	};

	HomePage.prototype.setPromoTabUl = function () {
		var i;
		var lis = this.zone.find('.tab-ul li');

		data = this.promoData;

		for (i = 0; i < lis.length; i++) {
			$(lis[i]).children('.time').text('--');
			$(lis[i]).children('.info').text('--');
		}

		for (i = 0; i < data.length; i++) {
			$(lis[i]).attr('data-route', '0 ' + i);
			$(lis[i]).children('.time').text(data[i].StartTime.substring(0, 10) + '至' + data[i].EndTime.substring(0, 10));
			$(lis[i]).children('.info').text(data[i].Title);
		}

		this.promoTabData = data;
	};

	HomePage.prototype.addSliders = function (data) {
		var i;
		var link;
		var route;
		var pos;
		var temp;
		var adsSlider;
		var len  = data.count;
		var arr  = data.list;
		var logoTemp = 	'<ul class="ads-slider">';

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

		adsSlider = this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: {
				prev: '<a class="unslider-arrow prev"><img src="../../img/arrow-l.png"></a>',
				next: '<a class="unslider-arrow next"><img src="../../img/arrow-r.png"></a>'
			}
		});

		this.zone.find('.sliders .ads-slider').delegate('li', 'click', function () {
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

		this.zone.find('.ads-slider').mouseover(function () {
			adsSlider.data('unslider').stop();
		}).mouseout(function () {
			adsSlider.data('unslider').start();
			//adsSlider.data('unslider').next();
		});
	};

	HomePage.prototype.bindEvents = function () {
		var platform;
		var gameType;
		var gameIdentify;
		var pageName;
		var cb;
		var type;
		var stick;
		var index;
		var route;
		var tabUlItem;
		var tabId;
		var arr;
		var that = this;

		this.zone  = $('.home-page');
		stick      = this.zone.find('.home-tab .stick');

		this.zone.find('.page-nav').delegate('li', 'click', function () {
			pageName = $(this).attr('data-page');

			if (pageName === 'sportsCompetition') {
				if (!app.sportsClickable) {
					return;
				}

				if (app.sportsUrl === 'maintaining') {
					app.alert(app.sportsMaintingMsg);
					return;
				}

				/*
				** window.focus()在IE和Firefox上不起作用，所以统一先关闭再打开
				** 页面在处理dom期间，此方法不起作用
				*/ 
				if (app.sportwin && !app.sportwin.closed) {
					app.sportwin.close();
				}
				
				app.sportwin = window.open('../sportRedirect.html');
				app.openSports(app.sportsUrl, app.sportwin);

				return;
			}

			if ($(this).hasClass('home-signup-li')) {
				app.showSignUpDialog();
			} else if ($(this).hasClass('home-deposit-li')) {
				app.personCenterRouter(0, 0);
			} else if ($(this).hasClass('home-vip-li')) {
				app.router.setRoute('/promoActivity/5/0');
			} else {
				app.router.setRoute('/' + pageName);
			}
		});

		this.zone.find('.home-tab').delegate('li', 'click', function () {
			type            =  $(this).attr('data-value');
			arr             =  type.split('_');
		    data            =  that[arr[3] + 'GalleryData'];
			index           =  $(this).index();
			tabId           =  $(this).attr('data-tab');
			that.currentTab =  tabId;

			if (tabId != 3) {
				stick.css('left', index * 100 + 'px');
			}

			if (tabId == 0 || tabId == 2) {
				if (!data) {
					that.getSmallGalleryData(type);
				} else {
					that.setSmallGalleryImages(type);
					that.setSmallGalleryInfo(type);
				}

				return;
			}

			if (tabId == 1) {
				that.zone.find('.bottom-left .tab-content').removeClass('video');

				if (!that.promoData) {
					that.queryPromoListsByType(6);
				} else {
		        	that.setPromoTabUl();
		        	that.setPromoSliders();
				}

				return;
			}

			if (tabId == 3) {
				var href = app.raceUrl;

				if (app.proxy) {
					href += '?a=' + app.proxy;
				}

				window.open(href);
				return;
			}
		});

		this.zone.find('.tab-ul').delegate('li', 'click', function () {
			if (that.currentTab == 1) {
				route = $(this).attr('data-route').split(' ');
				app.router.setRoute('/promoActivity/' + route[0] + '/' + route[1]);
			} else if (that.currentTab == 2) {
				if (!app.signedIn) {
					app.showLoginNotice();
					return;
				}

				gameIdentify = $(this).attr('data-identify');
				platform     = $(this).attr('data-platform');
				gameType     = $(this).attr('data-gametype');
				
				if (app[platform + 'win'] && !app[platform + 'win'].closed) {
					app[platform + 'win'].close();
				}

				app[platform + 'win'] = window.open("loading.html");

				cb = function (data) {
					if (data.StatusCode && data.StatusCode != 0) {
						app[platform + 'win'].close();

						if (data.Message && data.Message.indexOf('Re-login') != -1) {
							app.alert('BBIN不允许30秒内重复登录，请稍后再试!');
						} else {
							app.alert(data.Message);
						}
						
						return;
					}

					app[platform + 'win'].location.href = data;
				};

				Service.getGameLoginUrl(platform, gameType, gameIdentify, cb.bind(this));
			}
		});

		this.zone.find('.go-lucky-draw').click(function () {
			window.open('http://luck.veb88.com');
		});

	    this.zone.find('.3DLottery').click(function () {
	           	if (!app.signedIn) {
					app.showLoginNotice();
					return;
				}
	             
	            window.open(app.threeDLotteryUrl)
	        }); 
			this.createLoader();
			this.initTabSliders();
		};

	window.HomePage = HomePage;
}());


