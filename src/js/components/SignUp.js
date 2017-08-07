(function () {
	function SignUp (opt) {
		IMDialog.call(this, opt || {});
		this.initInputs = ['userNameInput', 'passwordInput', 'comfirmPasswordInput', 'verifyInput'];
		this.initDom();
	}
	
	SignUp.prototype = new IMDialog();

	SignUp.prototype.initDom = function () {
		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;';
		var inputWidth  = 300;
		var inputHeihgt = 30;

		this.userNameInput = new Input({
			id: 'sign-up-username-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.usernameReg,
			placeholder: '用户名由6-12位数字和字母组成'
		});

		this.passwordInput = new Input({
			id: 'sign-up-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '密码由6-12位数字和字母组成，不含字符',
			type: 'password'
		});

		this.comfirmPasswordInput = new Input({
			id: 'sign-up-comfirm-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请再次输入您的密码',
			type: 'password'
		});

		this.birthdayInput = new Input({
			id: 'sign-up-birthday-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.birthdayReg,
			placeholder: '填写生日有惊喜'
		});

		this.emailInput = new Input({
			id: 'sign-up-email-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.emailReg,
			placeholder: '请输入您的邮箱地址'
		});

		this.phoneInput = new Input({
			id: 'sign-up-phone-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.phoneNumberReg,
			placeholder: '请输入您的手机号码'
		});

		this.trueNameInput = new Input({
			id: 'sign-truename-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.chineseNameReg,
			placeholder: '请输入您的真实姓名'
		});

		this.popularInput = new Input({
			id: 'sign-popular-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.popularizeReg,
			canBlank: true,
			placeholder: '请输入推广码，如无请留空'
		});

		this.verifyInput = new Input({
			id: 'sign-up-vefiry-input',
			width: 150,
			height: 30,
			reg: app.verifyReg,
			placeholder: '请输入验证码'
		});

		var temp =	'<div class="sign-up">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="icon logo-icon-small"></div>' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">用户名</div>' +
									this.userNameInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>用户名已存在</span>' +
									'</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">密' + filler + '码</div>' +
									this.passwordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="text">&nbsp;</div>' +
									this.comfirmPasswordInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>两次输入的密码不一致</span>' +
									'</div>' +
								'</div>' +

								'<div class="row birthday-row">' +
									'<div class="text">生' + filler + '日</div>' +
									this.birthdayInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>输入的日期格式不对</span>' +
									'</div>' +
								'</div>' +

								'<div class="row email-row has-notice">' +
									'<div class="text">邮' + filler + '箱</div>' +
									this.emailInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>电子邮箱是您找回密码的重要途径</span>' +
									'</div>' +
								'</div>' +

								'<div class="row phone-row has-notice">' +
									'<div class="text">手机号</div>' +
									this.phoneInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>手机号码是您的重要身份验证方式</span>' +
									'</div>' +
								'</div>' +

								'<div class="row true-name-row has-notice">' +
									'<div class="text">姓' + filler + '名</div>' +
									this.trueNameInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>充值提款操作需要验证您的真实姓名</span>' +
									'</div>' +
								'</div>' +

								'<div class="row agent-extend-row">' +
									'<div class="text">推广码</div>' +
									this.popularInput.getDom() +
								'</div>' +

								'<div class="row verify-row">' +
									'<div class="text">验证码</div>' +
									this.verifyInput.getDom() +
									'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'<span class="change-verify-code">换一个</span>' +
								'</div>' +

								'<div class="row agree-row">' +
									'<div class="agree">' +
										'<input type="checkbox" id="remember-checkbox" checked="checked">' +
										'<label for="remember-checkbox">我已届满合法博彩年龄，且同意各项开户条约</label>' +
									'</div>' +
								'</div>' +

								'<div class="row button-row">' +
									'<div class="button register">' +
										'快速注册' +
									'</div>' +
									'<div class="button-info signin-now">' +
										'已有账户？立即登录' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay3"></div>';
		
		this.el  = temp;
	};

	SignUp.prototype.getDom = function () {
		return this.el;
	};

	SignUp.prototype.show = function () {
		this.showOverlay();
		this.setRegistInputs();
	};

	SignUp.prototype.hide = function () {
		this.hideOverlay();
		this.clearInputs();
	};

	SignUp.prototype.setRegistInputs = function () {
		var top;
		var data = app.registerData;

		if (!data.EmailIsRequire) {
			this.zone.find('.email-row').hide();
		}

		if (!data.PhoneIsRequire) {
			this.zone.find('.phone-row').hide();
		}

		if (!data.TrueNameIsRequire) {
			this.zone.find('.true-name-row').hide();
		}

		if (!data.BirthdayIsVisible) {
			this.zone.find('.birthday-row').hide();
		}
		/*
		**  js消除弹出框的字体和界面模糊，这是由于transform: translate属性引起的
		**  dialog-wrapper的宽高要是2的倍数，这样translate(50%,50%)才不会有小数，
		**  才不会产生模糊
		*/
		top = this.zone.find('.dialog-wrapper').height();

		if (top % 2 !== 0) {   
			top += 1;
			this.zone.find('.dialog-wrapper').css('height', top + 'px');
		}

		if (app.proxy) {
			this.popularInput.setValue(app.proxy);
			this.popularInput.disable();
		}

		this.zone.find('.change-verify-code').click();
	};

	SignUp.prototype.clearInputs = function () {
		var i;
		var data = app.registerData;
		var arr  = this.initInputs;

		this.zone.find('.error-notice').hide();
		this.popularInput.setValue('');
		this.popularInput.enable();

		for (i = 0; i < arr.length; i++) {
			this[arr[i]].setValue('');
		}

		if (data) {
			if (data.EmailIsRequire) {
				this.emailInput.setValue('');
			}

			if (data.PhoneIsRequire) {
				this.phoneInput.setValue('');
			}

			if (data.TrueNameIsRequire) {
				this.trueNameInput.setValue('');
			}

			if (data.BirthdayIsVisible) {
				this.birthdayInput.setValue('');
			}
		}
	};

	SignUp.prototype.checkInputPass = function () {
		var i;
		var password;
		var cpassword;
		var data = app.registerData;
		var arr  = this.initInputs;

		if (data.EmailIsRequire) {
			arr.push('emailInput');
		}

		if (data.PhoneIsRequire) {
			arr.push('phoneInput');
		}

		if (data.TrueNameIsRequire) {
			arr.push('trueNameInput');
		}

		if (data.BirthdayIsRequire) {
			arr.push('birthdayInput');
		}

		if (!this.zone.find('#remember-checkbox').prop('checked')) {
			this.allPass = false;
		} else {
			this.allPass = true;
		}

		if (this.allPass) {
			for (i = 0; i < arr.length; i++) {
				if (!this[arr[i]].isPass()) {
					this.allPass = false;
					break;
				}
			}
		}

		password  = this.passwordInput.getValue();
		cpassword = this.comfirmPasswordInput.getValue();

		if (password && cpassword && password == cpassword) {
			this.zone.find('#sign-up-comfirm-password-input').next('.error-notice').hide();
		} else if (password && cpassword && password != cpassword) {
			this.zone.find('#sign-up-comfirm-password-input').next('.error-notice').show();
			this.allPass = false;
		}

		if (this.allPass) {
			this.zone.find('.register').addClass('active');
		} else {
			this.zone.find('.register').removeClass('active');
		}

		return this.allPass;
	};

    SignUp.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

    SignUp.prototype.resetVerifyCode = function() {
		this.verifyInput.setValue('');
		this.zone.find('.change-verify-code').click();
    };
    
	SignUp.prototype.commit = function () {
		var opt;
		var callback;
		var that = this;

		if (!this.checkInputPass()) {
			app.alert('请按要求完成相关信息!');
			this.resetVerifyCode();
			return;
		}

		if (this.passwordInput.getValue() !== this.comfirmPasswordInput.getValue()) {
			app.alert('两次输入的密码不一致');
			that.zone.find('.register').removeClass('active');
			this.resetVerifyCode();
			return;
		}

		this.loader.play();	

		opt = {
			url: app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.getValue(),
			data: {}
		}

		callback = function (json) {
			that.resetVerifyCode();

        	if (!json || json == 'false') {
        		that.loader.stop();
        		app.alert('验证码错误');
        		that.zone.find('.register').removeClass('active');
        		return;
        	}

        	that.register();
		};

		Service.get(opt, callback);
	};

	SignUp.prototype.register = function () {
		var opt;
		var callback;
		var i;
		var data = app.registerData;
		var that = this;
		

		callback = function (json) {
			that.loader.stop();
			that.resetVerifyCode();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				that.zone.find('.register').removeClass('active');
				return;
			}
			
			app.signedInProcedures();
			app.Comet.refreshClientCUN(json.CUN);
			that.hide();
		};

		opt = {
			url: app.urls.signUp,
			data: {
				UserName: this.userNameInput.getValue(),
				Password: this.passwordInput.getValue(),
				ExtendCode: this.popularInput.getValue(),
				RegWebSite: window.location.host
			}
		};

		if (data.EmailIsRequire) {
			opt.data.Email = this.emailInput.getValue() || '';
		}

		if (data.PhoneIsRequire) {
			opt.data.Phone = this.phoneInput.getValue() || '';
		}

		if (data.TrueNameIsRequire) {
			opt.data.TrueName = this.trueNameInput.getValue() || '';
		}

		if (data.BirthdayIsRequire) {
			opt.data.Birthday = this.birthdayInput.getValue() || '';
		} else {
			if (this.birthdayInput.isPass()) {
				opt.data.Birthday = this.birthdayInput.getValue() || '';
			}
		}

		Service.post(opt, callback);
	};

	SignUp.prototype.bindEvents = function () {
		var username;
		var close;
		var button;
		var that  = this;
		var data  = app.registerData;

		this.zone = $('.sign-up');
		close     = this.zone.find('.close');
		button    = this.zone.find('.register');

		close.click(function () {
			that.hide();
		});

		button.click(function () {
			if (that.zone.find('.register').hasClass('active')) {
				that.commit();
			}
		});

		this.zone.keypress(function(e) {
		    if(e.which == 13) {
				if (that.zone.find('.register').hasClass('active')) {
					that.commit();
				}
		    }
		});

		this.zone.find('.change-verify-code').click(function () {
            that.zone.find('.verify-code').attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
		});

		this.zone.find('.signin-now').click(function () {
			that.hide();

			if (!app.signInDialog) {
				app.signInDialog = new SignIn();
				$('.app').append(app.signInDialog.getDom());
				app.signInDialog.bindEvents();
			}

			app.signInDialog.show();
		});

		this.zone.find('#sign-up-username-input input').blur(function () {
			var self = this;

			username = $(this).val();

			app.checkUser(username, function (data) {
				if (data && data.UserName && data.UserName == username) {
					$(self).parent('.input').next('.error-notice').show();
				} else {
					$(self).parent('.input').next('.error-notice').hide();
				}
			});
		});

		this.zone.find('#sign-up-email-input input').focus(function () {
			data = app.registerData;

			if (data.EmailIsRequire) {
				$(this).parent('.input').next('.error-notice').show();
			}
		}).blur(function () {
			$(this).parent('.input').next('.error-notice').hide();
		});

		this.zone.find('#sign-up-phone-input input').focus(function () {
			data = app.registerData;

			if (data.PhoneIsRequire) {
				$(this).parent('.input').next('.error-notice').show();
			}
		}).blur(function () {
			$(this).parent('.input').next('.error-notice').hide();
		});

		this.zone.find('#sign-truename-input input').focus(function () {
			data = app.registerData;

			if (data.TrueNameIsRequire) {
				$(this).parent('.input').next('.error-notice').show();
			}
		}).blur(function () {
			$(this).parent('.input').next('.error-notice').hide();
		});

		this.zone.find('#remember-checkbox').change(function () {
			that.checkInputPass();
		});

		this.bindOverlayEvents();
		this.createLoader();
        this.zone.find('#sign-up-birthday-input input').datetimepicker({
        	lang:'ch',
        	theme: 'dark',
        	timepicker: false,
        	format: 'Y-m-d',
        	startDate:'1990/01/01',
        	onClose: function () {
        		that.birthdayInput.checkInput();
        		that.checkInputPass();
        	}
        })
           
   
		this.userNameInput.bindEvents(this.checkInputPass.bind(this));
		this.passwordInput.bindEvents(this.checkInputPass.bind(this));
		this.birthdayInput.bindEvents(this.checkInputPass.bind(this));
		this.comfirmPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.emailInput.bindEvents(this.checkInputPass.bind(this));
		this.phoneInput.bindEvents(this.checkInputPass.bind(this));
		this.trueNameInput.bindEvents(this.checkInputPass.bind(this));
		this.popularInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyInput.bindEvents(this.checkInputPass.bind(this));
	};

	window.SignUp = SignUp;
}());
