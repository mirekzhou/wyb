$(function () {
	function Service() {}

	Service.prototype.get = function(opt, callback) {
        var key;
        var task;
        var count  = 0;
        var that   = this;
		var i      = 0;
		var url    = opt.url;
		var params = {
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
            	withCredentials: true
            }
        };

        if (window.app) {
            params.timeout = window.app.timeout;
        } else {
            params.timeout = 200000;
        }

        if (opt.alert === undefined) {
            opt.alert = false;
        }

        for (key in opt.data) {
        	if (i === 0) {
        		url += key + '=' + opt.data[key];
        		i++;
        	} else {
        		url += '&' + key + '=' + opt.data[key];
        	}
        }

        params.url   = encodeURI(url);

        task = function () {
            $.ajax(params).done(function (json) {
                if (json && json.Message && json.Message === '未登录' && !opt.canLogout) {
                    PubSub.publish('onNotLoginIn', {});
                    return;
                }

                if (typeof callback === 'function') {
                    callback(json);
                }
            }).fail(function (xhr, testStatus, error) {
                console.log('【*****GET请求报错*****】：' + error);
                console.log('【*****参数*****】：' + JSON.stringify(opt));
                if (error === 'timeout') {
                    console.log('【*****请求超时, 系统自动重新发出请求****】：' + opt.url);
                    console.log('【*****参数*****】：' + JSON.stringify(opt));
                    count++;

                    if (count < 3) {
                        task();
                    }
                } else {
                    if (opt.alert === true) {
                        if (opt.errorText) {
                            app.alert(opt.errorText + ': ' + error);
                        }
                    }
                }
            });
        };

        task();
	};

	Service.prototype.post = function(opt, callback) {
        if (opt.alert === undefined) {
            opt.alert = true;
        }

        $.ajax({
            type: 'POST',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
            if (json && json.Message && json.Message === '未登录' && !opt.canLogout) {
                PubSub.publish('onNotLoginIn', {});
                return;
            }

        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            console.log('【*****POST请求报错*****】：' + error);
            console.log('【*****参数*****】：' + JSON.stringify(opt));
        });
	};

	Service.prototype.put = function(opt, callback) {
        $.ajax({
            type: 'PUT',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            console.log('【*****PUT请求报错*****】：' + error);
            console.log('【*****参数*****】：' + JSON.stringify(opt));
        });
	};

    Service.prototype.getLoginStatus = function (callback) {
        var opt  =  {
            url: app.urls.loginStatus,
            data: {}
        };

        this.get(opt, callback);
    };

    Service.prototype.getGameLoginUrl = function (platform, type, gameIdentify, cb) {
        var opt =  {
            url: app.urls.getGameLoginUrl,
            data: {
                gamePlatform: platform,
                gameType: type,
                gameId: gameIdentify
            }
        };

        var callback = function (data) {
            if (typeof cb === 'function') {
                cb(data);
            } else {
                window.open(data);
            }
        };

        this.get(opt, callback);
    };

	window.Service = new Service();
}());