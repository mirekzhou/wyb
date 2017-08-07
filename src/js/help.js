(function () {
	'use strict';

	function Help () {
        this.initEnv();

        this.timeout            = 12000;
        this.getWebPageByKeyUrl = this.domain + 'api/News/GetNewsByKey?';
        this.newsCategoriesUrl  = this.domain + 'api/News/GetSubcategories?';
    
		this.init();
		this.bindEvents();
        this.show();
	}

    Help.prototype.initEnv = function () {
        var env = window.VEB_ENV;

        //配置API域名 和 comet服务器域名
        if (env == 'debug') {
            this.domain      = '//api.evebets.com/';
        } else if (env == 'test') {
            this.domain      = '//api.evebets.com/';
        } else if (env == 'production') {
            this.domain      = '//api.vebets.com/';
        }

        //配置图片服务器域名
        if (location.href.substring(0,5) === 'https') {
            this.imageServer   = 'https://ojrcjvo0a.qnssl.com/';
        } else {
            this.imageServer   = 'http://ojnau7hqi.bkt.clouddn.com/';
        }
    };


	Help.prototype.init = function () {
		this.header   = new Header({
            helpPage: true
        });

		this.el  = 	this.header.getDom() +
    				'<div class="help-center">' + 
    					'<div class="wrapper">' +
                            '<div class="content">' +
                                '<div class="tree">' +
                                    '<div class="tree-title">' +
                                        '<div class="cn-title">' +
                                            '帮助中心' +
                                        '</div>' +

                                        '<div class="en-title">' +
                                            'HELP CENTER' +
                                        '</div>' +
                                    '</div>' +

                                    '<ul></ul>' +
                                '</div>' +

                                '<div class="help-content">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

		$('.app').append(this.el);
	};
	
    Help.prototype.getDom = function() {
        return this.el;
    };

    Help.prototype.show = function() {
        var i;
        var url = window.location.href;
        var pos = url.indexOf('item=');

        if (pos === -1) {
            this.itemName = 'about';
        } else {
            this.itemName = url.substring(pos + 5);
        }

        this.queryTreeItems();
    };

    Help.prototype.hide = function() {
        this.zone.hide();
    };

    Help.prototype.createTreeItems = function (arr) {
        var i;
        var temp = '';

        for (i = 0; i < arr.length; i++) {
            temp += '<li ' + (i === 0?'class="active" ': '') + 'data-key="' + arr[i].Key + '">' +
                        arr[i].Name +
                    '</li>';
        }

        temp += '<div class="stick"></div>';

        $('.app .tree ul').append(temp);
        this.resetHeight();
    };

    Help.prototype.resetHeight = function() {
        var treeH = $('.app .tree').height();
        var contH = $('.app .help-content').height();

        if (contH < treeH) {
            $('.app .help-content').css('min-height', $('.app .tree').css('height'));
        }
    };

    Help.prototype.queryTreeItems = function (key) {
        var key;
        var callback;
        var that    =  this;
        var opt     =  {
            url: this.newsCategoriesUrl,
            data: {
                category: 'help'
            }
        };

        $.ajax({
            type: 'GET',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
                withCredentials: true
            }
        }).done(function (json) {
            if (json.StatusCode && json.StatusCode != 0) {
                alert(json.Message);
                return;
            }

            that.createTreeItems(json);

            if (that.itemName) {
                that.getWebPageByKey(that.itemName);
                that.setActiveItem(that.itemName);
            } else {
                that.getWebPageByKey(json[0].Key);
                that.setActiveItem(json[0].Key);
            }
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
    };

    Help.prototype.setActiveItem = function (key) {
        var stick = this.zone.find('.tree ul .stick');
        var li    = this.zone.find('.tree ul li[data-key="' + key + '"]');
        var index = li.index();

        this.zone.find('.tree ul li').removeClass('active');
        li.addClass('active');
        stick.css('top', index * 50 + 'px');
    };

    Help.prototype.getWebPageByKey = function (key) {
        var callback;
        var that    =  this;

        $.ajax({
            type: 'GET',
            url: this.getWebPageByKeyUrl + 'key=' + key,
            dataType: 'json',
            timeout: this.timeout,
            xhrFields: {
                withCredentials: true
            }
        }).done(function (json) {
            if (json.StatusCode && json.StatusCode != 0) {
                alert(json.Message);

                if (json.Message === '信息不存在') {
                    that.itemName = 'about';
                    that.getWebPageByKey(that.itemName);
                    that.setActiveItem(that.itemName);
                }

                return;
            }

            that.zone.find('.help-content').html(json.Content);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
    };

    Help.prototype.bindEvents = function() {
        var treeUl;
        var stick;
        var index;
        var key;
        var that = this;

        this.zone = $('.help-center');
        treeUl    = this.zone.find('.tree ul');

        treeUl.delegate('li','click',function() {
            stick = treeUl.find('.stick');
            index = $(this).index();
            stick.css('top',index * 50 + 'px');

            treeUl.find('li').removeClass('active');
            $(this).addClass('active');

            key = $(this).attr('data-key');
            that.getWebPageByKey(key);
        });

        this.header.bindEvents();
    };

	window.Help = new Help();
})();
