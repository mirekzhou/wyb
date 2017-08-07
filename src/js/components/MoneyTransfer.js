(function () {
	function MoneyTransfer(opt) {
		this.opt  = opt;
		this.initDom();
	}

	MoneyTransfer.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'money-transfer-button',
			name: '确认转账',
			width: 128,
			height: 38,
			clickWaiting: 5000
		});

		this.moneyTransferInput = new Input({
			id: 'money-transfer-input',
			width: 210,
			height: 30,
			reg: app.moneyReg
		});

		this.selectFrom = new Select({
			id: 'money-transfer-select-from',
			width: 210
		});

		this.selectTo = new Select({
			id: 'money-transfer-select-to',
			width: 210
		});

		temp = 		'<div class="money-transfer grzx-money-action">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="text">转出：</div>' +

								this.selectFrom.getDom() +

								'<span class="refresh-icon refresh-from"></span>' +

								'<div class="from-balance">' +
									'<span class="from-balance-value"></span>' +
								'</div>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">转入：</div>' +

								this.selectTo.getDom() +

								'<span class="refresh-icon refresh-to"></span>' +

								'<div class="to-balance">' +
									'<span class="to-balance-value"></span>' +
								'</div>' +
							'</div>' +

							'<div class="row3">' +
								'<div class="text">金额：</div>' +
								this.moneyTransferInput.getDom() +
								'<div class="text unit">转入金额需≥10万</div>' +
							'</div>' +

							'<div class="row4">' +
								this.button.getDom() +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	MoneyTransfer.prototype.getDom = function() {
		return this.el;
	};

	MoneyTransfer.prototype.show = function() {
		var that = this;

		this.zone.show();
		this.checkUserSettings();

		if (!app.allApiData) {
			app.getAllPlatforms(function (data) {
				that.setSelects(data);
			});
		} else {
			if (!this.selectData) {
				this.setSelects(app.allApiData);
			}
		}
	};

	MoneyTransfer.prototype.hide = function() {
		this.zone.hide();
		this.reset();
	};

	MoneyTransfer.prototype.reset = function() {
		this.moneyTransferInput.setValue('');
	};

	MoneyTransfer.prototype.checkUserSettings = function() {
		if (!app.checkUserTrueName()) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			}, function () {
				app.personCenterRouter(2, 0);
			});
			return;
		}
	};

	MoneyTransfer.prototype.setSelects = function(data) {
		var i;
		var temp = '';

		this.setSelectData(data);

		for (i = 0; i < this.selectData.length; i++) {
			temp += '<option data-value="' + this.selectData[i].id + '">' +
						this.selectData[i].name +
					'</option>';
		}

		this.selectFrom.setOptions(temp);
		this.selectTo.setOptions(temp);
		this.selectToValue = this.selectToValue || 'PT';
		this.selectTo.setValue(this.selectToValue);
		this.selectsLoaded = true;
		this.getCenterWalletCash('from');
		this.getPlatformBalance(this.selectToValue, 'to');
	};

	MoneyTransfer.prototype.setSelectData = function (data) {
		var i;

		this.selectData = [{
			id: '0',
			name: '主账户'
		}];

		for (i = 0; i < data.length; i++) {
			temp = {
				id: data[i].GamePlatform,
				name: data[i].GameName
			}

			this.selectData.push(temp);
		}
	};

	MoneyTransfer.prototype.getPlatformBalance = function (platform, type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getPlatformBalance,
			data: {
				gamePlatform: platform
			}
		};

		callback = function (data) {
			if (type === 'from') {
				that.zone.find('.from-balance-value').text(data);
			} else if (type === 'to') {
				that.zone.find('.to-balance-value').text(data);
			} else {
				that.zone.find('.from-balance-value').text(data);
				that.zone.find('.to-balance-value').text(data);
			}

			that.zone.find('.refresh-' + type).removeClass('rotate');
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.getCenterWalletCash = function (type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
		};

		callback = function (data) {
			if (type === 'from') {
				that.zone.find('.from-balance-value').text(data);
			} else if (type === 'to') {
				that.zone.find('.to-balance-value').text(data);
			} else {
				that.zone.find('.from-balance-value').text(data);
				that.zone.find('.to-balance-value').text(data);
			}

			that.zone.find('.refresh-' + type).removeClass('rotate');
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.submit = function() {
		var from = this.selectFrom.getValue();
		var to   = this.selectTo.getValue();

		if (!this.moneyTransferInput.getValue()) {
			app.alert('请填写转账金额!');
			return;
		}

		if (!this.moneyTransferInput.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (from == to) {
			app.alert("同账户不允许互转");
			return;
		}

		if (from != '0' && to != '0') {
			app.alert("游戏平台账户不允许互转");
			return;
		}

		if (from == '0') {
			this.transferToPlatform();
		} else {
			this.transferToAccount();
		}
	};

	MoneyTransfer.prototype.transferToPlatform = function() {
		var i;
		var callback;
		var that     = this;
		var amount   = $.trim(this.moneyTransferInput.getValue());
		var to       = this.selectTo.getValue();
		var opt      = {
			url: app.urls.transferToPlatform,
			data: {
				UserName: app.userTotalInfo.UserName,
				Amount: amount,
				GamePlatform: to
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data === true) {
				app.personCenterDialog.getPlatformBalance(to);
				that.getPlatformBalance(to, 'to');
				that.getCenterWalletCash('from');
				app.refreshWallet();
				app.toast('转账成功');
				that.reset();
			} else {
				app.alert('转账失败');
			}
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.transferToAccount = function() {
		var i;
		var callback;
		var that     = this;
		var amount   = $.trim(this.moneyTransferInput.getValue());
		var from     = this.selectFrom.getValue();
		var opt      = {
			url: app.urls.transferToAccount,
			data: {
				UserName: app.userTotalInfo.UserName,
				Amount: amount,
				GamePlatform: from
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data === true) {
				app.personCenterDialog.getPlatformBalance(from);
				that.getPlatformBalance(from, 'from');
				that.getCenterWalletCash('to');
				app.refreshWallet();
				app.toast('转账成功');
				that.reset();
			} else {
				app.alert('转账失败');
			}
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.checkInputPass = function () {
		if (this.moneyTransferInput.isPass()) {
			this.button.enable();
		} else {
			this.button.disable();
		}
	};

	MoneyTransfer.prototype.resetSelect = function(isSCM) {
		var textUnit = this.zone.find('.row3 .unit');
		this.moneyTransferInput.opt.reg = app.moneyReg2;
		textUnit.hide();
		if (!isSCM) {
			this.zone.find('#money-transfer-input input').unbind('input', this.SCMInput)
		}
	};

	MoneyTransfer.prototype.SCMInput = function() {
		var inputStr;
		if ($(this).val().indexOf('.') > -1) {
			inputStr = $(this).val();
			inputStr = inputStr.substring(0, inputStr.length - 1);
			var that = this;
			setTimeout(function() {
				$(that).val(inputStr)
			}, 100)
		}
		isSCM = true;
	};

	MoneyTransfer.prototype.bindEvents = function() {
		var value;
		var value1;
		var value2;
		var isSCM;
		var that = this;


		this.zone = $('.money-transfer');

		this.button.bindCallback(this.submit.bind(this));

		this.zone.find('#money-transfer-select-from select').change(function() {
			value1 = that.selectFrom.getValue();
			value2 = that.selectTo.getValue();
			that.resetSelect(isSCM);

			if (value1 != 0) {
				that.selectTo.setValue(0);
				that.getCenterWalletCash('to');
			}

			if (value1 == 0 && value2 == 0) {
				that.selectTo.setValue('PT');
				that.getPlatformBalance('to');
			}

			if (value1 != 0) {
				that.getPlatformBalance(value1, 'from');
			} else {
				that.getCenterWalletCash('from');
			}
		});

		this.zone.find('#money-transfer-select-to select').change(function() {
			value1 = that.selectFrom.getValue();
			value2 = that.selectTo.getValue();
			that.resetSelect(isSCM);

			if (value2 != 0) {
				that.selectFrom.setValue(0);
				that.getCenterWalletCash('from');
			}

			if (value1 == 0 && value2 == 0) {
				that.selectFrom.setValue('PT');
				that.getPlatformBalance('from');
			}

			if (value2 != 0) {
				that.getPlatformBalance(value2, 'to');
			} else {
				that.getCenterWalletCash('to');
			}


			if (value2 == 'SCM') {
				that.zone.find('.row3 .unit').css('display', 'inline-block');
				that.moneyTransferInput.opt.reg = app.moneyReg3;
				that.zone.find('#money-transfer-input input').bind('input', that.SCMInput);
			} else {
				isSCM = false;
			}
		});

		this.zone.find('.refresh-from').click(function() {
			$(this).addClass('rotate');
			$(this).next('.from-balance').find('.from-balance-value').text('');

			value1 = that.selectFrom.getValue();

			if (value1 == 0) {
				that.getCenterWalletCash('from');
			} else {
				that.getPlatformBalance(value1, 'from');
			}
		});

		this.zone.find('.refresh-to').click(function() {
			$(this).addClass('rotate');
			$(this).next('.to-balance').find('.to-balance-value').text('');

			value2 = that.selectTo.getValue();

			if (value2 == 0) {
				that.getCenterWalletCash('to');
			} else {
				that.getPlatformBalance(value2, 'to');
			}
		});

		PubSub.subscribe('onPlatformTransfer', function(msg, data) {
			if (data && data.platform) {
				if (that.selectsLoaded) {
					that.selectFrom.setValue('0');
					that.selectTo.setValue(data.platform);
					that.getCenterWalletCash('from');
					that.getPlatformBalance(data.platform, 'to');
				} else {
					that.selectToValue = data.platform;
				}
			}
		});



		this.button.bindEvents();
		this.moneyTransferInput.bindEvents(this.checkInputPass.bind(this));
		this.selectFrom.bindEvents();
		this.selectTo.bindEvents();
	}

	window.MoneyTransfer = MoneyTransfer;
}());