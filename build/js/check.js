
(function () {
	'use strict';
    
/*    if (window.location.href.indexOf('http://vebets.com') !== -1 ||
        window.location.href.indexOf('http://www.vebets.com') !== -1 ) {

        window.location.href = 'https://www.vebets.com/' + window.location.hash;
        return;
    }*/

    var proxy;
    var tingyun         = false;
    var tingyunPosition = 'head';
    var mobiledomain    = '//m.vebets.com/';

    var getProxy     = function () {
        var i;
        var arr;
        var params = window.location.search.split('&');

        for (i = 0; i < params.length; i++) {
            arr = params[i].split('=');

            if (arr[0] === 'a' || arr[0] === '?a') {
                return arr[1];
            }
        }
    };

    var isMobile     = {
        android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        ios7up: function() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS [7|8|9]_\d/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        ipad: function () {
            var ios = this.ios();
            return !!(ios && ios[0] === 'iPad');
        },
        any: function() {
            return (this.android() || this.blackberry() || this.ios() || this.opera() || this.windows());
        }
    };

    proxy = getProxy();

    /*
    ** 移动端检测
    */
    if (isMobile.any()) {
        if (proxy) {
            window.location.href = mobiledomain + '?a=' + proxy;
        } else {
            window.location.href = mobiledomain;
        }

        return;
    }

    /*
    ** 听云检测配置
    */
    if (tingyun) {   
        var script = document.createElement('script');
        script.src = 'config/tingyun.js';

        if (tingyunPosition === 'head') {
            document.getElementsByTagName("head")[0].appendChild(script);
        } else {
            window.onload = function () {
                document.getElementsByTagName("body")[0].appendChild(script);
            };
        }
    }
})();