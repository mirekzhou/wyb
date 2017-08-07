(function () {
	function Withdraw(opt) {
		this.opt  = opt;
		this.bankAndClass = [{"Id":221,"BankCode":"CCB","BankName":"建设银行","CssName":"bank-ccb","Sort":99},{"Id":222,"BankCode":"ICBC","BankName":"工商银行","CssName":"bank-icbc","Sort":99},{"Id":223,"BankCode":"BOC","BankName":"中国银行","CssName":"bank-chinabank","Sort":99},{"Id":224,"BankCode":"ABC","BankName":"农业银行","CssName":"bank-abchina","Sort":99},{"Id":225,"BankCode":"CMB","BankName":"招商银行","CssName":"bank-cmb","Sort":99},{"Id":226,"BankCode":"CMBC","BankName":"中国民生银行","CssName":"bank-cmbc","Sort":99},{"Id":227,"BankCode":"BOCOM","BankName":"交通银行","CssName":"bank-comm","Sort":99},{"Id":229,"BankCode":"CIB","BankName":"兴业银行","CssName":"bank-cib","Sort":99},{"Id":230,"BankCode":"SPDB","BankName":"上海浦东发展银行","CssName":"bank-spdb","Sort":99},{"Id":231,"BankCode":"GDB","BankName":"广东发展银行","CssName":"bank-cgbchina","Sort":99},{"Id":232,"BankCode":"CITIC","BankName":"中信银行","CssName":"bank-ecitic","Sort":99},{"Id":233,"BankCode":"CEB","BankName":"光大银行","CssName":"bank-cebbank","Sort":99},{"Id":234,"BankCode":"PSBC","BankName":"中国邮政储蓄银行","CssName":"bank-psbc","Sort":99},{"Id":235,"BankCode":"BOBJ","BankName":"北京银行","CssName":"bank-bankofbeijing","Sort":99},{"Id":237,"BankCode":"BOS","BankName":"上海银行","CssName":"bank-bankofshanghai","Sort":99},{"Id":238,"BankCode":"PAB","BankName":"平安银行","CssName":"bank-pingan","Sort":99},{"Id":239,"BankCode":"NBCB","BankName":"宁波银行","CssName":"bank-nbcb","Sort":99},{"Id":240,"BankCode":"NJCB","BankName":"南京银行","CssName":"bank-njcb","Sort":99}];
		this.initDom();
	}

	Withdraw.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'withdraw-button',
			name: '立即提现',
			width: 128,
			height: 38
		});

		this.moneyInput = new Input({
			id: 'withdraw-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.passwordInput = new Input({
			id: 'withdraw-pwd-input',
			width: 200,
			height: 30,
			reg: app.moneyPasswordReg,
			type: 'password'
		});

		temp 	= 	'<div class="withdraw grzx-money-action">' +
						'<div class="content">' +
							'<div class="row1">' +
								'<div class="title">请选择提款银行卡</div>' +
								'<ul class="user-banks"></ul>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">提现金额</div>' +
								this.moneyInput.getDom() +
								'<div class="text unit">元</div>' +
								'<div class="input-notice">' +
									'<span>单次提现额度限定： 最低</span>' +
									'<span class="min-single-withdraw">' +
										app.userTotalInfo.SingleMinWithdraw +
									'</span>' +
									'<span>元，最高</span>' +
									'<span class="max-single-withdraw">' +
										app.userTotalInfo.SingleMaxWithdraw +
									'</span>元' +
								'</div>' +
							'</div>' +

							'<div class="row21">' +
								'<div class="text">资金密码</div>' +
								this.passwordInput.getDom() +
								'<div class="input-notice money-pwd-notice">' +
									'<span>本次输入的密码将作为您的取款密码，6-16位字符，不可与登录密码相同</span>' +
								'</div>' +
							'</div>' +

							'<div class="row3">' +
								this.button.getDom() +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	Withdraw.prototype.addCardItem = function(data, index) {
		var i;
		var temp;
		var cssName;
		var bankName   =  data.Bank.BankName;
		var accountLen =  data.AccountNo.length;
		var tailnumber =  data.AccountNo.substring(accountLen - 4);
		var nameLen    =  data.AccountName.length;
		var tailname   =  data.AccountName[nameLen - 1];
		var cardId     =  data.Bank.Id;

		var nameStart  =  '';

		for (i = 0; i < nameLen - 1; i++) {
			nameStart += '*';
		}

		for (i = 0; i < this.bankAndClass.length; i++) {
			if (this.bankAndClass[i].BankName == bankName) {
				cssName = this.bankAndClass[i].CssName;
				break;
			}
		}

		temp 	=	'<li ' + ((index === 0)?'class="selected" ' : '') + 'data-index="' + index + '">' +
						//'<input id="withdrawBankRidio' + index + '" type="radio" name="withdrawBankRidio" ' + ((index === 0)?'checked="checked"' : '') + '>' +
						//'<label for="withdrawBankRidio' + index + '">' +
							(cssName?('<span class="bankLogo ' + cssName + '"></span>'):('<span style="margin-right: 10px;width:122px;">' + bankName + '</span>')) +
							'<span class="text">尾号：****</span>' +
							'<span class="value tailnumber">' + tailnumber + '</span>' +
							'<span class="text">[' + nameStart + '</span>' +
							'<span class="value tailname">' + tailname +'</span>' +
							'<span class="text">]</span>' +
							'<div class="card-overlay"></div>' +
						//'</label>' +
					'</li>';

		this.zone.find('.user-banks').append(temp);
	};

	Withdraw.prototype.getDom = function() {
		return this.el;
	};

	Withdraw.prototype.show = function() {
		this.zone.show();

		this.checkUserSettings();
		
		if (!this.firstTime) {
			this.getUserBankList();
			this.firstTime = true;
		}

		this.setMoneyPwdNotice();
	};

	Withdraw.prototype.hide = function() {
		this.zone.hide();
	};

	Withdraw.prototype.checkUserSettings = function() {
		if (!app.checkUserTrueName()) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			});

			return;
		}

		if (!app.checkUserPhone()) {
			app.showSetPhoneNumberDialog({
				successHideCallback: function () {
					app.checkUserBanckCards(function (count) {
						if (count <= 0) {
							app.showBindCardDialog({
								failedHideCallback: function () {
									app.personCenterRouter(0, 0);
								}
							});
						}
					});
				},

				failedHideCallback: function () {
					app.personCenterRouter(0, 0);
				}
			});

			return;
		}

		app.checkUserBanckCards(function (count) {
			if (count <= 0) {
				app.alert('请先绑定银行卡，才能进行提款操作', function () {
					app.showBindCardDialog({
						failedHideCallback: function () {
							app.personCenterRouter(0, 0);
						}
					});
				}, function () {
					app.personCenterRouter(0, 0);
				});
			}
		});
	};

	Withdraw.prototype.setMoneyPwdNotice = function() {
		if (!app.userTotalInfo.HasWithdrawalPassword) {
			this.zone.find('.money-pwd-notice').show();
		} else {
			this.zone.find('.money-pwd-notice').hide();
		}
	};

	Withdraw.prototype.getCenterWalletCash = function () {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
		};

		callback = function (data) {
			that.zone.find('.title .balance').text(data);
		};

		Service.get(opt, callback);
	};

	Withdraw.prototype.getUserBankList = function() {
		var i;
		var callback;
		var that = this;

		var opt  = {
			url: app.urls.getUserBankList,
			data: {}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data.length === 0) {
				that.zone.find('.content .row1 .title').addClass('go-bind-card');
				that.zone.find('.content .row1 .title').text('马上去绑定银行卡');
			} else {
				that.zone.find('.content .row1 .title').removeClass('go-bind-card');
				that.zone.find('.content .row1 .title').text('请选择提款银行卡');
			}

			that.zone.find('.user-banks').html('');

			for (i = 0; i < data.length; i++) {
				that.addCardItem(data[i], i);
			}

			that.userBanks = data;
		};

		Service.get(opt, callback);
	};

	Withdraw.prototype.resetDialog = function() {
		this.allPass = false;
		this.moneyInput.setValue('');
		this.passwordInput.setValue('');
	};

	Withdraw.prototype.submit = function() {
		var i;
		var index;
		var callback;
		var opt;
		var withdrawAmount;
		var bankAccountId;
		var password;
		var that           = this;
		var bankLi         = this.zone.find('.user-banks li.selected');

		if (bankLi.length < 1) {
			app.alert('请选择银行卡');
			return;
		} else {
			index = bankLi.attr('data-index');
		}

		withdrawAmount = this.moneyInput.getValue();
		bankAccountId  = this.userBanks[index].Id;
		password       = this.passwordInput.getValue();

		if (!withdrawAmount) {
			app.alert('请填写提款金额!');
			return;
		}

		if (!password) {
			app.alert('请填写提款密码!');
			return;
		}

		if (!this.moneyInput.isPass()) {
			app.alert('提款金额格式不对!');
			this.resetDialog();
			return;
		}

		if (!this.passwordInput.isPass()) {
			app.alert('取款密码格式不对!');
			this.resetDialog();
			return;
		}

		if (withdrawAmount < app.userTotalInfo.SingleMinWithdraw || withdrawAmount > app.userTotalInfo.SingleMaxWithdraw) {
			app.alert('单次提款额度最低：' + app.userTotalInfo.SingleMinWithdraw + '。最高：' + app.userTotalInfo.SingleMaxWithdraw);
			this.resetDialog();
			return;
		}

/*		if (withdrawAmount > app.userTotalInfo.Cash) {
			app.alert('余额不足!');
			this.resetDialog();
			return;
		}*/

		opt = {
			url: app.urls.withdraw,
			data: {
				BankAccountId: bankAccountId,
				Amount: withdrawAmount,
				WithdrawPwd: password
			}
		};

		callback = function (json) {
			that.resetDialog();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json.Success === true && !json.NeedInspecte) {
				app.alert('取款成功');
				app.refreshWallet();
			} else {
				app.showWithdrawInspectDialog({
					data: json,
					BankAccountId: bankAccountId,
					Amount: withdrawAmount,
					WithdrawPwd: password
				})
			}
		};

		Service.post(opt, callback);
	};
	
	Withdraw.prototype.bindEvents = function() {
		var row1Ul;
		var that = this;

		this.zone = $('.withdraw');

		row1Ul = this.zone.find('.content .row1 ul.user-banks');

		row1Ul.delegate('li','click',function() {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');
			// row1Ul.find('input[type="radio"]').attr('checked',false);
			// $(this).find('input[type="radio"]').attr('checked','checked');
		});

		this.zone.find('#withdraw-button').click(function () {
			if (that.button.isDisable()) {
				return;
			}

			that.submit();
			that.button.disable();

			var st = setTimeout(function () {
				that.button.enable();
				clearTimeout(st);
			}, 5000);
		});

		this.zone.find('.content .row1 .title').click(function () {
			if ($(this).hasClass('go-bind-card')) {
				app.personCenterRouter(2, 1);
			}
		});

        PubSub.subscribe('onCardBinded', function (msg, data) {
        	that.getUserBankList();
        });

		this.button.bindEvents();
		this.moneyInput.bindEvents();
		this.passwordInput.bindEvents();
	}

	window.Withdraw = Withdraw;
}());