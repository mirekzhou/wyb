(function() {
	function SecurityCenter(opt) {
		this.opt = opt;
		this.initDom();
	}

	SecurityCenter.prototype.initDom = function() {
		var temp;

		temp = '<div class="security-center zhsz-info-action">' +
					'<div class="wrapper">' +
						'<div>' +
							'<span class="pc-icon security-lock-icon"></span>' +
							'<span class="item">登录密码</span>' +
							'<span class="text">已设置</span>' +
							'<a class="change-login-pwd">修改</a>' +
							'<span class="clear"></span>' +
						'</div>' +

						'<div>' +
							'<span class="pc-icon security-key-icon"></span>' +
							'<span class="item">资金密码</span>' +
							'<span class="text">' +
								(app.userTotalInfo.HasWithdrawalPassword? '已设置':'未设置') +
							'</span>' +
							'<a class="change-withdraw-pwd">修改</a>' +
						'</div>' +

						'<div class="row3">' +
							'<span class="pc-icon security-card-icon"></span>' +
							'<span class="item">银行卡</span>' +
							'<span class="text">已绑定<span class="card-count">--</span>张</span>' +
							'<a class="card-manage">管理</a>' +
						'</div>' +

						'<div class="row4">' +
							'<span class="pc-icon security-phone-icon"></span>' +
							'<span class="item">手机号码</span>' +

							'<span class="text">' + 
								(app.checkUserPhone()? ('已验证(' + app.userTotalInfo.Phone + ')') :'未验证') +
							'</span>' +
							
							'<a class="set-phonenumber">' +
								(app.checkUserPhone()? '修改请联系客服':'验证') +
							'</a>' +
						'</div>' +

						'<div class="row5">' +
							'<span class="pc-icon security-mail-icon"></span>' +
							'<span class="item">电子邮箱</span>' +

							'<span class="text">' + 
								(app.checkUserEmail()? ('已验证(' + app.userTotalInfo.Email + ')') :'未验证') +
							'</span>' +

							'<a class="set-email">' +
								(app.checkUserEmail()? '修改请联系客服':'验证') +
							'</a>' +
						'</div>' +

					'</div>' +								
				'</div>';

		this.el = temp;		
	};

	SecurityCenter.prototype.getDom = function() {
		return this.el;
	};

	SecurityCenter.prototype.getUserBankCount = function () {
		var that = this;
		var opt  =  {
			url: app.urls.getUserBankCount,
	        data: {}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.card-count').text(json);
		};

		Service.get(opt, callback);
	};

	SecurityCenter.prototype.checkWithdrawPwd = function() {
		var that = this;
		var opt  =  {
			url: app.urls.checkWithdrawPwd,
	        data: {}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.withDrawPwdFlag = json;

			if (json) {
				that.zone.find('.change-withdraw-pwd').text('修改');
			} else {
				that.zone.find('.change-withdraw-pwd').text('设置');
			}
		};

		Service.get(opt, callback);
	};

	SecurityCenter.prototype.setWithdrawFlag = function(flag) {
		this.withDrawPwdFlag = flag;
		this.zone.find('.change-withdraw-pwd').text('修改');
	};

	SecurityCenter.prototype.show = function() {
		this.zone.show();
		this.getUserBankCount();
		//this.checkWithdrawPwd();
	};

	SecurityCenter.prototype.hide = function() {
		this.zone.hide();
	};

	SecurityCenter.prototype.refresh = function() {
		var i;
		var callback;
		var that = this;

		var opt  = {
			url: app.urls.getLoginInUserInfo,
			data: {}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}
			
			app.userTotalInfo = json;

			if (app.checkUserPhone()) {
				that.zone.find('.row4 .text').text('已验证(' + app.userTotalInfo.Phone + ')');
				that.zone.find('.row4 .set-phonenumber').text('修改请联系客服');
			} else {
				that.zone.find('.row4 .text').text('未验证');
				that.zone.find('.row4 .set-phonenumber').text('验证');
			}

			if (app.checkUserEmail()) {
				that.zone.find('.row5 .text').text('已验证(' + app.userTotalInfo.Email + ')');
				that.zone.find('.row5 .set-email').text('修改请联系客服');
			} else {
				that.zone.find('.row5 .text').text('未验证');
				that.zone.find('.row5 .set-email').text('验证');
			}
		};

		Service.get(opt, callback);
	};

	SecurityCenter.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.security-center');

		this.zone.find('.change-login-pwd').click(function() {
			app.showChangeLoginPwdDialog();
		});

		this.zone.find('.change-withdraw-pwd').click(function(){
			if (!app.userTotalInfo.HasWithdrawalPassword) {
				app.alert('请在提款页面设置资金密码！', function () {
					app.personCenterRouter(0, 2);
				});
				
				return;
			}

			app.showChangeWithdrawPwdDialog();
		});

		this.zone.find('.card-manage').click(function() {
			if (!app.checkUserPhone()) {
				app.alert('为了您的资金安全，请先绑定手机号!', function () {
					app.showSetPhoneNumberDialog({
						successHideCallback: function () {
							app.checkUserBanckCards(function (count) {
								if (count <= 0) {
									app.showBindCardDialog({
										failedHideCallback: function () {
											app.personCenterRouter(2, 1);
										}
									});
								}
							});
						},

						failedHideCallback: function () {
							app.personCenterRouter(2, 1);
						}
					});
				});
			} else {
				app.showCardManagementDialog();
			}
		});
	
		this.zone.find('.set-phonenumber').click(function() {
			if ($(this).text() === '验证') {
				app.showSetPhoneNumberDialog();
			} else {
				PubSub.publish('onlineCS', {});
			}
		});

		this.zone.find('.set-email').click(function(){
			if ($(this).text() === '验证') {
				app.showSetEmailDialog();
			} else {
				PubSub.publish('onlineCS', {});
			}
		});

        PubSub.subscribe('onRefreshSecurityCenter', function (msg, data) {
        	that.refresh();
        });

        PubSub.subscribe('onCardBinded', function (msg, data) {
        	that.getUserBankCount();
        });
	};

	window.SecurityCenter = SecurityCenter;
}());