(function () {
	function EEntertainment () {
		this.flag1 = false;  //奖金池游戏是否构造完成
		this.flag2 = false;  //GameList是否构造完成

		this.favoriteGameIds = {};
		this.cache           = {};
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.currenPage = 0;

		var topLeftModule 	=	'<div class="left top-left-module">' +
									'<div class="czcj-head">' +
										'<span class="title">超级彩金</span>' +
										this.createMarqueenLi1() +
									'</div>' +

									'<div class="left-list">' +
										'<div class="marqueen">' +
											'<ul></ul>' +
										'</div>' +
									'</div>' +
								'</div>';

	  	var topBannerModule	=	'<div class="middle-banner">' +
									'<div class="sliders"></div>' +
								'</div>';

		var topRightModule 	= 	'<div class="left top-right-module">' +
									'<div class="jackpots-title">JACKPOT</div>' +
									'<div class="amount-info jackpot-value"></div>' +
									'<div class="user-info"></div>' +
								'</div>';

		var bottomLeftModule =	'<div class="bottom-left">' +
									'<div class="search-box">' +
										'<input type="text" placeholder="快速查找本平台游戏">' +
										'<div class="search-btn"></div>' +
										'<div class="clear"></div>' +
									'</div>'+

									'<ul class="game-tree"></ul>' +
								'</div>';

	  	var bottomRightModule =	'<div class="bottom-right">' +
									'<ul></ul>' +
									'<div class="more-game">更多游戏</div>' +
								'</div>';

		var topModule   =		'<div class="top-module">' +
									topLeftModule +
									topBannerModule +
									topRightModule +
									'<div class="clear"></div>' +
								'</div>';
	  	
	  	var middleNavModule	=	'<ul class="middle-module">' +
									'<li class="pp-li selected" data-type="PP">' +
										'<span class="img pp-img"></span>' +
										'<span class="name">PP电子</span>' +
									'</li>' +
									'<li class="pt-li" data-type="PT">' +
										'<span class="img pt-img"></span>' +
										'<span class="name">PT电子</span>' +
									'</li>' +
									'<li class="bbin-li" data-type="BBIN">' +
										'<span class="img bbin-img"></span>' +
										'<span class="name">BBIN电子</span>' +
									'</li>' +
									'<li class="mg-li" data-type="MG">' +
										'<span class="img mg-img"></span>' +
										'<span class="name">MG电子</span>' +
									'</li>' +
									'<li class="ag-li" data-type="AG">' +
										'<span class="img ag-img"></span>' +
										'<span class="name">AG电子</span>' +
									'</li>' +
									'<li class="ttg-li" data-type="TTG">' +
										'<span class="img ttg-img"></span>' +
										'<span class="name">TTG电子</span>' +
									'</li>' +
									'<li class="mt-li" data-type="MT">' +
										'<span class="img mt-img"></span>' +
										'<span class="name">MT电子</span>' +
									'</li>' +
								'</ul>';

		var bottomModule   =	'<div class="bottom-module">' +
									bottomLeftModule +
									bottomRightModule +
									'<div class="clear"></div>' +
								'</div>';

		var mainConent     =	'<div class="page e-entertainment">' +
									'<div class="wrapper">' +
										topModule +
						 		   		middleNavModule +
						 		   		bottomModule +
						 		   	'</div>' +
						 		'</div>';

		this.el  = mainConent;
	};

	EEntertainment.prototype.getDom = function () {
		return this.el;
	};

	EEntertainment.prototype.show = function (subRouter) {
		var timeout;
		var callback;
		var that = this;

		this.subRouter = subRouter || '';

		if (this.subRouter) {
			this.zone.fadeIn(500, function () {
				$(that.zone.find('.middle-module li')[that.subRouter]).click();
			});
		} else {
			this.zone.fadeIn(500);
		}

		if (!this.firstTime) {
			this.getAds();
			this.getWebPageByKey('slotWinner');
			this.getJackpotsGames('PT');  //获取pt奖金池
			this.getGameCategories();
			this.firstTime = true;
		}
	};

	EEntertainment.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

    EEntertainment.prototype.getWebPageByKey = function (key) {
    	var opt;
    	var callback;
        var that    =  this;

        opt = {
        	url: app.urls.getWebPageByKeyUrl,
        	data: {
        		key: key
        	}
        };

        callback = function (json) {
            if (json.StatusCode && json.StatusCode != 0) {
                alert(json.Message);
                return;
            }

            that.zone.find('.user-info').html(json.Content || '');
        };

        Service.get(opt, callback);
    };

	/*
	**  获取轮播图图片
	*/
	EEntertainment.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_slot_ads',
				pageIndex: 0,
				pageSize: 10
			}
		};

		this.loader4.play();
		callback = function (data) {
			that.loader4.stop();
			
			if (!data) {
				return;
			}
			
			that.addSliders(data);
		};

		Service.get(opt, callback);
	};

	/*
	**  获取奖金池游戏
	*/
	EEntertainment.prototype.getJackpotsGames = function (platform) {
		var callback;
		var eJackpotsGames;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsGames,
	        data: {
	        	platform: platform,
	        	pageIndex: 0,
	        	pageSize: 25
	        }
		};

		if (platform !== 'PT' && platform !== 'MG') {
			return;
		}

		eJackpotsGames = localStorage.getItem('e-jackpots-games');

		if (eJackpotsGames) {
        	this.loader1.stop();
        	this.bonusPoolData = JSON.parse(eJackpotsGames);
        	this.setMarqueenItems(true);
        	return;
		}

		callback = function (json) {
        	that.bonusPoolData = json;
        	localStorage.setItem('e-jackpots-games', JSON.stringify(json));
        	that.loader1.stop();
        	that.setMarqueenItems(true);
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	/*
	**  获取游戏树
	*/
	EEntertainment.prototype.getGameCategories = function () {
		var opt;
		var callback;
		var that = this;
		var eGameCategoryData = localStorage.getItem('e-game-category');

		if (eGameCategoryData) {
        	this.setGameTree(JSON.parse(eGameCategoryData));
        	this.getFavoriteGameIds();
        	return;
		}

		opt = {
			url: app.urls.getGameCategories,
			data: {
				code: 'electron'
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			localStorage.setItem('e-game-category', JSON.stringify(json));
        	that.setGameTree(json);
        	that.getFavoriteGameIds();
		};

		Service.get(opt, callback);
	};

	EEntertainment.prototype.checkDomStatus = function () {
		if (this.flag1 && this.flag2) {
			this.startGlobalInterval();
			this.flag1 = false;  //恢复原始设置，防止切换平台的时候又重新startGlobalInterval
			this.flag2 = false;  
		}
	};

	EEntertainment.prototype.startGlobalInterval = function () {
		var count = 0;
		var that  = this;

		that.globalRefreshBaseJackpots();

		this.globalBigInterval = setInterval(function () {
			//that.globalRefreshBaseJackpots();
			count = that.animateMarqueen(count);
		}, 10000);

		this.globalSmallInterval = setInterval(function () {
			that.globalRefreshJackpots();
		}, 1000);
	};

	EEntertainment.prototype.getRefreshItemsdict = function () {
		var i;
		var url;
		var item1;
		var item2;
		var id1;
		var id2;
		var dict            = {};
		var currentPlatform = this.zone.find('.middle-module li.selected').attr('data-type');
		var marqueenLis     = this.zone.find('.left-list .marqueen ul li');
		var gamelis         = this.zone.find('.bottom-right ul li[data-showjackpots="true"]:visible');

		if (currentPlatform === 'PT') {  //都是PT，小游戏区就可能有游戏与奖金池游戏重合
			for (i = 0; i < marqueenLis.length; i++) {
				item1     = $(marqueenLis[i]).children('.jackpots-basevalue');
				id1       = item1.attr('data-id');
				url       = item1.attr('data-url');
				dict[id1] = {
					items: [item1],
					url: url
				};
			}

			for (i = 0; i < gamelis.length; i++) {
				item2 = $(gamelis[i]);
				id2   = item2.attr('data-id');
				url   = item2.attr('data-url');

				if (dict[id2]) {
					dict[id2].items.push($(item2.children('.jackpot-value-span')));
				} else {
					dict[id2] = {
						items: [$(item2.children('.jackpot-value-span'))],
						url: url
					};
				}
			}
		} else {
			for (i = 0; i < marqueenLis.length; i++) {
				item1     = $(marqueenLis[i]).children('.jackpots-basevalue');
				id1       = item1.attr('data-id');
				url       = item1.attr('data-url');
				dict[id1] = {
					items: [item1],
					url: url
				};
			}

			for (i = 0; i < gamelis.length; i++) {
				item2     = $(gamelis[i]);
				id2       = item2.attr('data-id');
				dict[id2] = {
					items: [$(item2.children('.jackpot-value-span'))],
					platform: currentPlatform,
					gameId: id2
				};
			}
		}

		return dict;
	};

	EEntertainment.prototype.globalRefreshJackpots = function () {
		var i;
		var key;
		var items;
		var value;
		var small      = 0.07;
		var big        = 0.37;
		var dict       = this.getRefreshItemsdict();
		var jackpotSum = this.zone.find('.top-right-module .jackpot-value');

		if (jackpotSum.text()) {
			value =  window.Util.formatCurToNum( jackpotSum.text() );
			value += big;
			value =  value.toFixed(2);
			jackpotSum.text(window.Util.formatNumToCur(value));
		}

		for (key in dict) {
			items = dict[key].items;

			for (i = 0; i < items.length; i++) {
				if (items[i].text()) {
					value = window.Util.formatCurToNum(items[i].text());
					value += small;
					value = value.toFixed(2);
					items[i].text(window.Util.formatNumToCur(value));
				}
			}
		}
	};

	EEntertainment.prototype.globalRefreshBaseJackpots = function () {
		var key;
		var dict = this.getRefreshItemsdict();

		this.setPtSumBaseValue();
		//关闭奖金池
        return;
		for (key in dict) {
			if (dict[key].url) {
				this.setPtSingleBaseValue(dict[key].url, dict[key].items);
			} else {
				this.setMgSingleBaseValue(dict[key].platform, dict[key].gameId, dict[key].items);
			}
		}
	};

	EEntertainment.prototype.animateMarqueen = function (count) {
		var marqueenUl      =  this.zone.find('.left-list .marqueen ul');
		var lis             =  marqueenUl.children('li');
		var len             =  lis.length;
		var h               =  parseFloat(marqueenUl.children('li').css('height'));
		var ulFirstLi       =  $(marqueenUl.children('li')[count]);
		var game            =  ulFirstLi.children('p:first-child').text();
		var win             =  ulFirstLi.children('p:last-child').text();
		var marqueenLi1Row2 =  $(this.zone.find('.marqueen-li1 .row')[1]);
		var top             =  (0 - (count + 1) * h)  + 'px';

		var platform = ulFirstLi.attr('data-platform');
		var gametype = ulFirstLi.attr('data-gametype');
		var identify = ulFirstLi.attr('data-identify');
		
		if (count >= len - 7) {
			count = 0;
			marqueenUl.stop();
			marqueenUl.animate({'top': 0}, 0);
		} else {
			marqueenUl.animate({'top': top}, 1000);
			marqueenLi1Row2.children('.marqueen-li1-game').text(game);
			marqueenLi1Row2.children('.marqueen-li1-win').text(win);

			marqueenLi1Row2.attr('data-platform', platform);
			marqueenLi1Row2.attr('data-gametype', gametype);
			marqueenLi1Row2.attr('data-identify', identify);

			this.animateMarqueenLi1();
			count++;
		}

		return count;
	};

	EEntertainment.prototype.animateMarqueenLi1 = function (data) {
		var wrapper = this.zone.find('.marqueen-li1-wrapper');
		var rows    = this.zone.find('.marqueen-li1 .row');
		var row1    = $(rows[0]);
		var row2    = $(rows[1]);
		var h       = parseFloat(row1.css('height'));
		var temp    = 	'<div class="row">' +
							'<div class="marqueen-li1-game"></div>' +
							'<div class="marqueen-li1-win"></div>' +
							'<div class="clear"></div>' +
						'</div>';

		row1.animate({'top': 0 - h + 'px'});
		row2.animate({'top': '0'}, 1000, function () {
			row1.remove();
			wrapper.append(temp);
		});
	};

	EEntertainment.prototype.setPtSingleBaseValue = function (url, items) {
		var i;
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': url
	        },
	        alert: false
		};

		callback = function (data) {
			that.loader2.stop();
			if (parseInt(data.Data) === 0) {
				for (i = 0; i < items.length; i++) {
					if (items[i].hasClass('jackpots-basevalue')) {
						items[i].parent('li').remove();
					} else {
						items[i].text('0.00');
						items[i].css('opacity', 0);
					}
				}
			} else {
				for (i = 0; i < items.length; i++) {
					items[i].text( window.Util.formatNumToCur(data.Data) );
				}
			}
		};

		this.loader2.play();
		Service.post(opt, callback);
	};

	EEntertainment.prototype.setPtSumBaseValue = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': app.urls.getPtSumJackpotBaseValue
	        },
	        alert: false
		};

		callback = function (data) {
			that.zone.find('.top-right-module .jackpot-value').text(window.Util.formatNumToCur(data.Data));
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.setMgSingleBaseValue = function (platform, gameId, items) {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpots,
	        data: {
	        	Game: platform,
	        	JackpotInfoType: 1,
	        	GameNameId: gameId
	        }
		};

		callback = function (data) {
			for (i = 0; i < items.length; i++) {
				items[i].text( window.Util.formatNumToCur(data.Data) );
			}
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.setMgSumBaseValue = function (platform) {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpots,
	        data: {
	        	Game: platform,
	        	JackpotInfoType: 3
	        }
		};

		callback = function (data) {
			that.zone.find('.top-right-module .jackpot-value').text(data);
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.stopAnimation = function () {
		this.zone.find('.marqueen-li1 .row').stop();
		this.zone.find('.left-list .marqueen ul').stop();
		clearInterval(this.globalSmallInterval);
		this.globalSmallInterval = undefined;
		clearInterval(this.globalBigInterval);
		this.globalBigInterval = undefined;
	};

	EEntertainment.prototype.addSliders = function (data) {
		var i;
		var pos;
		var temp;
		var link;
		var route;
		var len  = data.count;
		var arr  = data.list;
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

		this.zone.find('.sliders').html(logoTemp);
		this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.zone.find('.sliders .unslider-carousel').delegate('li', 'click', function () {
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

	/*
	** Marqueen
	*/
	EEntertainment.prototype.createMarqueenLi1 = function (data) {
		var temp =	'<div class="marqueen-li1">' +
						'<div class="marqueen-li1-wrapper">' +
							'<div class="row">' +
								'<div class="marqueen-li1-game"></div>' +
								'<div class="marqueen-li1-win"></div>' +
								'<div class="clear"></div>' +
							'</div>' +

							'<div class="row">' +
								'<div class="marqueen-li1-game"></div>' +
								'<div class="marqueen-li1-win"></div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +
					'</div>';

		return temp;
	};

	EEntertainment.prototype.setMarqueenItems = function (isNewPlatform) {
		var i;
		var jackpotsUrl;
		var temp   = '';
		var data   = this.bonusPoolData;

		for (i = 0; i < data.length; i++) {
			temp += this.createMarqueenItem({
				game        : data[i].Title,
				gametype    : data[i].GameType,
				identify    : data[i].GameIdentify,
				platform    : data[i].Api.GamePlatform,         //取MG基础值的时候用
				id          : data[i].Id,                       //取MG基础值的时候用
				jackpotsUrl : app.formatJackpotsUrl(data[i])    //取PT基础值的时候用
			});
		}

		if (isNewPlatform) {
			this.zone.find('.marqueen ul').html(temp);
		} else {
			this.zone.find('.marqueen ul').append(temp);
		}

		this.flag1 = true;
		this.checkDomStatus();
	};

	EEntertainment.prototype.createMarqueenItem = function (data) {
		var temp = 	'<li data-platform="' + data.platform + '" data-gametype="' + data.gametype + '" data-identify="' + data.identify + '">'+
						'<p>' +
							data.game +
						'</p>' +
						'<p class="jackpots-basevalue" data-url="' + data.jackpotsUrl + '" data-id="' + data.id + '" data-platform="' + data.platform + '">' +
						'</p>'+
					'</li>';

		return temp;
	};

	/*
	** game tree
	*/
    EEntertainment.prototype.setGameTree = function (data) {
    	var i;
    	var temp = '';

    	for (i = 0; i < data.length; i++) {
    		temp += '<li ' + ((i === 0)?'class="selected" ': '') + 'data-id="' + data[i].Id + '" data-code="' + data[i].Code + '">' +
    					'<span>' +
    						data[i].Name +
    					'</span>' +
    					'<div></div>' +
    				'</li>';
    	}

    	this.zone.find('.game-tree').html(temp);
    	this.bindTreeEvents();
    };

	/*
	** game zone
	*/

    EEntertainment.prototype.createLoader = function() {
    	var wrapper1 = this.zone.find('.top-left-module .marqueen')[0];
        var wrapper2 = this.zone.find('.top-right-module .amount-info')[0];
        var wrapper3 = this.zone.find('.more-game')[0];
        var wrapper4 = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '50%'
        });
        this.loader2 = new Loader(wrapper2, {
        	top: '50%'
        });
        this.loader3 = new Loader(wrapper3, {
        	left: '60%',
        	top: '80%'
        });
        this.loader4 = new Loader(wrapper4, {
        	top: '50%'
        });
    };

    EEntertainment.prototype.getFavoriteGameIds = function () {
		var callback;
		var platform  = this.zone.find('.middle-module li.selected').attr('data-type');
		var that      = this;
		var opt       = {
			url: app.urls.getFavoriteGameIds,
			data: {
				platform: platform || ''
			},
			canLogout: true
		};

		if (!app.signedIn) {  //如果是未登录状态，就没有favoriteGameIds
			this.favoriteGameIds[platform] = [];
			this.getGameList();
			return;
		}

		if (this.favoriteGameIds[platform]) {
			this.getGameList();
			return;
		}

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				if (data.Message == '未登录') {
					that.favoriteGameIds[platform] = [];
				} else {
					app.alert(data.Message);
					return;
				}
			}

			if (data.Data) {
				that.favoriteGameIds[platform] = data.Data.split(',');
			} else {
				that.favoriteGameIds[platform] = [];
			}
			
			that.getGameList();
		};

		Service.get(opt, callback);
    };

    EEntertainment.prototype.getGameList = function () {
		var callback;
		var platformUl = this.zone.find('.middle-module');
		var treeUl     = this.zone.find('.game-tree');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var cateGoryId = treeUl.children('li.selected').attr('data-id');
		var that       =  this;
		var opt        =  {
			url: app.urls.getGameList,
			data: {
				platform: platform,
				categoryId: cateGoryId || '',
				pageIndex: this.currenPage,
				pageSize: 24
			}
		};

		if (treeUl.children('li.selected').attr('data-code') === 'slot999') {
			opt.data.categoryId = '';
		}

		/*
		** 内存级别的缓存，已经构造成了dom字符串形式了, 只存第0页
		*/
		if (this.invokeCache()) { 
			if (treeUl.children('li.selected').attr('data-code') === 'slot2' ||
				treeUl.children('li.selected').attr('data-code') === 'slot999' ||
				treeUl.children('li.selected').attr('data-code') === 'slot4') {
				that.sst = setTimeout(function () {
					that.globalRefreshBaseJackpots();
					clearTimeout(that.sst);
				}, 3000);
			}

			return;
		}

		var cb = function (data) {
        	that.loader3.stop();
        	that.setGameList(data.list);
			that.showGameZone();

			if (treeUl.children('li.selected').attr('data-code') === 'slot2' ||
				treeUl.children('li.selected').attr('data-code') === 'slot999' ||
				treeUl.children('li.selected').attr('data-code') === 'slot4') {
				that.sst = setTimeout(function () {
					that.globalRefreshBaseJackpots();
					clearTimeout(that.sst);
				}, 3000);
			}
		};

		/*
		**  localStorage级别的缓存，根据 “平台 + category + 页号” 记录， 暂时只存到第0页的。
		*/
		var storageId = 'e|' + platform + '|' + cateGoryId + '|' + this.currenPage;
		var data      = localStorage.getItem(storageId);

		if (data) {
			data = JSON.parse(data);
			cb(data);
			return;
		}

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				that.loader3.stop();
				return;
			}

			if (that.currenPage == 0) {  //locastorage也只缓存第0页的
				localStorage.setItem(storageId, JSON.stringify(data));
			}
			
        	cb(data);
		};

		Service.get(opt, callback);
    };

    EEntertainment.prototype.getGameListByName = function () {
    	var that     = this;
    	var name     = this.zone.find('.search-box input').val();
		var platform = this.zone.find('.middle-module li.selected').attr('data-type');

		var opt  = {
			url: app.urls.getGameList,
			data: {
				title: name,
				pageIndex: 0,
				pageSize: 1000,
				platform: platform
			}
		};

		var callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

        	that.loader3.stop();
        	that.setGameList(data.list);
        	that.showGameZone();

        	if (data.list.length < 1000) {
        		that.zone.find('.bottom-right .more-game').text('没有更多');
        	} else {
        		that.zone.find('.bottom-right .more-game').text('加载更多');
        	}
		};

    	this.isScroll = false;
    	this.currenPage = 0;
		Service.get(opt, callback);
    };

	EEntertainment.prototype.setGameList = function (data) {
		var i;
		var item;
		var gameId;
		var ul;
		var lis;
		var url;
		var html       = '';
		var statusHtml = '';
		var platform   = this.zone.find('.middle-module li.selected').attr('data-type');
		var ids        = this.favoriteGameIds[platform] || [];

		for (i = 0; i < data.length; i++) {
			html +=	'<li      data-id="' + data[i].Id + '"' +
							' data-identify="' + data[i].GameIdentify + '"' +
							' data-try="' + data[i].IsTry + '"' +
							' data-gametype="' + data[i].GameTypeText_EN + '"' +
							' data-platform="' + data[i].Api.GamePlatform + '"' +
							' data-collectid=""' +
							' data-cnname="' + data[i].Title + '"' +
							' data-showjackpots="' + data[i].ShowJackpots + '"' +
							((data[i].Api.GamePlatform === 'PT' && data[i].ShowJackpots)?' data-url="' + app.formatJackpotsUrl(data[i]) + '"': '') + 
							'>' +
						(data[i].ShowJackpots?'<p class="jackpot-value-span"></p>': '') +
						//'<img src=' + app.imageServer + data[i].ImageUrl + '>' +
						'<div class="img" style="background-image:url(' + app.imageServer + data[i].ImageUrl + ')"></div>' +
						'<p>' +
							'<span class="game-name">' + data[i].Title + '</span>'+
							'<span class="collect' +
								(($.inArray(data[i].Id, ids) != -1)?' collected': '') +
							'"></span>' +
							//'<span class="recommend-no">' + data[i].RecommendNo + '</span>' +
							'<span class="clear"></span>' +
						'</p>'+
						'<p id="hover-layer" class="hover-layer-none">' +
							'<button class="start-game">开始游戏</button>' +
							'<br/>' +
							(data[i].IsTry?'<button class="try-game">免费试玩</button>' : '') +
						'</p>' +
					'</li>';
		}

		ul = this.zone.find('.bottom-right ul');

		if (!this.isScroll) {
			ul.html(html);
		} else {
			ul.append(html);
		}

		if (data.length < 24) {
			statusHtml = '没有更多';
		} else {
			statusHtml = '加载更多';
		}

		this.zone.find('.bottom-right .more-game').text(statusHtml);

		this.flag2 = true;
		this.checkDomStatus();

		if (this.currenPage == 0) {
			this.setCache(html, statusHtml);
		}
	};

	EEntertainment.prototype.setCache = function (html, statusHtml) {
		var platformUl = this.zone.find('.middle-module');
		var treeUl     = this.zone.find('.game-tree');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var cateGoryId = treeUl.children('li.selected').attr('data-id');

		if (!this.cache[platform]) {
			this.cache[platform] = {};
			this.cache[platform][cateGoryId] = {
				html: html,
				statusHtml: statusHtml
			};
		} else {
			if (!this.cache[platform][cateGoryId]) {
				this.cache[platform][cateGoryId] = {
					html: html,
					statusHtml: statusHtml
				};
			}
		}
	};

	EEntertainment.prototype.invokeCache = function () {
		var temp;
		var platformUl = this.zone.find('.middle-module');
		var treeUl     = this.zone.find('.game-tree');
		var ul         = this.zone.find('.bottom-right ul');
		var moreGame   = this.zone.find('.bottom-right .more-game');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var cateGoryId = treeUl.children('li.selected').attr('data-id');

		if (this.currenPage == 0) {
			if (this.cache[platform] && this.cache[platform][cateGoryId]) {
				this.loader3.stop();
				temp = this.cache[platform][cateGoryId];
				ul.html(temp.html);
				moreGame.text(temp.statusHtml);
				this.showGameZone();
				return true;
			}
		}

		return false;
	};

	EEntertainment.prototype.hideGameZone = function () {
		//this.zone.find('.more-game').hide();

		if (this.currenPage == 0) {
			//this.zone.find('.bottom-right ul').hide();
			this.zone.find('.bottom-right ul li').removeClass('zoom-big').hide();
		}

		this.loader3.play();
	};

	EEntertainment.prototype.showGameZone = function () {
		this.zone.find('.bottom-right ul').show();
		this.zone.find('.bottom-right ul li:not(.zoom-big)').addClass('zoom-big');
		this.zone.find('.more-game').show();
	};

    EEntertainment.prototype.getGameLaunchUrl = function (gameId) {
		var callback;
		var platformUl = this.zone.find('.middle-module');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var that       =  this; 
		var opt        =  {
			url: app.urls.getGameLaunchUrl,
			data: {
				gamePlatform: platform,
				gameType: '',
				gameId: gameId
			}
		};

		callback = function (data) {
			window.open(data);
		};

		Service.get(opt, callback);
    };

	EEntertainment.prototype.bindTreeEvents = function () {
		var index;
		var pageUl = this.zone.find('.bottom-left ul');
		var stick  = this.zone.find('.bottom-left .stick');
		var that   = this;

		pageUl.delegate('li','click',function() {
			if ($(this).hasClass('selected')) {
				return;
			}

			clearTimeout(that.sst);
			that.zone.find('.search-box input').val('');
			index = $(this).index();
			$(".bottom-left").find("li").removeClass("selected");
			$(this).addClass("selected");
			stick.css('top',(index * 40 + 65) + 'px');
			that.isScroll = false;
			that.currenPage = 0;
			that.hideGameZone();
			that.getFavoriteGameIds();
		});
	};

	EEntertainment.prototype.goGaming = function (li) {
		var identify = li.attr('data-identify');
		var platform = li.attr('data-platform');
		var gameType = li.attr('data-gametype');

		if (!app.signedIn) {
			app.showLoginNotice();
			return;
		}

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

		Service.getGameLoginUrl(platform, gameType, identify, cb.bind(this));
	};

	EEntertainment.prototype.bindEvents = function () {
		var gameId;
		var imgIndex;
		var imageUl;
		var moreGame;
		var imgSrc;
		var parentLi;
		var platform;
		var gameType;
		var identify;
		var isTry;
		var li;
		var cb;
		var name;
		var middleModuleUl;
		var lastScrollTop = 0;
		var direction;
		var st;
		var item;
		var that = this;

		this.zone      = $('.e-entertainment');
		imgUl          =  this.zone.find('.bottom-right ul');
		marqueeList    =  this.zone.find('.top-left-module');
		moreGame       =  this.zone.find('.bottom-right .more-game');
		middleModuleUl = this.zone.find('.middle-module');

		imgUl.delegate('li','mouseover',function(){
			$(this).find("#hover-layer").removeClass("hover-layer-none").addClass("hover-layer");
		});

		imgUl.delegate('li', 'mouseout', function() {
			  $(this).find("#hover-layer").removeClass("hover-layer").addClass("hover-layer-none");
		});

		middleModuleUl.delegate('li', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			if ($(this).attr('data-type') === 'MT') {
				app.router.setRoute('/clientDownload/mt');
				return;
			}

			that.zone.find('.search-box input').val('');
			that.zone.find('.bottom-left ul li:first-child').click();

			middleModuleUl.find('li').removeClass('selected');
			$(this).addClass('selected');
			that.isScroll   = false;
			that.currenPage = 0;
			that.hideGameZone();
			that.getFavoriteGameIds();
		});		

		this.zone.find('.marqueen-li1-wrapper').delegate('.row', 'click', function () {
			that.goGaming($(this));
		});

		this.zone.find('.marqueen ul').delegate('li', 'click', function () {
			that.goGaming($(this));
		});

		this.zone.delegate('.start-game', 'click', function () {
			that.goGaming($(this).parent().parent('li'));
		});

		this.zone.delegate('.collect', 'click', function () {
			gameId = $(this).parent().parent('li').attr('data-id');

			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			if (app.header.getCollectLength() === 10) {
				app.alert('收藏列表已满!');
				return;
			}

			if ($(this).hasClass('collected')) {
				app.alert('请去收藏列表中取消收藏');
			} else {
				$(this).addClass('collected');
				app.addFavoriteGame(gameId);
			}
		});


		this.zone.delegate('.try-game', 'click', function () {
			parentLi = $(this).parent().parent('li');
			platform = parentLi.attr('data-platform');
			isTry    = parentLi.attr('data-try');
			identify = parentLi.attr('data-identify');

			if (!isTry) {
				app.alert('该游戏暂时不能试玩!');
				return;
			}

			if (platform === 'PT') {
				window.open('http://cache.download.banner.greatfortune88.com/casinoclient.html?mode=offline&language=zh-cn&affiliates=1&game=' + identify);
			} else if (platform === 'PP') {
				gameId = parentLi.attr('data-id');
				window.open('http://demogames.pragmaticplay.net/gs2c/openGame.do?lang=zh&cur=CNY&gameSymbol=' + 
							identify +
						    '&lobbyURL=http%3A%2F%2Fwww.pragmaticplay.com');
			} else {
				app.alert('该游戏暂时不能试玩!');
				return;
				gameId = parentLi.attr('data-id');
				that.getGameLaunchUrl(gameId);
			}
		});

		this.zone.find('.search-btn').click(function () {
			that.hideGameZone();
	    	that.getGameListByName();
		});

		this.zone.find('.search-box input').keypress(function(e) {
		    if(e.which == 13) {
		    	that.hideGameZone();
		        that.getGameListByName();
		    }
		});

		$(document).scroll(function(e) {
		    var viewH     = $('body').height();
		    var contentH  = $('body').get(0).scrollHeight; 
		    var scrollTop = $('body').scrollTop();

			st = $(this).scrollTop();

			if (st > lastScrollTop) {
				direction = 'down';
			} else {
				direction = 'up';
			}

			lastScrollTop = st;

		    if (direction === 'down' && contentH - viewH - scrollTop <= 10 && moreGame.text() !== '没有更多') {
		    	moreGame.text('加载中...');
		    	that.isScroll = true;
		    	that.currenPage++;
		    	that.hideGameZone();
		    	that.getGameList();
		    }
		});

		this.zone.find('.more-game').click(function () {
			if (that.zone.find('.search-box input').val() || $(this).text() == '没有更多') {
				return;
			}

	    	moreGame.text('加载中...');
	    	that.isScroll = true;
	    	that.currenPage++;
	    	that.hideGameZone();
	    	that.getGameList();
		});

		this.createLoader();
	};

	window.EEntertainment = EEntertainment;
}());