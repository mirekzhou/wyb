(function () {
	function ClientDownload () {
		this.firstShow = true;
		this.initDom();
	}
	
	ClientDownload.prototype.initDom = function () {
		var temp =	'<div class="page client-download">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<div class="tree">' +
									'<div class="tree-title">' +
										'<div class="cn-title">' +
											'下载中心' +
										'</div>' +

										'<div class="en-title">' +
											'DOWNLOAD CENTER' +
										'</div>' +
									'</div>' +

									'<ul>' +
										this.createTreeItems() +
									'</ul>' +
								'</div>' +

								'<div class="download-content"></div>' +
							'</div>' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	ClientDownload.prototype.getDom = function () {
		return this.el;
	};
    
    
    ClientDownload.prototype.getAGDom = function () {
      var temp =    '<div class="AG-guid"><p>AG安卓版下载操作指引</p></div>' +
	  			    '<div class="AG-downlodaWrap">' +
	                    '<ul class="AG-slider">' +	
		                  '<li>' +
		                  		'<div class="AG-slider-inner">' +
			                  		'<div class="step">' +
			                  			'<p>步骤1</p><span>通过真人视讯网页开启AG<span>' +
		                  			'</div>' +
		                  			'<div>' +
		                  				'<img src="img/AG-step1.png">' +
	                  				'</div>' +
		                  		'</div>' +
	                  	  '</li>' +

		                  '<li>' +
		                  		'<div class="AG-slider-inner">' +
			                  		'<div class="step">' +
			                  			'<p>步骤2</p><span>在AG游戏大厅，点击左下角<br>"手机版"立即体验<span>' +
		                  			'</div>' +
		                  			'<div>' +
		                  				'<img src="img/AG-step2.png">' +
	                  				'</div>' +
		                  		'</div>' +
	                  	  '</li>' +

	                  	  '<li>' +
		                  		'<div class="AG-slider-inner">' +
			                  		'<div class="step" style="margin-right:40px">' +
			                  			'<p>步骤3</p>' +
			                  			'<span>出现开通手机客户端教程弹窗，<br>' +
			                  			'并在左下方出现IOS与安卓系统<br>' +
			                  			'通用的二维码(此二维码有效期<br>' +
			                  			'10分钟，并且目前仅支持安卓)<span>' +
		                  			'</div>' +
		                  			'<div>' +
		                  				'<img src="img/AG-step3.png">' +
	                  				'</div>' +
		                  		'</div>' +
	                  	  '</li>' +

	                  	  '<li>' +
		                  		'<div class="AG-slider-inner">' +
			                  		'<div class="step" style="margin-left:60px;margin-right:190px">' +
			                  			'<p>步骤4</p>' +
			                  			'<span>手机扫码后，出现客户端下载<br>页面，点击下载安卓<span>' +
		                  			'</div>' +
		                  			'<div>' +
		                  				'<img src="img/AG-step4.png">' +
	                  				'</div>' +
		                  		'</div>' +
	                  	  '</li>' +   
	                   '</ul>' + 
	                   '<a class="unslider-arrow prev">' +
	           	   		  '<img class="arrow" src="img/arrow-l.png">' +
	                   '</a>' +
	                    '<a class="unslider-arrow next">' +
	           	   		  '<img class="arrow" src="img/arrow-r.png">' +
	                   '</a>' +
	       			'</div>'
       	return temp;		
    };

	ClientDownload.prototype.show = function (subRouter) {
		this.zone.fadeIn(500);
		this.subRouter = subRouter || '';

		if (this.firstShow) {
			this.getAds();

			if (this.subRouter) {
				this.zone.find('li[data-download=download-mt]').click();
			} else {
				this.getWebPageByKey('download-wyb');
			}

			this.firstShow = false;
		} else {
			if (this.subRouter) {
				this.zone.find('li[data-download=download-mt]').click();
			}
		}
	};

	ClientDownload.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	ClientDownload.prototype.createTreeItems2 = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				downloadKey: 'download-pt',
				left: -3,
				top: -5
			},
			{
				downloadKey: 'download-mg',
				left: -3,
				top: -56
			},
			{
				downloadKey: 'download-ab',
				left: -3,
				top: -106
			},
			{
				downloadKey: 'download-bbin',
				left: -3,
				top: -160
			},
			{
				downloadKey: 'download-kg',
				left: -3,
				top: -210
			},
			{
				downloadKey: 'download-ag',
				left: -3,
				top: -262
			},	
			{
				downloadKey: 'download-mt',
				left: -3,
				top: -312
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li ' + (i === 0?'class="active" ': '') + 'data-download="' + arr[i].downloadKey + '">' +
						'<span class="download-icon" style="background-position:' +
							arr[i].left + 'px ' + arr[i].top + 'px' + ';">' +
					'</li>';
		}

		temp += '<div class="stick"></div>';

		return temp;
	};

	ClientDownload.prototype.createTreeItems = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				downloadKey: 'download-wyb',
				className: 'download-wyb',
				text: '手机访问伟易博'
			},
			{
				downloadKey: 'download-pt',
				className: 'download-pt',
				text: 'PT电子'
			},
			{
				downloadKey: 'download-mg',
				className: 'download-mg',
				text: 'MG电子'
			},
			{
				downloadKey: 'download-ab',
				className: 'download-ab',
				text: 'AB真人'
			},
			{
				downloadKey: 'download-bbin',
				className: 'download-bbin',
				text: 'BBIN电子'
			},
			{
				downloadKey: 'download-kg',
				className: 'download-kg',
				text: 'KG彩票'
			},
			{
				downloadKey: 'download-ag',
				className: 'download-ag',
				text: 'AG电子'
			},	
			{
				downloadKey: 'download-mt',
				className: 'download-mt',
				text: 'MT电子'
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li ' + (i === 0?'class="active" ': '') + 'data-download="' + arr[i].downloadKey + '">' +
						'<span class="download-icon ' + arr[i].className + '"></span>' +
						'<span class="text">' + arr[i].text + '</span>' +
					'</li>';
		}

		temp += '<div class="stick"></div>';
		return temp;
	};

    ClientDownload.prototype.createLoader = function() {
        var wrapper = this.zone.find('.download-content')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	ClientDownload.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_download_ads',
				pageIndex: 0,
				pageSize: 1
			}
		};

		callback = function (data) {
			that.loader1.stop();

			if (!data) {
				return;
			}
			
			that.addSliders(data);
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	ClientDownload.prototype.getWebPageByKey = function (key) {
		var callback;
		var that = this;

		if (key === 'download-ag') {
			that.zone.find('.download-content').html(that.getAGDom());
			var unslider = $('.AG-downlodaWrap').unslider();

			$('.unslider-arrow').click(function() {
				var fn = this.className.split(' ')[1];
				unslider.data('unslider')[fn]();
			});
			
			return;
		}

		var opt = {
			url: app.urls.getWebPageByKey,
			data: {
				key: key
			}
		};

		this.loader1.play();
		callback = function (data) {
			that.zone.find('.download-content').html(data.Content);
			that.loader1.stop();
		};

		Service.get(opt, callback);
	};

	ClientDownload.prototype.addSliders = function (data) {
		var i;
		var pos;
		var temp;
		var link;
		var route;
		var arr = data.list;
		var len = arr.length;
		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			if (arr[i].Link.indexOf('/promoActivity/') != -1) {
				pos  = arr[i].Link.indexOf('/promoActivity/');
				temp = arr[i].Link.substring(pos + 15).split('/');
				
				if (!temp[0]) {
					temp[0] = 0;
				}

				if (!temp[1]) {
					temp[1] = 0;
				}
				
				logoTemp += 	'<li data-route="' + temp[0] + ' ' + temp[1] + '">' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
			} else if (arr[i].Link.substring(0,4) === 'http') {
				logoTemp += 	'<li data-link="' + arr[i].Link + '">' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
			} else {
				logoTemp += 	'<li>' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
			}
		}

		logoTemp +=		'</ul>';

		this.logoHtml = logoTemp;
		this.zone.find('.sliders').html(logoTemp);
		this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.zone.find('.sliders .unslider-carousel li').click(function () {
			link  = $(this).attr('data-link');
			route = $(this).attr('data-route');

			if (link) {
				window.open(link);
				return;
			}

			if (route) {
				route = route.split(' ');
				app.router.setRoute('/promoActivity/' + route[0] + '/' + route[1]);
				return;
			}
		});
	};

	ClientDownload.prototype.bindEvents = function () {
		var tree;
		var stick;
		var index;
		var top;
		var key;
		var h    = 50;
		var that = this;

		this.zone = $('.client-download');
		tree      = this.zone.find('.tree ul');
		stick     = tree.children('.stick');

		tree.delegate('li', 'click', function () {
			index = $(this).index();
			top   = h * index + 'px';
			stick.css('top', top);

			tree.find('li').removeClass('active');
			$(this).addClass('active');

			key = $(this).attr('data-download');
			that.getWebPageByKey(key);
		});

		this.createLoader();
	};

	window.ClientDownload = ClientDownload;
}());
