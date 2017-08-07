(function(){
	function WithdrawDialog(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	WithdrawDialog.prototype = new IMDialog();

	WithdrawDialog.prototype.initDom = function() {
		var temp = '<div class="withdraw-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name">提款确认</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
								'</div>'+
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay7"></div>';

		this.el = temp;
	};

	WithdrawDialog.prototype.getDom = function() {
		return this.el;
	};

	WithdrawDialog.prototype.show = function(opt) {
		this.data  = opt.data;
		this.opt   = opt;

		if (this.data.AllowWithdrawal) {
			this.allowWithdrawal();
		} else {
			this.notAllowWithdrawal();
		}

		this.showOverlay();
	};

	WithdrawDialog.prototype.hide = function() {
		this.opt = {};
		this.hideOverlay();
	};

	WithdrawDialog.prototype.allowWithdrawal = function() {
		var i;
		var prefLaterText;
		var prefLaterColor;
		var withdrawAmount;
		var actualAmount;
		var totalFee;
		var transferFee;
		var inspectFee   = 0;
		var table        = '';
		var summary      = '';
		var totalPenalty = '';
		var buttonZone   = '';
		var arr          = this.data.Inspectes;

		/*
		************************ 构造table************************
		*/
		table +=	'<div class="table table1">' +
						'<div class="thead">' +
							'<div class="tr">' +
								'<div class="th td1">序号</div>' +
								'<div class="th td2">日期</div>' +
								'<div class="th td3">存款</div>' +
								'<div class="th td4">优惠</div>' +
								'<div class="th td5">优惠活动</div>' +
								'<div class="th td6">现流水</div>' +
								'<div class="th td7">要求优惠流水</div>' +
								'<div class="th td8">扣除优惠</div>' +
								'<div class="th td9">要求存款流水</div>' +
								'<div class="th td10">扣除行政费用</div>' +
							'</div>' +
						'</div>' +
						'<div class="tbody">';

		for(i = 0; i < arr.length; i++) {
            prefLaterText  = '';
            prefLaterColor = 'black';

            if (arr[i].PrefLaterSended) {
                prefLaterText = '<br/>（存款已稽核）';
                prefLaterColor = 'red';
            }

			table +=		'<div class="tr">' +
								'<div class="td td1">' + (i + 1) + '</div>' +
								'<div class="td td2">' + '起始：' + arr[i].BeginTime + '<br />' + '结束：' + arr[i].EndTime + '</div>' +
								'<div class="td td3">' + arr[i].DepositAmount + (arr[i].Type == 1 ? "(修正)" : "") + '</div>' +
								'<div class="td td4">' + arr[i].PrefAmount + (arr[i].Type == 3 ? "(手工)" : "") + '</div>' +
								'<div class="td td5">' + (arr[i].PrefName?arr[i].PrefName: '-') + '</div>' +
								'<div class="td td6">' + arr[i].TotalBetAmountOfRevise + '</div>' +
								'<div class="td td7">' + arr[i].PrefInspectNeedBetAmount + '</div>' +
								'<div class="td td8">' + arr[i].PrefInspectFee + '</div>' +
								'<div class="td td9">' + arr[i].NormalityInspectNeedBetAmount + '</div>' +
								'<div class="td td10">' + arr[i].NormalityInspectFee + '</div>' +
							'</div>';

			inspectFee += arr[i].PrefInspectFee + arr[i].NormalityInspectFee;
		}

		table  +=		'</div>' +
					'</div>';

		inspectFee     = inspectFee.toFixed(2);
		transferFee    = this.data.TransferFee.toFixed(2);
		totalFee       = (parseFloat(inspectFee) + parseFloat(transferFee)).toFixed(2);
		withdrawAmount = this.opt.Amount;
		actualAmount   = (withdrawAmount - totalFee).toFixed(2);

		/*
		************************ 构造summary************************
		*/
		summary += 	'<div class="summary">' +
						'<span>申请提款：</span>' +
						'<span class="withdraw-amount">' + withdrawAmount + '</span>' +
						'<span>元，预计扣款合计：</span>' +
						'<span class="penalty-amount">' + totalFee + '</span>' +
						'<span>元，实际提款：</span>' +
						'<span class="actual-amount">' + actualAmount + '</span>' +
					'</div>';

		/*
		************************ 构造扣费总计***********************
		*/
		totalPenalty += '<div class="total-penalty">' +
							'<div>' +
								'<span class="text">预计扣款合计：</span>' +
								'<span class="value inspect-fee-value">' + inspectFee + '</span>' +
								'<span class="math-icon">+</span>' +
								'<span class="text">转账手续费：</span>' +
								'<span class="value transfer-fee-value">' + transferFee + '</span>' +
								'<span class="math-icon">=</span>' +
								'<span class="value total-fee-value">' + totalFee + '</span>' +
							'</div>' +
							'<div>' +
								'如对扣款有疑问，请联系客服人员' +
							'</div>' +
						'</div>';


		/*
		************************ 构造按钮区***********************
		*/
		buttonZone =	'<div class="button-zone">' +
							'<div class="button ok">确定提款</div>' +
							'<div class="button close">取消</div>' +
						'</div>';

		temp = summary + table + totalPenalty + buttonZone;

		this.zone.find('.content').html(temp);
		this.zone.find('.table1 .thead').css('width', this.zone.find('.table1 .tbody').prop("clientWidth"));
		
	};

	WithdrawDialog.prototype.notAllowWithdrawal = function() {
		var i;
		var prefLaterText;
		var prefLaterColor;
		var withdrawAmount;
		var actualAmount;
		var totalFee;
		var transferFee;
		var inspectFee   = 0;
		var table        = '';
		var summary      = '';
		var totalPenalty = '';
		var arr          = this.data.Inspectes;

		/*
		************************ 构造table************************
		*/
		table += 	'<div class="table table2">' +
						'<div class="thead">' +
							'<div class="tr">' +
								'<div class="th td1">序号</div>' +
								'<div class="th td2">日期</div>' +
								'<div class="th td3">存款</div>' +
								'<div class="th td4">优惠</div>' +
								'<div class="th td5">优惠活动</div>' +
								'<div class="th td6">现流水</div>' +
								'<div class="th td7">优惠要求流水</div>' +
								'<div class="th td8">存款要求流水</div>' +
							'</div>' +
						'</div>' +
						'<div class="tbody">';

		for(i = 0; i < arr.length; i++) {
            prefLaterText  = '';
            prefLaterColor = 'black';

            if (arr[i].PrefLaterSended) {
                prefLaterText = '<br/>（存款已稽核）';
                prefLaterColor = 'red';
            }

			table +=		'<div class="tr">' +
								'<div class="td td1">' + (i + 1) + '</div>' +
								'<div class="td td2">' + '起始：' + arr[i].BeginTime + '<br />' + '结束：' + arr[i].EndTime + '</div>' +
		            			'<div class="td td3" style="color:' + prefLaterColor + '">' + arr[i].DepositAmount + (arr[i].Type == 1 ? "(修正)" : "") + prefLaterText + '</div>' +
		            			'<div class="td td4">' + arr[i].PrefAmount + (arr[i].Type == 3 ? "(手工)" : "") + '</div>' +
		            			'<div class="td td5">' + (arr[i].PrefName?arr[i].PrefName: '-') + '</div>' +
		            			'<div class="td td6" title="总派彩：' + arr[i].TotalPayOut + '，分平台：' + arr[i].GamePayOutAmounts + '">' + arr[i].TotalBetAmountOfRevise + '</div>' +
		            			'<div class="td td7">' + arr[i].PrefInspectNeedBetAmount + '</div>' +
		            			'<div class="td td8">' + arr[i].NormalityInspectNeedBetAmount + '</div>' +
							'</div>';

			inspectFee += arr[i].PrefInspectFee + arr[i].NormalityInspectFee;
		}

		table += 		'</div>' +
					'</div>';

		inspectFee     = inspectFee.toFixed(2);
		transferFee    = this.data.TransferFee.toFixed(2);
		totalFee       = (parseFloat(inspectFee) + parseFloat(transferFee)).toFixed(2);
		withdrawAmount = this.opt.Amount;
		actualAmount   = (withdrawAmount - totalFee).toFixed(2);

		/*
		************************ 构造summary************************
		*/
		summary += 	'<div class="summary">' +
						'<span>申请提款：</span>' +
						'<span class="withdraw-amount">' + withdrawAmount + '</span>' +
						'<span>元，预计扣款合计：</span>' +
						'<span class="penalty-amount">' + totalFee + '</span>' +
						'<span>元，不允许提款。</span>' +
					'</div>';

		/*
		************************ 构造扣费总计***********************
		*/
		totalPenalty += '<div class="total-penalty">' +
							'<div>' +
								'<span class="text">预计扣款合计：</span>' +
								'<span class="value inspect-fee-value">' + inspectFee + '</span>' +
								'<span class="math-icon">+</span>' +
								'<span class="text">转账手续费：</span>' +
								'<span class="value transfer-fee-value">' + transferFee + '</span>' +
								'<span class="math-icon">=</span>' +
								'<span class="value total-fee-value">' + totalFee + '</span>' +
								'<span>。不允许提款。</span>' +
							'</div>' +
							'<div>' +
								'如对扣款有疑问，请联系客服人员' +
							'</div>' +
						'</div>';

		/*
		************************ 构造按钮区***********************
		*/
		buttonZone =	'<div class="button-zone">' +
							'<div class="button close">关闭</div>' +
						'</div>';

		temp = summary + table + totalPenalty + buttonZone;

		this.zone.find('.content').html(temp);
		this.zone.find('.table2 .thead').css('width', this.zone.find('.table2 .tbody').prop("clientWidth"));
	};

    WithdrawDialog.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	WithdrawDialog.prototype.commit = function() {
		var opt;
		var callback;
		var that = this;

		this.loader1.play();

		opt = {
			url: app.urls.withdraw,
			data: {
				BankAccountId: this.opt.BankAccountId,
				Amount: this.opt.Amount,
				WithdrawPwd: this.opt.WithdrawPwd,
				ConfirmSave: true
			}
		};

		callback = function (json) {
			that.loader1.stop();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json.Success === true && !json.NeedInspecte) {
				app.alert('取款成功', function () {
					that.hide();
				});
				
				app.refreshWallet();
			} else {
				app.alert('取款失败');
			}
		};

		Service.post(opt, callback);
	};

	WithdrawDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.withdraw-dialog');

		this.zone.delegate('.ok', 'click', function () {
			that.commit();
		});

		this.zone.delegate('.close', 'click', function () {
			that.hide();
		});

        PubSub.subscribe('onNotLoginIn', function (msg, data) {
        	that.hide();
        });
        
		this.bindOverlayEvents();
		this.createLoader();
	};

	window.WithdrawDialog = WithdrawDialog;
}());