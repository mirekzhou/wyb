(function() {
	function SetPhonenumberDialog(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetPhonenumberDialog.prototype = new IMDialog();

	SetPhonenumberDialog.prototype.initDom = function(){
		this.validatePhoneInput = new Input({
			id: 'spd-validate-phone-input',
			width: 205,
			height: 35,
			reg: app.phoneReg
		});

		this.validateGoModifyButton = new Button({
			id: 'spd-validate-go-modify-button',
			name: '修改号码',
			width: 100,
			height: 35
		});

		this.validateVerifyInput = new Input({
			id: 'spd-validate-verify-input',
			width: 205,
			height: 35,
			reg: app.verifyReg
		});

		this.validateVerifyCodeButton = new Button({
			id: 'spd-validate-verify-code-button',
			name: '获取验证码',
			width: 100,
			height: 35
		});

		this.validateOkButton = new Button({
			id: 'spd-validate-ok-button',
			name: '确定',
			width: 120,
			height: 35
		});

		this.validateCancelButton = new Button({
			id: 'spd-validate-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		this.modifyPhoneInput = new Input({
			id: 'spd-modify-phone-input',
			width: 330,
			height: 35,
			reg: app.phoneReg
		});

		this.modifyOkButton = new Button({
			id: 'spd-modify-ok-button',
			name: '修改',
			width: 120,
			height: 35
		});

		this.modifyCancelButton = new Button({
			id: 'spd-modify-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		var temp = '<div class="set-phonenumber-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title"></div>' +

								'<div class="content">' +
									'<div class="cont validate-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'手机号码' +
													'</td>' +
													'<td>' +
														this.validatePhoneInput.getDom() +
														//this.validateGoModifyButton.getDom() +
													'</td>' +
												'</tr>' +

												'<tr>' +
													'<td class="text">' +
														'验证码：' +
													'</td>' +
													'<td>' +
														this.validateVerifyInput.getDom() +
														this.validateVerifyCodeButton.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.validateOkButton.getDom() +
											this.validateCancelButton.getDom() +
										'</div>' +
									'</div>' +

									'<div class="cont modify-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'新号码' +
													'</td>' +
													'<td>' +
														this.modifyPhoneInput.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.modifyOkButton.getDom() +
											this.modifyCancelButton.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	SetPhonenumberDialog.prototype.getDom = function() {
		return this.el;
	};

	SetPhonenumberDialog.prototype.show = function(opt) {
		this.showOpt  = opt;
		this.bindFlag = false;  //是否绑定成功的标识。
		this.resetDialog();
		this.showOverlay();
	};

	SetPhonenumberDialog.prototype.hide = function() {
		clearInterval(this.tm);
		this.hideOverlay();
		this.validateVerifyCodeButton.enable();

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

	SetPhonenumberDialog.prototype.resetDialog = function() {
		this.validatePhoneInput.setValue('');
		this.validateVerifyInput.setValue('');
		this.modifyPhoneInput.setValue('');
		this.validateVerifyCodeButton.setName('获取验证码');
		this.showValidateContent();
	};

	SetPhonenumberDialog.prototype.showValidateContent = function() {
		this.validatePhoneInput.setValue('');
		this.zone.find('.dialog').children('.title').text('验证手机号码');
		this.zone.find('.cont').hide();
		this.zone.find('.validate-content').show();
	};

	SetPhonenumberDialog.prototype.showModifyContent = function() {
		this.zone.find('.dialog').children('.title').text('修改手机号码');
		this.zone.find('.cont').hide();
		this.zone.find('.modify-content').show();
	};

	SetPhonenumberDialog.prototype.getVerifyCode = function () {
		var opt;
		var callback;
		var that  = this;

		if (!this.validatePhoneInput.isPass()) {
			app.alert('请先填写手机号码。');
			return;
		}

		that.validateVerifyCodeButton.disable();

		/*
		** 第一步： 修改手机号码
		*/
		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Phone: this.validatePhoneInput.getValue(),
				TrueName: app.userTotalInfo.TrueName     //不填真实姓名是没法修改手机号码的
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				that.validateVerifyCodeButton.enable();
				return;
			}

			if (json === true) {
				that.getVerifyCodeStep2();
			} else {
				app.alert('操作失败!');
				that.validateVerifyCodeButton.enable();
			}
		};

		Service.post(opt, callback);
	};

	SetPhonenumberDialog.prototype.getVerifyCodeStep2 = function() {
		var count;
		var opt;
		var phone;
		var callback;
		var that = this;
		var phone = this.validatePhoneInput.getValue();

		opt = {
			url: app.urls.sendPhoneValidateCode,
			data: {
				Phone: phone,
				Id: app.userTotalInfo.Id
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				that.validateVerifyCodeButton.enable();
				return;
			}

			if (data === true) {
				that.validateVerifyCodeButton.setName('验证码已发送');

				count = 60;
				that.tm = setInterval(function () {
					count--;

					if (count > 0) {
						that.validateVerifyCodeButton.setName(count + 's');
					} else {
						that.validateVerifyCodeButton.setName('获取验证码');
						that.validateVerifyCodeButton.enable();
						clearInterval(that.tm);
					}
				}, 1000);
			} else {
				app.alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	SetPhonenumberDialog.prototype.commit = function () {
		var opt;
		var callback;
		var that = this;

		if (!this.validatePhoneInput.isPass() || !this.validateVerifyInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.validatePhone,
			data: {
				Id: app.userTotalInfo.Id,
				Phone: this.validatePhoneInput.getValue(),
				PhoneValidateCode: this.validateVerifyInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('验证成功!');
				that.bindFlag = true;
				PubSub.publish('onRefreshSecurityCenter', {});
				PubSub.publish('onSecurityLevelChanged',{});
				that.hide();
			} else {
				app.alert('验证失败!');
			}
		};

		Service.post(opt, callback);
	};

/*	SetPhonenumberDialog.prototype.commitModify = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.modifyPhoneInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Phone: this.modifyPhoneInput.getValue(),
				TrueName: app.userTotalInfo.TrueName
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('修改成功!');
			} else {
				app.alert('修改失败!');
			}

			PubSub.publish('onRefreshSecurityCenter', {});
			PubSub.publish('onSecurityLevelChanged',{});
			that.hide();
		};

		Service.post(opt, callback);
	};
*/
	SetPhonenumberDialog.prototype.bindEvents = function() {
		var steps;
		var contentName;
		var that = this;

		this.zone = $('.set-phonenumber-dialog');

		this.zone.find('#spd-validate-go-modify-button').click(function () {
			that.showModifyContent();
		});

		this.zone.find('#spd-validate-verify-code-button').click(function () {
			if (that.validateVerifyCodeButton.isDisable()) {
				return;
			}

			that.getVerifyCode();
		});

		this.zone.find('#spd-validate-ok-button').click(function () {
			that.commit();
		});

		this.zone.find('#spd-validate-cancel-button').click(function () {
			that.hide();
		});


		this.zone.find('#spd-modify-ok-button').click(function () {
			that.commitModify();
		});

		this.zone.find('#spd-modify-cancel-button').click(function () {
			that.hide();
		});

		this.validatePhoneInput.bindEvents();
		this.validateGoModifyButton.bindEvents();
		this.validateVerifyInput.bindEvents();
		this.validateVerifyCodeButton.bindEvents();
		this.validateOkButton.bindEvents();
		this.validateCancelButton.bindEvents();

		this.modifyPhoneInput.bindEvents();
		this.modifyOkButton.bindEvents();
		this.modifyCancelButton.bindEvents();

        this.bindOverlayEvents();
	};

	window.SetPhonenumberDialog = SetPhonenumberDialog;
}());