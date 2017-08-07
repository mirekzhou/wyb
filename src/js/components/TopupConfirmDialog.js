(function() {
	function TopupConfirmDialog(opt) {
		IMDialog.call(this, opt || {});
		this.opt = opt;
		this.daddyPayDict = {
			'ICBC': {
				id: 1,
				code: 'ICBC',
				name: '中国工商银行',
				homePage: 'http://www.icbc.com.cn/'
			},
			'CMB': {
				id: 2,
				code: 'CMB',
				name: '招商银行',
				homePage: 'http://www.cmbchina.com/'
			},
			'CCB': {
				id: 3,
				code: 'CCB',
				name: '中国建设银行',
				homePage: 'http://www.ccb.com/'
			},
			'ABC': {
				id: 4,
				code: 'ABC',
				name: '中国农业银行',
				homePage: 'http://www.abchina.com/'
			},
			'BOC': {
				id: 5,
				code: 'BOC',
				name: '中国银行',
				homePage: 'http://www.boc.cn/'
			},
			'BCM': {
				id: 6,
				code: 'BCM',
				name: '交通银行',
				homePage: 'http://www.bankcomm.com/'
			},
			'CMBC': {
				id: 7,
				code: 'CMBC',
				name: '中国民生银行',
				homePage: 'http://www.cmbc.com.cn/'
			},
			'ECC': {  //中信银行在Daddypay上的银行code
				id: 8,
				code: 'ECC',
				name: '中信银行',
				homePage: 'http://www.citicbank.com/'
			},
			'CNCB': {  //中信银行在同略云上的银行code
				name: '中信银行',
				homePage: 'http://www.citicbank.com/'
			},
			'SPDB': {
				id: 9,
				code: 'SPDB',
				name: '上海浦东发展银行',
				homePage: 'http://www.spdb.com.cn/'
			},
			'PSBC': {
				id: 10,
				code: 'PSBC',
				name: '邮政储汇',
				homePage: 'http://www.psbc.com/'
			},
			'CEB': {
				id: 11,
				code: 'CEB',
				name: '中国光大银行',
				homePage: 'http://www.cebbank.com/'
			},
			'PINGAN': {//中信银行在Daddypay上的银行code
				id: 12,
				code: 'PINGAN',
				name: '平安银行',
				homePage: 'http://bank.pingan.com/'
			},
			'PAB' : {//中信银行在同略云上的银行code
				name: '平安银行',
				homePage: 'http://bank.pingan.com/'
			},
			'CGB': {
				id: 13,
				code: 'CGB',
				name: '广发银行股份有限公司',
				homePage: 'http://www.cgbchina.com.cn/'
			},
			'HXB': {
				id: 14,
				code: 'HXB',
				name: '华夏银行',
				homePage: 'http://www.hxb.com.cn/'
			},
			'CIB': {
				id: 15,
				code: 'CIB',
				name: '福建兴业银行',
				homePage: 'http://www.cib.com.cn/'
			}
		};
		this.initDom();
	}

	TopupConfirmDialog.prototype = new IMDialog();

	TopupConfirmDialog.prototype.initDom = function() {
		var ms;
		var date  = new Date();
		var nowMs = Date.now();

		ms   = nowMs + 15 * 60 * 1000;
		date.setTime(ms);

		date = 	date.getHours() + ':' + 
				date.getMinutes() + ':' + 
				date.getSeconds();

		this.button = new Button({
			id: 'topup-confirm-dialog-button',
			name: '登录网银充值',
			width: 140,
			height: 38
		});

		var temp = '<div class="topup-confirm-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">' +
									'<span>充值确认</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<div class="row3">' +
										'<span class="dot"></span>' +
										'<span class="countdown-info">请转账至以下银行卡：</span>' +
									'</div>' +

									'<div class="row4">' +
										'<div class="bank-card">' +
											'<div class="bank-logo">' +
											'</div>' +

											'<ul class="info-ul">' +
												'<li>' +
													'<div class="name">收款姓名：</div>' +
													'<div class="value user-name-value"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li>' +
													'<div class="name">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</div>' +
													'<div class="value account-value"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li>' +
													'<div class="name">开户支行：</div>' +
													'<div class="value bank-address"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li>' +
													'<div class="name">充值金额：</div>' +
													'<div class="value amount-value"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li class="post-message">' +
													'<div class="name">附&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言：</div>' +
													'<div class="value postscript"></div>' +
													'<div class="time-valid-info">(15分钟有效)</div>' +
													'<div class="clear"></div>' +
												'</li>' +
											'</ul>' +
										'</div>' +

										'<ul class="copy-ul">' +
											'<li class="copy" data-clipboard-target=".user-name-value">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".account-value">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".bank-address">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".amount-value">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".postscript">点击复制</li>' +
										'</ul>' +

										'<div class="clear"></div>' +
									'</div>' +

									'<div class="row5">' +
										'<div class="go-pay">' +
											this.button.getDom() +
											'<p class="text">务必填写正确附言才能秒存秒到哦!</p>' +
										'</div>' +

										'<div class="count-down">' +
											'<div class="left count-down-text">附言将于14分59秒后过期</div>' +
											'<a class="right check-topup-record">查看充值记录</a>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	TopupConfirmDialog.prototype.getDom = function() {
		return this.el;
	};

	TopupConfirmDialog.prototype.show = function(opt) {
		var i;
		var temp;
		var receiveBankName;
		var infoUl       = this.zone.find('.info-ul');
		var copyUl       = this.zone.find('.copy-ul');
		var bankLogo     = this.zone.find('.bank-logo');
		var data         = opt.data;                  //接口返回的数据
		var payBankCode  = opt.payBankCode;           //付款银行的银行code
		var platform     = opt.platform;              //支付平台： DADDYPAY或者TONGLUEYUNPAY

		this.bankUrl     = this.daddyPayDict[payBankCode].homePage;

		if (platform === 'DADDYPAY') {
			for (i = 0; i < this.daddyPayDict.length; i++) {
				if (this.daddyPayDict[i].id == data.collection_bank_id) {
					receiveBankName = this.daddyPayDict[i].name;
				}
			}
		} else if (platform === 'TONGLUEYUNPAY') {
			receiveBankName = this.daddyPayDict[data.collection_bank_id].name;
		}

		//【1】 Daddypay有email字段，同略云没有email字段
		//【2】 对于email字段的逻辑是，有bank_card_num时就取bank_card_num, 没有bank_card_num时取email字段

		temp = '<span class="daddypay-bank">' + receiveBankName + '</span>';
		bankLogo.html(temp);

		infoUl.find('.user-name-value').text(data.bank_acc_name);
		infoUl.find('.account-value').text(data.bank_card_num || data.email);
		infoUl.find('.bank-address').text(data.issuing_bank_address);
		infoUl.find('.amount-value').text(data.amount + '元');
		infoUl.find('.postscript').text(data.note);

		copyUl.children('li[data-clipboard-target=".user-name-value"]').attr({'data-clipboard-text' : data.bank_acc_name});
		copyUl.children('li[data-clipboard-target=".account-value"]').attr({'data-clipboard-text' : data.bank_card_num || data.email});
		copyUl.children('li[data-clipboard-target=".bank-address"]').attr({'data-clipboard-text' : data.issuing_bank_address});
		copyUl.children('li[data-clipboard-target=".amount-value"]').attr({'data-clipboard-text' : data.amount});
		copyUl.children('li[data-clipboard-target=".postscript"]').attr({'data-clipboard-text' : data.note});

		this.zone.find('.go-pay').show();
		this.zone.find('.count-down').hide()

        this.showOverlay();
        this.startTimer();
	};

	TopupConfirmDialog.prototype.hide = function(){
		this.hideOverlay();
		clearInterval(this.timer);
		app.refreshWallet();
	};

	TopupConfirmDialog.prototype.startTimer = function(){
		var that          = this;
		var total         = 900;
		var countDownText = this.zone.find('.count-down-text');

		this.timer = setInterval(function () {
			total--;

			if (total > 0) {
				countDownText.text(that.formatTimerText(total));
			} else {
				countDownText.text('附言时效已过，请重新提交!');
			}
		}, 1000);
	};

	TopupConfirmDialog.prototype.formatTimerText = function(count) {
		var min = parseInt(count / 60);
		var sec = count % 60;

		return '附言将于' + min + '分' + sec + '秒后过期';
	};

	TopupConfirmDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.topup-confirm-dialog');

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.zone.find('#topup-confirm-dialog-button').click(function () {
			window.open(that.bankUrl);
			that.zone.find('.go-pay').hide();
			that.zone.find('.count-down').show();
			//app.showTopupOverlay();
		});

		this.zone.find('.check-topup-record').click(function () {
			that.hide();
			app.personCenterRouter(1, 0);
		});

		that.clipboard = new Clipboard('.copy');
        this.bindOverlayEvents();
        this.button.bindEvents();
	}

	window.TopupConfirmDialog = TopupConfirmDialog;

}());