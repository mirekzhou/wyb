
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
        var proxyArr = {
            'veb30.com'         :   'A000103',
            'veb36.com'         :   'A000104',
            'veb34.com'         :   'A000105',
            'veb35.com'         :   'A000106',
            'veb31.com'         :   'A000107',
            'veb37.com'         :   'A000108',
            'veb38.com'         :   'A000109',
            'veb39.com'         :   'A000116',
            'veb40.com'         :   'A000201',
            'veb45.com'         :   'A000300',
            'veb46.com'         :   'A000301',
            'veb47.com'         :   'A000302',
            'veb48.com'         :   'A000303',
            'veb49.com'         :   'A000304',
            'veb50.com'         :   'A000305',
            'veb51.com'         :   'A000306',
            'veb52.com'         :   'A000307',
            'veb53.com'         :   'A000310',
            'veb168.com'        :   'A000311',
            'haotianyule.com'   :   'A000294',
            'qz13800.com'       :   'A000297',
            'baidu888.cc'       :   'A000298'

        }
        for (i = 0; i < params.length; i++) {
            arr = params[i].split('=');
            if (arr[0] === 'a' || arr[0] === '?a') {
                return arr[1];
            }
        }

        for (var key in proxyArr) {
            if (window.location.host.indexOf(key) > -1){
                return proxyArr[key]; 
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