/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	/*
	** 判断IP地址，屏蔽相关国家
	*/
/*	$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
	  	if (data && data.country_code === 'PH') {
	  		window.location.href = '403.html';
	  	}
	});*/

	function app () {
		this.zone = $('.app');
		this.initEnv();
		this.init();
	}

	app.prototype.initEnv = function () {
		var env = window.VEB_ENV;

		//配置API域名 和 comet服务器域名
		if (env == 'debug') {
			this.domain      = '//api.evebets.com/';
			this.cometDomain = '//comet.evebets.com/';
		} else if (env == 'test') {
			this.domain      = '//api.evebets.com/';
			this.cometDomain = '//comet.evebets.com/';
		} else if (env == 'production') {
			this.domain      = '//api.vebets.com/';
			this.cometDomain = '//comet.vebets.com/';
		}

		//配置图片服务器域名
		if (location.href.substring(0,5) === 'https') {
			this.imageServer   = 'https://ojrcjvo0a.qnssl.com/';
		} else {
			this.imageServer   = 'http://ojnau7hqi.bkt.clouddn.com/';
		}

		this.liveCsUrl            = 'https://server.iad.liveperson.net/hc/63269832/?cmd=file&amp;file=preChatSurveyContent&amp;site=63269832&amp;sessionkey=H2423850037524059158-b3de96a250df4028b9d87d2aded38e6dK13065169&amp;survey=Pre-Chat';
		this.localStorageDuration = 1;
		this.showAdvertise        = false;
		this.raceUrl              = '//racenew.vebets.com/';
		this.loginerUrl           = '/Qlogin/Quicklogin.htm';
		this.threeDLotteryUrl     = '/3DLottery/index.html';
	};

	app.prototype.init = function () {
		this.suspension = new Suspension();
		this.header     = new Header();
		this.footer     = new Footer();

		this.el  = 	this.header.getDom() +
					'<div class="main">' +
						'<div class="logo-wrapper">' +
						'</div>' +

						'<div class="main-wrapper">' +
						'</div>' +
					'</div>' +

					this.footer.getDom() +
					this.suspension.getDom();

		this.zone.append(this.el);
		this.initAlert();
		this.initRegs();
		this.getProxyLoginUrl();
		this.bindEvents();
		this.getRegistSetting();
		this.checkLocalstorage();

		if (this.showAdvertise) {
			this.showAdvertisement();
		}
	};

	app.prototype.initRegs = function () {
		this.platforms = [
			'MG', 'PT', 'HG', 'BBIN', 'IBC', 'T188', 'EA', 'TB', 'AB', 'TTG', 'OW'
			, 'MT', 'HY', 'FG', 'OPUS', 'OPUS2', 'AG'
		];

		this.usernameReg         =  '^[A-Za-z0-9]{6,12}$';
		this.passwordReg         =  '^[A-Za-z0-9]{6,20}$';
		this.moneyPasswordReg    =  '^[A-Za-z0-9]{6,20}$';
		this.verifyReg           =  '^[A-Za-z0-9]{4}$';
		this.popularizeReg       =  '^[A-Za-z0-9]{10}$';
		this.emailReg            =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.emailVerifyCodeReg  =  '^[0-9]{4}$';
		this.moneyReg            =  '^[0-9]{1,8}$';
		this.moneyReg2           =  /^[0-9]{1,8}(\.[0-9]{1,2})?$/;
		this.moneyReg3           =  /^\d{6,}$/;                      
		this.phoneNumberReg      =  '^[0-9]{11}$';
		this.realNameReg         =  '';
		this.chineseNameReg      =  /(?!.*先生.*|.*小姐.*|.*男士.*|.*女士.*|.*太太.*)^([\u4e00-\u9fa5\ ]{2,4})$/;
		this.qqReg               =  '';
		this.urlReg              =  '';
		this.bankCardReg         =  '^[0-9]{16,19}$';
		this.chineseReg          =  /[\u4E00-\u9FA5\uF900-\uFA2D]/;   //匹配中文字符
		this.birthdayReg         =  '^[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}';  //匹配生日  例如：1990-01-01
		this.timeout             = 40000;
		this.urls  = {
			signUp: this.domain + 'api/Account/Regist',
			agentSignUp: this.domain + 'api/Account/RegistAgent',
			signIn: this.domain + 'api/Account/Login',
			signOut: this.domain + 'api/Account/Logout',
			verifyImage: this.domain + 'api/AuthCode/CreateImageCode',
			checkVerifyImage: this.domain + 'api/AuthCode/CheckImageCode?',
			loginStatus: this.domain + 'api/Account/GetLoginStatus',
			luckyDrawWinRecords: this.domain + 'api/Lucky/GetPrizes?',
			
			getFavoriteGames: this.domain + 'api/Game/GetFavoriteGames?', //获取所有收藏的游戏
			addFavoriteGameById: this.domain + 'api/Game/AddFavorite',       //添加收藏游戏
			deleteFavoriteGameById: this.domain + 'api/Game/DeleteFavorite',  //删除收藏游戏
			getFavoriteGameIds: this.domain + 'api/Game/GetFavoriteGameIds?',

			getAds: this.domain + 'api/News/GetAds?',

			getJackpotsGames: this.domain + 'api/Game/GetJackpotsGames?',   //获取PT奖金池游戏
			getGameCategories: this.domain + 'api/Game/GetCategories?',   //获取电子游艺游戏类型
			getGameList: this.domain + 'api/Game/GetList?',              //获取电子游艺游戏列表
			getGameLaunchUrl: this.domain + 'api/Game/GetGameLaunchUrl?',  //游戏试玩地址
			getGameLoginUrl: this.domain + 'api/Game/GetGameLoginUrl?',   //登录后玩游戏的地址
			getJackpotsByUrl: this.domain + 'api/Game/GetJackpotsByUrl',  //获取PT单个游戏jackpot基础值
			getPtSumJackpotBaseValue: 'http://tickers.playtech.com/jackpots/new_jackpotxml.php?info=4&currency=cny&casino=greatfortune88',  //获取pt jackpot总奖池基础值
			getJackpots: this.domain + 'api/Game/GetJackpots',  //获取MG单个游戏和总游戏jackpot基础值

			getGameUrlForLogin: this.domain + 'api/Game/GetGameUrlForLogin?',

			queryPromoTypes: this.domain + 'api/Promo/GetAllType?',
			queryPromoListByType: this.domain + 'api/Promo/GetList?',
			queryPromoContentById: this.domain + 'api/Promo/GetInfo',

			topupRecords: this.domain + 'api/Deposit/GetDepositList?',   //获取充值列表
			transferRecords: this.domain + 'api/Transfer/GetTransferList?',
			withdrawRecords: this.domain + 'api/Withdrawal/GetWithdrawalList?',
			bettingRecords: this.domain + 'api/Bet/GetBetList?',
			dividentRecords: this.domain + 'api/Promo/GetBonusList?',
			getStationLetters: this.domain + 'api/User/GetMessageList?',
			getAnnouncements: this.domain + 'api/News/GetNotices?',
			getStationLetterCount: this.domain + 'api/User/GetUnreadMessageCount?',

			getTopUpTotal: this.domain + 'api/Deposit/GetTotalDeposit?',
			getTransferTotal: this.domain + 'api/Transfer/GetTotalTransfer?',
			getWithdrawTotal: this.domain + 'api/Withdrawal/GetTotalWithdrawal?',
			getBettingTotal: this.domain + 'api/Bet/GetTotalBet?',
			getDividentTotal: this.domain + '',

			validateEmail: this.domain + 'api/User/ValidateEmail',     //验证邮箱
			validatePhone: this.domain + 'api/User/ValidatePhone',     //验证手机
			sendEmailValidateCode: this.domain + 'api/User/SendEmailValidateCode',  //发送邮箱验证码
			sendPhoneValidateCode: this.domain + 'api/User/SendMobileValidateCode', //发送手机验证码
			getForgetPwdValidateCode: this.domain + 'api/User/GetForgetPwdValidateCode?', //发送手机和邮箱验证码
			changePasswordByForget: this.domain + 'api/User/ChangePasswordByForget', //更改用户密码

			addUserBank: this.domain + 'api/Withdrawal/AddUserBank',
			getBankList: this.domain + 'api/Config/GetBankList',
			getProvinceList: this.domain + 'api/Config/GetProvinceList',
			getCityList: this.domain + 'api/Config/GetCityList?',

			getThirdPay: this.domain + 'api/Pay/GetThirdPay?',

			getWalletList: this.domain + 'api/Promo/GetWalletList?',
			getWalletCash: this.domain + 'api/User/GetWalletCash?',

			fastPay: this.domain + '',
			superFastTransfer: '',
			bankTransfer: '',

			getAllAPI: this.domain + 'api/Game/GetAllApi',
			getPlatformBalance: this.domain + 'api/Game/GetCash?',
			getCenterWalletCash: this.domain + 'api/User/GetUserCash',

			getUserPays: this.domain + 'api/Deposit/GetUserPays',
			payForm: this.domain + 'api/Pay/PayForm',
			addDeposit: this.domain + 'api/Deposit/AddDeposit',
			getUserAdminBank: this.domain + 'api/Deposit/GetUserAdminBank?',

			transferToPlatform: this.domain + 'api/Transfer/DoTransferToGame',
			transferToAccount: this.domain + 'api/Transfer/DoTransferFromGame',

			withdraw: this.domain + 'api/Withdrawal/DoWithdrawal',
			getUserBankList: this.domain + 'api/User/GetUserBankList',

			getUserBankCount: this.domain + 'api/User/GetUserBankCount',

			changeLoginPassword: this.domain + 'api/User/ChangePasswordByUser',
			changeWithdrawPassword: this.domain + 'api/User/UpdateWithdrawalPwd',
			checkWithdrawPwd: this.domain + 'api/User/CheckWithdrawPwd',

			getLoginInUserInfo: this.domain + 'api/Account/GetLoginUser',
			getInfoByUserName: this.domain + 'api/User/GetByUserName?',
			updateUserInfo: this.domain + 'api/User/UpdateUserInfo',
			getRouteCheckList: this.domain + 'api/Config/GetSpareDomain',
			getWebPageByKey: this.domain + 'api/News/GetNewsByKey?',
			getApi: this.domain + 'api/Game/GetApi?',
			getUserAccount: this.domain + 'api/Game/GetUserAccount?',

			getWebPageByKeyUrl: this.domain + 'api/News/GetNewsByKey?',
			readMessage: this.domain + 'api/User/ReadMessage',
			deleteMessage: this.domain + 'api/User/DeleteMessage',

			getRegistSetting: this.domain + 'api/Account/GetRegistSetting',
			getConfigItems: this.domain + 'api/config/items',

			getBroadcast: this.domain + 'api/News/GetBroadcast?'
		};
	};
 
 	app.prototype.checkLocalstorage = function () {
 		var now        = new Date().getTime();
 		var eLastVisit = localStorage.getItem('eLastVisit');

 		if (eLastVisit) {
 			eLastVisit = parseInt(eLastVisit);  
 			
 			if (now - eLastVisit > parseInt(this.localStorageDuration * 24 * 3600 * 1000)) {
 				localStorage.clear();
 				localStorage.setItem('eLastVisit', now + '');
 			}
 		} else {
 			localStorage.setItem('eLastVisit', now + '');
 		}
 	};

	app.prototype.addFavoriteGame = function (gameId) {
		var that = this;
		var opt  =  {
			url: this.urls.addFavoriteGameById,
            data: { 
            	'': gameId
            }, 
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

        	if (json.Data) {
        		that.header.getCollectList(true);
        	} else {
        		alert('添加失败');
        	}
		};

		Service.post(opt, callback);
	};

	app.prototype.deleteFavoriteGame = function (collectId, cb) {
		var that = this;
		var opt  =  {
			url: this.urls.deleteFavoriteGameById,
            data: {
            	'': collectId
            }
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

        	if (json.Data == true && typeof cb === 'function') {
        		cb();
        	} else {
        		alert('删除失败');
        	}
		};

		Service.post(opt, callback);
	};

	app.prototype.initRouter = function () {
		var temp;
		var hash;
		var page;
		var pos;
		var pos2;
		var key;
		var index;
		var wrapper = this.zone.find('.main-wrapper');
		var that = this;
		var dict = {
			'homePage'          : {'className': HomePage,          'index': 0, 'cssClass': 'home-page'},
			'liveVideo'         : {'className': LiveVideo,         'index': 1, 'cssClass': 'live-video'},
			'eEntertainment'    : {'className': EEntertainment,    'index': 2, 'cssClass': 'e-entertainment'},
			'sportsCompetition' : {'className': SportsCompetition, 'index': 3, 'cssClass': 'sports-competition'},
			'lotteryGame'       : {'className': LotteryGame,       'index': 4, 'cssClass': 'lottery-game'},
			'promoActivity'     : {'className': PromoActivity,     'index': 5, 'cssClass': 'promo-activity'},
			'clientDownload'    : {'className': ClientDownload,    'index': 6, 'cssClass': 'client-download'},
			'routeCheck'        : {'className': RouteCheck,        'index': -1, 'cssClass': 'route-check'},
			'personalCenter'	: {'className': PersonalCenter,    'index': -1, 'cssClass': 'personal-center'},
			'forgetPassword'    : {'className': ForgetPassword ,   'index': -1, 'cssClass': 'forget-password'},
			'agentSignup'       : {'className': AgentSignup,       'index': -1, 'cssClass': 'agent-signup'}
		};

		var routes = {};

      	var processRoute = function (pageName, subRouter) {
			that.zone.find('.page').hide();

	      	if (pageName === 'eEntertainment') {
	      		$('.app').addClass('entertainment-bg');
	      	} else {
	      		$('.app').removeClass('entertainment-bg');
	      	}

			if (!that[pageName]) {
				that[pageName] = new (dict[pageName].className)();
				that.zone.find('.main-wrapper').append(that[pageName].getDom());
				that[pageName].bindEvents();
			}
			
			that.header.setStick(dict[pageName].index);

			if (subRouter) {
				that[pageName].show(subRouter);
			} else {
				that[pageName].show();
			}

			that.currentPage = pageName;
      	};

		for (key in dict) {
			routes['/' + key] =  (function (pageName) {
				return function () {
					processRoute(pageName);
				}
			})(key);
		}

      	this.router = Router(routes).init();

      	this.router.on('/liveVideo/:subRouter', function (subRouter) {
			processRoute('liveVideo', subRouter);
      	});

      	this.router.on('/eEntertainment/:subRouter', function (subRouter) {
      		processRoute('eEntertainment', subRouter);
      	});
      	
      	this.router.on('/sportsCompetition/:subRouter', function (subRouter) {
      		processRoute('sportsCompetition', subRouter);
      	});

      	this.router.on('/lotteryGame/:subRouter', function (subRouter) {
      		processRoute('lotteryGame', subRouter);
      	});

      	this.router.on('/promoActivity/:mainRouter/:subRouter', function (mainRouter, subRouter) {
			that.zone.find('.page').hide();
			var pageName = 'promoActivity';

			if (!that[pageName]) {
				that[pageName] = new (dict[pageName].className)();
				that.zone.find('.main-wrapper').append(that[pageName].getDom());
				that[pageName].bindEvents();
			}
			
			that.header.setStick(dict[pageName].index);
			that[pageName].show(mainRouter, subRouter);
			that.currentPage = pageName;
      	});

      	this.router.on('/clientDownload/:subRouter', function (subRouter) {
      		processRoute('clientDownload', subRouter);
      	});

      	hash = window.location.hash;
      	pos  = hash.indexOf('#/');
      	temp = hash.substring(pos + 2);
      	pos2 = temp.indexOf('/');

      	this.getProxy();

      	if (pos2 !== -1) {
      		page = temp.substring(0, pos2);
      	} else {
      		page = temp;
      	}

      	if (pos == -1 || !dict[page]) {
      		this.router.setRoute('/homePage');
      	} else {
      		this.router.setRoute(page);
      	}

      	if (page === 'eEntertainment') {
      		$('.app').addClass('entertainment-bg');
      	} else {
      		$('.app').removeClass('entertainment-bg');
      	}
	};

	app.prototype.getProxy = function () {
        var i;
        var arr;
        var params = window.location.search.split('&');
        var proxyArr = {
            'veb30.com'         :   'A000103',
            'veb36.com'         :   'A000104',
            'veb34.com'         :   'A000105',
            'veb35.com'         :   'A000106',
            'veb31.com'         :   'A000107',
            'veb37.com'         :   'A000108',
            'veb38.com'         :   'A000109',
            'veb39.com'         :   'A000116',
            'veb40.com'         :   'A000201',
            'veb45.com'         :   'A000300',
            'veb46.com'         :   'A000301',
            'veb47.com'         :   'A000302',
            'veb48.com'         :   'A000303',
            'veb49.com'         :   'A000304',
            'veb50.com'         :   'A000305',
            'veb51.com'         :   'A000306',
            'veb52.com'         :   'A000307',
            'veb53.com'         :   'A000310',
            'veb168.com'        :   'A000311',
            'haotianyule.com'   :   'A000294',
            'qz13800.com'       :   'A000297',
            'baidu888.cc'       :   'A000298'
        }

		for (i = 0; i < params.length; i++) {
			arr = params[i].split('=');

			if (arr[0] === 'a' || arr[0] === '?a') {
				this.proxy = arr[1];
				break;
			}
		}

		for (var key in proxyArr) {
			if (window.location.host.indexOf(key) > -1) {
				this.proxy = proxyArr[key];
				break;
			}
		}
	};

	app.prototype.signedInProcedures = function () {
		this.signedIn = true;
		this.header.showSignedInHeader();

		if (this.currentPage === 'homePage') {
			this.homePage.showDepositLi();
			this.homePage.get3DWinRecords();
		} else if (this.currentPage === 'liveVideo') {
			this.liveVideo.getGameLoginUrls();
		} else if (this.currentPage === 'sportsCompetition') {
			this.sportsCompetition.getGameLoginUrls();
		} else if (this.currentPage === 'lotteryGame') {
			this.lotteryGame.getGameLoginUrls();
		}
	};

	app.prototype.signedOutProcedures = function () {
		this.signedIn = false;
		this.header.showSignedOutHeader();
		this.getSportsSignedOutUrl();
		this.Comet.refreshClientCUN(null);
		//this.getPBSignedOutUrl();

		if (this.currentPage === 'homePage') {
			this.homePage.reset();
		}

		this.removeCenterRouter();
		this.closeAllGameWinows();
	};

	app.prototype.closeAllGameWinows = function () {
		var i;
		var arr = ['sport', 'pb', 'PP', 'PT', 'BBIN', 'MG', 'AG', 'TTG', 'MT'];

		for (i = 0; i < arr.length; i++) {
			if (this[arr[i] + 'win'] && !this[arr[i] + 'win'].closed) {
				this[arr[i] + 'win'].close();
			}
		}
	};

	app.prototype.personCenterRouter = function (mainRouter, subRouter) {
		if (!this.signedIn) {
			this.showSignInDialog();
			return;
		}

		if (!this.personCenterDialog) {
			this.personCenterDialog = new PersonalCenter();
			$('.app').append(this.personCenterDialog.getDom());
			this.personCenterDialog.bindEvents();
		}

		this.personCenterDialog.show();

		this.personCenterDialog.zone
			.find('.tree li:eq(' + mainRouter +')')
			.trigger('click');
		this.personCenterDialog.zone
			.find('[menu-index=' + mainRouter +']')
			.find('.tab > li:eq(' + subRouter + ')')
			.trigger('click');
	};

	app.prototype.removeCenterRouter = function () {
		this.personCenterDialog = undefined;
		this.zone.find('.personal-center').remove();
	};

	app.prototype.getJackpotsGames = function (platform, n, cb) {
		var callback;
		var that =  this;
		var opt  =  {
			url: this.urls.getJackpotsGames,
	        data: {
	        	platform: platform,
	        	pageIndex: 0,
	        	pageSize: n
	        }
		};

		if (platform !== 'PT' && platform !== 'MG') {
			return;
		}

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (typeof cb === 'function') {
				cb(json);
			}
		};

		Service.get(opt, callback);
	};

	app.prototype.formatJackpotsUrl = function (data) {
        var jackpotsUrl;
        var jackpotCode;
		var _jackpotInfoType = {
            CASINOBASED    : '2',
            CASINOSTOTAL   : '4',
            GAMEBASED      : '1',
            GAMEGROUPTOTAL : '5',
            GAMETOTAL      : '3'
        };

	    if (data.ShowJackpots) {
	        jackpotsUrl = data.Api.LoginUrl2 + "?info=" + data.JackpotsInfo + "&currency=cny";

	        if (data.JackpotsInfo == _jackpotInfoType.GAMEBASED) {
	            jackpotCode = data.GameIdentify;

	            if (data.JackpotsParams.length > 0) {
	                jackpotCode = data.JackpotsParams;
	            }

	            jackpotsUrl += "&casino=playtech&game=" + jackpotCode;
	        } else if ( data.JackpotsInfo == _jackpotInfoType.CASINOBASED || 
	        			data.JackpotsInfo == _jackpotInfoType.CASINOSTOTAL) {
	            jackpotsUrl += "&casino=playtech";
	        } else if (data.JackpotsInfo == _jackpotInfoType.GAMEGROUPTOTAL) {
	            jackpotCode = data.GameIdentify;

	            if (data.JackpotsParams.length > 0) {
	                jackpotCode = data.JackpotsParams;
	            }

	            jackpotsUrl += "&casino=playtech&group=" + jackpotCode;
	        }
	    }

	    return jackpotsUrl;
	};

	app.prototype.ptLoading = function (url, ptWin) {
		var data;
		var callback1;
		var callback2;
		var that =  this;
		var opt1  =  {
			url: this.urls.getApi,
	        data: {
	        	gamePlatform: 'PT'
	        }
		};

		var opt2  =  {
			url: this.urls.getUserAccount,
	        data: {
	        	gamePlatform: 'PT'
	        }
		};

		callback1 = function (json) {
			if (json && json.ApiUrl2) {
				data = json;
				Service.get(opt2, callback2);
			} else {
				alert(json.Message);
			}
		};

		callback2 = function (data2) {
            if (data2 && data2.Account && data2.Password) {
                ptWin.document.open();
                ptWin.document.write('<!DOCTYPE html>');
                ptWin.document.write('<html>');
                ptWin.document.write('<head>');
                ptWin.document.write('<meta name="viewport" content="width=device-width" />');
                ptWin.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
                ptWin.document.write('<title>正在加载游戏...</title>');
                ptWin.document.write('<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="crossorigin="anonymous"></script>');
                ptWin.document.write('<script type="text/javascript" src="' + data.ApiUrl2 + '"></script>');
                ptWin.document.write('</head>');
                ptWin.document.write('<body>');
                ptWin.document.write('<div>');
                ptWin.document.write('<span id="loading">请稍候，正在加载游戏....</span>');
                ptWin.document.write('<input type="hidden" id="username" name="username" value="' + data2.Account + '">');
                ptWin.document.write('<input type="password" id="password" name="password" value="' + data2.Password + '" style="display:none">');
                ptWin.document.write('<input type="hidden" id="gameUrl" name="gameUrl" value="' + url + '" />');
                ptWin.document.write('</div>');
                ptWin.document.write('<script type="text/javascript">');
                ptWin.document.write('iapiSetCallout("Login", calloutLogin);');
                ptWin.document.write('iapiSetCallout("Logout", calloutLogout);');
                ptWin.document.write('$(function () { login(1); });');
                ptWin.document.write('function login(realMode) { iapiLogin($("#username").val().toUpperCase(), $("#password").val(), realMode, "ch"); };');
                ptWin.document.write('function logout(allSessions, realMode) { iapiLogout(allSessions, realMode); };');
                ptWin.document.write('function calloutLogin(response) {');
                ptWin.document.write('var code = response.errorCode;');
                ptWin.document.write('if (code && code != 6) { alert("登录失败,错误码:" + code + "," + response.errorText).show(); return; }');
                ptWin.document.write('location.href = $("#gameUrl").val();');
                ptWin.document.write('};');
                ptWin.document.write('function calloutLogout(response) {');
                ptWin.document.write('if (response.errorCode) { alert("登录失败, " + response.errorCode); }');
                ptWin.document.write('else { }');
                ptWin.document.write('};');
                ptWin.document.write('</script>');
                ptWin.document.write('</body>');
                ptWin.document.write('</html>');
                ptWin.document.close();
            } else {
                if (data2 && data2.StatusCode) {
                    alert(data2.Message);
                }
            }
		};

		Service.get(opt1, callback1);
	};

	app.prototype.openSports = function (url, ptWin) {
        ptWin.document.open();
        ptWin.document.write('<!DOCTYPE html>');
        ptWin.document.write('<html>');
        ptWin.document.write('<head>');
        ptWin.document.write('<meta name="viewport" content="width=device-width" />');
        ptWin.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
        ptWin.document.write('<title></title>');
        ptWin.document.write('</head>');
        ptWin.document.write('<body>');
        ptWin.document.write("<div>正在加载体育...</div><iframe id='t188' frameborder='0' style=\"border:0;\"></iframe><script>document.getElementById('t188').src = 'javascript:\"<script>parent.location.replace(\\'" + url + "\\')<\\/script>\"';</script>");
        ptWin.document.write('</body>');
        ptWin.document.write('</html>');
        ptWin.document.close();
	};

	app.prototype.getProxyLoginUrl = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: this.urls.getConfigItems,
	        data: {}
		};

		if (this.agentLoginUrl) {
			return;
		}

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.agentLoginUrl = json.AgentSiteDomain;
		};

		Service.get(opt, callback);
	};

	app.prototype.showLoginNotice = function () {
		this.showSignInDialog();
	};

	app.prototype.initAlert = function () {
		this.alertDialog = new Alert();
		this.zone.append(this.alertDialog.getDom());
		this.alertDialog.bindEvents();
	};

	app.prototype.alert = function (content, cb, cb2) {
		cb  = cb || '';
		cb2 = cb2 || '';
		this.alertDialog.show(content, cb, cb2);
	};

	app.prototype.toast = function (content, cb, cb2) {
		var that = this;

		cb  = cb || '';
		cb2 = cb2 || '';
		this.alertDialog.show(content, cb, cb2);

		var tm = setTimeout(function () {
			that.alertDialog.hide();
		}, 2000);
	};

	app.prototype.showPersonalCenter = function () {
		if (!this.personCenterDialog) {
			this.personCenterDialog = new PersonalCenter();
			$('.app').append(this.personCenterDialog.getDom());
			this.personCenterDialog.bindEvents();
		}

		this.personCenterDialog.show();
	};

	app.prototype.GetLoginStatus = function (cb) {
		var that = this;

        $.ajax({
            type: 'GET',
            url: this.urls.loginStatus,
            dataType: 'json',
            timeout: this.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (json == 0) {
				that.signedInProcedures();
				that.Comet.init();
			} else {
				that.signedOutProcedures();
				that.Comet.refreshClientCUN(null);
			}
        }).fail(function (xhr, testStatus, error) {
        	console.log('【获取用户登录状态失败】：' + error);
        });
	};

	app.prototype.getRegistSetting = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: this.urls.getRegistSetting,
	        data: {}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.registerData = json;
		};

		Service.get(opt, callback);
	};

	app.prototype.getUserInfo = function (cb) {
		var callback;
		var that = this;
		var opt  = {
			url: this.urls.getLoginInUserInfo,
			data: {}
		};

		callback = function (json) {
			if (json === null) {  //老接口的未登录状态可能返回null
				PubSub.publish('onNotLoginIn', {});
				return;
			}

			if (json.StatusCode && json.StatusCode != 0) {
				that.alert(json.Message);
				return;
			}
			
			that.userTotalInfo = json;

			if (cb && typeof cb === 'function') {
				cb(json);
			}
		};

		Service.get(opt, callback);
	};

	app.prototype.checkUser = function (userName, cb) {
		var callback;
		var that = this;
		var opt  = {
			url: this.urls.getInfoByUserName,
			data: {
				userName: userName
			}
		};

		callback = function (json) {
			if (cb && typeof cb === 'function') {
				cb(json);
			}
		};

		Service.get(opt, callback);
	};

	app.prototype.getSportsSignedOutUrl = function (cb) {
		var callback;
		var that = this;
		var opt  = {
			url: this.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};

		callback = function (json) {
			that.sportsClickable = true;

			if (json.StatusCode && json.StatusCode != 0) {
				that.sportsUrl = 'maintaining';
				that.sportsMaintingMsg  = json.Message;

				return;
			}
			
			that.sportsUrl = json;
		};

		Service.get(opt, callback);
	};

	app.prototype.getPBSignedOutUrl = function (cb) {
		var callback;
		var that = this;
		var opt  = {
			url: this.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'SCM',
				gameType: 'casino'
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				that.pbUrl = 'maintaining';
				that.pbMaintingMsg  = json.Message;

				return;
			}
			
			that.pbUrl = json;
		};

		Service.get(opt, callback);
	};

	/*
	** -----------------个人中心检测项目开始---------------------
	*/
	app.prototype.checkUserTrueName = function() {
		if (this.userTotalInfo.TrueName) {
			return true;
		}

		return false;
	};

	app.prototype.checkUserPhone = function() {
		if (this.userTotalInfo.Phone && this.userTotalInfo.PhoneValidateStatus) {
			return true;
		}

		return false;
	};

	app.prototype.checkUserEmail = function() {
		if (this.userTotalInfo.Email && this.userTotalInfo.EmailValidateStatus) {
			return true;
		}

		return false;
	};

	app.prototype.checkUserBanckCards = function(cb) {
		var that = this;
		var opt  =  {
			url: this.urls.getUserBankCount,
	        data: {}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (cb && typeof cb === 'function') {
				cb(parseInt(json));
			}
		};

		Service.get(opt, callback);
	};

	app.prototype.refreshWallet = function(cb) {
		PubSub.publish('onRequestWalletBalance', {});
		
		if (this.personCenterDialog) {
			this.personCenterDialog.getCenterWalletCash();
		}
	};

	app.prototype.getAllPlatforms = function (cb) {
		var callback;
		var that = this;
		var opt  = {
			url: this.urls.getAllAPI,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.allApiData = data;

			if (cb && typeof cb === 'function') {
				cb(data);
			}
		};

		Service.get(opt, callback);
	};
	// -----------------个人中心检测项目开始---------------------
	


	/*
	** -----------------各种弹出框管理开始---------------------
	*/
	app.prototype.showSetPhoneNumberDialog = function(opt) {
		if (!this.setPhonenumberDialog) {
			this.setPhonenumberDialog = new SetPhonenumberDialog();
			$('.app').append(this.setPhonenumberDialog.getDom());
			this.setPhonenumberDialog.bindEvents();
		}

		this.setPhonenumberDialog.show(opt);
	};

	app.prototype.showSetEmailDialog = function() {
		if (!this.setEmailDialog) {
			this.setEmailDialog = new SetEmailDialog();
			$('.app').append(this.setEmailDialog.getDom());
			this.setEmailDialog.bindEvents();
		}

		this.setEmailDialog.show();
	};

	app.prototype.showBindCardDialog = function(opt) {
		if (!this.cardBindDiag) {
			this.cardBindDiag = new CardBindDialog();
			$('.app').append(this.cardBindDiag.getDom());
			this.cardBindDiag.bindEvents();
		}

		this.cardBindDiag.show(opt);
	};

	app.prototype.showCardManagementDialog = function(opt) {
		if (!this.bankCarkManagerDialog) {
			this.bankCarkManagerDialog = new BankCarkManagerDialog();
			$('.app').append(this.bankCarkManagerDialog.getDom());
			this.bankCarkManagerDialog.bindEvents();
		}

		this.bankCarkManagerDialog.show(opt);
	};

	app.prototype.showSignInDialog = function () {
		if (!this.signInDialog) {
			this.signInDialog = new SignIn();
			$('.app').append(this.signInDialog.getDom());
			this.signInDialog.bindEvents();
		}

		this.signInDialog.show();
	};

	app.prototype.showSignUpDialog = function () {
		if (!this.signUpDialog) {
			this.signUpDialog = new SignUp();
			$('.app').append(this.signUpDialog.getDom());
			this.signUpDialog.bindEvents();
		}

		this.signUpDialog.show();
	};

	app.prototype.showChangeLoginPwdDialog = function () {
		if (!this.changeLoginPwdDialog) {
			this.changeLoginPwdDialog = new ChangeLoginPwdDialog();
			$('.app').append(this.changeLoginPwdDialog.getDom());
			this.changeLoginPwdDialog.bindEvents();
		}
		this.changeLoginPwdDialog.show();
	};

	app.prototype.showChangeWithdrawPwdDialog = function () {
		if (!this.changeWithdrawPwdDialog) {
			this.changeWithdrawPwdDialog = new ChangeWithdrawPwdDialog();
			$('.app').append(this.changeWithdrawPwdDialog.getDom());
			this.changeWithdrawPwdDialog.bindEvents();
		}
		this.changeWithdrawPwdDialog.show();
	};

	app.prototype.showDaddypayDialog = function (opt) {
		if (!this.topupConfirmDialog) {
			this.topupConfirmDialog = new TopupConfirmDialog();
			$('.app').append(this.topupConfirmDialog.getDom());
			this.topupConfirmDialog.bindEvents();
		}

		this.topupConfirmDialog.show(opt);
	};

	app.prototype.showWithdrawInspectDialog = function (data) {
		if (!this.withdrawDialog) {
			this.withdrawDialog = new WithdrawDialog();
			$('.app').append(this.withdrawDialog.getDom());
			this.withdrawDialog.bindEvents();
		}

		this.withdrawDialog.show(data);
	};

	app.prototype.showReadMessageDialog = function (data) {
    	if (!this.readMessageDialog) {
    		this.readMessageDialog = new ReadMessageDialog();
			$('.app').append(this.readMessageDialog.getDom());
			this.readMessageDialog.bindEvents();
    	}

        this.readMessageDialog.show(data);
	};

	app.prototype.showTopupOverlay = function() {
		if (!this.topupOvelay) {
			this.topupOvelay = new TopupOvelay();
			$('.app').append(this.topupOvelay.getDom());
			this.topupOvelay.bindEvents();
		}

		this.topupOvelay.show();
	};

	app.prototype.showVideoDialog = function (src) {
		if (!this.videoDialog) {
			this.videoDialog = new VideoDialog();
			$('.app').append(this.videoDialog.getDom());
			this.videoDialog.bindEvents();
		}

		this.videoDialog.show(src);
	};

	app.prototype.showNoticePushDialog = function (opt) {
		if (!this.noticePushDialog) {
			this.noticePushDialog = new NoticePushDialog();
			$('.app').append(this.noticePushDialog.getDom());
			this.noticePushDialog.bindEvents();
		}

		this.noticePushDialog.show(opt);
	};

	app.prototype.showAdvertisement = function () {
		if (!this.advertisement) {
			this.advertisement = new Advertisement();
			$('.app').append(this.advertisement.getDom());
			this.advertisement.bindEvents();
		}

		this.advertisement.show();
	};
	
	// -----------------各种弹出框管理结束---------------------
	


	app.prototype.bindEvents = function () {
		var that = this;
		
		this.suspension.bindEvents();
		this.header.bindEvents();
		this.footer.bindEvents();
		this.GetLoginStatus();

        PubSub.subscribe('onNotLoginIn', function (msg, data) {
        	that.signedOutProcedures();
        	that.showSignInDialog();
        });
	};

	window.app = new app();
	window.app.initRouter();
})();