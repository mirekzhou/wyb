$(function(){
	function BankCarkManagerDialog(opt) {
		IMDialog.call(this, opt || {});

		this.firstTime = true;
		this.initDom();
	}

	BankCarkManagerDialog.prototype = new IMDialog();

	BankCarkManagerDialog.prototype.initDom = function() {
		var temp = '<div class="bank-card-manager-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name">银行卡管理</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="card-content">' +
								'</div>'+

							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay7"></div>';

		this.el = temp;
	};

	BankCarkManagerDialog.prototype.getDom = function(){
		return this.el;
	};

	BankCarkManagerDialog.prototype.show = function(){
		this.showOverlay();

		if (this.firstTime) {
			this.getUserBankList();
			this.firstTime = false;
		}
	};

	BankCarkManagerDialog.prototype.hide = function(){
		this.hideOverlay();
	};

    BankCarkManagerDialog.prototype.createLoader = function() {
        var wrapper = this.zone.find('.card-content')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	BankCarkManagerDialog.prototype.addCardItem = function(data) {
		var i;
		var cssName;
		var temp       = '';
		var bankName   =  data.Bank.BankName;
		var accountLen =  data.AccountNo.length;
		var prePart    =  data.AccountNo.substring(0, 4);
		var lastPart   =  data.AccountNo.substring(accountLen - 4);

		temp +=	'<div class="card-info">' +
					'<div class="bank-name">' +
						bankName +
					'</div>' +

					'<div class="card-number">' +
						'<span class="pre-part">' + prePart + '</span>' +
						'<span class="starts">&nbsp;****&nbsp;****&nbsp;****</span>' +
						'<span class="last-part">' + lastPart + '</span>' +
					'</div>' +
				'</div>';

		return temp;
	};

	BankCarkManagerDialog.prototype.getUserBankList = function() {
		var i;
		var callback;
		var temp = '';
		var that = this;

		var opt  = {
			url: app.urls.getUserBankList,
			data: {}
		};

		this.loader1.play();

		callback = function (data) {
			that.loader1.stop();
			
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			for (i = 0; i < data.length; i++) {
				temp += that.addCardItem(data[i]);
			}

			temp +=	'<div class="card-info add-card">' +
						'<div class="bank-name">+</div>' +
						'<div class="card-number">添加银行卡</div>' +
					'</div>';

			that.zone.find('.card-content').html(temp);
			that.bindAddCardEvents();
			that.userBanks = data;
		};

		Service.get(opt, callback);
	};

	BankCarkManagerDialog.prototype.bindAddCardEvents = function() {
		var that = this;

		this.zone.find('.add-card').click(function() {
			app.showBindCardDialog();
		});
	};

	BankCarkManagerDialog.prototype.bindEvents = function() {
		var that = this;
		
		this.zone = $('.bank-card-manager-content');

		that.zone.find('.close').click(function(){
			that.hide();
		});

        PubSub.subscribe('onCardBinded', function (msg, data) {
        	that.getUserBankList();
        });

        this.bindOverlayEvents();
        this.createLoader();
	}

	window.BankCarkManagerDialog = BankCarkManagerDialog;


}());