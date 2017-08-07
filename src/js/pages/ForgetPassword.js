(function () {
	function ForgetPassword () {
		this.initDom();
	}
	
	ForgetPassword.prototype.initDom = function () {
		var temp;

		/*
		**   第一步：用户名验证次用户是否存在 (使用接口: api/User/GetByUserName)
		*/
		this.usernameInput = new Input({
			id: 'forget-password-step1-input1',
			width: 330,
			height: 40,
			placeholder: '请输入您的用户名',
			reg: app.usernameReg
		});

		this.verifyInput = new Input({
			id: 'forget-password-step1-input2',
			width: 245,
			height: 40,
			placeholder: '请输入右侧验证码',
			reg: app.verifyReg
		});

		this.step1Next = new Button({
			id: 'forget-password-step1-next',
			name: '下一步',
			width: 330,
			height: 40
		});

		/*
		**   第二步：选择验证方式，发送验证码(使用接口：api/User/GetForgetPwdValidateCode)
		*/
		this.step2Next = new Button({
			id: 'forget-password-step2-next',
			name: '发送验证码',
			width: 150,
			height: 40
		});

		this.step2Return = new Button({
			id: 'forget-password-step2-return',
			name: '重填用户名',
			width: 150,
			height: 40
		});


		/*
		**   第三步：填写验证码，新密码，已经确认密码 (使用接口：api/User/ChangePasswordByForget)
		*/
		this.verifyCodeInput = new Input({
			id: 'forget-verify-code',
			width: 330,
			height: 40,
			placeholder: '请输入验证码',
			reg: app.verifyReg
		});

		this.newPwdInput = new Input({
			id: 'forget-new-password',
			width: 330,
			height: 40,
			placeholder: '请输入新密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.confirmPwdInput = new Input({
			id: 'forget-comfirm-password',
			width: 330,
			height: 40,
			placeholder: '请再次输入新密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.updatePwd = new Button({
			id: 'forget-update-pwd',
			name: '确认修改',
			width: 330,
			height: 40
		});

		this.loginNow = new Button({
			id: 'forget-password-login-now',
			name: '立即登录',
			width: 200,
			height: 40
		});

		temp =		'<div class="page forget-password">' +
						'<div class="wrapper">' +
							'<ul class="title">' +
								'<li class="active">' +
									'<span class="number">1</span>' +
									'<span class="text">输入用户名</span>' +
									'<span class="arrow">&gt;</span>' +
								'</li>' +

								'<li>' +
									'<span class="number">2</span>' +
									'<span class="text">选择找回密码方式</span>' +
									'<span class="arrow">&gt;</span>' +
								'</li>' +

								'<li>' +
									'<span class="number">3</span>' +
									'<span class="text">重置密码</span>' +
									'<span class="arrow">&gt;</span>' +
								'</li>' +

								'<li>' +
									'<span class="number">4</span>' +
									'<span class="text">完成</span>' +
								'</li>' +
							'</ul>' +

							'<div class="content">' +
								'<div class="step step1">' +
									'<div class="row1">' +
										'<span class="text">用户名：</span>' +
										this.usernameInput.getDom() +
									'</div>' +

									'<div class="row2">' +
										'<span class="text">验证码：</span>' +
										this.verifyInput.getDom() +
										'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'</div>' +

									'<div class="row3">' +
										this.step1Next.getDom() +
									'</div>' +
								'</div>' +

								'<div class="step step2">' +
									'<div class="row1">' +
										'<span class="text">您正在找回登录密码的账号是：</span>' +
										'<span class="value username"></span>' +
										'<span class="text">。请选择您准备找回登录密码的方式</span>' +
									'</div>' +

									'<div class="row2">' +
										'<ul>' +
											'<li data-validatetype="Email">' +
												'<div class="info-zone">' +
													'<span class="fp-mailbox-icon left"></span>' +
													'<span class="text left">通过邮箱找回登录密码</span>' +
													'<span class="text right not-bind">(未绑定，不可用)</span>' +
													'<div class="clear"></div>' +
												'</div>' +

												'<div class="verify-zone">' +
													'<div class="line1">' +
														'<span class="text">您的注册邮箱为:</span>' +
														'<span class="text email"></span>' +
													'</div>' +
												'</div>' +
											'</li>' +

											'<li data-validatetype="Mobile">' +
												'<div class="info-zone">' +
													'<span class="fp-phone-icon left"></span>' +
													'<span class="text left">通过手机找回登录密码</span>' +
													'<span class="text right not-bind">(未绑定，不可用)</span>' +
													'<div class="clear"></div>' +
												'</div>' +

												'<div class="verify-zone">' +
													'<div class="line1">' +
														'<span class="text">您的注册手机号为:</span>' +
														'<span class="text phone"></span>' +
													'</div>' +
												'</div>' +
											'</li>' +
										'</ul>' +

										'<div class="button-zone">' +
											this.step2Next.getDom() +
											this.step2Return.getDom() +
										'</div>' +
									'</div>' +

									'<div class="row3">' +
										'<span>上面的方式都不可用？您还可以通过</span>' +
										'<span class="contactcs">在线客服</span>' +
										'<span>进行人工申诉找回登录密码。</span>' +
									'</div>' +
								'</div>' +

								'<div class="step step3">' +
									'<div class="row2">' +
										'<span class="text">验证码</span>' +
										this.verifyCodeInput.getDom() +
									'</div>' +

									'<div class="row3">' +
										'<span class="text">新密码</span>' +
										this.newPwdInput.getDom() +
									'</div>' +

									'<div class="row4">' +
										'<span class="text">新密码</span>' +
										this.confirmPwdInput.getDom() +
									'</div>' +

									'<div class="row5">' +
										this.updatePwd.getDom() +
									'</div>' +
								'</div>' +

								'<div class="step step4">' +
									'<div class="row1">' +
										'<span class="text">恭喜您，密码重置成功!</span>' +
									'</div>' +

									'<div class="row2">' +
										this.loginNow.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	ForgetPassword.prototype.getDom = function () {
		return this.el;
	};

	ForgetPassword.prototype.show = function () {
		this.reset();
		this.zone.show();
	};

	ForgetPassword.prototype.hide = function () {
		this.zone.hide();
	};

	ForgetPassword.prototype.reset = function () {
		this.zone.find('.step2 .row2 ul li').show();
		this.goToStep1();
		this.verifyInput.setValue('');
	};

    ForgetPassword.prototype.createLoader = function() {
        var wrapper = this.zone.find('.content')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	ForgetPassword.prototype.goToStep1 = function () {
		var titleUl = this.zone.find('ul.title');

		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(0)').addClass('active');

		this.zone.find('.step').hide();
		this.zone.find('.step1').show();

		this.usernameInput.setValue('');
		this.verifyInput.setValue('');
	};

	ForgetPassword.prototype.goToStep2 = function () {
		var titleUl = this.zone.find('ul.title');

		this.zone.find('.step').hide();
		this.zone.find('.step2').show();
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(1)').addClass('active');

		this.zone.find('.step2 .email').text(this.userinfo.Email + (this.userinfo.EmailValidateStatus?'(已绑定)':'(未绑定)'));
		this.zone.find('.step2 .phone').text(this.userinfo.Phone + (this.userinfo.PhoneValidateStatus?'(已绑定)':'(未绑定)'));
		this.zone.find('.step2 .row1 .username').text(this.userinfo.UserName);
		this.zone.find('.step2 .row2 ul li').removeClass('active');
		this.zone.find('.step2 .row2 ul li').removeClass('enable');

/*		if (app.checkUserPhone() && checkUserEmail()) {
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('active');
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('enable');
			this.zone.find('.step2 .row2 ul li:nth-child(2)').addClass('enable');
			this.step2Next.active();
			this.step2Return.active();
		} else if (!app.checkUserPhone() && checkUserEmail()) {
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('active');
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('enable');
			this.step2Next.active();
			this.step2Return.active();
		} else if (app.checkUserPhone() && !checkUserEmail()) {
			this.zone.find('.step2 .row2 ul li:nth-child(2)').addClass('active');
			this.zone.find('.step2 .row2 ul li:nth-child(2)').addClass('enable');
			this.step2Next.active();
			this.step2Return.active();
		} else {
			this.step2Next.deactive();
			this.step2Return.active();
		}*/

		if (this.userinfo.PhoneValidateStatus && !this.userinfo.EmailValidateStatus) {
			this.zone.find('.step2 .row2 ul li:nth-child(2)').addClass('active');
			this.zone.find('.step2 .row2 ul li:nth-child(2)').addClass('enable');
			this.step2Next.active();
			this.step2Return.active();
		} else if (!this.userinfo.PhoneValidateStatus && this.userinfo.EmailValidateStatus) {
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('active');
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('enable');
			this.step2Next.active();
			this.step2Return.active();
		} else if (this.userinfo.PhoneValidateStatus && this.userinfo.EmailValidateStatus) {
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('active');
			this.zone.find('.step2 .row2 ul li:nth-child(1)').addClass('enable');
			this.zone.find('.step2 .row2 ul li:nth-child(2)').addClass('enable');
			this.step2Next.active();
			this.step2Return.active();
		} else {
			this.step2Next.deactive();
			this.step2Return.active();
		}
	};

	ForgetPassword.prototype.goToStep3 = function () {
		var titleUl = this.zone.find('ul.title');
		this.zone.find('.step').hide();
		this.zone.find('.step3').show();
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(2)').addClass('active');
	};

	ForgetPassword.prototype.goToStep4 = function () {
		var titleUl = this.zone.find('ul.title');
		this.zone.find('.step').hide();
		this.zone.find('.step4').show()
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(3)').addClass('active');
	};

	ForgetPassword.prototype.checkStep1 = function () {
		var callback;
		var opt;
		var userName;
		var that = this;

		this.loader1.play();

		opt =  {
			url: app.urls.checkVerifyImage,
			data: {
				securityCode: this.verifyInput.getValue()
			}
		};

		callback = function (data) {
			that.zone.find('.verify-code').click();

			if (!data) {
				that.loader1.stop();
				app.alert('验证码错误');
				return;
			}

			userName = that.usernameInput.getValue();
			that.checkUserName(userName);
		};

		Service.get(opt, callback);
	};

	ForgetPassword.prototype.checkUserName = function (userName) {
		var callback;
		var that    =  this;
		var titleUl =  this.zone.find('ul.title');
		var opt     =  {
			url: app.urls.getInfoByUserName,
			data: {
				userName: userName
			}
		};

		callback = function (data) {
			that.loader1.stop();
        	if (data.StatusCode && data.StatusCode !== 0) {
        		app.alert(data.Message);
        		return;
        	}

			that.userinfo = data;
			that.goToStep2();
		};

		Service.get(opt, callback);
	};

	ForgetPassword.prototype.getValidateCode = function (type) {
		var opt;
		var callback;
		var that = this;

		this.loader1.play();

		opt = {
			url: app.urls.getForgetPwdValidateCode,
			data: {
				ValidateType: type,
				UserName: that.userinfo.UserName
			}
		};

		callback = function (data) {
			that.loader1.stop();

			if (data === true) {
				if (type === 'Mobile') {
					app.alert('验证码已成功发送至您的手机!');
				} else {
					app.alert('验证码已成功发送至您的邮箱!');
				}
				
				that.goToStep3();
			} else {
				app.alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.changePassword = function () {
		var opt;
		var callback;
		var that = this;
		var titleUl = this.zone.find('ul.title');

		if (!this.checkStep3Status()) {
			app.alert('请正确填写相关信息！');
			return;
		}

		this.loader1.play();

		callback = function (data) {
			that.loader1.stop();
			
        	if (data.StatusCode && data.StatusCode !== 0) {
        		app.alert(data.Message);
        		return;
        	}

			if (data !== true) {
				app.alert('修改失败');
				return;
			}
			
			that.goToStep4();
		};

		opt = {
			url: app.urls.changePasswordByForget,
			data: {
				UserName: this.userinfo.UserName,
				NewPassword: this.newPwdInput.getValue(),
				ConfirmPassword: this.confirmPwdInput.getValue(),
				ValidateType: this.validateType
			}
		};

		if (this.validateType === 'Email') {
			opt.data.EmailValidateCode = this.verifyCodeInput.getValue();
		} else {
			opt.data.PhoneValidateCode = this.verifyCodeInput.getValue();
		}

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.checkStep1Status = function () {
		if (this.usernameInput.isPass() && this.verifyInput.isPass()) {
			this.zone.find('#forget-password-step1-next').addClass('active');
			return true;
		} else {
			this.zone.find('#forget-password-step1-next').removeClass('active');
			return false;
		}
	};

	ForgetPassword.prototype.checkStep3Status = function () {
		if (this.verifyCodeInput.isPass() && this.newPwdInput.isPass() && this.confirmPwdInput.isPass()) {
			this.zone.find('#forget-update-pwd').addClass('active');
			return true;
		} else {
			this.zone.find('#forget-update-pwd').removeClass('active');
			return false;
		}
	};

	ForgetPassword.prototype.bindEvents = function () {
		var userName;
		var email;
		var phone;
		var titleUl;
		var callback;
		var step2;
		var that  = this;

		this.zone = $('.forget-password');
		titleUl   = this.zone.find('ul.title');

		/*
		**  step1事件
		*/
		this.zone.find('#forget-password-step1-next').click(function () {
			if (!$(this).hasClass('active')) {
				return;
			}

			that.checkStep1();
		});

		this.zone.find('.step1').keypress(function(e) {
		    if(e.which == 13) {
				if (!that.zone.find('#forget-password-step1-next').hasClass('active')) {
					return;
				}

				that.checkStep1();
		    }
		});

		/*
		**  step2事件
		*/
		this.zone.find('.step2 .row2 ul li').click(function () {
			if (!$(this).hasClass('enable')) {
				return;
			}

			that.zone.find('.step2 .row2 ul li').removeClass('active');
			$(this).addClass('active');
		});

		this.zone.find('#forget-password-step2-next').click(function () {
			if (!that.step2Next.isActive()) {
				return;
			}

			that.validateType = that.zone.find('.step2 .row2 ul li.active').attr('data-validatetype');
			that.getValidateCode(that.validateType);
		});

		this.zone.find('#forget-password-step2-return').click(function () {
			that.goToStep1();
		});

		/*
		**  step3事件
		*/
		this.zone.find('#forget-update-pwd').click(function () {
			if (!$(this).hasClass('active')) {
				return;
			}

			that.changePassword();
		});

		this.zone.find('#forget-password-login-now').click(function () {
			that.goToStep1();
			app.router.setRoute('/homePage');

			if (!app.signInDialog) {
				app.signInDialog = new SignIn();
				$('.app').append(app.signInDialog.getDom());
				app.signInDialog.bindEvents();
			}

			app.signInDialog.show();
		});

		this.zone.find('.verify-code').click(function () {
            $(this).attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
		});

		this.zone.find('.contactcs').click(function () {
			PubSub.publish('onlineCS', {});
		});

		/*
		** step1控件
		*/
		this.usernameInput.bindEvents(this.checkStep1Status.bind(this));
		this.verifyInput.bindEvents(this.checkStep1Status.bind(this));
		this.step1Next.bindEvents();
		/*
		** step2控件
		*/
		this.step2Next.bindEvents();
		this.step2Return.bindEvents();
		/*
		** step3控件
		*/
		this.verifyCodeInput.bindEvents(this.checkStep3Status.bind(this));
		this.newPwdInput.bindEvents(this.checkStep3Status.bind(this));
		this.confirmPwdInput.bindEvents(this.checkStep3Status.bind(this));
		this.updatePwd.bindEvents();
		this.loginNow.bindEvents();

		this.createLoader();
	};

	window.ForgetPassword = ForgetPassword;
}());
