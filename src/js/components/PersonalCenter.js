$(function() {
	function PersonalCenter(opt) {
		this.mainWalletData  = {
			moneyType: '¥',
			balance: '0.00',
			moneyUnit: 'CNY'
		};

		this.tabData = {
		    'zjgl': ['充值','转账','提现'],
		    'jyjl': ['充值记录','转账记录','提款记录','投注记录','红利记录'],
		   	'zhsz': ['基本信息','安全中心'],
		   	'znx' : ['站内信','通知公告'],
		};

		IMDialog.call(this, opt || {});
		this.initDom();
	};

	PersonalCenter.prototype = new IMDialog();

	PersonalCenter.prototype.initDom = function() {
		var temp = '<div class="personal-center">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="left-container">' +
									'<div class="user-profiles">' +
										'<div class="user">' +
											'<div class="username">' +
												'<span>Hi, &nbsp;</span>' + 
												'<span class="username-value">' +
													app.userTotalInfo.UserName +
												'</span>' +
											'</div>' +
											
											'<div class="user-level">' +
												'<span class="pc-icon crown-icon"></span>' +
												'<span class="vip">Lv' + app.userTotalInfo.UserLevel + '</span>' +
											'</div>' +
										'</div>' +

										'<div class="psw-info">' +
											'<span class="psw-intro">安全评分</span>' +
											'<span class="psw-level-value"></span>' +
											'<a class="improve-security">提升</a>' +
											'<span class="clear"></span>' +
										'</div>' +

										'<ul class="menu-ico">' +
											'<li><span class="pc-icon bankcard-icon"></span></li>' +
											'<li><span class="pc-icon mailbox-icon"></span></li>' +
											'<li><span class="pc-icon phone-icon"></span></li>' +
										'</ul>' +
									'</div>' +

									'<div class="tree">' +
										'<ul>' +
	                                    	'<li class="selected">' +
	                                    		'<span class="pc-icon dollar-icon"></span>' +
	                                    		'<span>资金管理</span>' +
	                                    	'</li>' +
	                                    	'<li>' +
	                                    		'<span class="pc-icon file-icon"></span>' +
	                                    		'<span>交易记录</span>' +
	                                    	'</li>' +
	                                    	'<li>' +
	                                    		'<span class="pc-icon setting-icon"></span>' +
	                                    		'<span>账户设置</span>' +
	                                    	'</li>' +
	                                    	'<li>' +
	                                    		'<span class="pc-icon station-mail-icon"></span>' +
	                                    		'<span>站内信</span>' +
	                                    		'<span class="letter-count"></span>' +
	                                    	'</li>' +
										'</ul>' +
										'<div class="stick"></div>' +
									'</div>' +
								'</div>' +

								'<div class="right-container">' +
									'<div class="center-wallet wallet" data-platform="center">' +
										'<div class="title">中心钱包</div>' +

										'<div class="center-balance">' +
											'<span class="money money-type">¥&nbsp;</span>' +
											'<span class="money balance">' + app.userTotalInfo.Cash + '</span>' +
											'<span class="money-unit">元</span>' +	
											'<span class="pc-icon refresh-icon refresh"></span>' +
											'<span class="clear"></span>' +
										'</div>' +

										'<div class="actions">'	+
											'<a href="javascript:void(0);" class="btn btn-deposit">充值</a>' +
											'<a href="javascript:void(0);" class="btn btn-transfer">转账</a>' +	
											'<span class="clear"></span>' +
										'</div>' +					
									'</div>' +

									'<div class="wallet-zone"></div>' +
									'<div class="clear"></div>' +

									'<div class="tab-container">' +
										'<div class="tab-container-item zjgl-zone" menu-index="0"></div>' +
										'<div class="tab-container-item jyjl-zone" menu-index="1"></div>' +
										'<div class="tab-container-item zhsz-zone" menu-index="2"></div>' +
										'<div class="tab-container-item znx-zone" menu-index="3"></div>' +
									'</div>' +
	 							'</div>' +

	 							'<div class="close">×</div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="overlay overlay4"></div>';
		this.el = temp;
	};

	PersonalCenter.prototype.getDom = function() {
		return this.el;
	};

	PersonalCenter.prototype.show = function() {
		var that = this;
		
		this.reset();
		this.showOverlay();

		if (!app.allApiData) {
			app.getAllPlatforms(function (data) {
				that.setSubWalletsData(data);
			});
		}

		if (!this.firstTime) {
			this.getPwdSecurityLevel();
			this.getCenterWalletCash();
			this.firstTime = true;
		}
	};

	PersonalCenter.prototype.hide = function() {
		this.hideOverlay();
	};

	PersonalCenter.prototype.reset = function() {
		this.zone.find('.username-value').text(app.userTotalInfo.UserName);
		this.zone.find('.vip').text('Lv' + app.userTotalInfo.UserLevel);
	};

	PersonalCenter.prototype.setSubWallet = function() {
		var temp = '';
		var subWallet;
		var swipperWith;

		for(var i = 0; i < this.subWalletData.length; i++) {
			subWallet = new SubWallet(this.subWalletData[i]);
			this.subWallets.push(subWallet);
			if (i % 2 == 0)
				temp += '<div class="wallet-group">';
			temp += subWallet.el;
			if (i % 2 != 0) 
				temp += '</div>';
		}

		if (this.subWalletData.length % 2 != 0)  temp += '</div>';

		temp =	'<div class="wallet-left-nav">' +
					'<div class="pc-icon left-icon"></div>' +
				'</div>' +

				'<div class="swiper-container">' +
					'<div class="swiper">' +
						temp +
					'</div>' +
				'</div>' +

				'<div class="wallet-right-nav">' +
					'<div class="pc-icon right-icon"></div>' +
				'</div>';
		
		this.zone.find('.wallet-zone').html(temp);

		this.bindWalletEvents();
	};

	PersonalCenter.prototype.createZjgl = function(){
		var temp = '';

		this.zjglTab = new Tab({
			id: 'zjgl-tab',
			titles: this.tabData['zjgl']
		});

		this.cz = new TopUp();

		temp +=	this.zjglTab.getDom() +
				'<div class="zjgl-content">' +
					this.cz.getDom() +
				'</div>';

		return temp;
	};

	PersonalCenter.prototype.createJyjl = function(){
		var temp = '';

		this.jyjlTab = new Tab({
			id: 'jyjl-tab',
			titles: this.tabData['jyjl']
		});

		this.topupRecord = new TopupRecord();

		temp +=	this.jyjlTab.getDom() +
				'<div class="jyjl-content">' +
					this.topupRecord.getDom() +
				'</div>';

		return temp;
	};

	PersonalCenter.prototype.createZhsz = function(){
		var temp = '';
		
		this.zhszTab = new Tab({
			id: 'zhsz-tab',
			titles: this.tabData['zhsz']
		});

		this.basicInfo = new BasicInfo();

		temp += this.zhszTab.getDom() +
				'<div class="zhsz-content">' +
					this.basicInfo.getDom() +
				'</div>';

		return temp;
	};

	PersonalCenter.prototype.createZnx = function() {
		var temp = '';

		this.znxTab = new Tab({
			id: 'znx-tab',
			titles: this.tabData['znx']
		});

		this.stationLetter = new StationLetter();

		temp += this.znxTab.getDom() +
				'<div class="znx-content">' +
					this.stationLetter.getDom() +
				'</div>';
				
		return temp;
	};

	PersonalCenter.prototype.getPwdSecurityLevel = function () {
		var score = 20;
		var that  = this;
		var opt   =  {
			url: app.urls.getUserBankCount,
	        data: {}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json > 0) {
				score += 20;
				that.zone.find('.menu-ico .bankcard-icon').parent('li').addClass('binded');
			} else {
				that.zone.find('.menu-ico .bankcard-icon').parent('li').removeClass('binded');
			}

			if (app.userTotalInfo.EmailValidateStatus) {
				score += 20;
				that.zone.find('.menu-ico .mailbox-icon').parent('li').addClass('binded');
			} else {
				that.zone.find('.menu-ico .mailbox-icon').parent('li').removeClass('binded');
			}

			if (app.userTotalInfo.PhoneValidateStatus) {
				score += 20;
				that.zone.find('.menu-ico .phone-icon').parent('li').addClass('binded');
			} else {
				that.zone.find('.menu-ico .phone-icon').parent('li').removeClass('binded');
			}

			if (app.userTotalInfo.HasWithdrawalPassword) {
				score += 20;
			}

			that.zone.find('.psw-level-value').text(score + '分');
		};

		Service.get(opt, callback);
	};

	PersonalCenter.prototype.setSubWalletsData = function (data) {
		var i;

		this.subWallets    = [];
		this.subWalletData = [];

		for (i = 0; i < data.length; i++) {
			temp = {
				platform: data[i].GamePlatform,
				walletType: data[i].GameName,
				balance: ''
			}

			this.subWalletData.push(temp);
		}

		this.setSubWallet();
		this.bindEvents();

		for (i = 0; i < this.subWalletData.length; i++) {
			this.getPlatformBalance(this.subWalletData[i].platform);
		}
	};

	PersonalCenter.prototype.getPlatformBalance = function (platform) {
		var i;
		var wallet;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getPlatformBalance,
			data: {
				gamePlatform: platform
			}
		};

		callback = function (data) {
			wallet = that.zone.find('.wallet-group').find('[data-platform="' + platform + '"]');
			wallet.find('.balance').text(data.toFixed(2));
			wallet.find('.refresh-icon').stop();
			wallet.find('.refresh-icon').removeClass('rotate');
		};

		Service.get(opt, callback);
	};

	PersonalCenter.prototype.getCenterWalletCash = function () {
		var i;
		var wallet;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}
			
			wallet = that.zone.find('.center-wallet .center-balance');
			wallet.children('.balance').text(data);
			wallet.find('.refresh-icon').stop();
			wallet.find('.refresh-icon').removeClass('rotate');
			
			app.getUserInfo(function () {
				if (parseFloat(app.userTotalInfo.Cash) !== parseFloat(data)) {
					app.alert('接口异常，getCenterWalletCash和userTotalInfo.cash账户余额不一致，请截图后联系客服人员!');
				}
			});
		};

		Service.get(opt, callback);
	};

	PersonalCenter.prototype.bindWalletEvents = function () {
		var platform;
		var walletWidth;
		var that       = this;
		var pageIndex  = 0;
		var pageCount  = Math.round(this.subWalletData.length / 2) - 3;
		var swiper     = this.zone.find('.swiper');
		var walletzone = this.zone.find('.wallet-zone');
		var walletLeft = this.zone.find('.wallet-left-nav');
		var walletRight = this.zone.find('.wallet-right-nav');

		this.zone.delegate('.wallet-left-nav','click',function() {
			if (walletRight.css('visibility') == 'hidden') walletRight.css('visibility','visible');
			walletWidth = swiper.find('.wallet-group').width();
			if (pageIndex == 0) return;
			pageIndex--;
			if (pageIndex == 0) walletLeft.css('visibility','hidden');
			swiper.css('transform', 'translateX(' + (0 - (walletWidth + 2) * pageIndex) + 'px)');
		});

		this.zone.delegate('.wallet-right-nav','click',function() {
			if (walletLeft.css('visibility') == 'hidden') walletLeft.css('visibility','visible');
			walletWidth = swiper.find('.wallet-group').width();
			if (pageIndex == pageCount - 1) return;
			pageIndex++;
			if (pageIndex == pageCount -1) walletRight.css('visibility','hidden');
			swiper.css('transform', 'translateX(' + (0 - (walletWidth + 2) * pageIndex) + 'px)');
		});

		this.zone.find('.btn-deposit').click(function () {
			platform = $(this).parents('.wallet').attr('data-platform');
			app.personCenterRouter(0, 0);
		});

		this.zone.find('.btn-transfer').click(function () {
			platform = $(this).parents('.wallet').attr('data-platform');
			app.personCenterRouter(0, 1);
			
			if (platform === 'center') {
				platform = 'PT';
			}
			
			PubSub.publish('onPlatformTransfer', {platform: platform});
		});

        this.zone.delegate('.refresh', 'click', function () {
        	$(this).addClass('rotate');
        	$(this).siblings('.balance').text('');

        	platform = $(this).parents('.wallet').attr('data-platform');

        	if (platform != 'center') {
        		that.getPlatformBalance(platform);
        	} else {
        		that.getCenterWalletCash();
        	}
        });
	};

	PersonalCenter.prototype.checkTrueName = function() {
		if (!app.userTotalInfo.TrueName) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			});
			
			return false;
		}

		return true;
	};

	PersonalCenter.prototype.bindEvents = function(){
		var menuUl;
		var stick;
		var index;
		var walletzone;
		var tabZone;
		var that = this;

		this.zone = $('.personal-center');
		menuUl = this.zone.find('.tree > ul');
		stick = this.zone.find('.tree .stick');

        menuUl.delegate('li','click',function() {
        	menuUl.children('li').removeClass('selected');
        	$(this).addClass('selected');
            index = $(this).index();
            stick.css('top',(index * 50) + 'px');
            tabZone = that.zone.find('[menu-index="' + index +'"]');

            if (tabZone.html() == '') {
	            if (index == 0) {
	            	if (!that.checkTrueName()) {
	            		return;
	            	}

	        		tabZone.html(that.createZjgl());
	        		that.zjglTab.bindEvents();
	        		that.cz.bindEvents();
	        		that.cz.show();
	        	} else if (index == 1){
	        		tabZone.html(that.createJyjl());
	        		that.jyjlTab.bindEvents();
	        		that.topupRecord.bindEvents();
	        		that.topupRecord.show();
	        	} else if (index == 2) {
	        		tabZone.html(that.createZhsz());
	        		that.zhszTab.bindEvents();
	        		that.basicInfo.bindEvents();
	        		that.basicInfo.show();
	        	} else if (index == 3) {
	        		tabZone.html(that.createZnx());
	        		that.znxTab.bindEvents();
	        		that.stationLetter.bindEvents();
	        		that.stationLetter.show();
	        	}
            }
        	tabZone.siblings().hide();
            tabZone.show();
        });

        $('.zjgl-zone').delegate('#zjgl-tab>li', 'click', function () {
        	if ($(this).hasClass('stick')) {
        		return;
        	}

        	index = $(this).index();
        	that.zone.find('.grzx-money-action').hide();

        	if (index === 0) {
        		that.cz.show();
        	} else if (index === 1) {
        		if (!that.zz) {
        			that.zz = new MoneyTransfer();
        			that.zone.find('.zjgl-content').append(that.zz.getDom());
        			that.zz.bindEvents();
        		}

        		that.zz.show();
        	} else if (index === 2) {
        		if (!that.tx) {
        			that.tx = new Withdraw();
        			that.zone.find('.zjgl-content').append(that.tx.getDom());
        			that.tx.bindEvents();
        		}

        		that.tx.show();
        	}
        });

        $('.jyjl-zone').delegate('#jyjl-tab>li', 'click', function () {
        	if ($(this).hasClass('stick')) {
        		return;
        	}

        	index = $(this).index();
        	that.zone.find('.jyjl-money-action').hide();

        	if (index === 0) {
        		that.topupRecord.show();
        	} else if (index === 1) {
        		if (!that.moneyTransferRecord) {
        			that.moneyTransferRecord = new MoneyTransferRecord();
        			that.zone.find('.jyjl-content').append(that.moneyTransferRecord.getDom());
        			that.moneyTransferRecord.bindEvents();
        		}

        		that.moneyTransferRecord.show();
        	} else if (index === 2) {
        		if (!that.withDrawRecord) {
        			that.withDrawRecord = new WithdrawRecord();
        			that.zone.find('.jyjl-content').append(that.withDrawRecord.getDom());
        			that.withDrawRecord.bindEvents();
        		}

        		that.withDrawRecord.show();
        	} else if (index === 3) {
        		if (!that.bettingRecord) {
        			that.bettingRecord = new BettingRecord();
        			that.zone.find('.jyjl-content').append(that.bettingRecord.getDom());
        			that.bettingRecord.bindEvents();
        		}

        		that.bettingRecord.show();
        	} else if (index === 4) {
        		if (!that.dividendRecord) {
        			that.dividendRecord = new DividendRecord();
        			that.zone.find('.jyjl-content').append(that.dividendRecord.getDom());
        			that.dividendRecord.bindEvents();
        		}

        		that.dividendRecord.show();
        	}
        });

        $('.zhsz-zone').delegate('#zhsz-tab>li','click', function () {
        	if ($(this).hasClass('stick')) {
        		return;
        	}

        	index = $(this).index();
        	that.zone.find('.zhsz-info-action').hide();

        	if (index === 0) {
        		that.basicInfo.show();
        	}else if(index === 1){
				if (!app.userTotalInfo.TrueName) {
					app.alert('请先填写真实姓名', function () {
						app.personCenterRouter(2, 0);
					});
					
					return;
				}

        		if (!that.security) {
        			that.security = new SecurityCenter();
        			that.zone.find('.zhsz-content').append(that.security.getDom());
        			that.security.bindEvents();
        		}
        		
        		that.security.show();
        	}
        });

        $('.znx-zone').delegate('#znx-tab>li','click', function() {
        	if ($(this).hasClass('stick')) {
        		return;
        	}
        	
        	index = $(this).index();
        	that.zone.find('.znx-info-action').hide();

        	if (index === 0) {
        		that.stationLetter.show();
        	}else if(index === 1) {
        		if (!that.announcement ) {
	        		that.announcement = new Announcement();
	        		that.zone.find('.znx-content').append(that.announcement.getDom());
	        		that.announcement.bindEvents();
        		}

        		that.announcement.show();
        	}
        });

        this.zone.find('.improve-security').click(function () {
        	app.personCenterRouter(2, 1);
        });

        this.zone.find('.close').click(function () {
        	that.hide();
        });

        PubSub.subscribe('onRequestWalletBalance', function (msg, data) {
        	that.getCenterWalletCash();
        });

        PubSub.subscribe('onSecurityLevelChanged', function (msg, data) {
        	app.getUserInfo(that.getPwdSecurityLevel.bind(that));
        });

        this.bindOverlayEvents();
	};

	window.PersonalCenter = PersonalCenter;
}());