(function(){
	function SetEmailDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetEmailDialog.prototype = new IMDialog();

	SetEmailDialog.prototype.initDom = function(){
		this.validateEmailInput = new Input({
			id: 'sed-validate-email-input',
			width: 205,
			height: 35,
			reg: app.emailReg
		});

		this.validateGoModifyButton = new Button({
			id: 'sed-validate-go-modify-button',
			name: '修改邮箱',
			width: 100,
			height: 35
		});

		this.validateVerifyInput = new Input({
			id: 'sed-validate-verify-input',
			width: 205,
			height: 35,
			reg: app.verifyReg
		});

		this.validateVerifyCodeButton = new Button({
			id: 'sed-validate-verify-code-button',
			name: '获取验证码',
			width: 100,
			height: 35
		});

		this.validateOkButton = new Button({
			id: 'sed-validate-ok-button',
			name: '确定',
			width: 120,
			height: 35
		});

		this.validateCancelButton = new Button({
			id: 'sed-validate-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		this.modifyEmailInput = new Input({
			id: 'sed-modify-email-input',
			width: 330,
			height: 35,
			reg: app.emailReg
		});

		this.modifyOkButton = new Button({
			id: 'sed-modify-ok-button',
			name: '修改',
			width: 120,
			height: 35
		});

		this.modifyCancelButton = new Button({
			id: 'sed-modify-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		var temp = '<div class="set-email-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title"></div>' +

								'<div class="content">' +
									'<div class="cont validate-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'电子邮箱' +
													'</td>' +
													'<td>' +
														this.validateEmailInput.getDom() +
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
														'新邮箱' +
													'</td>' +
													'<td>' +
														this.modifyEmailInput.getDom() +
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

	SetEmailDialog.prototype.getDom = function() {
		return this.el;
	};

	SetEmailDialog.prototype.show = function(opt) {
		this.showOpt  = opt;
		this.bindFlag = false;  //是否绑定成功的标识。
		this.resetDialog();
		this.showOverlay();
	};

	SetEmailDialog.prototype.hide = function() {
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

	SetEmailDialog.prototype.resetDialog = function() {
		this.validateEmailInput.setValue('');
		this.validateVerifyInput.setValue('');
		this.validateVerifyCodeButton.setName('获取验证码');
		this.showValidateContent();
	};

	SetEmailDialog.prototype.showValidateContent = function() {
		this.validateEmailInput.setValue('');
		this.zone.find('.dialog').children('.title').text('验证电子邮箱');
		this.zone.find('.cont').hide();
		this.zone.find('.validate-content').show();
	};

	SetEmailDialog.prototype.showModifyContent = function() {
		this.zone.find('.dialog').children('.title').text('修改电子邮箱');
		this.zone.find('.cont').hide();
		this.zone.find('.modify-content').show();
	};

	SetEmailDialog.prototype.getSiteUrl = function () {
	    return window.location.protocol + "//" + window.location.host + "/eveb_user/emailvalidate.html";
	};

	SetEmailDialog.prototype.getVerifyCode = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.validateEmailInput.isPass()) {
			app.alert('请先填写邮箱地址。');
			return;
		}

		that.validateVerifyCodeButton.disable();

		/*
		** 第一步： 修改邮箱地址
		*/
		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Email: this.validateEmailInput.getValue(),
				TrueName: app.userTotalInfo.TrueName
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
				app.alert('修改失败!');
				that.validateVerifyCodeButton.enable();
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.getVerifyCodeStep2 = function() {
		var count;
		var opt;
		var email;
		var callback;
		var that = this;
		var validateUrl = this.getSiteUrl();

		opt = {
			url: app.urls.sendEmailValidateCode,
			data: {
				Email: this.validateEmailInput.getValue(),
				ValidateUrl: validateUrl,
				OnlyCode: true
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

	SetEmailDialog.prototype.commitValidate = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.validateEmailInput.isPass() || !this.validateVerifyInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.validateEmail,
			data: {
				Id: app.userTotalInfo.Id,
				Email: this.validateEmailInput.getValue(),
				EmailValidateCode: this.validateVerifyInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('验证成功!');
			} else {
				app.alert('验证失败!');
			}

			PubSub.publish('onRefreshSecurityCenter', {});
			PubSub.publish('onSecurityLevelChanged',{});
			that.hide();
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.commitModify = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.modifyEmailInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Email: this.modifyEmailInput.getValue(),
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

	SetEmailDialog.prototype.commit = function () {
		var opt;
		var callback;
		var that  = this;

		if (!this.validateEmailInput.isPass() || !this.validateVerifyInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.validateEmail,
			data: {
				Id: app.userTotalInfo.Id,
				Email: this.validateEmailInput.getValue(),
				EmailValidateCode: this.validateVerifyInput.getValue()
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

	SetEmailDialog.prototype.bindEvents = function() {
		var steps;
		var contentName;
		var that = this;

		this.zone = $('.set-email-dialog');

		this.zone.find('#sed-validate-go-modify-button').click(function () {
			that.showModifyContent();
		});

		this.zone.find('#sed-validate-verify-code-button').click(function () {
			if (that.validateVerifyCodeButton.isDisable()) {
				return;
			}

			that.getVerifyCode();
		});

		this.zone.find('#sed-validate-ok-button').click(function () {
			that.commit();
		});

		this.zone.find('#sed-validate-cancel-button').click(function () {
			that.hide();
		});


		this.zone.find('#sed-modify-ok-button').click(function () {
			that.commitModify();
		});

		this.zone.find('#sed-modify-cancel-button').click(function () {
			that.hide();
		});

		this.validateEmailInput.bindEvents();
		this.validateGoModifyButton.bindEvents();
		this.validateVerifyInput.bindEvents();
		this.validateVerifyCodeButton.bindEvents();
		this.validateOkButton.bindEvents();
		this.validateCancelButton.bindEvents();

		this.modifyEmailInput.bindEvents();
		this.modifyOkButton.bindEvents();
		this.modifyCancelButton.bindEvents();

        this.bindOverlayEvents();
	};

	window.SetEmailDialog = SetEmailDialog;
}());