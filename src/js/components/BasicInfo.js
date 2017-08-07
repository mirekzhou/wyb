$(function(){
	function BasicInfo(opt){
		this.opt = opt;
		this.initDom();
	}

	BasicInfo.prototype.initDom = function(){
		var temp;
		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

		this.button = new Button({
			id: 'basic-info-button',
			name: '提交',
			width: 128,
			height: 38
		});

		this.realNameInput = new Input({
			id: 'real-name-input',
			width: 200,
			height: 30,
			reg: app.chineseNameReg
		});
        
        this.birthdayInput = new Input({
			id: 'birthday-input',
			width: 200,
			height: 30,
			reg: app.birthdayReg
		});

		this.selectProvince = new Select({
			id: 'basic-info-province',
			width: 200,
			height: 30,
			data:[
				{
					'text': '省',
					'value': '-1'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'basic-info-city',
			width: 200,
			height: 30,
			data:[
				{
					'text': '市',
					'value': '-1'	
				}
			]
		});

		temp = '<div class="basic-info zhsz-info-action">' +
					'<div class="wrapper">' +
						'<div class="row row1">' +
							'<div class="text">真实姓名</div>' +
							this.realNameInput.getDom() +
							'<a class="text contactcs">修改请联系客服</a>' +
						'</div>' +

						'<div class="row row3">' +
							'<div class="text">生' + filler + '日</div>' +
							this.birthdayInput.getDom()+
							'<a class="text contactcs">填写生日有惊喜</a>' +
							// '<input class="birthday" type="text" />' +
						'</div>' + 

/*						'<div class="row row4">' +
							'<div class="text">地' + filler + '址</div>' +

							this.selectProvince.getDom() +
							this.selectCity.getDom() +
						'</div>' +*/

/*						'<div class="row row5">' +
							'<div class="text">详细地址</div>' +
							'<textarea class="address" style="resize: none;"></textarea>' +
						'</div>' +*/

						'<div class="row6">' +
							this.button.getDom() +
						'</div>' +
				'</div>';

		this.el = temp;
	};

	BasicInfo.prototype.getDom = function() {
		return this.el;
	};

	BasicInfo.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			//this.getProvinceList();
			this.setUserInfo();
			this.firstTime = true;
		}
	};

	BasicInfo.prototype.hide = function() {
		this.zone.hide();
	};

	BasicInfo.prototype.formatUserName = function(name) {
		var nameLen   =  name.length;
		var tailname  =  name[nameLen - 1];
		var nameStart =  '';

		for (i = 0; i < nameLen - 1; i++) {
			nameStart += '*';
		}

		return nameStart + tailname;
	};

	BasicInfo.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	BasicInfo.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	BasicInfo.prototype.getProvinceList = function() {
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

	BasicInfo.prototype.getCityList = function(provinceId) {
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
			that.setLocation();
		};

		Service.get(opt, callback);
	};

	BasicInfo.prototype.setLocation = function() {
		//debugger
	};

	BasicInfo.prototype.reset = function() {
		this.zone.find('.address').val('');
	};

	BasicInfo.prototype.setUserInfo = function() {
		var name;
		var birthday;
		var that = this;
		var data = app.userTotalInfo;

		if (data.TrueName) {
			name = this.formatUserName(data.TrueName);
			this.realNameInput.setValue(name);
			this.zone.find('.row1 .contactcs').text('修改请联系客服');
			this.realNameInput.disable();
		} else {
			this.realNameInput.setValue('');
			this.zone.find('.row1 .contactcs').text('姓名须与您提款银行卡姓名一致，否则无法提款');
			this.realNameInput.enable();
		}
         
        if (data.Birthday) {
			birthday = data.Birthday.substring(0, 10);
			this.birthdayInput.setValue(birthday);
			this.zone.find('.row3 .contactcs').text('修改请联系客服');
			this.birthdayInput.disable();
        } else {
        	this.birthdayInput.setValue('');
        	this.zone.find('.row3 .contactcs').text('填写生日有惊喜');
        	this.birthdayInput.enable();
        	this.zone.find('#birthday-input input').datetimepicker({
				// value: app.userTotalInfo.Birthday || today,
				timepicker: false,
				format: "Y-m-d",
				theme: 'dark',
				lang: 'zh',
				startDate: '1990/01/01',
				onClose: function() {
					that.birthdayInput.checkInput();
				}
			});
        } 

        if (data.TrueName && data.Birthday) {
			this.button.disable();
        } else {
			this.button.enable();
        }
		//this.zone.find('.address').val(app.userTotalInfo.Address || '');
	};

	BasicInfo.prototype.commit = function() {
		var i;
		var callback;
		var that = this;
		var data = app.userTotalInfo;
		var opt  = {
			url: app.urls.updateUserInfo,
			data: {
				TrueName: this.realNameInput.getValue(),
				Birthday: this.birthdayInput.getValue()
			}
		};
		
		if (this.button.isDisable()) {
			return;
		}
 
		if (!data.TrueName) {
			if (!this.realNameInput.isPass()) {
				app.alert('真实姓名格式错误');
				return;
			}
		} else {
			if (!data.Birthday) {
				if (!this.birthdayInput.isPass()) {
					app.alert('生日格式错误');
					return;
				}
			}
		}
	  
        
		callback = function (data) {
			if (data === true) {
				app.alert('提交成功');
				app.getUserInfo(function () {
					that.setUserInfo();
				});
			} else {
				app.alert('提交失败');
			}
		};

		Service.post(opt, callback);
	};

	BasicInfo.prototype.commit2 = function() {
		var i;
		var callback;
		var that     = this;
		var birthday = $.trim(this.zone.find('#birthday-input input').val());
		var address  = $.trim(this.zone.find('.address').val());
		var province = this.selectProvince.getValue();
		var city     = this.selectCity.getValue();

		var opt  = {
			url: app.urls.updateUserInfo,
			data: {
				Birthday: birthday,
				Address: address,
				//Province: province,
				//City: city
			}
		};

		if (!this.realNameInput.isPass()) {
			app.alert('真实姓名格式错误');
			return;
		}

		if (this.realNameInput.isAble()) {
			opt.data.TrueName = this.realNameInput.getValue();
		} else {
			opt.data.TrueName = app.userTotalInfo.TrueName;
		}

		callback = function (data) {
			if (data === true) {
				app.alert('修改成功');
				that.reset();
				app.getUserInfo(function () {
					that.setUserInfo();
				});
			} else {
				app.alert('修改失败');
			}
		};

		Service.post(opt, callback);
	};

	BasicInfo.prototype.bindEvents = function() {
		var today    = new Date();
		var that     = this;
		var minDate  = Util.getIntervalDate(today, -25550);
		var data  = app.userTotalInfo;

		this.zone = $('.basic-info');

		this.zone.find('#basic-info-button').click(function () {
			that.commit();
		});

		this.zone.find('#basic-info-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.zone.find('.contactcs').click(function () {
			if ($(this).text() === '修改请联系客服') {
				PubSub.publish('onlineCS', {});
			}
		});

		this.realNameInput.bindEvents();
		this.birthdayInput.bindEvents();
		this.button.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
	};

	window.BasicInfo = BasicInfo;
}());