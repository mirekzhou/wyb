(function () {
	function SignIn (opt) {
		IMDialog.call(this, opt || {});
		this.loginError = false;
		this.initDom();
	}
	
	SignIn.prototype = new IMDialog();

	SignIn.prototype.initDom = function () {
		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;';
		var inputWidth  = 250;
		var inputHeihgt = 30;

		this.userNameInput = new Input({
			id: 'sign-in-username-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.usernameReg,
			placeholder: '请输入您的用户名'
		});

		this.passwordInput = new Input({
			id: 'sign-in-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请输入您的密码',
			type: 'password'
		});

		this.verifyInput = new Input({
			id: 'sign-in-vefiry-input',
			width: 125,
			height: 30,
			reg: app.verifyReg,
			placeholder: '请输入验证码'
		});

		var temp =	'<div class="sign-in">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="icon logo-icon-small"></div>' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">用户名</div>' +
									this.userNameInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="text">密' + filler + '码</div>' +
									this.passwordInput.getDom() +
								'</div>' +

								'<div class="row verify-row">' +
									'<div class="text">验证码</div>' +
									this.verifyInput.getDom() +
									'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'<span class="change-verify-code">换一个</span>' +
								'</div>' +

								'<div class="row button-row">' +
									'<div class="button login">' +
										'快速登录' +
									'</div>' +
									'<div class="button-info">' +
										'<span class="find-password">找回密码</span>' +
										'<span class="signup-now">快速注册</span>' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay3"></div>';
		
		this.el  = temp;
	};

	SignIn.prototype.getDom = function () {
		return this.el;
	};

	SignIn.prototype.show = function () {
		this.showOverlay();

		if (this.loginError) {
			this.showVerifyRow();
		} else {
			this.hideVerifyRow();
		}
	};

	SignIn.prototype.showVerifyRow = function () {
		this.zone.find('.verify-row').show();
		this.zone.find('.change-verify-code').click();
	};

	SignIn.prototype.hideVerifyRow = function () {
		this.zone.find('.verify-row').hide();
	};

	SignIn.prototype.hide = function () {
		this.hideOverlay();
		this.clearInputs();
	};

	SignIn.prototype.clearInputs = function () {
		this.passwordInput.setValue('');
		this.verifyInput.setValue('');
	};

	SignIn.prototype.checkInputPass = function () {
		if (this.loginError) {
			if (this.userNameInput.isPass() &&
				this.passwordInput.isPass() &&
				this.verifyInput.isPass()) {

				this.zone.find('.login').addClass('active');
				this.allPass = true;
			} else {
				this.zone.find('.login').removeClass('active');
				this.allPass = false;
			}

			return this.allPass;
		} else {
			if (this.userNameInput.isPass() &&
				this.passwordInput.isPass()) {

				this.zone.find('.login').addClass('active');
				this.allPass = true;
			} else {
				this.zone.find('.login').removeClass('active');
				this.allPass = false;
			}

			return this.allPass;
		}
	};

    SignIn.prototype.resetVerifyCode = function() {
		this.verifyInput.setValue('');
		this.zone.find('.change-verify-code').click();
    };

    SignIn.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

	SignIn.prototype.commit = function () {
		var opt;
		var callback;
		var that = this;

		if (!this.checkInputPass()) {
			app.alert('请按要求填写相关信息!');
			that.loginError = true;
			that.showVerifyRow();
			return;
		}

		opt = {
			url: app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.getValue(),
			data: {}
		}

		callback = function (json) {
			that.resetVerifyCode();

        	if (!json || json == 'false') {
        		that.loader.stop();
        		app.alert('验证码错误');
        		that.zone.find('.login').removeClass('active');
        		return;
        	}

        	that.login();
		};

		Service.get(opt, callback);
	};

	SignIn.prototype.login = function () {
		var opt;
		var data;
		var callback;
		var userName = this.userNameInput.getValue();
		var password = this.passwordInput.getValue();
		var that     = this;
        
        password = md5(password).toUpperCase();
        password = md5(password).toUpperCase();
		callback = function (json) {
        	that.loader.stop();
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				that.loginError = true;
				that.showVerifyRow();
				that.zone.find('.login').removeClass('active');
				return;
			}

			that.loginError = false;
			that.hideVerifyRow();
			that.hide();
			app.signedInProcedures();
			app.Comet.refreshClientCUN(json.CUN);

			if (localStorage) {
				localStorage.setItem('*userName', userName);
			}
		};

		opt = {
			url: app.urls.signIn,
			data: {
				Safety: '1' ,
				UserName: userName,
				Password: password,
				LoginWebSet: window.location.host
			}
		};

		Service.post(opt, callback);
	};

	SignIn.prototype.setDefaultUserName = function () {
		if (localStorage && localStorage.getItem('*userName')) {
			this.userNameInput.setValue(localStorage.getItem('*userName'));
		}
	};

	SignIn.prototype.bindEvents = function () {
		var close;
		var button;
		var value;
		var that  = this;

		this.zone = $('.sign-in');
		close     = this.zone.find('.close');
		button    = this.zone.find('.login');

		close.click(function () {
			that.hide();
		});

		button.click(function () {
			that.loader.play();

			if (that.loginError) {
				that.commit();
			} else {
				that.login();
			}
		});

		this.zone.keypress(function(e) {
		    if(e.which == 13 && !$('.alert').hasClass('modal-dialog-active')) {
		    	that.loader.play();
		    	
				if (that.loginError) {
					that.commit();
				} else {
					that.login();
				}
		    }
		});
		
		this.zone.find('.change-verify-code').click(function () {
            that.zone.find('.verify-code').attr('src',
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
		});

		this.zone.find('.find-password').click(function () {
			that.hide();
			app.router.setRoute('/forgetPassword');
		});

		this.zone.find('.signup-now').click(function () {
			that.hide();

			if (!app.signUpDialog) {
				app.signUpDialog = new SignUp();
				$('.app').append(app.signUpDialog.getDom());
				app.signUpDialog.bindEvents();
			}

			app.signUpDialog.show();
		});

		this.bindOverlayEvents();
		this.createLoader();
		this.userNameInput.bindEvents(this.checkInputPass.bind(this));
		this.passwordInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyInput.bindEvents(this.checkInputPass.bind(this));
		this.setDefaultUserName();
	};

	window.SignIn = SignIn;
}());
