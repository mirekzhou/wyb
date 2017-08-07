(function () {
	function TopUp(opt) {
		this.opt  = opt;
		this.autoPayRangeDict = {
			'ICBC': {
				id: 375,
				sort: 1,
				code: 'ICBC',
				name: '中国工商银行',
				minDeposit: 100,
				maxDeposit: 190000
			},
			'CMB': {
				id: 376,
				sort: 2,
				code: 'CMB',
				name: '招商银行',
				minDeposit: 100,
				maxDeposit: 60000
			},
			'CCB': {
				id: 380,
				sort: 3,
				code: 'CCB',
				name: '建设银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'ABC': {
				id: 381,
				sort: 4,
				code: 'ABC',
				name: '农业银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'BOC': {
				id: 382,
				sort: 5,
				code: 'BOC',
				name: '中国银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'BCM': {
				id: 383,
				sort: 6,
				code: 'BCM',
				name: '交通银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CMBC': {
				id: 377,
				sort: 7,
				code: 'CMBC',
				name: '民生银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'ECC': {
				id: 384,
				sort: 8,
				code: 'ECC',
				name: '中信银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'SPDB': {
				id: 385,
				sort: 9,
				code: 'SPDB',
				name: '上海浦发银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'PSBC': {
				id: 386,
				sort: 10,
				code: 'PSBC',
				name: '邮政储蓄银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CEB': {
				id: 387,
				sort: 11,
				code: 'CEB',
				name: '光大银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'PINGAN': {
				id: 388,
				sort: 12,
				code: 'PINGAN',
				name: '平安银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CGB': {
				id: 389,
				sort: 13,
				code: 'CGB',
				name: '广发银行股份有限公司',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'HXB': {
				id: 390,
				sort: 14,
				code: 'HXB',
				name: '华夏银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CIB': {
				id: 391,
				sort: 15,
				code: 'CIB',
				name: '福建兴业银行',
				minDeposit: 100,
				maxDeposit: 45000 
			}
		};

		this.initDom();
	}

	TopUp.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'topup-button',
			name: '立即充值',
			width: 128,
			height: 38
		});

		this.button3 = new Button({
			id: 'topup-button3',
			name: '提交订单',
			width: 128,
			height: 38
		});

		this.topupInput = new Input({
			id: 'topup-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.topupInput3 = new Input({
			id: 'topup-input3',
			width: 200,
			height: 30,
			reg: app.moneyReg2
		});

		this.bankBranchInput = new Input({
			id: 'topup-bank-branch-input',
			width: 200,
			height: 32
		});

		this.selectProvince = new Select({
			id: 'topup-province',
			width: 100,
			data:[
				{
					'text': '省',
					'value': '-1'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'topup-city',
			width: 100,
			data:[
				{
					'text': '市',
					'value': '-1'
				}
			]
		});

		this.selectAdminBank = new Select({
			id: 'topup-user-admin-bank',
			width: 320,
			data:[]
		});

		temp = 		'<div class="top-up grzx-money-action">' +
						'<div class="row1">' +
							'<ul class="deposit-types"></ul>' +
						'</div>' +

						'<div class="content"></div>' +
					'</div>';

		this.el = temp;
	};

	TopUp.prototype.getDom = function() {
		return this.el;
	};

	TopUp.prototype.show = function() {
		this.zone.show();
		this.checkUserSettings();

		if (!this.firstTime) {
			this.getUserPays();
			this.firstTime = true;
		}
	};

	TopUp.prototype.hide = function() {
		this.zone.hide();
	};

	TopUp.prototype.checkUserSettings = function() {
		if (!app.checkUserTrueName()) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			}, function () {
				app.personCenterRouter(2, 0);
			});
			return;
		}
	};

	TopUp.prototype.createUserAdminUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-bankid="' + data[i].Id + '">' +
						data[i].Bank.BankName + ', ' + data[i].AccountName + ', ' + data[i].AccountNo + 
					'</option>';
		}

		this.selectAdminBank.setOptions(temp);
	};

	TopUp.prototype.submit1 = function() {
		var opt;
		var callback;
		var selectedBank = this.zone.find(".bank-cards .cards-ul li.selected");
		var selectedLi   = this.zone.find('.deposit-types li.selected');
		var amount       = this.topupInput.getValue();
		var userName     = app.userTotalInfo.UserName;
		var payPlatform  = selectedLi.attr('data-platform');
		var payMercode   = selectedLi.attr('data-mercode');
		var bankCode     = selectedBank.attr('data-code');
		var bankName     = selectedBank.attr('data-name');
    	var minDeposit   = parseFloat(this.zone.find('.min-deposit').text());
    	var maxDeposit   = parseFloat(this.zone.find('.max-deposit').text());
		var that         = this;

		if (!amount) {
			app.alert('请填写充值金额!');
			return;
		}

		if (!this.topupInput.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (parseFloat(amount) < minDeposit ||
			parseFloat(amount) > maxDeposit) {
			app.alert(	'最小充值金额：' + 
					minDeposit + 
					'。最大充值金额：' + 
					maxDeposit);
			return;
		}

		if (selectedBank.length < 1) {
			app.alert('请选择充值银行！');
			return;
		}

		opt = {
			url: app.urls.payForm,
			data: {
				Amount      : amount,
				UserName    : userName,
				PayPlatform : payPlatform,
				PayMerCode  : payMercode,
	            PayBankCode : bankCode,
	            PayBankName : bankName
			}
		};
		
		var payWin = window.open('');

        if (!payWin) {
            app.alert('请在浏览口中设置允许本网站的弹出式窗口');
            return;
        }

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				payWin.close();
				return;
			}
			
			app.showTopupOverlay();
            payWin.document.write(data.Data);
            payWin.document.close();  // 弹出提示层
		};

		Service.post(opt, callback);
	};

	TopUp.prototype.submit2 = function() {
		var callback;
		var selectedBank = this.zone.find(".bank-cards .cards-ul li.selected");
		var selectedLi   = this.zone.find('.deposit-types li.selected');
		var amount       = this.topupInput.getValue();
		var userName     = app.userTotalInfo.UserName;
		var payPlatform  = selectedLi.attr('data-platform');
		var payMercode   = selectedLi.attr('data-mercode');
		var bankCode     = selectedBank.attr('data-code');
		var bankName     = selectedBank.attr('data-name');
    	var minDeposit   = parseFloat(this.zone.find('.min-deposit').text());
    	var maxDeposit   = parseFloat(this.zone.find('.max-deposit').text());
		var that         = this;
		var opt          = {
			url: app.urls.payForm,
			data: {
				Amount      : amount,
				UserName    : userName,
				PayPlatform : payPlatform,
				PayMerCode  : payMercode,
	            PayBankCode : bankCode,
	            PayBankName : bankName,
	            FaceCode    : 1
			}
		};

		if (!amount) {
			app.alert('请填写充值金额!');
			return;
		}

		if (!this.topupInput.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (parseFloat(amount) < minDeposit ||
			parseFloat(amount) > maxDeposit) {
			app.alert(	'最小充值金额：' + 
					minDeposit +
					'。最大充值金额：' + 
					maxDeposit);
			return;
		}

		if (selectedBank.length < 1) {
			app.alert('请选择充值银行！');
			return;
		}

		callback = function (data) {
			that.loader1.stop();

			if (data.StatusCode) {
				app.alert(data.Message);
				return;
			}

			data.Data = $.parseJSON(data.Data);
			app.showDaddypayDialog({
				data        : data.Data,
				payBankCode : bankCode,
				platform    : payPlatform
			});
		};

		this.loader1.play();
		Service.post(opt, callback);
	};

	TopUp.prototype.submit3 = function() {
		var i;
		var callback;
		var transType  = this.zone.find('input[name="deposit-method"]:checked').attr('data-value');
		var amount     = this.topupInput3.getValue();
		var bankId     = $("#topup-user-admin-bank").find("option:selected").attr('data-bankid');
    	var minDeposit = parseFloat(this.zone.find('.min-deposit').text());
    	var maxDeposit = parseFloat(this.zone.find('.max-deposit').text());
		var that       = this;
		var opt        = {
			url: app.urls.addDeposit,
			data: {
				UserName: app.userTotalInfo.UserName,
				TrueName: app.userTotalInfo.TrueName,
				BankId: bankId,
				Amount: amount,
				DepositType: 0,
				TransType: transType
			}
		};

		if (!amount) {
			app.alert('请填写充值金额!');
			return;
		}

		if (!this.topupInput3.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (parseFloat(amount) < minDeposit ||
			parseFloat(amount) > maxDeposit) {
			app.alert(	'最小充值金额：' + 
					minDeposit +
					'。最大充值金额：' + 
					maxDeposit);
			return;
		}

		if (transType == 2 || transType == 3 || transType == 4) {
			opt.data.Province = this.selectProvince.getValue();
			opt.data.City     = this.selectCity.getValue();
			opt.data.Address  = this.bankBranchInput.getValue();
		}

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			app.alert('恭喜您，成功提交存款单！ 单号:' + data + '。转账成功后，请即时联系在线客服为您添加额度。');
			
		};

		Service.post(opt, callback);
	};

	TopUp.prototype.getUserPays = function () {
		var i;
		var callback;
		var that  = this;
		var opt   = {
			url: app.urls.getUserPays,
			data: {}
		};

		callback = function (data) {
			that.zone.find('.spinner').hide();

            if (data && data.StatusCode) {
            	that.loader1.stop();
                app.alert(data.Message);
                return;
            }

            that.userPaysData = data;
            that.setDepositTypes(data);
        	that.bindDepositTypesEvents();
        	that.loader1.stop();
        	that.zone.find('.deposit-types li:first-child').click();
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	TopUp.prototype.getThirdPay = function (Id) {
		var i;
		var li;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getThirdPay,
			data: {
				id: Id
			}
		};

		callback = function (data) {
			that.loader1.stop();

            if (data && data.StatusCode) {
                app.alert(data.Message);
                return;
            }

			li = that.zone.find('.deposit-types li[data-type="AutoPays"]');
			li.attr('data-mercode', data.MerCode);
			li.attr('data-platform', data.ThirdPayCode);
			that.daddyPayData = that.sortDaddyData(data);
			that.bindDepositTypesEvents();
            that.zone.find('.deposit-types li:first-child').click();
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.sortDaddyData = function (data) {
		function sorting(a, b){
		  	return a.Sort - b.Sort;
		}

		data.BankList = data.BankList.sort(sorting);

		return data;
	};

	TopUp.prototype.setThirdAndAutoContent = function (bankList, platform) {
		var temp = '';
		var that = this;

		temp +=		'<div class="content-item">' +
						'<div class="bank-cards">' +
							'<div class="title">' +
								//(type === 'ThirdPay'? '请选择充值银行：': '请选择收款银行：') +
								'请选择充值银行' +
							'</div>' +

							'<ul class="cards-ul">';

        for (i = 0; i < bankList.length; i++) {
        	temp += 			'<li data-id="' + bankList[i].Id + '"' +
	        						' data-code="' + bankList[i].BankCode + '"' + 
	        						' data-name="' + bankList[i].BankName + '"' +
	        						'>' +
									//'<input type="radio" name="bank" />' +
									'<span class="bankLogo ' + bankList[i].CssName + '"></span>' +
									'<div class="card-overlay"></div>' +
								'</li>';
        }

	    temp += 			'</ul>' +
						'</div>' +

						'<div class="see-more">显示更多银行卡</div>' +

						'<div class="row4">' +
							'<div class="text">充值金额</div>' +
							this.topupInput.getDom() +
							'<div class="text unit">元</div>' +
							'<div class="input-notice">' +
								'<span>充值额度限定： 最低</span>' +
								'<span class="min-deposit">' +
									app.userTotalInfo.MinDeposit +
								'</span>' +
								'<span>元，最高</span>' +
								'<span class="max-deposit">' +
									app.userTotalInfo.MaxDeposit +
								'</span><span>元</span>' +
							'</div>' +
						'</div>' +

						'<div class="row5">' +
							this.button.getDom() +
						'</div>' +
					'</div>';

		this.zone.find('.content').html(temp);
		this.resizeCardsUl();
		this.bindOtherTransferEvents();
		this.setTopupRange();

		if (platform !== 'DADDYPAY' && platform !== 'TONGLUEYUNPAY') {
			this.button.setName('立即充值');
		} else {
			this.button.setName('下一步');
		}

		//this.zone.find('.bank-cards .cards-ul li:first-child').click();
	};

	TopUp.prototype.resizeCardsUl = function () {
		var lis   = this.zone.find('.cards-ul li');
		var width = this.zone.find('.cards-ul').width();
		var more  = this.zone.find('.see-more');

		if (width < 1000) {  //1行4个
			if (lis.length > 8) {
				more.show();
			} else {
				more.hide();
			}
		} else {  //1行5个
			if (lis.length > 10) {
				more.show();
			} else {
				more.hide();
			}
		}
	};

	TopUp.prototype.changeCardsUlMaxHeight = function (height) {
		var more   = this.zone.find('.see-more');
		var ul     = this.zone.find('.cards-ul');
		
		if (height === 150) {
			more.text('显示更多银行卡');
			more.removeClass('expanded');
		} else {
			more.text('收起');
			more.addClass('expanded');
		}

		ul.css('max-height', height + 'px');
	};

	TopUp.prototype.setBankContent = function () {
		var temp = '';

		temp += '<div class="content-item bank-topup">' +
					// '<select class="user-admin-banks-select">' +
					// '</select>' +
					this.selectAdminBank.getDom() +

					'<table cellpadding="0" cellspacing="0">' +
						'<tbody>' +
							'<tr>' +
								'<td class="name">收款银行：</td>' +
								'<td class="value">' +
									'<div class="left bank-name-value"></div>' +
									'<div class="right copy" style="display:none" data-clipboard-target=".bank-name-value">复制</div>' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td class="name">账户名称：</td>' +
								'<td class="value">' +
									'<div class="left user-name-value"></div>' +
									'<div class="right copy" data-clipboard-target=".user-name-value">复制</div>' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td class="td1 account">收款账号：</td>' +
								'<td class="value">' +
									'<div class="left account-value"></div>' +
									'<div class="right copy" data-clipboard-target=".account-value">复制</div>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +

					'<div class="deposit-method">' +
						'<span class="title">存款方式</span>' +
						'<ul>' +
							'<li class="active">' +
								'<input name="deposit-method" type="radio" id="topup-wyzz" data-value="1" checked="checked">' +
								'<label for="topup-wyzz">网银转账</label>' +
							'</li>' +
/*							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-atm-autocounter" data-value="2">' +
								'<label for="topup-atm-autocounter">ATM自动柜员机</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-atm-cash" data-value="3">' +
								'<label for="topup-atm-cash">ATM现金入款</label>' +
							'</li>' +*/
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-bank-counter" data-value="4">' +
								'<label for="topup-bank-counter">银行柜台</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-mobile-bank" data-value="5">' +
								'<label for="topup-mobile-bank">手机银行</label>' +
							'</li>' +
						'</ul>' +
					'</div>' +

					'<div class="payment-counter">' +
						'<div class="text">所属支行</div>' +
						this.selectProvince.getDom() +
						this.selectCity.getDom() +
						this.bankBranchInput.getDom() +
					'</div>' +

					'<div class="row4">' +
						'<div class="text">充值金额</div>' +
						this.topupInput3.getDom() +
						'<div class="text unit">元</div>' +
						'<div class="input-notice">' +
							'<span>充值额度限定： 最低</span>' +
							'<span class="min-deposit">' +
								app.userTotalInfo.MinDeposit +
							'</span>' +
							'<span>元，最高</span>' +
							'<span class="max-deposit">' +
								app.userTotalInfo.MaxDeposit +
							'</span><span>元</span>' +
						'</div>' +
					'</div>' +

					'<div class="row5">' +
						this.button3.getDom() +
					'</div>' +
				'</div>';

		this.zone.find('.content').html(temp);
		this.setTopupRange();
		this.bindBankTransferEvents();
		this.clipboard = new Clipboard('.copy');

		if (!this.provinceData) {
			this.getProvinceList();
		} else {
			this.createProvinceUl(this.provinceData);
			this.getCityList(this.provinceData[0].Id);
		}
	};

    TopUp.prototype.createLoader = function() {
        var wrapper1 = this.zone[0];
        
        this.loader1 = new Loader(wrapper1, {
        	top: '50%'
        });
    };

    TopUp.prototype.setTopupRange = function () {
    	var selectedLi = this.zone.find('.deposit-types li.selected');
    	var type       = selectedLi.attr('data-type');
    	var platform   = selectedLi.attr('data-platform');
    	var minDeposit = this.zone.find('.min-deposit');
    	var maxDeposit = this.zone.find('.max-deposit');
    	var alitxFlag  = (selectedLi.attr('data-special') === 'ali-tx');
    	var cardsUl    = this.zone.find('.cards-ul');
    	var code;
    	var firstLi;

    	if (type === 'ThirdPays') {    //第三方存款
    		if (platform === 'TONGLUEYUNPAY') {
	    		minDeposit.text('100');
	    		maxDeposit.text('190000');
    		} else if (alitxFlag) {
    			if (firstLi.attr('data-name') === '微信') {
		    		minDeposit.text(app.userTotalInfo.WXMinAmount);
		    		maxDeposit.text(app.userTotalInfo.WXMaxAmount);
    			} else {
		    		minDeposit.text(app.userTotalInfo.AliPayMinAmount);
		    		maxDeposit.text(app.userTotalInfo.AliPayMaxAmount);
    			}
    		} else {
	    		minDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMin);
	    		maxDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMax);
    		}
    	} else if (type === 'AutoPays') {
			code = firstLi.attr('data-code');
    		minDeposit.text(this.autoPayRangeDict[code].minDeposit);
    		maxDeposit.text(this.autoPayRangeDict[code].maxDeposit);
    	} else {    //银行存款
    		minDeposit.text(app.userTotalInfo.MinDeposit);
    		maxDeposit.text(app.userTotalInfo.MaxDeposit);
    	}

		firstLi = cardsUl.children('li:first-child');
		firstLi.click();
    };

	TopUp.prototype.setDepositTypes = function (data) {
		var i;
		var alipay     = null;
		var wechat     = null;
		var temp       = '';
		var thirdPays  = data.UserGroup.ThirdPays;
		var autoPays   = data.UserGroup.AutoPays;   //已经废弃
		var adminBanks = data.UserGroup.AdminBanks;

		for (i = 0; i < thirdPays.length; i++) {
			if (thirdPays[i].DeviceType != 2) {
				if (thirdPays[i].MerName === '支付宝/微信') {
					temp += '<li ' + (i == 0?' class="selected"': '') +
										'data-id="' + thirdPays[i].Id + '" ' +
										'data-type="ThirdPays" ' +
										'data-index="' + i + '" ' +
										'data-mercode="' + thirdPays[i].MerCode + '" ' +
										'data-platform="' + thirdPays[i].ThirdPayCode + '" ' + 
										'data-special="ali-tx">' +
								'<span>' +
									thirdPays[i].MerName +
								'</span>' +
							'</li>';
				} else {
					temp += '<li ' + (i == 0?' class="selected"': '') +
										'data-id="' + thirdPays[i].Id + '" ' +
										'data-type="ThirdPays" ' +
										'data-index="' + i + '" ' +
										'data-mercode="' + thirdPays[i].MerCode + '" ' +
										'data-platform="' + thirdPays[i].ThirdPayCode +'">' +
								'<span>' +
									thirdPays[i].MerName +
								'</span>' +
							'</li>';
				}
			}
		}

		for (i = 0; i < adminBanks.length; i++) {
			if (adminBanks[i].Type == 1) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>银行转账</span>' +
						'</li>';
				break;
			}

/*			if (adminBanks[i].Type == 0) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>微信</span>' +
						'</li>';
			} else if (adminBanks[i].Type == 1) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>银行转账</span>' +
						'</li>';
			} else if (adminBanks[i].Type == 2) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>支付宝</span>' +
						'</li>';
			} else if (adminBanks[i].Type == 3) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>支付宝二维码</span>' +
						'</li>';
			}*/
		}

		this.zone.find('.deposit-types').html(temp);
	};

	TopUp.prototype.getUserAdminBank = function (type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getUserAdminBank,
			data: {
				type: type
			}
		};

		callback = function (data) {
            if (data && data.StatusCode) {
                app.alert(data.Message);
                return;
            }

            that.userAdminBankData[type] = data;
            that.fillBankPayContent(data);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.fillBankPayContent = function (data) {
        this.createUserAdminUl(data);

        this.zone.find('.bank-topup table .bank-name-value').text(data[0].Bank.BankName);
        this.zone.find('.bank-topup table .bank-name-value + .copy').attr({
        	'data-clipboard-text' : data[0].Bank.BankName
        });

        this.zone.find('.bank-topup table .user-name-value').text(data[0].AccountName);
        this.zone.find('.bank-topup table .user-name-value + .copy').attr({
        	'data-clipboard-text' : data[0].AccountName
        });

        this.zone.find('.bank-topup table .account-value').text(data[0].AccountNo);
        this.zone.find('.bank-topup table .account-value + .copy').attr({
        	'data-clipboard-text' : data[0].AccountNo
        });
	};

	TopUp.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	TopUp.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	TopUp.prototype.getProvinceList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getProvinceList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.provinceData = data;
			that.createProvinceUl(data);
			that.getCityList(data[0].Id);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.getCityList = function(provinceId) {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getCityList,
			data: {
				provinceId: provinceId
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createCityUl(data);
		};

		Service.get(opt, callback);
	};
	
	TopUp.prototype.bindOtherTransferEvents = function() {
		var that         = this;
		var bankCardsUl  = this.zone.find('.bank-cards ul');
		var button       = this.zone.find('#topup-button');
		var more         = this.zone.find('.see-more');
		var depositTypeLi;
		var li;
		var code;
    	var minDeposit;
    	var maxDeposit;
    	var merCode;
    	var thirdPayCode;
    	var platform;

		bankCardsUl.delegate('li','click',function() {
			bankCardsUl.find('li').removeClass('selected');
			$(this).addClass('selected');

			depositTypeLi = that.zone.find('.deposit-types li.selected');
			li            = bankCardsUl.children('li.selected');
			minDeposit    = that.zone.find('.min-deposit');
			maxDeposit    = that.zone.find('.max-deposit');
			platform      = depositTypeLi.attr('data-platform');

/*			if (merCode === 4000162251) {   //微信和支付宝
				if (li.attr('data-name') === '微信') {
		    		minDeposit.text(app.userTotalInfo.WXMinAmount);
		    		maxDeposit.text(app.userTotalInfo.WXMaxAmount);
				} else if (li.attr('data-name') === '支付宝') {
		    		minDeposit.text(app.userTotalInfo.AliPayMinAmount);
		    		maxDeposit.text(app.userTotalInfo.AliPayMaxAmount);
				}
			}*/

			if (platform === 'DADDYPAY') {
				code = li.attr('data-code');
	    		minDeposit.text(that.autoPayRangeDict[code].minDeposit);
	    		maxDeposit.text(that.autoPayRangeDict[code].maxDeposit);
			} else if (platform === 'TONGLUEYUNPAY') {
	    		minDeposit.text('100');
	    		maxDeposit.text('190000');
			} else {
				if (li.attr('data-name').indexOf('微信')>-1) {
					minDeposit.text(app.userTotalInfo.WXMinAmount);
					maxDeposit.text(app.userTotalInfo.WXMaxAmount);
				}else{
					minDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMin);
					maxDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMax);
				}
	    		
			}

		});

		button.click(function () {
			depositTypeLi = that.zone.find('.deposit-types li.selected');
			platform      = depositTypeLi.attr('data-platform');

			if (platform === 'TONGLUEYUNPAY' || platform === 'DADDYPAY') {
				that.submit2();
			} else {
				that.submit1();
			}
		});

		more.click(function () {
			if ($(this).hasClass('expanded')) {
				that.changeCardsUlMaxHeight(150);
			} else {
				that.changeCardsUlMaxHeight(1000);
			}
		});

		this.button.bindEvents();
		this.topupInput.bindEvents();
	};

	TopUp.prototype.bindBankTransferEvents = function() {
		var text;
		var arr;
		var methodId;
		var that = this;

		this.zone.find('#topup-button3').unbind('click').click(function () {
			that.submit3();
		});

		this.zone.find('#topup-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.zone.find('input[name="deposit-method"]').click(function () {
			that.zone.find('.deposit-method ul li').removeClass('active');
			$(this).parent('li').addClass('active');

			methodId = $(this).attr('id');
			
			if (methodId === 'topup-wyzz' || methodId === 'topup-mobile-bank') {
				that.zone.find('.payment-counter').hide();
			} else {
				that.zone.find('.payment-counter').show();
			}
		});

		this.zone.find('#topup-user-admin-bank').change(function () {
			text = $('#topup-user-admin-bank').find("option:selected").text();
			arr  = text.split(',');
            that.zone.find('.bank-topup table .bank-name-value').text(arr[0]);
            that.zone.find('.bank-topup table .bank-name-value + .copy').attr({
            	'data-clipboard-text' : arr[0]
            });
            that.zone.find('.bank-topup table .user-name-value').text(arr[1]);
            that.zone.find('.bank-topup table .user-name-value + .copy').attr({
            	'data-clipboard-text' : arr[1]
            });
            that.zone.find('.bank-topup table .account-value').text(arr[2]);
            that.zone.find('.bank-topup table .account-value + .copy').attr({
            	'data-clipboard-text' : arr[2]
            });
		});

		this.zone.find('.copy').click(function () {
			app.alert('复制成功!');
		});

		this.button3.bindEvents();
		this.topupInput3.bindEvents();
		this.bankBranchInput.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
		this.selectAdminBank.bindEvents();
	};

	TopUp.prototype.bindDepositTypesEvents = function() {
		var row1Ul;
		var content;
		var contentName;
		var platform;
		var type;
		var bankPayType;
		var index;
		var bankList;
		var methodId;
		var inputEvents   = 'input';
		var that          = this;

		row1Ul  = this.zone.find('.row1 ul');
		content = this.zone.find('.content');
		
		row1Ul.children('li').unbind('click').click(function () {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');
			type = $(this).attr('data-type');
			that.depositType = type;
			platform = $(this).attr('data-platform');

			if (type === 'ThirdPays') {
				index    = $(this).attr('data-index');
				bankList = that.userPaysData.UserGroup[type][index].BankList;
				that.setThirdAndAutoContent(bankList, platform);
			} else if (type === 'bank-pay') {
				bankPayType = $(this).attr('data-bankpay-type');
				that.setBankContent();

				if (!that.userAdminBankData) {
					that.userAdminBankData = {};
				}

				if (that.userAdminBankData[bankPayType]) {
					that.fillBankPayContent(that.userAdminBankData[bankPayType]);
				} else {
					that.getUserAdminBank(bankPayType);
				}
			}
		});
	};

	TopUp.prototype.bindEvents = function() {
		this.zone = $('.top-up');
		this.createLoader();
	};

	window.TopUp = TopUp;
}());