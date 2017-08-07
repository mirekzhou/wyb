$(function() {
	function CardBindDialog(opt) {
		IMDialog.call(this, opt || {});

		this.firstTime = true;
		this.initDom();
	}

	CardBindDialog.prototype = new IMDialog();

	CardBindDialog.prototype.initDom = function() {
		this.selectBank = new Select({
			id: 'card-bind-bank',
			width: 450,
			height: 40,
			data:[
				{
					'text': '请选择您的开户银行',
					'value': '-1'
				}
			]
		});

		this.selectProvince = new Select({
			id: 'card-bind-province',
			width: 100,
			height: 36,
			data:[
				{
					'text': '省',
					'value': '-1'
				}
			]
		});

		this.selectCity = new Select({
			id: 'card-bind-city',
			width: 100,
			height: 36,
			data:[
				{
					'text': '市',
					'value': '-1'
				}
			]
		});

/*		this.moneyPwdInput = new Input({
			id: 'cbd-money-pwd-input',
			width: 450,
			height: 40,
			placeholder: '请输入您的资金密码',
			type: 'password',
			reg: app.moneyPasswordReg
		});*/

		this.branchBankInput = new Input({
			id: 'cbd-branch-bank-input',
			width: 450,
			height: 40,
			placeholder: '请填写您的支行名称',
			reg: app.chineseReg
		});

		this.cardNumberInput = new Input({
			id: 'cbd-card-number-input',
			width: 450,
			height: 40,
			placeholder: '请输入您的银行卡卡号',
			reg: app.bankCardReg
		});

		this.cardOwnerInput = new Input({
			id: 'cbd-card-owner-input',
			width: 450,
			height: 40,
			placeholder: '请输入开户人姓名',
			reg: app.chineseNameReg,
			disabled: true
		});

		var temp = '<div class="card-bind-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">绑定银行卡</div>' +

								'<div class="row">' +
									this.cardOwnerInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.selectBank.getDom() +
								'</div>' +

								'<div class="row">' +
									this.selectProvince.getDom() +
									this.selectCity.getDom() +
									'<span>* 请选择您的开户银行所在地</span>' +
								'</div>' +

/*								'<div class="row">' +
									this.moneyPwdInput.getDom() +
								'</div>' +*/

								'<div class="row">' +
									this.branchBankInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.cardNumberInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>'+

					'<div class="overlay overlay8"></div>';

		this.el = temp;
	};

	CardBindDialog.prototype.getDom = function(){
		return this.el;
	};

	CardBindDialog.prototype.show = function(opt) {
		this.showOpt  = opt;
		this.bindFlag = false;  //是否绑定成功的标识。

		this.showOverlay();
		this.setUserInfo();
		
		if (this.firstTime) {
			this.loader1.play();
			this.getBankList();
			this.getProvinceList();
			this.firstTime = false;
		}

		if (!this.firstTime && (!this.request1 || !this.request2)) {
			this.loader1.play();
			this.getBankList();
			this.getProvinceList();
		}
	};

	CardBindDialog.prototype.hide = function() {
		this.hideOverlay();
		this.resetDialog();

		if (this.showOpt) {
			if (this.bindFlag) {
				if (this.showOpt.successHideCallback &&  typeof this.showOpt.successHideCallback === 'function') {
					this.showOpt.successHideCallback();
				}
			} else {
				if (this.showOpt.failedHideCallback &&  typeof this.showOpt.failedHideCallback === 'function') {
					this.showOpt.failedHideCallback();
				}
			}
		}
	};

	CardBindDialog.prototype.setUserInfo = function() {
		var data = app.userTotalInfo;
		var name = this.formatUserName(data.TrueName);

		this.cardOwnerInput.setValue(name);
	};

	CardBindDialog.prototype.formatUserName = function(name) {
		var nameLen   =  name.length;
		var tailname  =  name[nameLen - 1];
		var nameStart =  '';

		for (i = 0; i < nameLen - 1; i++) {
			nameStart += '*';
		}

		return nameStart + tailname;
	};

    CardBindDialog.prototype.resetDialog = function() {
		//this.moneyPwdInput.setValue('');
		this.branchBankInput.setValue('');
		this.cardNumberInput.setValue('');
		this.zone.find('.ok').removeClass('active');
		this.allPass = false;
    };

    CardBindDialog.prototype.checkRequestStatus = function() {
    	if (this.request1 && this.request2) {
    		this.loader1.stop();
    	}
    };

	CardBindDialog.prototype.checkInputPass = function () {
		if (this.branchBankInput.isPass() &&
			this.cardNumberInput.isPass()) {

			this.zone.find('.ok').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.ok').removeClass('active');
			this.allPass = false;
		}

		return this.allPass;
	};

    CardBindDialog.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	CardBindDialog.prototype.createBankUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						'<img src="' + app.imageServer + data[i].LogoImg + '" />' +
						'<span class="name">' + data[i].BankName + '</span>' +
					'</option>';
		}

		this.selectBank.setOptions(temp);
	};

	CardBindDialog.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	CardBindDialog.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	CardBindDialog.prototype.getBankList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getBankList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createBankUl(data);
			that.request1 = true;
			that.checkRequestStatus();
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.getProvinceList = function() {
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

			that.createProvinceUl(data);
			that.getCityList(data[0].Id);
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.getCityList = function(provinceId) {
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
			that.request2 = true;
			that.checkRequestStatus();
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.bindCard = function() {
		var callback;
		var opt;
		var that       = this;
		var bankId     = this.selectBank.getValue();
		var provinceId = this.selectProvince.getText();
		var cityId     = this.selectCity.getText();
		//var moneyPwd   = this.moneyPwdInput.getValue();
		var branchBank = this.branchBankInput.getValue();
		var bankNumber = this.cardNumberInput.getValue();
		var owner      = app.userTotalInfo.TrueName;

		if (!this.checkInputPass()) {
			app.alert('请按要求填写相关信息!');
			this.resetVerifyCode();
			return;
		}

		opt = {
			url: app.urls.addUserBank,
			data: {
				BankId: bankId,
				Province: provinceId,
				City: cityId,
				BranchName: branchBank,
				AccountNo: bankNumber,
				//WithdrawalPwd: moneyPwd,
				AccountName: owner
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				app.alert(data.Message);
				that.hide();
				return;
			}

			app.alert('绑定成功');
			that.bindFlag = true;
			PubSub.publish('onCardBinded', {});
			PubSub.publish('onSecurityLevelChanged', {});
			that.hide();
		};

		Service.post(opt, callback);
	};

	CardBindDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.card-bind-content');

		this.zone.find('.ok').click(function() {
			if (!$(this).hasClass('active')) {
				return;
			}

			that.bindCard();
		});

		this.zone.find('.cancel').click(function() {
			that.hide();
		});

		this.zone.find('#card-bind-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.selectBank.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
		//this.moneyPwdInput.bindEvents(this.checkInputPass.bind(this));
		this.branchBankInput.bindEvents(this.checkInputPass.bind(this));
		this.cardNumberInput.bindEvents(this.checkInputPass.bind(this));
		this.cardOwnerInput.bindEvents(this.checkInputPass.bind(this));
        this.bindOverlayEvents();
        this.createLoader();
	};

	window.CardBindDialog = CardBindDialog;

}());