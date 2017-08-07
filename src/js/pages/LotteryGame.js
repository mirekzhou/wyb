(function () {
	function LotteryGame () {
		this.firstSignedQuery = true;
		this.initDom();
	}
	
	LotteryGame.prototype.initDom = function () {
		var temp =	'<div class="page lottery-game">' +
						'<div class="wrapper">' +
							'<div class="item">' +
								'<div class="up">' +
									'<div class="left">'+
										'<div class="row1">' +
											'<div class="lottery-icon keno-icon"></div>' +
										'</div>' +

										'<div class="row2">' +
											'<div class="text">' +
												'KENO拥有专业的游戏研发及顶尖的设计团队为后盾，' +
												'团队不间断的运用创新技术，逐渐构建亚洲最大的网络博彩娱乐事业体' +
											'</div>' +
										'</div>' +

										'<div class="row3">' +
											'<div class="button" data-platform="KG">' +
												'立即投注' +
											'</div>' +
										'</div>' +
									'</div>' +

									'<div class="right"></div>' +
								'</div>' +

								'<div class="down">' +
									this.createLotteryItem(1) +
								'</div>' +
							'</div>' +

							'<div class="item">' +
								'<div class="up">' +
									'<div class="left">' +
										'<div class="row1">' +
											'<div class="lottery-icon bbin-icon"></div>' +
										'</div>' +

										'<div class="row2">' +
											'<div class="text">' +
												'BBIN成立于1999年，为亚洲具代表地位的网络博彩娱乐集团，' +
												'致力于在线博弈游戏软件研发并提供整合平台服务' +
											'</div>' +
										'</div>' +

										'<div class="row3">' +
											'<div class="button" data-platform="BBIN">' +
												'立即投注' +
											'</div>' +
										'</div>' +
									'</div>' +

									'<div class="right"></div>' +
								'</div>' +

								'<div class="down">' +
									this.createLotteryItem(2) +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LotteryGame.prototype.getDom = function () {
		return this.el;
	};

	LotteryGame.prototype.show = function (subRouter) {
		this.zone.fadeIn(500);
	};

	LotteryGame.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	LotteryGame.prototype.createLotteryItem = function (type) {
		var i;
		var arr;
		var temp = '';
		var dict = {
			1: ['KENO真人彩票', 'KENO时时彩', 'KENO分分彩', '重庆时时彩', 
				'北京PK10',     '新疆时时彩', '广东11选5',  '江西11选5'],
			2: ['BBIN真人彩票', 'BBIN时时彩', 'BBIN分分彩', 'BBIN秒秒彩',
				'重庆时时彩',   '北京PK10',   '新疆时时彩', '广东11选5', '江西11选5']
		};

		arr = dict[type];

		temp +=	'<ul class="down-ul">';

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li>' + 
						'<span>' +
							arr[i] +
						'</span>' +

						'<span class="slash">/</span>' +
					'</li>';
		}

		temp +=	'</ul>';

		return temp;
	};

	LotteryGame.prototype.getGameLoginUrls = function () {
		return;

		var i;
		var platforms = ['KG', 'BBIN'];
		var imgs      = this.zone.find('.button');

		for (i = 0; i < platforms.length; i++) {
			this.getGameLoginUrl(platforms[i], $(imgs[i]), i);
		}
	};

    LotteryGame.prototype.getGameLoginUrl = function (platform, item, index) {
    	var that = this;
    	var opt =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: platform,
				gameType: 'lottery'
			}
		};

		if (this[platform + '-lottery'] && !this[platform + '-lottery'].closed) {
			this[platform + '-lottery'].close();
		}
        
        that[platform + '-lottery'] = window.open('loading.html'); 
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that[platform + '-lottery'].location.href = json;

			if (!that[platform + '-lottery']) {
				app.alert('请在设置中允许弹出式窗口，再进行尝试!');
			}
		}

		Service.get(opt, callback);
    };

	LotteryGame.prototype.bindEvents = function () {
		var url;
		var platform;
		var that = this;

		this.zone = $('.lottery-game');

		this.zone.find('.item .button').click(function () {
			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			platform = $(this).attr('data-platform');
			that.getGameLoginUrl(platform);
		});
	};

	window.LotteryGame = LotteryGame;
}());
