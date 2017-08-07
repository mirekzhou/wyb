/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
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
(function() {
    'use strict';

    var MILLI_SECONDS_PER_DAY = 24*60*60*1000;

    function Util () {}

    Util.prototype.initPlaceHolder = function(lang) {
        $('input, textarea').placeholder();
    };
    
    Util.prototype.initIE8 = function(lang) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    };
    
    Util.prototype.getTimepickerLang = function() {
        var lang = localStorage.getItem('*lang');
        var dict = {
            'zh-cn': 'zh',
            'zh-tw': 'zh-TW',
            'en-us': 'en'
        }

        return dict[lang];
    };

    Util.prototype.getIntervalDate = function (startDate, interval) {
        var temp = new Date(startDate.getTime() + MILLI_SECONDS_PER_DAY*interval);
        return temp;
    };

    Util.prototype.isMobile = {
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

    /**
     * Check browser
     * Copy from: http://stackoverflow.com/a/9851769
     */
    Util.prototype.isBrowser = {
        opera: function() {
            return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        },
        firefox: function () {
            return typeof InstallTrigger !== 'undefined';
        },
        safari: function () {
            return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        },
        chrome: function () {
            return !!window.chrome && !this.opera();
        },
        ie: function () {
            return /*@cc_on!@*/false || !!document.documentMode;
        },
        any: function () {
            return (this.opera() || this.firefox() || this.safari() || this.chrome() || this.ie());
        }
    };
    
    Util.prototype.getIntervalDate = function (startDate, interval) {
        var temp = new Date(startDate.getTime() + MILLI_SECONDS_PER_DAY*interval);
        return temp;
    };

    Util.prototype.formatNumToCur = function(num) {
        var sign;
        var cents;
        var i;
        num = num.toString().replace(/\$|\,/g,'');
        if(isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num*100+0.50000000001);
        cents = num%100;
        num = Math.floor(num/100).toString();
        if(cents<10)
        cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+
        num.substring(num.length-(4*i+3));
        return (((sign)?'':'-') + num + '.' + cents);
    };

    Util.prototype.formatCurToNum = function(num) {
        return parseFloat(num.replace(/\,/g, ''));
    };
    
    /* ----- Date ----- */
    /**
     * Format a date as 'yyyy/MM/dd hh/mm'
     */
    Date.prototype.formatDateAndTime = function () {
        return this.formatDate() +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes()) +
               ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds(): this.getSeconds());
    };

    /**
     * Format a date as 'MM-dd hh:mm'
     */
    Date.prototype.formatShortDateAndTime = function () {
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               '-' + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate()) +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes());
    };

    Date.prototype.formatTime = function () {
        return (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes()) +
               ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds(): this.getSeconds());
    };

    /**
     * Format a date as 'yyyy/MM/dd'
     */
    Date.prototype.formatDate = function (divider) {
        divider = divider || '/';
        return this.getFullYear() + divider + this.formatShortDate(divider);
    };

    /**
     * Format a date as 'MM/dd'
     */
    Date.prototype.formatShortDate = function (divider) {
        divider = divider || '/';
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               divider + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate());
    };

    Util.prototype.getDateByDateString = function(dataString){
        var arr = dataString.replace(/-| |:|\//g,',').split(',');
        var date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5] || '00');
        return date;
    };

    Util.prototype.formatStringToMdTime = function (time) {   //将字符串转换成美东时间
        var date;
        
        date  =  this.getDateByDateString(time);
        date  =  this.getIntervalDate(date, 0 - parseFloat(12 / 24));
        date  = date.formatDateAndTime();

        return date;
    };

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    window.Util = new Util();
}());

//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !window.Util.isMobile.any();

		/*
		**  IOS系统弹出框不能点击bug, 解决方法
		*/

		// if (this.isPC) {
		// 	this.zone.find('.dialog').css('transition', 'all .5s');
		// }

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	IMDialog.prototype.removeOverlayEvents = function () {
		this.zone.next('.overlay').unbind('click');	
	};

	window.IMDialog = IMDialog;
}());
(function(){
	function Alert(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	Alert.prototype = new IMDialog();

	Alert.prototype.initDom = function() {
		var temp = '<div class="alert">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="content">' +
								'</div>'+

								'<div class="button-zone">' +
									'<div class="button ok">确定</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay10"></div>';

		this.el = temp;
	};

	Alert.prototype.getDom = function() {
		return this.el;
	};

	Alert.prototype.show = function(content, cb, cb2) {
		content     = content || '';
		this.cb     = cb || '';
		this.cb2    = cb2 || '';
		this.okFlag = false;

		this.zone.find('.content').text(content);
		this.showOverlay();
	};

	Alert.prototype.hide = function() {
		this.hideOverlay();
		this.zone.find('.content').text('');

		if (!this.okFlag && this.cb2 && typeof this.cb2 === 'function') {
			this.cb2();
		}
	};

	Alert.prototype.isOpen = function() {
		return this.zone.css('display') !== 'none';
	};

	Alert.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.alert');

		this.zone.delegate('.ok', 'click', function () {
			that.okFlag = true;
			that.hide();

			if (typeof that.cb === 'function') {
				that.cb();
			}
		});

		$(document).keypress(function(e) {
		    if(e.which == 13) {
		    	that.okFlag = true;
		        that.hide();
		    }
		});

		this.bindOverlayEvents();
	};

	window.Alert = Alert;
}());
(function () {
	function Button(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.initDom();
	}

	Button.prototype.initDom = function() {
		var temp = 	'<div class="button' + (this.opt.className? (' ' + this.opt.className):'') + '" id="' + this.id + '">' +
						(this.opt.search?'<span class="pc-serach-icon"></span>': '') +
						'<span class="name">' +
							this.opt.name +
						'</span>' +
					'</div>';

		this.el = temp;
	};

	Button.prototype.getDom = function() {
		return this.el;
	};

	Button.prototype.setName = function(name) {
		this.zone.find('.name').text(name);
	};

	Button.prototype.active = function(name) {
		this.zone.addClass('btn-plugin-active');
		this.enable();
	};

	Button.prototype.deactive = function(name) {
		this.zone.removeClass('btn-plugin-active');
	};

	Button.prototype.isActive = function() {
		return this.zone.hasClass('btn-plugin-active');
	};

	Button.prototype.disable = function() {
		this.deactive();
		this.zone.addClass('btn-disabled');
	};

	Button.prototype.enable = function() {
		return this.zone.removeClass('btn-disabled');
	};

	Button.prototype.isDisable = function() {
		return this.zone.hasClass('btn-disabled');
	};

	Button.prototype.bindCallback = function (cb) {
		var that = this;

		this.zone = $('#' + this.id);

		if (this.opt.clickWaiting) {
			this.zone.click(function () {
				if (that.isDisable()) {
					return;
				}

				that.disable();
				that.deactive();
				cb();

				var st = setTimeout(function () {
					that.enable();
					clearTimeout(st);
				}, that.opt.clickWaiting);
			});
		} else {
			this.zone.click(function () {
				cb();
			});
		}
	};

	Button.prototype.bindEvents = function() {
		this.zone = $('#' + this.id);
		this.resetStyles();
	};

	Button.prototype.resetStyles = function() {
		if (this.opt.height) {
			this.zone.css({
				'height': this.opt.height + 'px',
				'line-height': this.opt.height + 'px'
			});
		}

		if (this.opt.width) {
			this.zone.css('width', this.opt.width + 'px');			
		}

		if (this.opt.backgroundColor) {
			this.zone.css('background-color', this.opt.backgroundColor);			
		}

		if (this.opt.color) {
			this.zone.css('color', this.opt.color);			
		}

		if (this.opt.fontSize) {
			this.zone.css('font-size', this.opt.fontSize);
		}
	};

	window.Button = Button;
}());
(function () {
	function Input(opt) {
		this.opt     = opt;
		this.id      = opt.id;
		this.pass    = false;
		this.opt.reg = this.opt.reg || '';
		this.initDom();
	}

	Input.prototype.initDom = function() {
		var temp =	'<div class="input" id="' + this.id + '">' +
						'<input value="" type="' + (this.opt.type?this.opt.type: 'text') + 
									  '" placeholder="' + (this.opt.placeholder? this.opt.placeholder: '') + '"' +
									  (this.opt.disabled?' disabled="disabled"': '') +
									  '>' +
						'<span class="warning-icon"></span>' +
						'<div class="clear"></div>' +
					'</div>';

		this.el = temp;
	};

	Input.prototype.getDom = function() {
		return this.el;
	};

	Input.prototype.isPass = function() {
		var value = this.getValue();

		if (!this.opt.canBlank) {
			if (value && value.match(this.opt.reg)) {
				return true;
			} else {
				return false;
			}
		}

		if (this.opt.canBlank) {
			if (!this.getValue()) {
				return true;
			} else {
				if (value.match(this.opt.reg)) {
					return true;
				} else {
					return false;
				}
			}
		}
	};

	Input.prototype.getValue = function() {
		return $.trim(this.zone.children('input').val());
	};

	Input.prototype.setValue = function(value) {
		this.zone.children('input').val(value);
	};

	Input.prototype.showWarning = function() {
		this.zone.children('.warning-icon').show();
	};

	Input.prototype.hideWarning = function() {
		this.zone.children('.warning-icon').hide();
	};

	Input.prototype.disable = function() {
		this.zone.find('input').attr('disabled', 'disabled');
	};

	Input.prototype.enable = function() {
		this.zone.find('input').attr('disabled', false);
	};

	Input.prototype.isAble = function() {
		return !(this.zone.find('input').attr('disabled') === 'disabled');
	};

	Input.prototype.setPass = function(val) {
		this.pass = val;
	};

	Input.prototype.checkInput = function() {
		if (this.isPass()) {
			this.hideWarning();
		} else {
			this.showWarning();
		}
	};

	Input.prototype.bindEvents = function(callback) {
		var value;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.children('input').bind('input', function () {
			that.checkInput();

			if (typeof callback === 'function') {
				callback();
			}
		});

		this.zone.children('input').bind('focus', function () {
			that.hideWarning();
		});

		this.resetStyles();
	};

	Input.prototype.resetStyles = function() {
		if (this.opt.height) {
			this.zone.css({
				'height': this.opt.height + 'px',
				'line-height': this.opt.height + 'px'
			});

			this.zone.children('input').css({
				'height': (parseInt(this.opt.height) - 3) + 'px',
				'line-height': (parseInt(this.opt.height) - 3) + 'px'
			});
		}

		if (this.opt.width) {
			this.zone.css('width', this.opt.width + 'px');			
		}

		if (this.opt.backgroundColor) {
			this.zone.css('background-color', this.opt.backgroundColor);			
		}

		if (this.opt.color) {
			this.zone.css('color', this.opt.color);			
		}

		if (this.opt.fontSize) {
			this.zone.css('font-size', this.opt.fontSize);
		}
	};

	window.Input = Input;
}());
/*
$.cookie('the_cookie'); //读取Cookie值
$.cookie(’the_cookie’, ‘the_value’); //设置cookie的值
$.cookie(’the_cookie’, ‘the_value’, {expires: 7, path: ‘/’, domain: ‘jquery.com’, secure: true});//新建一个cookie 包括有效期 路径 域名等
$.cookie(’the_cookie’, ‘the_value’); //新建cookie
$.cookie(’the_cookie’, null); //删除一个cookie
*/

jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};




(function () {
	function Notice (opt) {
		this.opt      = opt;
		this.date     = opt.date;
		this.content  = opt.content;
		this.hasBtn   = opt.hasBtn;
		this.initDom();
	}

	Notice.prototype.initDom = function () {
		var closeBtn='';
		var titleCls=" title-black";
		var moreCls=" more-grey";
		var backCls=" back-white";

		if(this.hasBtn){
			closeBtn='<img id="close-btn" src="../img/close-r.png">';
			titleCls="";
			moreCls="";
			backCls="";
		}

		var temp=	'<div class="notice'+backCls+'">'+
					   	'<div class="notice-right'+moreCls+'">'+
					     	'<span class="notice-date">'+this.date+'</span><span>更多公告</span>'+
					     	// closeBtn +
					   	'</div>' +
					   	'<div class="notice-left">'+
					     	'<img src="../img/notice.png">'+
					       	'<span class="notice-title'+titleCls+'">[重要公告]</span>'+
					       	'<span class="notice-content">'+this.content+'</span>'+
					   	'</div>'+
					'</div>'
		this.el  = temp;
	};

	Notice.prototype.getDom = function () {
		return this.el;
	};
	Notice.prototype.hide = function () {
	  this.el="";
	};

	Notice.prototype.bindEvents = function (callback) {
		var that = this;

		this.closeBtn = $('#close-btn');
		this.closeBtn.mouseover(function(){
			that.closeBtn.attr("src","../img/close-r-h.png")
		})
		this.closeBtn.mouseout(function(){
			that.closeBtn.attr("src","../img/close-r.png")
		})
		this.closeBtn.click(function () {
			$(".notice").hide();
		});
	};

	window.Notice = Notice;
}());

(function () {
	function Notice2 (opt) {
		this.opt =  opt;
		this.id  =  opt.id;
		// this.moreNotice =  opt.moreNotice || false;
		// this.close      =  opt.close || false;
		this.initDom();
	}

	Notice2.prototype.initDom = function () {
		var temp =	'<div class="notice2" id="' + this.id + '">' +
						'<div class="notice2-left">' +
							'<div class="speaker-icon"></div>' +
							
							'<div class="ul-wrapper">' +
								'<ul class="content-ul">' +
								'</ul>' +
							'</div>' +
						'</div>' +

						'<div class="notice2-right">' +
							'<div class="ul-wrapper">' +
								'<ul class="date-ul">' +
								'</ul>' +
							'</div>' +
							'<div class="moreNotice">更多公告</div>' +
							//'<div class="close">×</div>' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	Notice2.prototype.getDom = function () {
		return this.el;
	};

	Notice2.prototype.setContentItems = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createContentItem({
				content: data[i].Content_RemoveHtml,
				title: data[i].Title
			});
		}

		this.zone.find('.content-ul').html(temp);
	};

	Notice2.prototype.createContentItem = function (data) {
		var temp = 	'<li>' +
						'<div class="content">' + 
							'<div class="content-wrapper">' +
								data.content + 
							'</div>' +
						'</div>' +
					'</li>';

		return temp;
	};

	Notice2.prototype.setDateItems = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createDateItem({
				date: data[i].CreateTime
			});
		}

		this.zone.find('.date-ul').html(temp);
	};

	Notice2.prototype.createDateItem = function (data) {
		var temp =	'<li>' +
						data.date + 
					'</li>';

		return temp;
	};

	Notice2.prototype.startAnimation = function () {
		var top;
		var len;
		var liHeight  = 30;
		var contentUl = this.zone.find('.notice2-left ul');
		var dateUl    = this.zone.find('.notice2-right ul');

		this.interval = setInterval(function () {
			top = parseFloat(contentUl.css('top'));
			len = contentUl.children('li').length;

			if (top === (0 - liHeight * (len - 1))) {
				contentUl.css({
					'top': 0,
					'transition': 'none'
				});
				dateUl.css({
					'top': 0,
					'transition': 'none'
				});
			} else {
				top -= liHeight;
				contentUl.css({
					'top': top + 'px',
					'transition': 'top .5s'
				});
				dateUl.css({
					'top': top + 'px',
					'transition': 'top .5s'
				});
			}
		}, 5000);
	};

	Notice2.prototype.queryData = function() {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getAnnouncements,
			data: {
				pageIndex: 0,
				pageSize: 10
			}
		};

		callback = function (json) {
            if (json && json.StatusCode) {
                alert(json.Message);
                return;
            }

            that.setContentItems(json.list);
            that.setDateItems(json.list);
            that.bindLiEvents();
		};

		Service.get(opt, callback);
	};

	Notice2.prototype.hide = function () {
		clearInterval(this.interval);
		this.zone.hide();
	};

	Notice2.prototype.show = function () {
		this.zone.show();
	};

	Notice2.prototype.bindLiEvents = function (callback) {
		var contentWrapper;
		var contentUl;
		var dateUl;
		var that = this;

		this.zone = $('#' + this.id);
		contentUl = this.zone.find('.notice2-left ul');
		dateUl    = this.zone.find('.notice2-right ul');

		contentUl.children('li').hover(function () {
			clearInterval(that.interval);
			contentWrapper = $(this).find('.content-wrapper');
			contentWrapper.animate({'left': '-1000px'}, 15000, function () {
				contentWrapper.css({'left': '0'});
			});
		}, function () {
			contentWrapper = $(this).find('.content-wrapper');
			contentWrapper.stop();
			contentWrapper.css({'left': '0'});
			that.startAnimation();
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.zone.find('.moreNotice, .ul-wrapper').click(function () {
			app.personCenterRouter(3, 1);
		});
	};

	Notice2.prototype.bindEvents = function (callback) {
		var timeout;
		var that = this;

		this.zone = $('#' + this.id);

		timeout = setTimeout(function () {
			that.queryData();
			clearTimeout(timeout);
		}, 3000);
	};

	window.Notice2 = Notice2;
}());

$(function(){
	function Pager(opt) {
		this.opt       = opt;
		this.id        = opt.id;
		this.pageIndex = 0;
		this.pageSize  = opt.pageSize || 10;
		this.callback  = opt.callback;

		this.initDom();
	}

	Pager.prototype.initDom = function() {
		var temp;

		temp = '<div id="' + this.id +'" class="pager">';
					if (!this.opt.right) {
						temp += '<div class="left">' +
									'<span>目前加载</span>' +
									'<span class="total-count">0</span><span>条，</span>' +
									'<span>当前第</span>' +
									'<span class="current-page">1</span><span>页</span>' +
								'</div>' +

								'<div class="right">' +
									'<span class="prev"></span>' +
									'<div class="page-item"></div>' +
									'<span class="next"></span>' +
									'<span>共</span><span class="total-page">0</span><span>页</span>' +
								'</div>';
					} else {
						temp += '<div class="right" style="margin-left: 20px;">' +
									'<span class="prev"></span>' +
									'<div class="page-item"></div>' +
									'<span class="next"></span>' +
									'<span>共</span><span class="total-page">0</span><span>页</span>' +
								'</div>' +

								'<div class="right">' +
									'<span>目前加载</span>' +
									'<span class="total-count">0</span><span>条，</span>' +
									'<span>当前第</span>' +
									'<span class="current-page">1</span><span>页</span>' +
								'</div>';
					}

		temp +=	'</div>';

		this.el = temp;
	}

	Pager.prototype.getDom = function(){
		return this.el;
	}

	Pager.prototype.getData = function(){
		this.callback(this.pageIndex);
	}

	Pager.prototype.setButtonStatus = function() {
		var temp = '';
		var i    = this.pageIndex;

		if (i % 4 == 0 && i != 0 && i < this.pageCount) {
			while(i < this.pageCount && i < this.pageIndex + 4) {
				temp += '<span page-index="' + (i + 1) +'">' + (i + 1) + '</span>';
				i++;
			}

			this.zone.find('.page-item').html(temp);
		} else if (i % 4 == 3) {
			while(i - 3 <= this.pageIndex){
				temp += '<span page-index="' + (i - 2) +'">' + (i - 2) + '</span>';
				i++;
			}

			this.zone.find('.page-item').html(temp);
		}

		this.zone.find('.current-page').text(this.pageIndex + 1);
		this.zone.find('[page-index]').removeClass('selected');
		this.zone.find('[page-index=' + (this.pageIndex + 1) + ']').addClass('selected');
	};

	Pager.prototype.setTotal = function(total) {
		this.total     = total;
		this.pageCount = Math.ceil(total / this.pageSize);
		this.zone.find('.total-count').text(this.total);
		this.zone.find('.current-page').text(this.pageIndex + 1);
		this.zone.find('.total-page').text(this.pageCount);
		this.setPageItems();
	};

	Pager.prototype.setPageItems = function() {
		var i;
		var temp = '';

		for(i = 0; i < this.pageCount; i++) {
			if (i == 0) {
				temp += '<span page-index="1" class="selected">1</span>';
			} else if (i == 4) {
				break;
			} else {
				temp += '<span page-index="' + (i + 1) +'">' + (i + 1) + '</span>';
			}
		}

		this.zone.find('.page-item').html(temp);
	};

	Pager.prototype.bindEvents = function() {
		var that  = this;
		
		this.zone = $('#' + this.id);

		this.zone.delegate('.prev','click',function() {
			if (that.pageIndex != 0) {
				that.pageIndex--;
				that.getData();
				that.setButtonStatus();
			}
		});

		this.zone.delegate('.next','click',function() {
			if (that.pageIndex != that.pageCount - 1) {
				that.pageIndex++;
				that.getData();
				that.setButtonStatus();
			}
		});

		this.zone.delegate('[page-index]','click',function(){
			that.pageIndex = parseInt($(this).attr('page-index')) - 1;
			that.getData();
			that.setButtonStatus();
		});
	};

	window.Pager = Pager;

}());
(function () {
	function Select(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.data = opt.data || [];
		this.initDom();
	}

	Select.prototype.initDom = function() {
		var temp =	'<div class="select' + (this.opt.className?(' ' +this.opt.className): '') + '"' + ((this.opt.id)?(' id="' + this.opt.id + '"'):'') + '>' +
						'<select>' +
							this.createOptions() +
						'</select>' +
						'<div class="icon down-icon selet-down-icon"></div>' +
					'</div>';

		this.el = temp;
	};

	Select.prototype.getDom = function() {
		return this.el;
	};

	Select.prototype.createOptions = function() {
		var i;
		var temp = '';

		for (i = 0; i < this.data.length; i++) {
			temp += '<option data-value="' + this.data[i].value + '">' + this.data[i].text + '</option>';
		}

		return temp;
	};

	Select.prototype.setOptions = function(temp) {
		this.zone.children('select').html(temp);
	};

	Select.prototype.getValue = function() {
		return this.zone.find('select option:selected').attr('data-value');
	};

	Select.prototype.setValue = function(value) {
		var option = this.zone.find('select option[data-value="' + value + '"]');
		this.zone.children('select').val(option.text());
	};

	Select.prototype.getText = function() {
		return this.zone.find('select option:selected').text();
	};

	Select.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('#' + this.id);
		this.resetStyles();
	};

	Select.prototype.resetStyles = function() {
		if (this.opt.height) {
			this.zone.css({
				'height': this.opt.height + 'px',
				'line-height': this.opt.height + 'px'
			});
		}

		if (this.opt.width) {
			this.zone.css('width', this.opt.width + 'px');			
		}

		if (this.opt.backgroundColor) {
			this.zone.css('background-color', this.opt.backgroundColor);			
		}

		if (this.opt.color) {
			this.zone.css('color', this.opt.color);			
		}

		if (this.opt.fontSize) {
			this.zone.css('font-size', this.opt.fontSize);
		}
	};

	window.Select = Select;
}());
(function () {
	function Loader (wrapper, options) {
		var opt = {
            lines: 12,
            length: 8,
            width: 2,
            radius: 8,
            corners: 1,
            rotate: 0,
            speed: 1,
            trail: 60,
            hwaccel: true,
            left: '50%',
            top: '55%',
            position: 'absolute',
            color: '#FFF'
        };

        $.extend(opt, options);
        this.wrapper = wrapper;
        this.spinner = new Spinner(opt);
	}

	Loader.prototype.play = function () {
		this.spinner.spin( this.wrapper );
	};

	Loader.prototype.stop = function () {
		this.spinner.stop();
	};

	window.Loader = Loader;
}());
/**
 * Created by Annie on 2016/9/3.
 */
(function () {
    function Suspension(opt) {
        this.opt = opt;
        this.initDom();
    }

    Suspension.prototype.initDom = function() {
        var temp =  '<ul class="suspension">' +
                        '<li class="go-loginer">' +
                            '<div class="icon loginer-icon"></div>' +
                            '<div class="slipper">伟易博专用登录器</div>' +
                        '</li>' +
                        '<li>' +
                            '<div class="icon phone-icon"></div>' +
                            '<div class="slipper">客服电话 +639158888877</div>' +
                        '</li>' +
                        '<li>' +
                            '<div class="icon qq-icon"></div>' +
                            '<div class="slipper">客服QQ 87611136</div>' +
                        '</li>' +
                        '<li class="cs-online">' +
                            '<div class="icon wechat-icon"></div>' +
                            '<div class="slipper">24小时在线客服</div>' +
                        '</li>' +
                        // '<li>' +
                        //     '<div class="icon compass-icon"></div>' +
                        // '</li>' +
                        '<li class="to-top">' +
                            '<div class="icon top-icon"></div>' +
                        '</li>' +
                    '</ul>';

        this.el = temp;
    };

    Suspension.prototype.getDom = function() {
        return this.el;
    };

    Suspension.prototype.bindEvents = function() {
        this.zone = $('.suspension');

        this.zone.find('.cs-online').click(function () {
            PubSub.publish('onlineCS', {});
        });

        this.zone.find('.to-top').click(function () {
            $('body').animate({ scrollTop: 0 });
        });

        this.zone.find('.go-loginer').click(function () {
            window.open(app.loginerUrl);
        });
    };

    window.Suspension = Suspension;

}());
(function () {
	function Switch (opt) {
		this.opt = opt;
		this.id  = opt.id;
		this.initDom();
	}
	
	Switch.prototype.initDom = function () {
		var temp =	'<div class="switch" id="' + this.id + '">' +
						'<div class="switch-ball">' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	Switch.prototype.getDom = function () {
		return this.el;
	};

	Switch.prototype.bindEvents = function (callback) {
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.click(function () {
			that.zone.toggleClass('switch-selected');

			if (typeof callback === 'function') {
				callback();
			}
		});
	};

	window.Switch = Switch;
}());

$(function(){
	function Tab(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.data = opt.titles;
		this.initDom();
	}

	Tab.prototype.initDom = function() {
		var temp = 	'<ul class="tab" id="' + this.id + '">' +
						this.createTitle() +
						'<li class="stick">' +
							'<div class="filler"></div>' +
						'</li>' +
					'</ul>';

		this.el = temp;
	}

	Tab.prototype.createTitle = function() {
		var i;
		var temp = '';

		for (i = 0; i < this.data.length; i++) {
			if (i === 0) {
				temp += '<li class="selected"><span>' + this.data[i] + '</span></li>';
			} else {
				temp += '<li><span>' + this.data[i] + '</span></li>';
			}
			
		}

		return temp;
	}

	Tab.prototype.getDom = function() {
		return this.el;
	}

	Tab.prototype.bindEvents = function() {
		var index;
		var stick;
		var that = this;

		this.zone = $('#' + this.id);
		stick     = this.zone.find('.stick');

		this.zone.find('li:not(.stick)').click(function () {
			index = $(this).index();

			that.zone.find('li').removeClass('selected');
			$(this).addClass('selected');
			stick.css('left', 150 * index + 'px');
		});
	}

	window.Tab = Tab;
}());
(function () {
	function Advertisement () {
		this.footballUrl  = 'http://soccer.vebets.com';
		this.adVideoTitle = '2017伟易博与您携手观战4月西班牙人VS巴塞罗那大战!';
		this.adVideoSrc   = 'https://ojrcjvo0a.qnssl.com/football.mp4';
		this.initDom();
	}

	Advertisement.prototype.initDom = function () {
		var temp =	'<div class="advertisement">' +
						'<span class="close">×</span>' +
						'<img src="../img/advertisement.png">' +
						'<div class="video-zone">' +
							'<div class="title">' + this.adVideoTitle + '</div>' +
							'<video controls="controls" autoplay="autoplay" preload="none" src="' + this.adVideoSrc + '"></video>' +
						'</div>' +
					'</div>' + 

					'<div class="advertise-overlay"></div>';
		
		this.el  = temp;
	};

	Advertisement.prototype.show = function() {
		this.zone.show();
		this.zone.next('.advertise-overlay').show();
	};

	Advertisement.prototype.hide = function() {
		this.zone.hide();
		this.zone.next('.advertise-overlay').hide();
		this.zone.find('video')[0].pause();
	};

	Advertisement.prototype.getDom = function () {
		return this.el;
	};

	Advertisement.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('.advertisement');

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.zone.next('.advertise-overlay').click(function () {
			that.hide();
		});

		this.zone.find('.title').click(function () {
			window.open(that.footballUrl);
		});
	};

	window.Advertisement = Advertisement;
}());

$(function(){
	function Announcement(opt){
		this.opt = opt;
		this.initDom();
	}

	Announcement.prototype.initDom = function(){
		var temp;

		this.button = new Button({
			id: 'announcement-info-button',
			name: '查询',
			width: 60,
			height: 25			
		});

		this.pager = new Pager({
			id: 'announcement-pager',
			callback: this.bindData.bind(this)
		});

		temp = '<div class="announcement-info znx-info-action">' +
						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' +
									'<th>通知内容</th><th>时间</th>' +
								'</tr><thead>' +
								'<tbody>' +
								'</tbody>' +
							'</table>' + 

					 		'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +
				'</div>';


		this.el = temp;
	}

	Announcement.prototype.getDom = function(){
		return this.el;
	}

	Announcement.prototype.show = function() {
		this.zone.show();
		this.queryData(0, true);
	}

	Announcement.prototype.hide = function (){
		this.zone.hide();
	}

    Announcement.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	Announcement.prototype.queryData = function(pageIndex, firstTime) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getAnnouncements,
			data: {
				pageIndex: pageIndex,
				pageSize: 10
			}
		};

		callback = function (json) {
            if (json && json.StatusCode) {
                app.alert(json.Message);
                return;
            }

            that.setData(json.list);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	Announcement.prototype.setData = function(data){
		var dom = '';
		var i = 0;
		var currentData = data;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td class="letter"><p>' + currentData[i].Content_RemoveHtml + '</p></td>' +
							'<td class="datetime">' + currentData[i].CreateTime + '</td>' +							
						'</tr>';
			}else{
				dom +=	'<tr class="even">' +
							'<td class="letter"><p>' + currentData[i].Content_RemoveHtml + '</p></td>' +
							'<td class="datetime">' + currentData[i].CreateTime + '</td>' +			
						'</tr>';
			}
		}

		this.zone.find('.table-zone  table > tbody').html(dom);
	}

	Announcement.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	Announcement.prototype.bindEvents = function () {
		var that     = this;

		this.zone    = $('.announcement-info');

        this.zone.find('#announcement-info-button').click(function () {
        	that.queryData(0, true);
        });

        this.zone.find('table tbody').delegate('tr', 'click', function () { 
        	app.showReadMessageDialog({
        		datetime: $(this).children('.datetime').text(),
        		letter: $(this).find('.letter p').text(),
        		type: 'announcement',
        		title: '公告'
        	});
        });

		this.pager.bindEvents();
		this.createLoader();
	};

	window.Announcement = Announcement;
}());
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

/*						'<div class="row row3">' +
							'<div class="text">生' + filler + '日</div>' +
							'<input class="birthday" type="text" />' +
						'</div>' + */

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
		var data = app.userTotalInfo;

		if (data.TrueName) {
			name = this.formatUserName(data.TrueName);
			this.realNameInput.setValue(name);
			this.zone.find('.contactcs').text('修改请联系客服');
			this.realNameInput.disable();
			this.button.disable();
		} else {
			this.realNameInput.setValue('');
			this.zone.find('.contactcs').text('姓名须与您提款银行卡姓名一致，否则无法提款');
			this.realNameInput.enable();
			this.button.enable();
		}

		//this.zone.find('.address').val(app.userTotalInfo.Address || '');
	};

	BasicInfo.prototype.commit = function() {
		var i;
		var callback;
		var that = this;

		var opt  = {
			url: app.urls.updateUserInfo,
			data: {
				TrueName: this.realNameInput.getValue()
			}
		};
		
		if (this.button.isDisable()) {
			return;
		}

		if (!this.realNameInput.isPass()) {
			app.alert('真实姓名格式错误');
			return;
		}

		callback = function (data) {
			if (data === true) {
				app.alert('修改成功');
				app.getUserInfo(function () {
					that.setUserInfo();
				});
			} else {
				app.alert('修改失败');
			}
		};

		Service.post(opt, callback);
	};

	BasicInfo.prototype.commit2 = function() {
		var i;
		var callback;
		var that     = this;
		var birthday = $.trim(this.zone.find('.birthday').val());
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

		this.zone = $('.basic-info');
		this.zone.find('.birthday').datetimepicker({
			value: app.userTotalInfo.Birthday || today,
			timepicker: false,
			format:"Y-m-d",
			theme: 'dark', 
			lang: 'zh',
			minDate: minDate
		});

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
		this.button.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
	};

	window.BasicInfo = BasicInfo;
}());
(function () {
	function BettingRecord () {
		this.initDom();
	}
	
	BettingRecord.prototype.initDom = function () {
		var temp;

		this.select = new Select({
			id: 'betting-record-select',
			width: 100,
			height: 32,
			data: []
		});

		this.button = new Button({
			id: 'betting-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'bet-record-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="betting-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="select-zone">' +
									'<span class="title">游戏类型</span>' +
									this.select.getDom() +
								'</div>' +

								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">总投注额：</span>' +
								'<span class="value total-bet">0.00</span>' +
								'<span class="text">有效投注：</span>' +
								'<span class="value effect-bet">0.00</span>' +
								'<span class="text">单量：</span>' +
								'<span class="value records-amount">0</span>' +
								'<span class="text">派奖：</span>' +
								'<span class="value return-money">0.00</span>' +
							'</div>' +				
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' + 
									'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
									'<th>游戏平台</th>' +
									'<th>总投注额</th>' +
									'<th>有效投注额</th>' +
									'<th>派彩</th>' +
									'<th>单量</th>' +
								'</tr></thead>' +
								'<tbody>' +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	BettingRecord.prototype.getDom = function () {
		return this.el;
	};

	BettingRecord.prototype.show = function(){
		var that = this;

		this.zone.show();

		if (!this.firstTime) {
			if (app.allApiData) {
				this.setPlatforms(app.allApiData);
				this.firstTime = true;
			} else {
				app.getAllPlatforms(function (data) {
					that.setPlatforms(app.allApiData);
					that.firstTime = true;
				});
			}
		}

		this.queryData(0, true);
		this.queryTotal();
	}

	BettingRecord.prototype.hide = function(){
		this.zone.hide();
	}

	BettingRecord.prototype.setPlatforms = function(data) {
		var i;
		var temp = '<option data-value="-1">游戏类型</option>';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].GamePlatform + '">' +
						data[i].GameName +
					'</option>';
		}

		this.select.setOptions(temp);
	};

    BettingRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	BettingRecord.prototype.queryData = function(pageIndex, firstTime){
		var opt;
		var callback;
		var gamePlatform = '';
		var params       = '';
		var that         = this;
		var starttime    = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime      = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		var val          = this.select.getValue();

		this.loader1.play();

		if (val != -1) {
			gamePlatform = val;
		}

		opt = {
			url: app.urls.bettingRecords,
			data: {
				startTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10,
				gamePlatform: gamePlatform
			}
		};

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);
        	
        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	BettingRecord.prototype.queryTotal = function() {
		var gamePlatform = '';
		var params       = '';
		var that         = this;
		var starttime    = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime      = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		var val          = this.select.getValue();

		if (val != -1) {
			gamePlatform = val;
		}
		
		var opt = {
			url: app.urls.getBettingTotal,
			data: {
				gamePlatform: gamePlatform,
				startTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total-bet').text(json.Bet.toFixed(2));
			that.zone.find('.bar-zone .effect-bet').text(json.RealBet.toFixed(2));
			that.zone.find('.bar-zone .records-amount').text(json.Num);
			that.zone.find('.bar-zone .return-money').text(json.PayOut.toFixed(2));
		};

		Service.get(opt, callback);
	};

	BettingRecord.prototype.setData = function(data){
		var i           = 0;
		var dom         = '';
		var currentData = data.list;	

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].GamePlatform + '</td>' +
							'<td>' + currentData[i].Bet + '</td>' +
							'<td>' + currentData[i].RealBet + '</td>' +
							'<td>' + currentData[i].PayOut + '</td>' +
							'<td>' + currentData[i].Num + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].GamePlatform + '</td>' +
							'<td>' + currentData[i].Bet + '</td>' +
							'<td>' + currentData[i].RealBet + '</td>' +
							'<td>' + currentData[i].PayOut + '</td>' +
							'<td>' + currentData[i].Num + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	BettingRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	BettingRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	BettingRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -15);

		this.zone    = $('.betting-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#betting-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.button.bindEvents();
		this.select.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.BettingRecord = BettingRecord;
}());

$(function() {
	function CardBindDialog(opt) {
		IMDialog.call(this, opt || {});

		this.firstTime = true;
		this.initDom();
	}

	CardBindDialog.prototype = new IMDialog();

	CardBindDialog.prototype.initDom = function() {
		this.selectBank = new Select({
			id: 'card-bind-bank',
			width: 450,
			height: 40,
			data:[
				{
					'text': '请选择您的开户银行',
					'value': '-1'
				}
			]
		});

		this.selectProvince = new Select({
			id: 'card-bind-province',
			width: 100,
			height: 36,
			data:[
				{
					'text': '省',
					'value': '-1'
				}
			]
		});

		this.selectCity = new Select({
			id: 'card-bind-city',
			width: 100,
			height: 36,
			data:[
				{
					'text': '市',
					'value': '-1'
				}
			]
		});

/*		this.moneyPwdInput = new Input({
			id: 'cbd-money-pwd-input',
			width: 450,
			height: 40,
			placeholder: '请输入您的资金密码',
			type: 'password',
			reg: app.moneyPasswordReg
		});*/

		this.branchBankInput = new Input({
			id: 'cbd-branch-bank-input',
			width: 450,
			height: 40,
			placeholder: '请填写您的支行名称',
			reg: app.chineseReg
		});

		this.cardNumberInput = new Input({
			id: 'cbd-card-number-input',
			width: 450,
			height: 40,
			placeholder: '请输入您的银行卡卡号',
			reg: app.bankCardReg
		});

		this.cardOwnerInput = new Input({
			id: 'cbd-card-owner-input',
			width: 450,
			height: 40,
			placeholder: '请输入开户人姓名',
			reg: app.chineseNameReg,
			disabled: true
		});

		var temp = '<div class="card-bind-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">绑定银行卡</div>' +

								'<div class="row">' +
									this.cardOwnerInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.selectBank.getDom() +
								'</div>' +

								'<div class="row">' +
									this.selectProvince.getDom() +
									this.selectCity.getDom() +
									'<span>* 请选择您的开户银行所在地</span>' +
								'</div>' +

/*								'<div class="row">' +
									this.moneyPwdInput.getDom() +
								'</div>' +*/

								'<div class="row">' +
									this.branchBankInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.cardNumberInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>'+

					'<div class="overlay overlay8"></div>';

		this.el = temp;
	};

	CardBindDialog.prototype.getDom = function(){
		return this.el;
	};

	CardBindDialog.prototype.show = function(opt) {
		this.showOpt  = opt;
		this.bindFlag = false;  //是否绑定成功的标识。

		this.showOverlay();
		this.setUserInfo();
		
		if (this.firstTime) {
			this.loader1.play();
			this.getBankList();
			this.getProvinceList();
			this.firstTime = false;
		}

		if (!this.firstTime && (!this.request1 || !this.request2)) {
			this.loader1.play();
			this.getBankList();
			this.getProvinceList();
		}
	};

	CardBindDialog.prototype.hide = function() {
		this.hideOverlay();
		this.resetDialog();

		if (this.showOpt) {
			if (this.bindFlag) {
				if (this.showOpt.successHideCallback &&  typeof this.showOpt.successHideCallback === 'function') {
					this.showOpt.successHideCallback();
				}
			} else {
				if (this.showOpt.failedHideCallback &&  typeof this.showOpt.failedHideCallback === 'function') {
					this.showOpt.failedHideCallback();
				}
			}
		}
	};

	CardBindDialog.prototype.setUserInfo = function() {
		var data = app.userTotalInfo;
		var name = this.formatUserName(data.TrueName);

		this.cardOwnerInput.setValue(name);
	};

	CardBindDialog.prototype.formatUserName = function(name) {
		var nameLen   =  name.length;
		var tailname  =  name[nameLen - 1];
		var nameStart =  '';

		for (i = 0; i < nameLen - 1; i++) {
			nameStart += '*';
		}

		return nameStart + tailname;
	};

    CardBindDialog.prototype.resetDialog = function() {
		//this.moneyPwdInput.setValue('');
		this.branchBankInput.setValue('');
		this.cardNumberInput.setValue('');
		this.zone.find('.ok').removeClass('active');
		this.allPass = false;
    };

    CardBindDialog.prototype.checkRequestStatus = function() {
    	if (this.request1 && this.request2) {
    		this.loader1.stop();
    	}
    };

	CardBindDialog.prototype.checkInputPass = function () {
		if (this.branchBankInput.isPass() &&
			this.cardNumberInput.isPass()) {

			this.zone.find('.ok').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.ok').removeClass('active');
			this.allPass = false;
		}

		return this.allPass;
	};

    CardBindDialog.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	CardBindDialog.prototype.createBankUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						'<img src="' + app.imageServer + data[i].LogoImg + '" />' +
						'<span class="name">' + data[i].BankName + '</span>' +
					'</option>';
		}

		this.selectBank.setOptions(temp);
	};

	CardBindDialog.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	CardBindDialog.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	CardBindDialog.prototype.getBankList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getBankList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createBankUl(data);
			that.request1 = true;
			that.checkRequestStatus();
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.getProvinceList = function() {
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

	CardBindDialog.prototype.getCityList = function(provinceId) {
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
			that.request2 = true;
			that.checkRequestStatus();
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.bindCard = function() {
		var callback;
		var opt;
		var that       = this;
		var bankId     = this.selectBank.getValue();
		var provinceId = this.selectProvince.getText();
		var cityId     = this.selectCity.getText();
		//var moneyPwd   = this.moneyPwdInput.getValue();
		var branchBank = this.branchBankInput.getValue();
		var bankNumber = this.cardNumberInput.getValue();
		var owner      = app.userTotalInfo.TrueName;

		if (!this.checkInputPass()) {
			app.alert('请按要求填写相关信息!');
			this.resetVerifyCode();
			return;
		}

		opt = {
			url: app.urls.addUserBank,
			data: {
				BankId: bankId,
				Province: provinceId,
				City: cityId,
				BranchName: branchBank,
				AccountNo: bankNumber,
				//WithdrawalPwd: moneyPwd,
				AccountName: owner
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				app.alert(data.Message);
				that.hide();
				return;
			}

			app.alert('绑定成功');
			that.bindFlag = true;
			PubSub.publish('onCardBinded', {});
			PubSub.publish('onSecurityLevelChanged', {});
			that.hide();
		};

		Service.post(opt, callback);
	};

	CardBindDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.card-bind-content');

		this.zone.find('.ok').click(function() {
			if (!$(this).hasClass('active')) {
				return;
			}

			that.bindCard();
		});

		this.zone.find('.cancel').click(function() {
			that.hide();
		});

		this.zone.find('#card-bind-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.selectBank.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
		//this.moneyPwdInput.bindEvents(this.checkInputPass.bind(this));
		this.branchBankInput.bindEvents(this.checkInputPass.bind(this));
		this.cardNumberInput.bindEvents(this.checkInputPass.bind(this));
		this.cardOwnerInput.bindEvents(this.checkInputPass.bind(this));
        this.bindOverlayEvents();
        this.createLoader();
	};

	window.CardBindDialog = CardBindDialog;

}());
$(function(){
	function ChangeLoginPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ChangeLoginPwdDialog.prototype = new IMDialog();

	ChangeLoginPwdDialog.prototype.initDom = function() {
		var inputWidth  = 280;
		var inputHeihgt = 30;

		this.oldPasswordInput = new Input({
			id: 'clp-old-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请输入您的旧密码',
			type: 'password'
		});

		this.newPasswordInput = new Input({
			id: 'clp-new-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请输入您的新密码',
			type: 'password'
		});

		this.verifyPasswordInput = new Input({
			id: 'clp-verify-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请再次输入您的新密码',
			type: 'password'
		});

		var temp = '<div class="change-login-pwd-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row0">' +
									'修改密码' +
								'</div>' +

								'<div class="row">' +
									'<span class="title">旧密码</span>' +
									this.oldPasswordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<span class="title">新密码</span>' +
									this.newPasswordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<span class="title">新密码</span>' +
									this.verifyPasswordInput.getDom() +
								'</div>' +

								'<div class="btn-row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	ChangeLoginPwdDialog.prototype.getDom = function(){
		return this.el;
	};

	ChangeLoginPwdDialog.prototype.show = function() {
		this.resetDialog();
		this.showOverlay();
	};

	ChangeLoginPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	};

	ChangeLoginPwdDialog.prototype.resetDialog = function() {
		this.allPass = false;
		this.oldPasswordInput.setValue('');
		this.newPasswordInput.setValue('');
		this.verifyPasswordInput.setValue('');
		this.zone.find('.ok, .cancel').removeClass('active');
	};

	ChangeLoginPwdDialog.prototype.commit = function() {
		var callback;
		var opt;
		var that   = this;
		var oValue = $.trim(this.oldPasswordInput.getValue());
		var nValue = $.trim(this.newPasswordInput.getValue());
		var rValue = $.trim(this.verifyPasswordInput.getValue());

		if (nValue !== rValue) {
			app.alert('新密码和确认密码不一样!');
			return;
		}

		opt  = {
			url: app.urls.changeLoginPassword,
			
			data: {
				NewPassword: nValue,
				ConfirmPassword: oValue    //确认密码就是旧密码
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				app.alert(data.Message);
				return;
			}

			if (data === true) {
				app.alert('修改成功!');
				that.hide();
			} else {
				app.alert('修改失败!');
			}
		};

		Service.post(opt, callback);
	};

	ChangeLoginPwdDialog.prototype.checkInputPass = function () {
		if (this.oldPasswordInput.isPass() && 
			this.newPasswordInput.isPass() &&
			this.verifyPasswordInput.isPass()) {

			this.zone.find('.ok, .cancel').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.ok, .cancel').removeClass('active');
			this.allPass = false;
		}
	};

	ChangeLoginPwdDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.change-login-pwd-dialog');

		this.zone.find('.ok').click(function () {
			if ($(this).hasClass('active')) {
				that.commit();
			}
		});

		this.zone.find('.cancel').click(function () {
			that.hide();
		});

		this.oldPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.newPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyPasswordInput.bindEvents(this.checkInputPass.bind(this));
        this.bindOverlayEvents();
	};

	window.ChangeLoginPwdDialog = ChangeLoginPwdDialog;

}());
$(function(){
	function ChangeWithdrawPwdDialog(opt){
		this.opt = opt || {};
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ChangeWithdrawPwdDialog.prototype = new IMDialog();

	ChangeWithdrawPwdDialog.prototype.initDom = function() {
		var inputWidth  = 280;
		var inputHeihgt = 30;

		this.oldPasswordInput = new Input({
			id: 'cwp-old-password-input',
			width: inputWidth,
			height: inputHeihgt,
			placeholder: '请输入您的旧密码',
			type: 'password',
			reg: app.moneyPasswordReg
		});

		this.newPasswordInput = new Input({
			id: 'cwp-new-password-input',
			width: inputWidth,
			height: inputHeihgt,
			placeholder: '请输入您的新密码',
			type: 'password',
			reg: app.moneyPasswordReg
		});

		this.verifyPasswordInput = new Input({
			id: 'cwp-verify-password-input',
			width: inputWidth,
			height: inputHeihgt,
			placeholder: '请再次输入您的新密码',
			type: 'password',
			reg: app.moneyPasswordReg
		});

		var temp = '<div class="change-withdraw-pwd-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row0">' +
									'修改密码' +
								'</div>' +

								'<div class="row old-pwd">' +
									'<span class="title old-pwd-title">旧密码</span>' +
									this.oldPasswordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<span class="title new-pwd-title">新密码</span>' +
									this.newPasswordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<span class="title confirm-pwd-title">新密码</span>' +
									this.verifyPasswordInput.getDom() +
								'</div>' +

								'<div class="btn-row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	ChangeWithdrawPwdDialog.prototype.getDom = function(){
		return this.el;
	};

	ChangeWithdrawPwdDialog.prototype.show = function(){
		this.resetDialog();
		this.showOverlay();
	};

	ChangeWithdrawPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	};

	ChangeWithdrawPwdDialog.prototype.resetDialog = function() {
		this.allPass = false;
		this.oldPasswordInput.setValue('');
		this.newPasswordInput.setValue('');
		this.verifyPasswordInput.setValue('');
		this.zone.find('.ok, .cancel').removeClass('active');
	};

	ChangeWithdrawPwdDialog.prototype.commit = function() {
		var callback;
		var opt;
		var that   = this;
		var oValue = $.trim(this.oldPasswordInput.getValue()) || '';
		var nValue = $.trim(this.newPasswordInput.getValue());
		var rValue = $.trim(this.verifyPasswordInput.getValue());

		if (nValue !== rValue) {
			app.alert('新密码和确认密码不一样!');
			return;
		}
		
		opt  = {
			url: app.urls.changeWithdrawPassword,
			
			data: {
				oldPwd: oValue,
				newPwd: nValue
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				app.alert(data.Message);
				return;
			}

			if (data === true) {
				app.alert('修改成功!');
				app.personCenterDialog.security.setWithdrawFlag(true);
				that.hide();
			} else {
				app.alert('修改失败!');
			}
		};

		Service.post(opt, callback);
	};

	ChangeWithdrawPwdDialog.prototype.checkInputPass = function () {
		if (this.oldPasswordInput.isPass() && 
			this.newPasswordInput.isPass() &&
			this.verifyPasswordInput.isPass()) {

			this.zone.find('.ok, .cancel').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.ok, .cancel').removeClass('active');
			this.allPass = false;

			if (!this.opt.flag && this.newPasswordInput.isPass() && this.verifyPasswordInput.isPass()) {
				this.zone.find('.ok, .cancel').addClass('active');
				this.allPass = true;
			}
		}
	};

	ChangeWithdrawPwdDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.change-withdraw-pwd-dialog');

		this.zone.find('.ok').click(function () {
			if ($(this).hasClass('active')) {
				that.commit();
			}
		});

		this.zone.find('.cancel').click(function () {
			that.hide();
		});

		this.oldPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.newPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyPasswordInput.bindEvents(this.checkInputPass.bind(this));
        this.bindOverlayEvents();
	};

	window.ChangeWithdrawPwdDialog = ChangeWithdrawPwdDialog;

}());
(function () {
	function DividendRecord () {
		this.initDom();
	}
	
	DividendRecord.prototype.initDom = function () {
		var temp;

		this.button = new Button({
			id: 'dividend-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'dividend-record-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="dividend-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">2000</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">2000</span>' +
								'<span class="text">元</span>' +
							'</div>' +				
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' +
									'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
									'<th>优惠类型</th>' +
									'<th>优惠金额</th>' +
									'<th>状态</th>' +
								'</tr></tobdy>' +
								'<tbody>' +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	DividendRecord.prototype.getDom = function () {
		return this.el;
	};

	DividendRecord.prototype.show = function(){
		this.zone.show();
		this.queryData(0, true);
	};

	DividendRecord.prototype.hide = function(){
		this.zone.hide();
	};

    DividendRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	DividendRecord.prototype.queryData = function(pageIndex, firstTime) {
		var opt;
		var callback;
		var params    = '';
		var that      = this;
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());

		this.loader1.play();

		opt = {
			url: app.urls.dividentRecords,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10
			}
		};

		callback = function (json) {
        	that.loader1.stop();

			if (json.StatusCode && json.StatusCode !== 0) {
				app.alert(json.Message);
				return;
			}

        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.list.length);
        	}
		};

		Service.get(opt, callback);
	};

	DividendRecord.prototype.queryTotal = function() {
		var that      = this;
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		
		var opt = {
			url: app.urls.getWithdrawTotal,
			data: {
				status: '',
				beginTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total').text(json.toFixed(2));
		};

		Service.get(opt, callback);
	};
	
	DividendRecord.prototype.setData = function(data) {
		var dom = '';
		var i = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].BonusName + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].BonusName + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	DividendRecord.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	DividendRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	DividendRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -100);

		this.zone    = $('.dividend-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        });

        this.zone.find('#dividend-record-button').click(function () {
        	that.queryData(0, true);
        });

        this.button.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.DividendRecord = DividendRecord;
}());

(function () {
	function Footer () {
		this.initDom();
	}
	
	Footer.prototype.initDom = function () {
		var temp =	'<div class="footer">' +
						'<div class="wrapper">' +
							'<div class="footer-left">' +
								'<div class="row1">' +
									'<span class="platforms-icon"></span>' +
								'</div>' +

								'<div class="row2">' +
									'<ul>' +
										'<li data-value="about"><span>关于我们</span></li>' +
										'<li data-value="contact"><span>联系我们</span></li>' +
										'<li data-value="deposit"><span>存取款帮助</span></li>' +
										'<li data-value="question"><span>常见问题</span></li>' +
										'<li data-value="program"><span>合作伙伴</span></li>' +
										'<li data-value="routeCheck"><span>线路检测</span></li>' +
										'<li data-value="agentLogin"><span>代理登录</span></li>' +
										//'<li data-value="agentSignup"><span>代理注册</span></li>' +
									'</ul>' +
								'</div>' +
							'</div>' +
							
							'<div class="footer-right">' +
								'<div class="row1">' +
									'<div class="title">' +
										'推荐：' +
									'</div>' +

									'<ul>' +
										'<li data-value="chrome">' +
											'<span class="icon chrome-icon"></span>' +
											'<span>Chrome</span>' +
										'</li>' +

										'<li data-value="firefox">' +
											'<span class="icon firefox-icon"></span>' +
											'<span>Firefox</span>' +
										'</li>' +

										'<li data-value="ie">' +
											'<span class="icon ie-icon"></span>' +
											'<span>IE10.0+</span>' +
										'</li>' +

										'<li data-value="safari">' +
											'<span class="icon safari-icon"></span>' +
											'<span>Safari</span>' +
										'</li>' +
									'</ul>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="title">' +
										'<span class="span1">Copyright © 2009 - 2017</span><span class="span2"> VEBET (伟易博) All Rights Reserved</span>' +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	Footer.prototype.getDom = function () {
		return this.el;
	};

	Footer.prototype.fixToBottom = function () {
		this.zone.addClass('fix-bottom');
	};

	Footer.prototype.releaseFix = function () {
		this.zone.removeClass('fix-bottom');
	};

	Footer.prototype.bindEvents = function () {
		var featureUl;
		var pageName;
		var downLoadUl;
		var browserName;
		var that = this;

		this.zone = $('.footer');

		featureUl  = this.zone.find('.footer-left .row2 ul');
		downLoadUl = this.zone.find('.footer-right .row1 ul');

		featureUl.delegate('li', 'click', function () {
			pageName = $(this).attr('data-value');
			if (pageName === 'routeCheck' ||
				pageName === 'agentSignup') {
				app.router.setRoute(pageName);
			} else if (pageName === 'agentLogin') {
				window.open(app.agentLoginUrl);
			} else {
				window.open('help.html?item=' + pageName);
			}
		});

		downLoadUl.delegate('li', 'click', function () {
			browserName = $(this).attr('data-value');

			if (browserName === 'ie') {
				window.open('https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads');
			} else if (browserName === 'chrome') {
				window.open('https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html');
			} else if (browserName === 'safari') {
				window.open('http://www.apple.com/cn/safari/');
			} else if (browserName === 'firefox') {
				window.open('http://www.firefox.com.cn/download/');
			}
		});

	};

	window.Footer = Footer;
}());

(function () {
	function Header (opt) {
		this.opt      = opt || {};
		this.menuOpen = false;
		this.initDom();
	}

	Header.prototype.initDom = function () {
		var temp = '';

		if (!this.opt.helpPage) {
			this.notice = new Notice2({
				id: 'app-notice',
				hasBtn: false
			});
		}

		this.switch = new Switch({id: 'money-switch'});

		temp =	'<div class="header">' +
					'<div class="wrapper">' +
						'<div class="row1">' +
							'<div class="row1-wrapper">' +
								'<ul>' +
									'<li class="li-logo left">' +
										'<div class="icon logo-icon-small"></div>' +
										'<div class="icon menu menu-icon"></div>' +
										'<span class="text menu main-menu-text">主菜单</span>' +
									'</li>' +

									'<li class="li-language" style="display: none">' +
										'<span class="text">CHN</span>' +
										'<div class="icon down-icon"></div>' +
									'</li>' +

									'<li class="li-time-value">' +
										'<span class="text">10:09:09</span>' +
									'</li>' +

									'<li class="li-loginer">' +
										'<span class="text">登录器</span>' +
									'</li>' +

									'<li class="li-bzzx" title="帮助中心">' +
										'<div class="icon bzzx-icon"></div>' +
									'</li>' +

									'<li class="li-wdsc" title="我的收藏">' +
										'<div class="icon wdsc-icon"></div>' +
									'</li>' +

									'<li class="li-signin-signup">' +
										'<div class="sign-button signin-button">登录</div>' +
										'<div class="sign-button signup-button">注册</div>' +
									'</li>' +

									'<li class="li-money-actions">' +
										'<ul>' +
											'<li class="grzx-layer action" data-value="0 2">提现</li>' +
											'<li class="grzx-layer action" data-value="0 1">转账</li>' +
											'<li class="grzx-layer action" data-value="0 0">充值</li>' +
										'</ul>' +
									'</li>' +

									'<li class="li-balance">' +
										'<div class="balance-item money-icon">¥</div>' +
										'<div class="balance-item balance-value">0.00</div>' +
										'<div class="icon refresh-icon"></div>' +
										'<div class="switch-zone">' +
											this.switch.getDom() +
										'</div>' +
									'</li>' +

									'<li class="li-grzx">' +
										'<div class="grzx-layer message" data-value="3 0">' +
											'<div class="icon message-icon"></div>' +
											'<div class="dot message-count">1</div>' +
										'</div>' +

										'<div class="title nav-page grzx grzx-layer" data-value="0 0">' +
											'<span>个人中心</span>' +
											'<div class="icon down-icon"></div>' +
										'</div>' +
									'</li>' +

									'<div class="clear"></div>' +
								'</ul>' +

								'<div class="grzx-float-window">' +
									'<div class="title">' +
										'<div class="username"></div>' +
										'<div class="userid">' +
											'<span class="text">ID:</span>' +
											'<span class="id-value"></span>' +
										'</div>' +
									'</div>' +

									'<ul>' +
										'<li class="grzx-layer" data-value="0 0"><span>资金管理</span></li>' +
										'<li class="grzx-layer" data-value="1 3"><span>投注记录</span></li>' +
										'<li class="grzx-layer" data-value="1 0"><span>充值记录</span></li>' +
										'<li class="grzx-layer" data-value="2 1"><span>修改密码</span></li>' +
										'<li class="signout"><span>退出</span></li>' +
									'</ul>' +
								'</div>' +

								'<div class="language-float-window">' +
									'<ul>' +
										'<li><span>中文</span></li>' +
										'<li><span>English</span></li>' +
									'</ul>' +
								'</div>' +

								'<div class="wdsc-float-window">' +
									'<ul>' +
									'</ul>' +

									'<div class="no-collection">' +
										'您还没有收藏的游戏。如果要添加，请点击游戏名称附近的星型图标。' +
									'</div>' +
									
									'<div class="close-wdsc">' +
										'<img src="../img/pack-up-arrow.png">' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="row2">' +
							'<div class="row2-wrapper">' +
								'<div class="header-logo">' +
									'<div class="icon logo-icon-big"></div>' +
								'</div>' +

								'<div class="button-zone">' +
									'<div class="lxkf-button" id="live800">在线客服</div>' +
								'</div>' +

								'<ul class="pages">' +
									'<li data-value="homePage">首页</li>' +
									'<li data-value="liveVideo">真人视讯</li>' +
									'<li data-value="eEntertainment">电子游艺</li>' +
									'<li data-value="sportsCompetition">体育竞技</li>' +
									'<li data-value="lotteryGame">彩票游戏</li>' +
									'<li data-value="promoActivity">优惠活动</li>' +
									'<li data-value="clientDownload">下载中心</li>' +
									'<li data-value="phoneBetting">电话投注</li>' +
									'<div class="stick"></div>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +

						(this.opt.helpPage?'': this.notice.getDom()) +

/*						'<div class="header-float-window">' +
							this.createHeaderFloatWindow() +
						'</div>' +*/
					'</div>' +
				'</div>';
		
		this.el  = temp;
	};

	Header.prototype.getDom = function () {
		return this.el;
	};

	Header.prototype.deleteCollectGame = function (id) {
		var ul = this.zone.find('.wdsc-float-window ul');
		ul.children('li:last-child').remove();
	};

	Header.prototype.createHeaderFloatWindow = function (pageName) {
		var i;
		var key;
		var arr;
		var width;
		var temp = '';
		var dict = {
			liveVideo: [
				{
					image: 'zrsx-float-img1.png',
					name: 'BBIN国际厅'
				}, {
					image: 'zrsx-float-img2.png',
					name: 'AG欧洲厅'
				}, {
					image: 'zrsx-float-img3.png',
					name: 'AB亚洲厅'
				}, {
					image: 'zrsx-float-img4.png',
					name: 'OG美洲厅'
				}
			],
			eEntertainment: [
				{
					image: 'dzyy-float-img1.png',
					name: 'PT'
				}, {
					image: 'dzyy-float-img2.png',
					name: 'BBIN'
				}, {
					image: 'dzyy-float-img3.png',
					name: 'MG'
				}, {
					image: 'dzyy-float-img4.png',
					name: 'AG'
				},{
					image: 'dzyy-float-img5.png',
					name: 'TTG'
				}, {
					image: 'dzyy-float-img6.png',
					name: 'MT'
				}
			],
			// sportsCompetition: [
			// 	{
			// 		image: 'tyjj-float-img1.png',
			// 		name: 'BBIN体育'
			// 	}, {
			// 		image: 'tyjj-float-img2.png',
			// 		name: '沙巴体育'
			// 	}
			// ],
			lotteryGame: [
				{
					image: 'cpyx-float-img1.png',
					name: 'KENO彩票'
				}, {
					image: 'cpyx-float-img2.png',
					name: 'BBIN彩票'
				}
			]
		};

		for (key in dict) {
			arr   = dict[key];
			width = parseFloat(100 / arr.length);
			temp +=	'<ul class="ul ' + key + '" data-value="' + key + '">';

			for (i = 0; i < arr.length; i++) {
				temp +=	'<li style="width:' + width + '%" data-index="' + i + '">' +
							'<div class="img-frame">' +
								'<img src="../img/' + arr[i].image + '">' +
							'</div>' +
							'<div class="name">' + arr[i].name + '</div>' +
						'</li>';
			}

			temp += '</ul>';
		}

		return temp;
	};

	Header.prototype.getUserInfo = function() {
		var that = this;
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}
			
			that.zone.find('.balance-value').text(window.Util.formatNumToCur(json.Cash));
			that.zone.find('.grzx-float-window .username').text(json.UserName);
			that.zone.find('.grzx-float-window .userid .id-value').text(json.Id);
			that.zone.find('.refresh-icon').stop();
			that.zone.find('.refresh-icon').removeClass('rotate');
		};

		app.getUserInfo(callback);
	};

	Header.prototype.setCollectList = function (data, flag) {
		var list = data.list;
		var url;
		var score;
		var name;
		var gameLocal;
		var collectId;
		var html = '';

		for (i = 0; i < list.length; i++) {
			gameLocal = list[i].GameLocal;
			url       = app.imageServer + gameLocal.ImageUrl;
			name      = gameLocal.Title;
			score     = gameLocal.RecommendNo;
			collectId = list[i].Id;

			html  +=	'<li data-collectid="' + collectId + '"' +
						   ' data-gameid="' + gameLocal.Id + '"' +
						   ' data-gametype="' + gameLocal.GameTypeText_EN + '"' +
						   ' data-identify="' + gameLocal.GameIdentify + '"' +
						   ' data-platform="' + gameLocal.Api.GamePlatform + '"' +
						   ' data-try="' + gameLocal.IsTry + '"' +
						'>'+
							'<img src=' + url + '>' +
							'<p>' +
								'<span class="game-name">'+name+'</span>'+
								'<span class="collect collected"></span>' +
								//'<span class="recommend-no">'+score+'</span>' +
							'</p>'+
							'<p id="hover-layer" class="hover-layer-none">' +
								'<button class="start-game">开始游戏</button>' +
								'<br/>' +
								(gameLocal.IsTry?'<button class="try-game">免费试玩</button>' : '') +
							'</p>' +
						'</li>';

		}

		this.zone.find('.wdsc-float-window ul').html(html);

		if (flag) {
			this.zone.find('.wdsc-float-window').css('top', '40px');
		}
	};

	Header.prototype.getCollectList = function (flag) {
		var opt;
		var callback;
		var that = this;

		opt = {
			url: app.urls.getFavoriteGames,
			data: {
				platform: '',
				pageSize: 10,
				pageIndex: 0
			}
		};
		
		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json.Data.list.length === 0) {
				that.zone.find('.no-collection').show();
			} else {
				that.zone.find('.no-collection').hide();
				that.setCollectList(json.Data, flag);
			}
		};

		Service.get(opt, callback);
	};

	Header.prototype.getUnreadMessageCount = function () {
		var i;
		var callback;
		var that      = this;
		var endtime   = new Date();
		var begintime = Util.getIntervalDate(endtime, -10);

		begintime = begintime.formatDate() + ' 00:00';
        endtime   = endtime.formatDate() + ' 23:59';

		var opt  = {
			url: app.urls.getStationLetterCount,
			data: {
				startTime: begintime,
				endTime: endtime
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (parseInt(json) !== 0) {
				that.zone.find('.message-count').show();
				that.zone.find('.message-count').text(json);
			} else {
				that.zone.find('.message-count').hide();
			}
			
		};

		Service.get(opt, callback);
	};

	Header.prototype.getCollectLength = function () {
		return this.zone.find('.wdsc-float-window ul li').length;
	};

	Header.prototype.getSportsUrl = function () {
    	var that  = this;
    	var opt   =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};
		
		var callback = function (json) {
			app.sportsClickable = true;
			
			if (json.StatusCode && json.StatusCode != 0) {
				app.sportsUrl = 'maintaining';
				app.sportsMaintingMsg  = json.Message;
				return;
			}

			app.sportsUrl = json;
		};

		Service.get(opt, callback);
	};

	Header.prototype.getPBUrl = function () {
    	var that  = this;
    	var opt   =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'SCM',
				gameType: 'casino'
			}
		};
		
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.pbUrl = 'maintaining';
				app.pbMaintingMsg  = json.Message;
					
				return;
			}

			app.pbUrl = json;
		};

		Service.get(opt, callback);
	};

	Header.prototype.showSignedInHeader = function () {
		this.zone.find('.li-money-actions').show();
		this.zone.find('.li-balance').show();
		this.zone.find('.li-grzx').show();
		this.zone.find('.li-signin-signup').hide();
		this.getUserInfo();
		this.getCollectList(false);
		this.getUnreadMessageCount();
		this.getSportsUrl();
		this.getPBUrl();
	};

	Header.prototype.showSignedOutHeader = function () { 
		this.zone.find('.li-money-actions').hide();
		this.zone.find('.li-balance').hide();
		this.zone.find('.li-grzx').hide();
		this.zone.find('.li-signin-signup').show();
		this.zone.find('.wdsc-float-window ul').empty();
	};

	Header.prototype.showHeaderFloatWindow = function () {
		var headerFloatWindow = this.zone.find('.header-float-window');

		headerFloatWindow.css({
			top: '100px',
			opacity: '0.9'
		});
	};

	Header.prototype.hideHeaderFloatWindow = function () {
		var headerFloatWindow = this.zone.find('.header-float-window');

		headerFloatWindow.css({
			top: '-400px',
			opacity: '0'
		});
	};

	Header.prototype.setStick = function (index) {
		var stick = this.zone.find('.pages .stick');

		if (index === -1) {
			this.zone.find('.pages li').removeClass('selected');
			stick.hide();
			return;
		}

		stick.show();
		stick.css('left', index * 12.5 + '%');
		this.zone.find('.pages li').removeClass('selected');
		this.zone.find('.pages li:nth-child(' + (index + 1) + ')').addClass('selected');
	};

	Header.prototype.signOut = function () {
		var opt;
		var callback;
		var that = this;
		var grzxFloatWindow = this.zone.find('.grzx-float-window');

    	opt   =  {
			url: app.urls.signOut,
			data: {}
		};

		callback = function (json) {
            if(json === true) {
				grzxFloatWindow.css('top', '-300px');
				app.signedOutProcedures();
				app.Comet.refreshClientCUN(null);
				console.log('会员登出.....');
            }
		};

		Service.get(opt, callback);
	};

	Header.prototype.startTimer = function () {
		var time;
		var that = this;

		this.timer = setInterval(function () {
			time = new Date();
			time = time.formatTime();
			that.zone.find('.li-time-value .text').text(time);
		}, 1000);
	};

	Header.prototype.bindEvents = function () {
		var left;
		var index;
		var pagesUl;
		var pagesUl2;
		var stick;
		var pageName;
		var balance;
		var menu;
		var headRow2;
		var langHoverItem;
		var grzxHoverItem;
		var wdscHoverItem;
		var grzxFloatWindow;
		var wdscFloatWindow;
		var langFloatWindow;
		var grzxUl;
		var headerFloatWindow;
		var closeWdsc;
		var grzxNav;
		var grzxRouterValue;
		var deleteCollectCallback;
		var targetItem;
		var collectId;
		var platform;
		var gameType;
		var identify;
		var li;
		var that = this;

		this.zone = $('.header');

		if (this.opt.helpPage) {
			this.showSignedOutHeader();
			return;
		}

		pagesUl           = this.zone.find('.pages');
		pagesUl2          = this.zone.find('.row1');
		headRow2          = this.zone.find('.row2');
		langHoverItem     = this.zone.find('.li-language, .language-float-window');

		grzxHoverItem     = this.zone.find('.li-grzx .grzx, .grzx-float-window');
		wdscHoverItem     = this.zone.find('.li-wdsc');
		grzxFloatWindow   = this.zone.find('.grzx-float-window');
		wdscFloatWindow   = this.zone.find('.wdsc-float-window');
		closeWdsc         = wdscFloatWindow.find('.close-wdsc');
		langFloatWindow   = this.zone.find('.language-float-window');
		grzxUl            = this.zone.find('.grzx-float-window ul');
		menu              = this.zone.find('.menu');
		headerFloatItem   = this.zone.find('.pages li, .header-float-window');
		headerFloatWindow = this.zone.find('.header-float-window');
		grzxNav 		  = this.zone.find('.grzx-layer');
		stick             = pagesUl.children('.stick');
		balance           = this.zone.find('.balance-value');

		grzxHoverItem.mouseover(function () {
			left = that.zone.find('.li-grzx').position().left;
			grzxFloatWindow.css({
				'top': '40px',
				'left': left
			});
		}).mouseout(function () {
			grzxFloatWindow.css('top', '-300px');
		});

		wdscHoverItem.click(function () {
			if (wdscFloatWindow.css('top') === '40px') {
				wdscFloatWindow.css('top', '-600px');
			} else {
				wdscFloatWindow.css('top', '40px');
			}

			langFloatWindow.css('top', '-300px');
		});

		wdscFloatWindow.delegate('.collect', 'click', function () {
			imgSrc     = $(this).attr('src');
			collectId  = $(this).parent().parent('li').attr('data-collectid');
			targetItem = $(this).parents('li');

			deleteCollectCallback = function () {
				targetItem.remove();

				if (wdscFloatWindow.children('ul').children('li').length < 1) {
					that.zone.find('.no-collection').show();
				}

				app.eEntertainment.getFavoriteGameIds();
			};

			app.deleteFavoriteGame(collectId, deleteCollectCallback.bind(this));
		});

		this.zone.find('.wdsc-float-window ul').delegate('li','mouseover',function(){
			$(this).find("#hover-layer").removeClass("hover-layer-none").addClass("hover-layer");
		});

		this.zone.find('.wdsc-float-window ul').delegate('li', 'mouseout', function() {
			  $(this).find("#hover-layer").removeClass("hover-layer").addClass("hover-layer-none");
		});

		this.zone.delegate('.start-game', 'click', function () {
			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			li       = $(this).parent().parent('li');
			identify = li.attr('data-identify');
			platform = li.attr('data-platform');
			gameType = li.attr('data-gametype');
			name     = li.attr('data-cnname');

			if (app[platform + 'win'] && !app[platform + 'win'].closed) {
				app[platform + 'win'].close();
			}

			app[platform + 'win'] = window.open("loading.html");

			cb = function (data) {
				if (data.StatusCode && data.StatusCode != 0) {
					app.alert(data.Message);
					return;
				}
				
/*				if (platform === 'PT') {
					app.ptLoading(data, app.win);
				} else {
					app.win.location.href = data;
				}*/

				app[platform + 'win'].location.href = data;
			};

			Service.getGameLoginUrl(platform, gameType, identify, cb.bind(this));
		});

		this.zone.delegate('.try-game', 'click', function () {
			parentLi = $(this).parent().parent('li');
			platform = parentLi.attr('data-platform');
			isTry    = parentLi.attr('data-try');
			identify = parentLi.attr('data-identify');

			if (!isTry) {
				app.alert('该游戏暂时不能试玩!');
				return;
			}

			if (platform === 'PT') {
				window.open('http://cache.download.banner.greatfortune88.com/casinoclient.html?mode=offline&language=zh-cn&affiliates=1&game=' + identify);
			} else if (platform === 'PP') {
				gameId = parentLi.attr('data-id');
				window.open('http://demogames.pragmaticplay.net/gs2c/openGame.do?lang=zh&cur=CNY&gameSymbol=' + 
							gameId +
						    '&lobbyURL=http%3A%2F%2Fwww.pragmaticplay.com');
			} else {
				app.alert('该游戏暂时不能试玩!');
				return;
				gameId = parentLi.attr('data-id');
				that.getGameLaunchUrl(gameId);
			}
		});

		langHoverItem.click(function () {
			if (langFloatWindow.css('top') === '40px') {
				langFloatWindow.css('top', '-300px');
			} else {
				langFloatWindow.css('top', '40px');
			}

			wdscFloatWindow.css('top', '-600px');
		});

		pagesUl.delegate('li', 'click', function () {
			pageName = $(this).attr('data-value');

			if (pageName === 'sportsCompetition') {
				if (!app.sportsClickable) {
					return;
				}
				
				if (app.sportsUrl === 'maintaining') {
					app.alert(app.sportsMaintingMsg);
					return;
				}

				/*
				** window.focus()在IE和Firefox上不起作用，所以统一先关闭再打开
				** 页面在处理dom期间，此方法不起作用
				*/ 
				if (app.sportwin && !app.sportwin.closed) {
					app.sportwin.close();
				}
				
				app.sportwin = window.open('../sportRedirect.html');
				app.openSports(app.sportsUrl, app.sportwin);
				return;
			}

			if (pageName === 'phoneBetting') {
				if (window.location.host.indexOf('www.evebets.com') == -1) {
					app.alert('敬请期待');
					return;
				}
				
				if (!app.signedIn) {
					app.showLoginNotice();
					return;
				}
			
				if (app.pbUrl === 'maintaining') {
					app.alert(app.pbMaintingMsg);
					return;
				}

				if (!app.pbwin || app.pbwin.closed) {
					app.pbwin = window.open("loading.html", '', 'width=800,height=600');
				}

				app.pbwin.location.href = app.pbUrl;
				return;
			}

			pagesUl.children('li').removeClass('selected');
			$(this).addClass('selected');
			index    = $(this).index();
			stick.css('left', index * 12.5  + '%');
			app.router.setRoute('/' + pageName);
		});

		grzxNav.click(function(){
			if ($(this).hasClass('message')) {
				$(this).children('.dot').hide();
			}

			grzxRouterValue = $(this).attr('data-value').split(' ');
			app.personCenterRouter(grzxRouterValue[0],grzxRouterValue[1]);
		});

/*		headerFloatItem.mouseover(function () {
			var parent = $(this).parent('ul');
			pageName   = $(this).attr('data-value');

			if (headerFloatWindow.children('.' + pageName).length > 0) {
				headerFloatWindow.children('ul').hide();
				headerFloatWindow.children('.' + pageName).show();
				that.showHeaderFloatWindow();
			} else {
				that.showHeaderFloatWindow();
			}
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		this.zone.find('.pages li').mouseover(function () {
			pageName   = $(this).attr('data-value');

			if (headerFloatWindow.children('.' + pageName).length > 0) {
				headerFloatWindow.children('ul').hide();
				headerFloatWindow.children('.' + pageName).show();
				that.showHeaderFloatWindow();
			} else {
				that.hideHeaderFloatWindow();
			}
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		this.zone.find('.header-float-window').mouseover(function () {
		    that.showHeaderFloatWindow();
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		this.zone.find('.header-float-window ul').delegate('li img', 'click', function () {
			pageName  = $(this).parents('li').parent('ul').attr('data-value');
			subRouter = $(this).parents('li').attr('data-index');
			app.router.setRoute('/' + pageName + '/' + subRouter);
		});*/

		pagesUl2.delegate('.li-bzzx','click',function(){
			pageName = $(this).attr('data-value');
			window.open('help.html');
		});

		grzxUl.delegate('li', 'click', function () {
			if ($(this).hasClass('signout')) {
				that.signOut();
			}
		});

		closeWdsc.click(function () {
			wdscFloatWindow.css('top', '-600px');
		});

		this.zone.find('.sign-button').click(function () {
			if ($(this).hasClass('signin-button')) {
				if (!app.signInDialog) {
					app.signInDialog = new SignIn();
					$('.app').append(app.signInDialog.getDom());
					app.signInDialog.bindEvents();
				}

				app.signInDialog.show();
			} else if ($(this).hasClass('signup-button')) {
				if (!app || !app.registerData) {
					return;
				}

				if (!app.signUpDialog) {
					app.signUpDialog = new SignUp();
					$('.app').append(app.signUpDialog.getDom());
					app.signUpDialog.bindEvents();
				}

				app.signUpDialog.show();
			} else {

			}
		});

		this.switch.bindEvents(function () {
			that.zone.find('.li-balance .balance-item, .li-balance .refresh-icon').toggle();
		});

		$(document).scroll(function(e) {
			//that.hideHeaderFloatWindow();

			if (document.body.scrollTop > 0) {
				that.zone.addClass('fixed-header');
				
				if (!that.menuOpen) {
					headRow2.hide();
				}
				
			} else {
				that.zone.removeClass('fixed-header');
				headRow2.show();
			}
		});

		menu.click(function () {
			that.menuOpen = !that.menuOpen;

			if (headRow2.css('display') !== 'none') {
				headRow2.hide();
			} else {
				headRow2.show();
			}
		});

		this.zone.find('.refresh-icon').click(function () {
			that.zone.find('.balance-value').text('');
			that.getUserInfo();
			$(this).addClass('rotate');
		});

        PubSub.subscribe('onRequestWalletBalance', function (msg, data) {
        	that.getUserInfo();
        });

        this.zone.find('#live800').click(function () {
        	if (app.cswin && !app.cswin.closed) {
        		app.cswin.close();
        	}

        	app.cswin = window.open('http://chat56op.live800.com/live800/chatClient/chatbox.jsp?companyID=802301&configID=112950&jid=6941512488');
        });

        PubSub.subscribe('onlineCS', function (msg, data) {
        	that.zone.find('#live800').click();
        });

        this.zone.find('.logo-icon-big').click(function () {
        	window.open('https://www.rcdespanyol.com/cn/news/vebetcom/_n:4902/');
        });

        this.zone.find('.li-loginer').click(function () {
        	window.open(app.loginerUrl);
        });

		this.showSignedOutHeader();
		this.notice.bindEvents();
		this.startTimer();
	};

	window.Header = Header;
}());
(function () {
	function MoneyTransfer(opt) {
		this.opt  = opt;
		this.initDom();
	}

	MoneyTransfer.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'money-transfer-button',
			name: '确认转账',
			width: 128,
			height: 38,
			clickWaiting: 5000
		});

		this.moneyTransferInput = new Input({
			id: 'money-transfer-input',
			width: 210,
			height: 30,
			reg: app.moneyReg
		});

		this.selectFrom = new Select({
			id: 'money-transfer-select-from',
			width: 210
		});

		this.selectTo = new Select({
			id: 'money-transfer-select-to',
			width: 210
		});

		temp = 		'<div class="money-transfer grzx-money-action">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="text">转出：</div>' +

								this.selectFrom.getDom() +

								'<span class="refresh-icon refresh-from"></span>' +

								'<div class="from-balance">' +
									'<span class="from-balance-value"></span>' +
								'</div>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">转入：</div>' +

								this.selectTo.getDom() +

								'<span class="refresh-icon refresh-to"></span>' +

								'<div class="to-balance">' +
									'<span class="to-balance-value"></span>' +
								'</div>' +
							'</div>' +

							'<div class="row3">' +
								'<div class="text">金额：</div>' +
								this.moneyTransferInput.getDom() +
							'</div>' +

							'<div class="row4">' +
								this.button.getDom() +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	MoneyTransfer.prototype.getDom = function() {
		return this.el;
	};

	MoneyTransfer.prototype.show = function() {
		var that = this;

		this.zone.show();
		this.checkUserSettings();

		if (!app.allApiData) {
			app.getAllPlatforms(function (data) {
				that.setSelects(data);
			});
		} else {
			if (!this.selectData) {
				this.setSelects(app.allApiData);
			}
		}
	};

	MoneyTransfer.prototype.hide = function() {
		this.zone.hide();
		this.reset();
	};

	MoneyTransfer.prototype.reset = function() {
		this.moneyTransferInput.setValue('');
	};

	MoneyTransfer.prototype.checkUserSettings = function() {
		if (!app.checkUserTrueName()) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			}, function () {
				app.personCenterRouter(2, 0);
			});
			return;
		}
	};

	MoneyTransfer.prototype.setSelects = function(data) {
		var i;
		var temp = '';

		this.setSelectData(data);

		for (i = 0; i < this.selectData.length; i++) {
			temp += '<option data-value="' + this.selectData[i].id + '">' +
						this.selectData[i].name +
					'</option>';
		}

		this.selectFrom.setOptions(temp);
		this.selectTo.setOptions(temp);
		this.selectToValue = this.selectToValue || 'PT';
		this.selectTo.setValue(this.selectToValue);
		this.selectsLoaded = true;
		this.getCenterWalletCash('from');
		this.getPlatformBalance(this.selectToValue, 'to');
	};

	MoneyTransfer.prototype.setSelectData = function (data) {
		var i;

		this.selectData = [{
			id: '0',
			name: '主账户'
		}];

		for (i = 0; i < data.length; i++) {
			temp = {
				id: data[i].GamePlatform,
				name: data[i].GameName
			}

			this.selectData.push(temp);
		}
	};

	MoneyTransfer.prototype.getPlatformBalance = function (platform, type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getPlatformBalance,
			data: {
				gamePlatform: platform
			}
		};

		callback = function (data) {
			if (type === 'from') {
				that.zone.find('.from-balance-value').text(data);
			} else if (type === 'to') {
				that.zone.find('.to-balance-value').text(data);
			} else {
				that.zone.find('.from-balance-value').text(data);
				that.zone.find('.to-balance-value').text(data);
			}

			that.zone.find('.refresh-' + type).removeClass('rotate');
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.getCenterWalletCash = function (type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
		};

		callback = function (data) {
			if (type === 'from') {
				that.zone.find('.from-balance-value').text(data);
			} else if (type === 'to') {
				that.zone.find('.to-balance-value').text(data);
			} else {
				that.zone.find('.from-balance-value').text(data);
				that.zone.find('.to-balance-value').text(data);
			}

			that.zone.find('.refresh-' + type).removeClass('rotate');
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.submit = function() {
		var from = this.selectFrom.getValue();
		var to   = this.selectTo.getValue();

		if (!this.moneyTransferInput.getValue()) {
			app.alert('请填写转账金额!');
			return;
		}

		if (!this.moneyTransferInput.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (from == to) {
			app.alert("同账户不允许互转");
			return;
		}

		if (from != '0' && to != '0') {
			app.alert("游戏平台账户不允许互转");
			return;
		}

		if (from == '0') {
			this.transferToPlatform();
		} else {
			this.transferToAccount();
		}
	};

	MoneyTransfer.prototype.transferToPlatform = function() {
		var i;
		var callback;
		var that     = this;
		var amount   = $.trim(this.moneyTransferInput.getValue());
		var to       = this.selectTo.getValue();
		var opt      = {
			url: app.urls.transferToPlatform,
			data: {
				UserName: app.userTotalInfo.UserName,
				Amount: amount,
				GamePlatform: to
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data === true) {
				app.personCenterDialog.getPlatformBalance(to);
				that.getPlatformBalance(to, 'to');
				that.getCenterWalletCash('from');
				app.refreshWallet();
				app.toast('转账成功');
				that.reset();
			} else {
				app.alert('转账失败');
			}
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.transferToAccount = function() {
		var i;
		var callback;
		var that     = this;
		var amount   = $.trim(this.moneyTransferInput.getValue());
		var from     = this.selectFrom.getValue();
		var opt      = {
			url: app.urls.transferToAccount,
			data: {
				UserName: app.userTotalInfo.UserName,
				Amount: amount,
				GamePlatform: from
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data === true) {
				app.personCenterDialog.getPlatformBalance(from);
				that.getPlatformBalance(from, 'from');
				that.getCenterWalletCash('to');
				app.refreshWallet();
				app.toast('转账成功');
				that.reset();
			} else {
				app.alert('转账失败');
			}
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.checkInputPass = function () {
		if (this.moneyTransferInput.isPass()) {
			this.button.enable();
		} else {
			this.button.disable();
		}
	};

	MoneyTransfer.prototype.bindEvents = function() {
		var value;
		var value1;
		var value2;
		var that  = this;

		this.zone = $('.money-transfer');

		this.button.bindCallback(this.submit.bind(this));

		this.zone.find('#money-transfer-select-from select').change(function () {
			value1 = that.selectFrom.getValue();
			value2 = that.selectTo.getValue();

			if (value1 != 0) {
				that.selectTo.setValue(0);
				that.getCenterWalletCash('to');
			}

			if (value1 == 0 && value2 == 0) {
				that.selectTo.setValue('PT');
				that.getPlatformBalance('to');
			}

			if (value1 != 0) {
				that.getPlatformBalance(value1, 'from');
			} else {
				that.getCenterWalletCash('from');
			}
		});

		this.zone.find('#money-transfer-select-to select').change(function () {
			value1 = that.selectFrom.getValue();
			value2 = that.selectTo.getValue();

			if (value2 != 0) {
				that.selectFrom.setValue(0);
				that.getCenterWalletCash('from');
			}

			if (value1 == 0 && value2 == 0) {
				that.selectFrom.setValue('PT');
				that.getPlatformBalance('from');
			}

			if (value2 != 0) {
				that.getPlatformBalance(value2, 'to');
			} else {
				that.getCenterWalletCash('to');
			}
		});

		this.zone.find('.refresh-from').click(function () {
			$(this).addClass('rotate');
			$(this).next('.from-balance').find('.from-balance-value').text('');

			value1 = that.selectFrom.getValue();

			if (value1 == 0) {
				that.getCenterWalletCash('from');
			} else {
				that.getPlatformBalance(value1, 'from');
			}
		});

		this.zone.find('.refresh-to').click(function () {
			$(this).addClass('rotate');
			$(this).next('.to-balance').find('.to-balance-value').text('');

			value2 = that.selectTo.getValue();

			if (value2 == 0) {
				that.getCenterWalletCash('to');
			} else {
				that.getPlatformBalance(value2, 'to');
			}
		});

        PubSub.subscribe('onPlatformTransfer', function (msg, data) {
        	if (data && data.platform) {
        		if (that.selectsLoaded) {
        			that.selectFrom.setValue('0');
        			that.selectTo.setValue(data.platform);
					that.getCenterWalletCash('from');
					that.getPlatformBalance(data.platform, 'to');
        		} else {
        			that.selectToValue = data.platform;
        		}
        	}
        });

		this.button.bindEvents();
		this.moneyTransferInput.bindEvents(this.checkInputPass.bind(this));
		this.selectFrom.bindEvents();
		this.selectTo.bindEvents();
	}

	window.MoneyTransfer = MoneyTransfer;
}());
(function () {
	function MoneyTransferRecord () {
		this.initDom();
	}
	
	MoneyTransferRecord.prototype.initDom = function () {
		var temp;

		this.selectFrom = new Select({
			id: 'money-transfer-record-select-from',
			width: 100,
			height: 32,
			data: []
		});

		this.selectTo = new Select({
			id: 'money-transfer-record-select-to',
			width: 100,
			height: 32,
			data: []
		});

		this.button = new Button({
			id: 'money-transfer-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'money-transfer-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="money-transfer-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<span class="text">从</span>' +
								this.selectFrom.getDom() +
								'<span class="text">至</span>' +
								this.selectTo.getDom() +

								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">0.00</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">0.00</span>' +
								'<span class="text">元</span>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' + 
									'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
									'<th>转账金额</th>' +
									'<th>游戏平台</th>' +
									'<th>类别</th>' +
									'<th>状态</th>' +
								'</tr></thead>' +
								'<tbody>' +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	MoneyTransferRecord.prototype.getDom = function () {
		return this.el;
	};

	MoneyTransferRecord.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.setPlatforms(app.allApiData);
			this.firstTime = true;
		}

		this.queryData(0, true);
		this.queryTotal();
	};

	MoneyTransferRecord.prototype.hide = function() {
		this.zone.hide();
	};

	MoneyTransferRecord.prototype.setPlatforms = function(data) {
		var i;
		var temp = 	'<option data-value="-1">全部</option>' +
					'<option data-value="0">主账户</option>';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].GamePlatform + '">' +
						data[i].GameName +
					'</option>';
		}

		this.selectFrom.setOptions(temp);
		this.selectTo.setOptions(temp);
	};

    MoneyTransferRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	MoneyTransferRecord.prototype.queryData = function(pageIndex, firstTime){
		var opt;
		var callback;
		var gamePlatform = '';
		var type         = '';
		var params       = '';
		var that         = this;
		var starttime    = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime      = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		var from         = this.selectFrom.getValue();
		var to           = this.selectTo.getValue();

		if (from == 0) {
			type = 0;

			if (to == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = to;
			}
		}

		if (to == 0) {
			type = 1;

			if (from == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = from;
			}
		}

    	opt   =  {
			url: app.urls.transferRecords,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10,
				type: type,
				status: '',
				gamePlatform: gamePlatform
			}
		};

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	MoneyTransferRecord.prototype.queryTotal = function() {
		var gamePlatform = '';
		var type         = '';
		var params       = '';
		var that         = this;
		var starttime    = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime      = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		var from         = this.selectFrom.getValue();
		var to           = this.selectTo.getValue();

		if (from == 0) {
			type = 0;

			if (to == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = to;
			}
		}

		if (to == 0) {
			type = 1;

			if (from == -1) {
				gamePlatform = '';
			} else {
				gamePlatform = from;
			}
		}
		
		var opt = {
			url: app.urls.getTransferTotal,
			data: {
				type: type,
				status: '',
				gamePlatform: gamePlatform,
				beginTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total').text(json.toFixed(2));
		};

		Service.get(opt, callback);
	};

	MoneyTransferRecord.prototype.setData = function(data){
		var i           = 0;
		var dom         = '';
		var subTotal    = 0;
		var currentData = data.list;	

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].GameType + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].GameType + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}

			subTotal += currentData[i].Amount;
		}

		this.zone.find('.table-zone tbody').html(dom);
		this.zone.find('.bar-zone .sub-total').text(subTotal.toFixed(2));
	};

	MoneyTransferRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	MoneyTransferRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	MoneyTransferRecord.prototype.bindEvents = function () {
		var value1;
		var value2;
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -15);

		this.zone    = $('.money-transfer-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#money-transfer-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#money-transfer-record-select-from' ).change(function () {
        	value1 = that.selectFrom.getValue();
        	value2 = that.selectTo.getValue();

        	if (value1 == 0) {
        		that.selectTo.setValue('-1');
        	}

        	if (value1 != 0) {
        		that.selectTo.setValue('0');
        	}
        });

        this.zone.find('#money-transfer-record-select-to' ).change(function () {
        	value1 = that.selectFrom.getValue();
        	value2 = that.selectTo.getValue();

        	if (value2 == 0) {
        		that.selectFrom.setValue('-1');
        	}

        	if (value2 != 0) {
        		that.selectFrom.setValue('0');
        	}
        });

        this.button.bindEvents();
		this.selectFrom.bindEvents();
		this.selectTo.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.MoneyTransferRecord = MoneyTransferRecord;
}());

(function () {
	function NoticePushDialog (opt) {
		this.initDom();
	}
	
	NoticePushDialog.prototype = new IMDialog();

	NoticePushDialog.prototype.initDom = function () {
		var temp =	'<div class="notice-push-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	NoticePushDialog.prototype.getDom = function () {
		return this.el;
	};

	NoticePushDialog.prototype.show = function (opt) {
		var temp = this.generateItems(opt);

		this.zone.find('.dialog').append(temp);
		this.zone.find('.dialog-wrapper').css('bottom', '0');
	};

	NoticePushDialog.prototype.hide = function () {
		this.zone.find('.dialog-wrapper').css('bottom', '-300px');
	};

	NoticePushDialog.prototype.generateItems = function (item) {
		var temp =	'<div class="section">' +
						'<div class="subtitle">' +
							'<span class="title-name">' + item.title + '</span>' +
							'<span class="close">×</span>' +
						'</div>' +

						'<div class="content">' +
							'<div class="content-text">' + item.content + '</div>' +
						'</div>'+
					'</div>';

		return temp;
	};

	NoticePushDialog.prototype.bindEvents = function () {
		var that  = this;

		this.zone = $('.notice-push-dialog');

		this.zone.delegate('.close', 'click', function () {
			$(this).parent('.subtitle').parent('.section').remove();
		});
	};

	window.NoticePushDialog = NoticePushDialog;
}());

$(function() {
	function PersonalCenter(opt) {
		this.mainWalletData  = {
			moneyType: '¥',
			balance: '0.00',
			moneyUnit: 'CNY'
		};

		this.tabData = {
		    'zjgl': ['充值','转账','提现'],
		    'jyjl': ['充值记录','转账记录','提款记录','投注记录','红利记录'],
		   	'zhsz': ['基本信息','安全中心'],
		   	'znx' : ['站内信','通知公告'],
		};

		IMDialog.call(this, opt || {});
		this.initDom();
	};

	PersonalCenter.prototype = new IMDialog();

	PersonalCenter.prototype.initDom = function() {
		var temp = '<div class="personal-center">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="left-container">' +
									'<div class="user-profiles">' +
										'<div class="user">' +
											'<div class="username">' +
												'<span>Hi, &nbsp;</span>' + 
												'<span class="username-value">' +
													app.userTotalInfo.UserName +
												'</span>' +
											'</div>' +
											
											'<div class="user-level">' +
												'<span class="pc-icon crown-icon"></span>' +
												'<span class="vip">Lv' + app.userTotalInfo.UserLevel + '</span>' +
											'</div>' +
										'</div>' +

										'<div class="psw-info">' +
											'<span class="psw-intro">安全评分</span>' +
											'<span class="psw-level-value"></span>' +
											'<a class="improve-security">提升</a>' +
											'<span class="clear"></span>' +
										'</div>' +

										'<ul class="menu-ico">' +
											'<li><span class="pc-icon bankcard-icon"></span></li>' +
											'<li><span class="pc-icon mailbox-icon"></span></li>' +
											'<li><span class="pc-icon phone-icon"></span></li>' +
										'</ul>' +
									'</div>' +

									'<div class="tree">' +
										'<ul>' +
	                                    	'<li class="selected">' +
	                                    		'<span class="pc-icon dollar-icon"></span>' +
	                                    		'<span>资金管理</span>' +
	                                    	'</li>' +
	                                    	'<li>' +
	                                    		'<span class="pc-icon file-icon"></span>' +
	                                    		'<span>交易记录</span>' +
	                                    	'</li>' +
	                                    	'<li>' +
	                                    		'<span class="pc-icon setting-icon"></span>' +
	                                    		'<span>账户设置</span>' +
	                                    	'</li>' +
	                                    	'<li>' +
	                                    		'<span class="pc-icon station-mail-icon"></span>' +
	                                    		'<span>站内信</span>' +
	                                    		'<span class="letter-count"></span>' +
	                                    	'</li>' +
										'</ul>' +
										'<div class="stick"></div>' +
									'</div>' +
								'</div>' +

								'<div class="right-container">' +
									'<div class="center-wallet wallet" data-platform="center">' +
										'<div class="title">中心钱包</div>' +

										'<div class="center-balance">' +
											'<span class="money money-type">¥&nbsp;</span>' +
											'<span class="money balance">' + app.userTotalInfo.Cash + '</span>' +
											'<span class="money-unit">元</span>' +	
											'<span class="pc-icon refresh-icon refresh"></span>' +
											'<span class="clear"></span>' +
										'</div>' +

										'<div class="actions">'	+
											'<a href="javascript:void(0);" class="btn btn-deposit">充值</a>' +
											'<a href="javascript:void(0);" class="btn btn-transfer">转账</a>' +	
											'<span class="clear"></span>' +
										'</div>' +					
									'</div>' +

									'<div class="wallet-zone"></div>' +
									'<div class="clear"></div>' +

									'<div class="tab-container">' +
										'<div class="tab-container-item zjgl-zone" menu-index="0"></div>' +
										'<div class="tab-container-item jyjl-zone" menu-index="1"></div>' +
										'<div class="tab-container-item zhsz-zone" menu-index="2"></div>' +
										'<div class="tab-container-item znx-zone" menu-index="3"></div>' +
									'</div>' +
	 							'</div>' +

	 							'<div class="close">×</div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="overlay overlay4"></div>';
		this.el = temp;
	};

	PersonalCenter.prototype.getDom = function() {
		return this.el;
	};

	PersonalCenter.prototype.show = function() {
		var that = this;
		
		this.reset();
		this.showOverlay();

		if (!app.allApiData) {
			app.getAllPlatforms(function (data) {
				that.setSubWalletsData(data);
			});
		}

		if (!this.firstTime) {
			this.getPwdSecurityLevel();
			this.getCenterWalletCash();
			this.firstTime = true;
		}
	};

	PersonalCenter.prototype.hide = function() {
		this.hideOverlay();
	};

	PersonalCenter.prototype.reset = function() {
		this.zone.find('.username-value').text(app.userTotalInfo.UserName);
		this.zone.find('.vip').text('Lv' + app.userTotalInfo.UserLevel);
	};

	PersonalCenter.prototype.setSubWallet = function() {
		var temp = '';
		var subWallet;
		var swipperWith;

		for(var i = 0; i < this.subWalletData.length; i++) {
			subWallet = new SubWallet(this.subWalletData[i]);
			this.subWallets.push(subWallet);
			if (i % 2 == 0)
				temp += '<div class="wallet-group">';
			temp += subWallet.el;
			if (i % 2 != 0) 
				temp += '</div>';
		}

		if (this.subWalletData.length % 2 != 0)  temp += '</div>';

		temp =	'<div class="wallet-left-nav">' +
					'<div class="pc-icon left-icon"></div>' +
				'</div>' +

				'<div class="swiper-container">' +
					'<div class="swiper">' +
						temp +
					'</div>' +
				'</div>' +

				'<div class="wallet-right-nav">' +
					'<div class="pc-icon right-icon"></div>' +
				'</div>';
		
		this.zone.find('.wallet-zone').html(temp);

		this.bindWalletEvents();
	};

	PersonalCenter.prototype.createZjgl = function(){
		var temp = '';

		this.zjglTab = new Tab({
			id: 'zjgl-tab',
			titles: this.tabData['zjgl']
		});

		this.cz = new TopUp();

		temp +=	this.zjglTab.getDom() +
				'<div class="zjgl-content">' +
					this.cz.getDom() +
				'</div>';

		return temp;
	};

	PersonalCenter.prototype.createJyjl = function(){
		var temp = '';

		this.jyjlTab = new Tab({
			id: 'jyjl-tab',
			titles: this.tabData['jyjl']
		});

		this.topupRecord = new TopupRecord();

		temp +=	this.jyjlTab.getDom() +
				'<div class="jyjl-content">' +
					this.topupRecord.getDom() +
				'</div>';

		return temp;
	};

	PersonalCenter.prototype.createZhsz = function(){
		var temp = '';
		
		this.zhszTab = new Tab({
			id: 'zhsz-tab',
			titles: this.tabData['zhsz']
		});

		this.basicInfo = new BasicInfo();

		temp += this.zhszTab.getDom() +
				'<div class="zhsz-content">' +
					this.basicInfo.getDom() +
				'</div>';

		return temp;
	};

	PersonalCenter.prototype.createZnx = function() {
		var temp = '';

		this.znxTab = new Tab({
			id: 'znx-tab',
			titles: this.tabData['znx']
		});

		this.stationLetter = new StationLetter();

		temp += this.znxTab.getDom() +
				'<div class="znx-content">' +
					this.stationLetter.getDom() +
				'</div>';
				
		return temp;
	};

	PersonalCenter.prototype.getPwdSecurityLevel = function () {
		var score = 20;
		var that  = this;
		var opt   =  {
			url: app.urls.getUserBankCount,
	        data: {}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json > 0) {
				score += 20;
				that.zone.find('.menu-ico .bankcard-icon').parent('li').addClass('binded');
			} else {
				that.zone.find('.menu-ico .bankcard-icon').parent('li').removeClass('binded');
			}

			if (app.userTotalInfo.EmailValidateStatus) {
				score += 20;
				that.zone.find('.menu-ico .mailbox-icon').parent('li').addClass('binded');
			} else {
				that.zone.find('.menu-ico .mailbox-icon').parent('li').removeClass('binded');
			}

			if (app.userTotalInfo.PhoneValidateStatus) {
				score += 20;
				that.zone.find('.menu-ico .phone-icon').parent('li').addClass('binded');
			} else {
				that.zone.find('.menu-ico .phone-icon').parent('li').removeClass('binded');
			}

			if (app.userTotalInfo.HasWithdrawalPassword) {
				score += 20;
			}

			that.zone.find('.psw-level-value').text(score + '分');
		};

		Service.get(opt, callback);
	};

	PersonalCenter.prototype.setSubWalletsData = function (data) {
		var i;

		this.subWallets    = [];
		this.subWalletData = [];

		for (i = 0; i < data.length; i++) {
			temp = {
				platform: data[i].GamePlatform,
				walletType: data[i].GameName,
				balance: ''
			}

			this.subWalletData.push(temp);
		}

		this.setSubWallet();
		this.bindEvents();

		for (i = 0; i < this.subWalletData.length; i++) {
			this.getPlatformBalance(this.subWalletData[i].platform);
		}
	};

	PersonalCenter.prototype.getPlatformBalance = function (platform) {
		var i;
		var wallet;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getPlatformBalance,
			data: {
				gamePlatform: platform
			}
		};

		callback = function (data) {
			wallet = that.zone.find('.wallet-group').find('[data-platform="' + platform + '"]');
			wallet.find('.balance').text(data.toFixed(2));
			wallet.find('.refresh-icon').stop();
			wallet.find('.refresh-icon').removeClass('rotate');
		};

		Service.get(opt, callback);
	};

	PersonalCenter.prototype.getCenterWalletCash = function () {
		var i;
		var wallet;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}
			
			wallet = that.zone.find('.center-wallet .center-balance');
			wallet.children('.balance').text(data);
			wallet.find('.refresh-icon').stop();
			wallet.find('.refresh-icon').removeClass('rotate');
			
			app.getUserInfo(function () {
				if (parseFloat(app.userTotalInfo.Cash) !== parseFloat(data)) {
					app.alert('接口异常，getCenterWalletCash和userTotalInfo.cash账户余额不一致，请截图后联系客服人员!');
				}
			});
		};

		Service.get(opt, callback);
	};

	PersonalCenter.prototype.bindWalletEvents = function () {
		var platform;
		var walletWidth;
		var that       = this;
		var pageIndex  = 0;
		var pageCount  = Math.round(this.subWalletData.length / 2) - 3;
		var swiper     = this.zone.find('.swiper');
		var walletzone = this.zone.find('.wallet-zone');

		this.zone.delegate('.wallet-left-nav','click',function() {
			walletWidth = swiper.find('.wallet-group').width();
			if (pageIndex == 0) return;
			pageIndex--;
			swiper.css('transform', 'translateX(' + (0 - (walletWidth + 2) * pageIndex) + 'px)');
		});

		this.zone.delegate('.wallet-right-nav','click',function() {
			walletWidth = swiper.find('.wallet-group').width();
			if (pageIndex == pageCount - 1) return;
			pageIndex++;
			swiper.css('transform', 'translateX(' + (0 - (walletWidth + 2) * pageIndex) + 'px)');
		});

		this.zone.find('.btn-deposit').click(function () {
			platform = $(this).parents('.wallet').attr('data-platform');
			app.personCenterRouter(0, 0);
		});

		this.zone.find('.btn-transfer').click(function () {
			platform = $(this).parents('.wallet').attr('data-platform');
			app.personCenterRouter(0, 1);
			
			if (platform === 'center') {
				platform = 'PT';
			}
			
			PubSub.publish('onPlatformTransfer', {platform: platform});
		});

        this.zone.delegate('.refresh', 'click', function () {
        	$(this).addClass('rotate');
        	$(this).siblings('.balance').text('');

        	platform = $(this).parents('.wallet').attr('data-platform');

        	if (platform != 'center') {
        		that.getPlatformBalance(platform);
        	} else {
        		that.getCenterWalletCash();
        	}
        });
	};

	PersonalCenter.prototype.checkTrueName = function() {
		if (!app.userTotalInfo.TrueName) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			});
			
			return false;
		}

		return true;
	};

	PersonalCenter.prototype.bindEvents = function(){
		var menuUl;
		var stick;
		var index;
		var walletzone;
		var tabZone;
		var that = this;

		this.zone = $('.personal-center');
		menuUl = this.zone.find('.tree > ul');
		stick = this.zone.find('.tree .stick');

        menuUl.delegate('li','click',function() {
        	menuUl.children('li').removeClass('selected');
        	$(this).addClass('selected');
            index = $(this).index();
            stick.css('top',(index * 50) + 'px');
            tabZone = that.zone.find('[menu-index="' + index +'"]');

            if (tabZone.html() == '') {
	            if (index == 0) {
	            	if (!that.checkTrueName()) {
	            		return;
	            	}

	        		tabZone.html(that.createZjgl());
	        		that.zjglTab.bindEvents();
	        		that.cz.bindEvents();
	        		that.cz.show();
	        	} else if (index == 1){
	        		tabZone.html(that.createJyjl());
	        		that.jyjlTab.bindEvents();
	        		that.topupRecord.bindEvents();
	        		that.topupRecord.show();
	        	} else if (index == 2) {
	        		tabZone.html(that.createZhsz());
	        		that.zhszTab.bindEvents();
	        		that.basicInfo.bindEvents();
	        		that.basicInfo.show();
	        	} else if (index == 3) {
	        		tabZone.html(that.createZnx());
	        		that.znxTab.bindEvents();
	        		that.stationLetter.bindEvents();
	        		that.stationLetter.show();
	        	}
            }
        	tabZone.siblings().hide();
            tabZone.show();
        });

        $('.zjgl-zone').delegate('#zjgl-tab>li', 'click', function () {
        	if ($(this).hasClass('stick')) {
        		return;
        	}

        	index = $(this).index();
        	that.zone.find('.grzx-money-action').hide();

        	if (index === 0) {
        		that.cz.show();
        	} else if (index === 1) {
        		if (!that.zz) {
        			that.zz = new MoneyTransfer();
        			that.zone.find('.zjgl-content').append(that.zz.getDom());
        			that.zz.bindEvents();
        		}

        		that.zz.show();
        	} else if (index === 2) {
        		if (!that.tx) {
        			that.tx = new Withdraw();
        			that.zone.find('.zjgl-content').append(that.tx.getDom());
        			that.tx.bindEvents();
        		}

        		that.tx.show();
        	}
        });

        $('.jyjl-zone').delegate('#jyjl-tab>li', 'click', function () {
        	if ($(this).hasClass('stick')) {
        		return;
        	}

        	index = $(this).index();
        	that.zone.find('.jyjl-money-action').hide();

        	if (index === 0) {
        		that.topupRecord.show();
        	} else if (index === 1) {
        		if (!that.moneyTransferRecord) {
        			that.moneyTransferRecord = new MoneyTransferRecord();
        			that.zone.find('.jyjl-content').append(that.moneyTransferRecord.getDom());
        			that.moneyTransferRecord.bindEvents();
        		}

        		that.moneyTransferRecord.show();
        	} else if (index === 2) {
        		if (!that.withDrawRecord) {
        			that.withDrawRecord = new WithdrawRecord();
        			that.zone.find('.jyjl-content').append(that.withDrawRecord.getDom());
        			that.withDrawRecord.bindEvents();
        		}

        		that.withDrawRecord.show();
        	} else if (index === 3) {
        		if (!that.bettingRecord) {
        			that.bettingRecord = new BettingRecord();
        			that.zone.find('.jyjl-content').append(that.bettingRecord.getDom());
        			that.bettingRecord.bindEvents();
        		}

        		that.bettingRecord.show();
        	} else if (index === 4) {
        		if (!that.dividendRecord) {
        			that.dividendRecord = new DividendRecord();
        			that.zone.find('.jyjl-content').append(that.dividendRecord.getDom());
        			that.dividendRecord.bindEvents();
        		}

        		that.dividendRecord.show();
        	}
        });

        $('.zhsz-zone').delegate('#zhsz-tab>li','click', function () {
        	if ($(this).hasClass('stick')) {
        		return;
        	}

        	index = $(this).index();
        	that.zone.find('.zhsz-info-action').hide();

        	if (index === 0) {
        		that.basicInfo.show();
        	}else if(index === 1){
				if (!app.userTotalInfo.TrueName) {
					app.alert('请先填写真实姓名', function () {
						app.personCenterRouter(2, 0);
					});
					
					return;
				}

        		if (!that.security) {
        			that.security = new SecurityCenter();
        			that.zone.find('.zhsz-content').append(that.security.getDom());
        			that.security.bindEvents();
        		}
        		
        		that.security.show();
        	}
        });

        $('.znx-zone').delegate('#znx-tab>li','click', function() {
        	if ($(this).hasClass('stick')) {
        		return;
        	}
        	
        	index = $(this).index();
        	that.zone.find('.znx-info-action').hide();

        	if (index === 0) {
        		that.stationLetter.show();
        	}else if(index === 1) {
        		if (!that.announcement ) {
	        		that.announcement = new Announcement();
	        		that.zone.find('.znx-content').append(that.announcement.getDom());
	        		that.announcement.bindEvents();
        		}

        		that.announcement.show();
        	}
        });

        this.zone.find('.improve-security').click(function () {
        	app.personCenterRouter(2, 1);
        });

        this.zone.find('.close').click(function () {
        	that.hide();
        });

        PubSub.subscribe('onRequestWalletBalance', function (msg, data) {
        	that.getCenterWalletCash();
        });

        PubSub.subscribe('onSecurityLevelChanged', function (msg, data) {
        	app.getUserInfo(that.getPwdSecurityLevel.bind(that));
        });

        this.bindOverlayEvents();
	};

	window.PersonalCenter = PersonalCenter;
}());
$(function() {
	function ReadMessageDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ReadMessageDialog.prototype = new IMDialog();

	ReadMessageDialog.prototype.initDom = function() {
		var temp =	'<div class="read-message-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name"></span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<div class="datetime"></div>' +
									'<div class="letter-content"></div>' +
								'</div>'+
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	ReadMessageDialog.prototype.getDom = function() {
		return this.el;
	};

	ReadMessageDialog.prototype.show = function(opt) {
		this.letterId   = opt.id;
		this.readStatus = opt.status;
		this.type       = opt.type;
		this.zone.find('.title-name').text(opt.title);
		this.zone.find('.datetime').text(opt.datetime);
		this.zone.find('.letter-content').text(opt.letter);
		this.showOverlay();
	};

	ReadMessageDialog.prototype.hide = function() {
		this.hideOverlay();

		if (this.readStatus == 'false' && this.type == 'stationLetter') {
			PubSub.publish('onMessageRead', {id: this.letterId});
		}
	};

	ReadMessageDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.read-message-dialog');

		this.zone.find('.close').click(function () {
			that.hide();
		});

        this.bindOverlayEvents();
	};

	window.ReadMessageDialog = ReadMessageDialog;
}());
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
(function(){
	function SetEmailDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetEmailDialog.prototype = new IMDialog();

	SetEmailDialog.prototype.initDom = function(){
		this.validateEmailInput = new Input({
			id: 'sed-validate-email-input',
			width: 205,
			height: 35,
			reg: app.emailReg
		});

		this.validateGoModifyButton = new Button({
			id: 'sed-validate-go-modify-button',
			name: '修改邮箱',
			width: 100,
			height: 35
		});

		this.validateVerifyInput = new Input({
			id: 'sed-validate-verify-input',
			width: 205,
			height: 35,
			reg: app.verifyReg
		});

		this.validateVerifyCodeButton = new Button({
			id: 'sed-validate-verify-code-button',
			name: '获取验证码',
			width: 100,
			height: 35
		});

		this.validateOkButton = new Button({
			id: 'sed-validate-ok-button',
			name: '确定',
			width: 120,
			height: 35
		});

		this.validateCancelButton = new Button({
			id: 'sed-validate-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		this.modifyEmailInput = new Input({
			id: 'sed-modify-email-input',
			width: 330,
			height: 35,
			reg: app.emailReg
		});

		this.modifyOkButton = new Button({
			id: 'sed-modify-ok-button',
			name: '修改',
			width: 120,
			height: 35
		});

		this.modifyCancelButton = new Button({
			id: 'sed-modify-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		var temp = '<div class="set-email-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title"></div>' +

								'<div class="content">' +
									'<div class="cont validate-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'电子邮箱' +
													'</td>' +
													'<td>' +
														this.validateEmailInput.getDom() +
														//this.validateGoModifyButton.getDom() +
													'</td>' +
												'</tr>' +

												'<tr>' +
													'<td class="text">' +
														'验证码：' +
													'</td>' +
													'<td>' +
														this.validateVerifyInput.getDom() +
														this.validateVerifyCodeButton.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.validateOkButton.getDom() +
											this.validateCancelButton.getDom() +
										'</div>' +
									'</div>' +

									'<div class="cont modify-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'新邮箱' +
													'</td>' +
													'<td>' +
														this.modifyEmailInput.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.modifyOkButton.getDom() +
											this.modifyCancelButton.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	SetEmailDialog.prototype.getDom = function() {
		return this.el;
	};

	SetEmailDialog.prototype.show = function(opt) {
		this.showOpt  = opt;
		this.bindFlag = false;  //是否绑定成功的标识。
		this.resetDialog();
		this.showOverlay();
	};

	SetEmailDialog.prototype.hide = function() {
		clearInterval(this.tm);
		this.hideOverlay();
		this.validateVerifyCodeButton.enable();

		if (this.showOpt) {
			if (this.bindFlag) {
				if (this.showOpt.successHideCallback &&  typeof this.showOpt.successHideCallback === 'function') {
					this.showOpt.successHideCallback();
				}
			} else {
				if (this.showOpt.failedHideCallback &&  typeof this.showOpt.failedHideCallback === 'function') {
					this.showOpt.failedHideCallback();
				}
			}
		}
	};

	SetEmailDialog.prototype.resetDialog = function() {
		this.validateEmailInput.setValue('');
		this.validateVerifyInput.setValue('');
		this.validateVerifyCodeButton.setName('获取验证码');
		this.showValidateContent();
	};

	SetEmailDialog.prototype.showValidateContent = function() {
		this.validateEmailInput.setValue('');
		this.zone.find('.dialog').children('.title').text('验证电子邮箱');
		this.zone.find('.cont').hide();
		this.zone.find('.validate-content').show();
	};

	SetEmailDialog.prototype.showModifyContent = function() {
		this.zone.find('.dialog').children('.title').text('修改电子邮箱');
		this.zone.find('.cont').hide();
		this.zone.find('.modify-content').show();
	};

	SetEmailDialog.prototype.getSiteUrl = function () {
	    return window.location.protocol + "//" + window.location.host + "/eveb_user/emailvalidate.html";
	};

	SetEmailDialog.prototype.getVerifyCode = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.validateEmailInput.isPass()) {
			app.alert('请先填写邮箱地址。');
			return;
		}

		that.validateVerifyCodeButton.disable();

		/*
		** 第一步： 修改邮箱地址
		*/
		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Email: this.validateEmailInput.getValue(),
				TrueName: app.userTotalInfo.TrueName
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				that.validateVerifyCodeButton.enable();
				return;
			}

			if (json === true) {
				that.getVerifyCodeStep2();
			} else {
				app.alert('修改失败!');
				that.validateVerifyCodeButton.enable();
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.getVerifyCodeStep2 = function() {
		var count;
		var opt;
		var email;
		var callback;
		var that = this;
		var validateUrl = this.getSiteUrl();

		opt = {
			url: app.urls.sendEmailValidateCode,
			data: {
				Email: this.validateEmailInput.getValue(),
				ValidateUrl: validateUrl,
				OnlyCode: true
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				that.validateVerifyCodeButton.enable();
				return;
			}

			if (data === true) {
				that.validateVerifyCodeButton.setName('验证码已发送');

				count = 60;
				that.tm = setInterval(function () {
					count--;

					if (count > 0) {
						that.validateVerifyCodeButton.setName(count + 's');
					} else {
						that.validateVerifyCodeButton.setName('获取验证码');
						that.validateVerifyCodeButton.enable();
						clearInterval(that.tm);
					}
				}, 1000);
			} else {
				app.alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.commitValidate = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.validateEmailInput.isPass() || !this.validateVerifyInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.validateEmail,
			data: {
				Id: app.userTotalInfo.Id,
				Email: this.validateEmailInput.getValue(),
				EmailValidateCode: this.validateVerifyInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('验证成功!');
			} else {
				app.alert('验证失败!');
			}

			PubSub.publish('onRefreshSecurityCenter', {});
			PubSub.publish('onSecurityLevelChanged',{});
			that.hide();
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.commitModify = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.modifyEmailInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Email: this.modifyEmailInput.getValue(),
				TrueName: app.userTotalInfo.TrueName
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('修改成功!');
			} else {
				app.alert('修改失败!');
			}

			PubSub.publish('onRefreshSecurityCenter', {});
			PubSub.publish('onSecurityLevelChanged',{});
			that.hide();
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.commit = function () {
		var opt;
		var callback;
		var that  = this;

		if (!this.validateEmailInput.isPass() || !this.validateVerifyInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.validateEmail,
			data: {
				Id: app.userTotalInfo.Id,
				Email: this.validateEmailInput.getValue(),
				EmailValidateCode: this.validateVerifyInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('验证成功!');
				that.bindFlag = true;
				PubSub.publish('onRefreshSecurityCenter', {});
				PubSub.publish('onSecurityLevelChanged',{});
				that.hide();
			} else {
				app.alert('验证失败!');
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.bindEvents = function() {
		var steps;
		var contentName;
		var that = this;

		this.zone = $('.set-email-dialog');

		this.zone.find('#sed-validate-go-modify-button').click(function () {
			that.showModifyContent();
		});

		this.zone.find('#sed-validate-verify-code-button').click(function () {
			if (that.validateVerifyCodeButton.isDisable()) {
				return;
			}

			that.getVerifyCode();
		});

		this.zone.find('#sed-validate-ok-button').click(function () {
			that.commit();
		});

		this.zone.find('#sed-validate-cancel-button').click(function () {
			that.hide();
		});


		this.zone.find('#sed-modify-ok-button').click(function () {
			that.commitModify();
		});

		this.zone.find('#sed-modify-cancel-button').click(function () {
			that.hide();
		});

		this.validateEmailInput.bindEvents();
		this.validateGoModifyButton.bindEvents();
		this.validateVerifyInput.bindEvents();
		this.validateVerifyCodeButton.bindEvents();
		this.validateOkButton.bindEvents();
		this.validateCancelButton.bindEvents();

		this.modifyEmailInput.bindEvents();
		this.modifyOkButton.bindEvents();
		this.modifyCancelButton.bindEvents();

        this.bindOverlayEvents();
	};

	window.SetEmailDialog = SetEmailDialog;
}());
(function() {
	function SetPhonenumberDialog(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetPhonenumberDialog.prototype = new IMDialog();

	SetPhonenumberDialog.prototype.initDom = function(){
		this.validatePhoneInput = new Input({
			id: 'spd-validate-phone-input',
			width: 205,
			height: 35,
			reg: app.phoneReg
		});

		this.validateGoModifyButton = new Button({
			id: 'spd-validate-go-modify-button',
			name: '修改号码',
			width: 100,
			height: 35
		});

		this.validateVerifyInput = new Input({
			id: 'spd-validate-verify-input',
			width: 205,
			height: 35,
			reg: app.verifyReg
		});

		this.validateVerifyCodeButton = new Button({
			id: 'spd-validate-verify-code-button',
			name: '获取验证码',
			width: 100,
			height: 35
		});

		this.validateOkButton = new Button({
			id: 'spd-validate-ok-button',
			name: '确定',
			width: 120,
			height: 35
		});

		this.validateCancelButton = new Button({
			id: 'spd-validate-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		this.modifyPhoneInput = new Input({
			id: 'spd-modify-phone-input',
			width: 330,
			height: 35,
			reg: app.phoneReg
		});

		this.modifyOkButton = new Button({
			id: 'spd-modify-ok-button',
			name: '修改',
			width: 120,
			height: 35
		});

		this.modifyCancelButton = new Button({
			id: 'spd-modify-cancel-button',
			name: '取消',
			width: 120,
			height: 35
		});

		var temp = '<div class="set-phonenumber-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title"></div>' +

								'<div class="content">' +
									'<div class="cont validate-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'手机号码' +
													'</td>' +
													'<td>' +
														this.validatePhoneInput.getDom() +
														//this.validateGoModifyButton.getDom() +
													'</td>' +
												'</tr>' +

												'<tr>' +
													'<td class="text">' +
														'验证码：' +
													'</td>' +
													'<td>' +
														this.validateVerifyInput.getDom() +
														this.validateVerifyCodeButton.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.validateOkButton.getDom() +
											this.validateCancelButton.getDom() +
										'</div>' +
									'</div>' +

									'<div class="cont modify-content">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'新号码' +
													'</td>' +
													'<td>' +
														this.modifyPhoneInput.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.modifyOkButton.getDom() +
											this.modifyCancelButton.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	SetPhonenumberDialog.prototype.getDom = function() {
		return this.el;
	};

	SetPhonenumberDialog.prototype.show = function(opt) {
		this.showOpt  = opt;
		this.bindFlag = false;  //是否绑定成功的标识。
		this.resetDialog();
		this.showOverlay();
	};

	SetPhonenumberDialog.prototype.hide = function() {
		clearInterval(this.tm);
		this.hideOverlay();
		this.validateVerifyCodeButton.enable();

		if (this.showOpt) {
			if (this.bindFlag) {
				if (this.showOpt.successHideCallback &&  typeof this.showOpt.successHideCallback === 'function') {
					this.showOpt.successHideCallback();
				}
			} else {
				if (this.showOpt.failedHideCallback &&  typeof this.showOpt.failedHideCallback === 'function') {
					this.showOpt.failedHideCallback();
				}
			}
		}
	};

	SetPhonenumberDialog.prototype.resetDialog = function() {
		this.validatePhoneInput.setValue('');
		this.validateVerifyInput.setValue('');
		this.modifyPhoneInput.setValue('');
		this.validateVerifyCodeButton.setName('获取验证码');
		this.showValidateContent();
	};

	SetPhonenumberDialog.prototype.showValidateContent = function() {
		this.validatePhoneInput.setValue('');
		this.zone.find('.dialog').children('.title').text('验证手机号码');
		this.zone.find('.cont').hide();
		this.zone.find('.validate-content').show();
	};

	SetPhonenumberDialog.prototype.showModifyContent = function() {
		this.zone.find('.dialog').children('.title').text('修改手机号码');
		this.zone.find('.cont').hide();
		this.zone.find('.modify-content').show();
	};

	SetPhonenumberDialog.prototype.getVerifyCode = function () {
		var opt;
		var callback;
		var that  = this;

		if (!this.validatePhoneInput.isPass()) {
			app.alert('请先填写手机号码。');
			return;
		}

		that.validateVerifyCodeButton.disable();

		/*
		** 第一步： 修改手机号码
		*/
		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Phone: this.validatePhoneInput.getValue(),
				TrueName: app.userTotalInfo.TrueName     //不填真实姓名是没法修改手机号码的
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				that.validateVerifyCodeButton.enable();
				return;
			}

			if (json === true) {
				that.getVerifyCodeStep2();
			} else {
				app.alert('操作失败!');
				that.validateVerifyCodeButton.enable();
			}
		};

		Service.post(opt, callback);
	};

	SetPhonenumberDialog.prototype.getVerifyCodeStep2 = function() {
		var count;
		var opt;
		var phone;
		var callback;
		var that = this;
		var phone = this.validatePhoneInput.getValue();

		opt = {
			url: app.urls.sendPhoneValidateCode,
			data: {
				Phone: phone,
				Id: app.userTotalInfo.Id
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				that.validateVerifyCodeButton.enable();
				return;
			}

			if (data === true) {
				that.validateVerifyCodeButton.setName('验证码已发送');

				count = 60;
				that.tm = setInterval(function () {
					count--;

					if (count > 0) {
						that.validateVerifyCodeButton.setName(count + 's');
					} else {
						that.validateVerifyCodeButton.setName('获取验证码');
						that.validateVerifyCodeButton.enable();
						clearInterval(that.tm);
					}
				}, 1000);
			} else {
				app.alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	SetPhonenumberDialog.prototype.commit = function () {
		var opt;
		var callback;
		var that = this;

		if (!this.validatePhoneInput.isPass() || !this.validateVerifyInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.validatePhone,
			data: {
				Id: app.userTotalInfo.Id,
				Phone: this.validatePhoneInput.getValue(),
				PhoneValidateCode: this.validateVerifyInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('验证成功!');
				that.bindFlag = true;
				PubSub.publish('onRefreshSecurityCenter', {});
				PubSub.publish('onSecurityLevelChanged',{});
				that.hide();
			} else {
				app.alert('验证失败!');
			}
		};

		Service.post(opt, callback);
	};

/*	SetPhonenumberDialog.prototype.commitModify = function() {
		var opt;
		var callback;
		var that  = this;

		if (!this.modifyPhoneInput.isPass()) {
			return;
		}

		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Phone: this.modifyPhoneInput.getValue(),
				TrueName: app.userTotalInfo.TrueName
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json === true) {
				app.alert('修改成功!');
			} else {
				app.alert('修改失败!');
			}

			PubSub.publish('onRefreshSecurityCenter', {});
			PubSub.publish('onSecurityLevelChanged',{});
			that.hide();
		};

		Service.post(opt, callback);
	};
*/
	SetPhonenumberDialog.prototype.bindEvents = function() {
		var steps;
		var contentName;
		var that = this;

		this.zone = $('.set-phonenumber-dialog');

		this.zone.find('#spd-validate-go-modify-button').click(function () {
			that.showModifyContent();
		});

		this.zone.find('#spd-validate-verify-code-button').click(function () {
			if (that.validateVerifyCodeButton.isDisable()) {
				return;
			}

			that.getVerifyCode();
		});

		this.zone.find('#spd-validate-ok-button').click(function () {
			that.commit();
		});

		this.zone.find('#spd-validate-cancel-button').click(function () {
			that.hide();
		});


		this.zone.find('#spd-modify-ok-button').click(function () {
			that.commitModify();
		});

		this.zone.find('#spd-modify-cancel-button').click(function () {
			that.hide();
		});

		this.validatePhoneInput.bindEvents();
		this.validateGoModifyButton.bindEvents();
		this.validateVerifyInput.bindEvents();
		this.validateVerifyCodeButton.bindEvents();
		this.validateOkButton.bindEvents();
		this.validateCancelButton.bindEvents();

		this.modifyPhoneInput.bindEvents();
		this.modifyOkButton.bindEvents();
		this.modifyCancelButton.bindEvents();

        this.bindOverlayEvents();
	};

	window.SetPhonenumberDialog = SetPhonenumberDialog;
}());
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

(function () {
	function SignUp (opt) {
		IMDialog.call(this, opt || {});
		this.initInputs = ['userNameInput', 'passwordInput', 'comfirmPasswordInput', 'verifyInput'];
		this.initDom();
	}
	
	SignUp.prototype = new IMDialog();

	SignUp.prototype.initDom = function () {
		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;';
		var inputWidth  = 300;
		var inputHeihgt = 30;

		this.userNameInput = new Input({
			id: 'sign-up-username-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.usernameReg,
			placeholder: '用户名由6-12位数字和字母组成'
		});

		this.passwordInput = new Input({
			id: 'sign-up-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '密码由6-12位数字和字母组成，不含字符',
			type: 'password'
		});

		this.comfirmPasswordInput = new Input({
			id: 'sign-up-comfirm-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请再次输入您的密码',
			type: 'password'
		});

		this.emailInput = new Input({
			id: 'sign-up-email-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.emailReg,
			placeholder: '请输入您的邮箱地址'
		});

		this.phoneInput = new Input({
			id: 'sign-up-phone-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.phoneNumberReg,
			placeholder: '请输入您的手机号码'
		});

		this.trueNameInput = new Input({
			id: 'sign-truename-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.chineseNameReg,
			placeholder: '请输入您的真实姓名'
		});

		this.popularInput = new Input({
			id: 'sign-popular-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.popularizeReg,
			canBlank: true,
			placeholder: '请输入推广码，如无请留空'
		});

		this.verifyInput = new Input({
			id: 'sign-up-vefiry-input',
			width: 150,
			height: 30,
			reg: app.verifyReg,
			placeholder: '请输入验证码'
		});

		var temp =	'<div class="sign-up">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="icon logo-icon-small"></div>' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">用户名</div>' +
									this.userNameInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>用户名已存在</span>' +
									'</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">密' + filler + '码</div>' +
									this.passwordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="text">&nbsp;</div>' +
									this.comfirmPasswordInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>两次输入的密码不一致</span>' +
									'</div>' +
								'</div>' +

								'<div class="row email-row has-notice">' +
									'<div class="text">邮' + filler + '箱</div>' +
									this.emailInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>电子邮箱是您找回密码的重要途径</span>' +
									'</div>' +
								'</div>' +

								'<div class="row phone-row has-notice">' +
									'<div class="text">手机号</div>' +
									this.phoneInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>手机号码是您的重要身份验证方式</span>' +
									'</div>' +
								'</div>' +

								'<div class="row true-name-row has-notice">' +
									'<div class="text">姓' + filler + '名</div>' +
									this.trueNameInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>充值提款操作需要验证您的真实姓名</span>' +
									'</div>' +
								'</div>' +

								'<div class="row agent-extend-row">' +
									'<div class="text">推广码</div>' +
									this.popularInput.getDom() +
								'</div>' +

								'<div class="row verify-row">' +
									'<div class="text">验证码</div>' +
									this.verifyInput.getDom() +
									'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'<span class="change-verify-code">换一个</span>' +
								'</div>' +

								'<div class="row agree-row">' +
									'<div class="agree">' +
										'<input type="checkbox" id="remember-checkbox" checked="checked">' +
										'<label for="remember-checkbox">我已届满合法博彩年龄，且同意各项开户条约</label>' +
									'</div>' +
								'</div>' +

								'<div class="row button-row">' +
									'<div class="button register">' +
										'快速注册' +
									'</div>' +
									'<div class="button-info signin-now">' +
										'已有账户？立即登录' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay3"></div>';
		
		this.el  = temp;
	};

	SignUp.prototype.getDom = function () {
		return this.el;
	};

	SignUp.prototype.show = function () {
		this.showOverlay();
		this.setRegistInputs();
	};

	SignUp.prototype.hide = function () {
		this.hideOverlay();
		this.clearInputs();
	};

	SignUp.prototype.setRegistInputs = function () {
		var top;
		var data = app.registerData;

		if (!data.EmailIsRequire) {
			this.zone.find('.email-row').hide();
		}

		if (!data.PhoneIsRequire) {
			this.zone.find('.phone-row').hide();
		}

		if (!data.TrueNameIsRequire) {
			this.zone.find('.true-name-row').hide();
		}

		/*
		**  js消除弹出框的字体和界面模糊，这是由于transform: translate属性引起的
		**  dialog-wrapper的宽高要是2的倍数，这样translate(50%,50%)才不会有小数，
		**  才不会产生模糊
		*/
		top = this.zone.find('.dialog-wrapper').height();

		if (top % 2 !== 0) {   
			top += 1;
			this.zone.find('.dialog-wrapper').css('height', top + 'px');
		}

		if (app.proxy) {
			this.popularInput.setValue(app.proxy);
			this.popularInput.disable();
		}

		this.zone.find('.change-verify-code').click();
	};

	SignUp.prototype.clearInputs = function () {
		var i;
		var data = app.registerData;
		var arr  = this.initInputs;

		this.zone.find('.error-notice').hide();
		this.popularInput.setValue('');
		this.popularInput.enable();

		for (i = 0; i < arr.length; i++) {
			this[arr[i]].setValue('');
		}

		if (data) {
			if (data.EmailIsRequire) {
				this.emailInput.setValue('');
			}

			if (data.PhoneIsRequire) {
				this.phoneInput.setValue('');
			}

			if (data.TrueNameIsRequire) {
				this.trueNameInput.setValue('');
			}
		}
	};

	SignUp.prototype.checkInputPass = function () {
		var i;
		var password;
		var cpassword;
		var data = app.registerData;
		var arr  = this.initInputs;

		if (data.EmailIsRequire) {
			arr.push('emailInput');
		}

		if (data.PhoneIsRequire) {
			arr.push('phoneInput');
		}

		if (data.TrueNameIsRequire) {
			arr.push('trueNameInput');
		}

		if (!this.zone.find('#remember-checkbox').prop('checked')) {
			this.allPass = false;
		} else {
			this.allPass = true;
		}

		if (this.allPass) {
			for (i = 0; i < arr.length; i++) {
				if (!this[arr[i]].isPass()) {
					this.allPass = false;
					break;
				}
			}
		}

		password  = this.passwordInput.getValue();
		cpassword = this.comfirmPasswordInput.getValue();

		if (password && cpassword && password == cpassword) {
			this.zone.find('#sign-up-comfirm-password-input').next('.error-notice').hide();
		} else if (password && cpassword && password != cpassword) {
			this.zone.find('#sign-up-comfirm-password-input').next('.error-notice').show();
			this.allPass = false;
		}

		if (this.allPass) {
			this.zone.find('.register').addClass('active');
		} else {
			this.zone.find('.register').removeClass('active');
		}

		return this.allPass;
	};

    SignUp.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

    SignUp.prototype.resetVerifyCode = function() {
		this.verifyInput.setValue('');
		this.zone.find('.change-verify-code').click();
    };

	SignUp.prototype.commit = function () {
		var opt;
		var callback;
		var that = this;

		if (!this.checkInputPass()) {
			app.alert('请按要求完成相关信息!');
			this.resetVerifyCode();
			return;
		}

		if (this.passwordInput.getValue() !== this.comfirmPasswordInput.getValue()) {
			app.alert('两次输入的密码不一致');
			that.zone.find('.register').removeClass('active');
			this.resetVerifyCode();
			return;
		}

		this.loader.play();	

		opt = {
			url: app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.getValue(),
			data: {}
		}

		callback = function (json) {
			that.resetVerifyCode();

        	if (!json || json == 'false') {
        		that.loader.stop();
        		app.alert('验证码错误');
        		that.zone.find('.register').removeClass('active');
        		return;
        	}

        	that.register();
		};

		Service.get(opt, callback);
	};

	SignUp.prototype.register = function () {
		var opt;
		var callback;
		var i;
		var data = app.registerData;
		var that = this;
		

		callback = function (json) {
			that.loader.stop();
			that.resetVerifyCode();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				that.zone.find('.register').removeClass('active');
				return;
			}
			
			app.signedInProcedures();
			app.Comet.refreshClientCUN(json.CUN);
			that.hide();
		};

		opt = {
			url: app.urls.signUp,
			data: {
				UserName: this.userNameInput.getValue(),
				Password: this.passwordInput.getValue(),
				ExtendCode: this.popularInput.getValue(),
				RegWebSite: window.location.host
			}
		};

		if (data.EmailIsRequire) {
			opt.data.Email = this.emailInput.getValue() || '';
		}

		if (data.PhoneIsRequire) {
			opt.data.Phone = this.phoneInput.getValue() || '';
		}

		if (data.TrueNameIsRequire) {
			opt.data.TrueName = this.trueNameInput.getValue() || '';
		}

		Service.post(opt, callback);
	};

	SignUp.prototype.bindEvents = function () {
		var username;
		var close;
		var button;
		var that  = this;
		var data  = app.registerData;

		this.zone = $('.sign-up');
		close     = this.zone.find('.close');
		button    = this.zone.find('.register');

		close.click(function () {
			that.hide();
		});

		button.click(function () {
			if (that.zone.find('.register').hasClass('active')) {
				that.commit();
			}
		});

		this.zone.keypress(function(e) {
		    if(e.which == 13) {
				if (that.zone.find('.register').hasClass('active')) {
					that.commit();
				}
		    }
		});

		this.zone.find('.change-verify-code').click(function () {
            that.zone.find('.verify-code').attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
		});

		this.zone.find('.signin-now').click(function () {
			that.hide();

			if (!app.signInDialog) {
				app.signInDialog = new SignIn();
				$('.app').append(app.signInDialog.getDom());
				app.signInDialog.bindEvents();
			}

			app.signInDialog.show();
		});

		this.zone.find('#sign-up-username-input input').blur(function () {
			var self = this;

			username = $(this).val();

			app.checkUser(username, function (data) {
				if (data && data.UserName && data.UserName == username) {
					$(self).parent('.input').next('.error-notice').show();
				} else {
					$(self).parent('.input').next('.error-notice').hide();
				}
			});
		});

		this.zone.find('#sign-up-email-input input').focus(function () {
			data = app.registerData;

			if (data.EmailIsRequire) {
				$(this).parent('.input').next('.error-notice').show();
			}
		}).blur(function () {
			$(this).parent('.input').next('.error-notice').hide();
		});

		this.zone.find('#sign-up-phone-input input').focus(function () {
			data = app.registerData;

			if (data.PhoneIsRequire) {
				$(this).parent('.input').next('.error-notice').show();
			}
		}).blur(function () {
			$(this).parent('.input').next('.error-notice').hide();
		});

		this.zone.find('#sign-truename-input input').focus(function () {
			data = app.registerData;

			if (data.TrueNameIsRequire) {
				$(this).parent('.input').next('.error-notice').show();
			}
		}).blur(function () {
			$(this).parent('.input').next('.error-notice').hide();
		});

		this.zone.find('#remember-checkbox').change(function () {
			that.checkInputPass();
		});

		this.bindOverlayEvents();
		this.createLoader();

		this.userNameInput.bindEvents(this.checkInputPass.bind(this));
		this.passwordInput.bindEvents(this.checkInputPass.bind(this));
		this.comfirmPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.emailInput.bindEvents(this.checkInputPass.bind(this));
		this.phoneInput.bindEvents(this.checkInputPass.bind(this));
		this.trueNameInput.bindEvents(this.checkInputPass.bind(this));
		this.popularInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyInput.bindEvents(this.checkInputPass.bind(this));
	};

	window.SignUp = SignUp;
}());

$(function(){
	function StationLetter(opt){
		this.opt = opt;
		this.initDom();
	}

	StationLetter.prototype.initDom = function(){
		var temp;

		this.button = new Button({
			id: 'station-letter-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28	
		});

		this.pager = new Pager({
			id: 'station-letter-pager',
			callback: this.bindData.bind(this),
			right: true
		});

		temp = '<div class="station-letter znx-info-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' +
									'<th colspan="2">通知内容</th><th>时间</th>' +
								'</tr><thead>' +
								'<tbody>' +
								'</tbody>' +
							'</table>' + 

							 '<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +

 							'<div class="operations">' +
 								'<input type="checkbox" id="checkAll">' +
 								'<label for="checkAll">全选</label>' +
 								'<span class="mark-read">标记为已读</span>' +
 								'<span class="delete">删除</span>' +
 							'</div>' +
						'</div>' +
				'</div>';

		this.el = temp;
	};

	StationLetter.prototype.getDom = function() {
		return this.el;
	};

	StationLetter.prototype.show = function() {
		this.zone.show();
		this.queryData(0, true);
	};

	StationLetter.prototype.hide = function () {
		this.zone.hide();
	};

    StationLetter.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	StationLetter.prototype.queryData = function(pageIndex, firstTime) {
		var opt;
		var callback;
		var that      = this;
		var starttime = this.zone.find('.starttime').val();
		var endtime   = this.zone.find('.endtime').val();

		this.loader1.play();

		opt = {
			url: app.urls.getStationLetters,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex || 0,
				pageSize: 10,
				status: ''
			}
		};

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	StationLetter.prototype.setData = function(data) {
		var dom = '';
		var i   = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++) {
			if (i % 2 == 0) {
				dom +=	'<tr class="odd' + (!currentData[i].ReadTime?'': ' readed') + '" data-id="' + currentData[i].Id + '" data-read=' + (currentData[i].ReadTime?true: false) + '>' +
							'<td><input type="checkbox" /></td>' +
							'<td class="letter"><p>' + currentData[i].Message + '</p></td>' +
							'<td class="datetime">' + currentData[i].SendTime + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even' + (!currentData[i].ReadTime?'': ' readed') + '" data-id="' + currentData[i].Id + '" data-read=' + (currentData[i].ReadTime?true: false) + '>' +
							'<td><input type="checkbox" /></td>' +
							'<td class="letter"><p>' + currentData[i].Message + '</p></td>' +
							'<td class="datetime">' + currentData[i].SendTime + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	StationLetter.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	StationLetter.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + '23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	StationLetter.prototype.readMessage = function (Id) {
		var opt;
		var callback;
		var that      = this;

		this.loader1.play();

		opt = {
			url: app.urls.readMessage,
			data: {
				Id: Id
			}
		};

		callback = function (json) {
			if (json == true) {
				that.queryData(0, true);
			}
		};

		Service.post(opt, callback);
	};

	StationLetter.prototype.deleteMessage = function (Id) {
		var opt;
		var callback;
		var that      = this;

		this.loader1.play();

		opt = {
			url: app.urls.deleteMessage,
			data: {
				Id: Id
			}
		};

		callback = function (json) {
			if (json == true) {
				that.queryData(0, true);
			}
		};

		Service.post(opt, callback);
	};

	StationLetter.prototype.bindEvents = function () {
		var id;
		var trs;
		var tr;
		var i;
		var inputs;
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -100);

		this.zone    = $('.station-letter');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';;
        endDay   = endDay.formatDate() + '23:59';
        
        this.zone.find('.starttime').datetimepicker({
        	value: beginDay,
        	timepicker: false, 
        	theme: 'dark', 
        	lang: 'zh',
        	minDate: minDate
        });

        this.zone.find('.endtime').datetimepicker({
        	value: endDay,
        	timepicker: false, 
        	theme: 'dark', 
        	lang: 'zh',
        	minDate: minDate
        });

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        });

        this.zone.find('#station-letter-button').click(function () {
        	that.queryData(0, true);
        });

        this.zone.find('table tbody').delegate('.letter p', 'click', function () {
        	tr = $(this).parent('.letter').parent('tr');

        	app.showReadMessageDialog({
        		id: tr.attr('data-id'),
        		datetime: tr.children('.datetime').text(),
        		letter: tr.find('.letter p').text(),
        		status: tr.attr('data-read'),
        		type: 'stationLetter',
        		title: '站内信'
        	});
        });

        this.zone.find('#checkAll').click(function () {
        	inputs = that.zone.find('table td input');

        	if ($(this).prop('checked')) {
        		inputs.prop('checked', true);
        	} else {
        		inputs.prop('checked', false);
        	}
        });

        this.zone.find('.mark-read').click(function () {
        	trs = that.zone.find('table tr');
        	id  = '';

        	for (i = 0; i < trs.length; i++) {
        		if ($(trs[i]).find('input[type=checkbox]').prop('checked')) {
        			if (id === '') {
        				id += $(trs[i]).attr('data-id');
        			} else {
        				id += ',' + $(trs[i]).attr('data-id');
        			}
        		}
        	}

        	if (id === '') {
        		return;
        	}

        	that.readMessage(id);
        });

        this.zone.find('.delete').click(function () {
        	trs = that.zone.find('table tr');
        	id  = '';

        	for (i = 0; i < trs.length; i++) {
        		if ($(trs[i]).find('input[type=checkbox]').prop('checked')) {
        			if (id === '') {
        				id += $(trs[i]).attr('data-id');
        			} else {
        				id += ',' + $(trs[i]).attr('data-id');
        			}
        		}
        	}

        	if (id === '') {
        		return;
        	}
        	
        	that.deleteMessage(id);
        });

        PubSub.subscribe('onMessageRead', function (msg, data) {
        	that.readMessage(data.id);
        });

        this.button.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.StationLetter = StationLetter;
}());
$(function(){
	function SubWallet(opt){
		this.opt = opt || {};
		this.id = opt.id;
		this.initDom();
	}

	SubWallet.prototype.initDom = function(){
		var temp = '<div class="sub-wallet wallet" data-platform="' + this.opt.platform + '">' +
						'<div class="row1">' +
							'<span class="balance">' + this.opt.balance + '</span>' +
							'<span class="pc-icon refresh-icon refresh"></span>' +
							'<span class="clear"></span>' +
						'</div>' +

						'<div class="row2">' +
							'<span class="platform">' + this.opt.walletType + '</span>' +
							'<a class="btn-transfer">转入</a>' +
							'<span class="clear"></span>' +
						'</div>' +
					'</div>';
		this.el = temp;
	}

	SubWallet.prototype.getDom = function(){
		return this.el;
	}

	SubWallet.prototype.bindEvents = function(){
		//转入转出时间注册
	}

	window.SubWallet = SubWallet;

}());
(function () {
	function TopUp(opt) {
		this.opt  = opt;
		this.autoPayRangeDict = {
			'ICBC': {
				id: 375,
				sort: 1,
				code: 'ICBC',
				name: '中国工商银行',
				minDeposit: 100,
				maxDeposit: 190000
			},
			'CMB': {
				id: 376,
				sort: 2,
				code: 'CMB',
				name: '招商银行',
				minDeposit: 100,
				maxDeposit: 60000
			},
			'CCB': {
				id: 380,
				sort: 3,
				code: 'CCB',
				name: '建设银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'ABC': {
				id: 381,
				sort: 4,
				code: 'ABC',
				name: '农业银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'BOC': {
				id: 382,
				sort: 5,
				code: 'BOC',
				name: '中国银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'BCM': {
				id: 383,
				sort: 6,
				code: 'BCM',
				name: '交通银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CMBC': {
				id: 377,
				sort: 7,
				code: 'CMBC',
				name: '民生银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'ECC': {
				id: 384,
				sort: 8,
				code: 'ECC',
				name: '中信银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'SPDB': {
				id: 385,
				sort: 9,
				code: 'SPDB',
				name: '上海浦发银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'PSBC': {
				id: 386,
				sort: 10,
				code: 'PSBC',
				name: '邮政储蓄银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CEB': {
				id: 387,
				sort: 11,
				code: 'CEB',
				name: '光大银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'PINGAN': {
				id: 388,
				sort: 12,
				code: 'PINGAN',
				name: '平安银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CGB': {
				id: 389,
				sort: 13,
				code: 'CGB',
				name: '广发银行股份有限公司',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'HXB': {
				id: 390,
				sort: 14,
				code: 'HXB',
				name: '华夏银行',
				minDeposit: 100,
				maxDeposit: 45000 
			},
			'CIB': {
				id: 391,
				sort: 15,
				code: 'CIB',
				name: '福建兴业银行',
				minDeposit: 100,
				maxDeposit: 45000 
			}
		};

		this.initDom();
	}

	TopUp.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'topup-button',
			name: '立即充值',
			width: 128,
			height: 38
		});

		this.button3 = new Button({
			id: 'topup-button3',
			name: '提交订单',
			width: 128,
			height: 38
		});

		this.topupInput = new Input({
			id: 'topup-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.topupInput3 = new Input({
			id: 'topup-input3',
			width: 200,
			height: 30,
			reg: app.moneyReg2
		});

		this.bankBranchInput = new Input({
			id: 'topup-bank-branch-input',
			width: 200,
			height: 32
		});

		this.selectProvince = new Select({
			id: 'topup-province',
			width: 100,
			data:[
				{
					'text': '省',
					'value': '-1'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'topup-city',
			width: 100,
			data:[
				{
					'text': '市',
					'value': '-1'
				}
			]
		});

		this.selectAdminBank = new Select({
			id: 'topup-user-admin-bank',
			width: 320,
			data:[]
		});

		temp = 		'<div class="top-up grzx-money-action">' +
						'<div class="row1">' +
							'<ul class="deposit-types"></ul>' +
						'</div>' +

						'<div class="content"></div>' +
					'</div>';

		this.el = temp;
	};

	TopUp.prototype.getDom = function() {
		return this.el;
	};

	TopUp.prototype.show = function() {
		this.zone.show();
		this.checkUserSettings();

		if (!this.firstTime) {
			this.getUserPays();
			this.firstTime = true;
		}
	};

	TopUp.prototype.hide = function() {
		this.zone.hide();
	};

	TopUp.prototype.checkUserSettings = function() {
		if (!app.checkUserTrueName()) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			}, function () {
				app.personCenterRouter(2, 0);
			});
			return;
		}
	};

	TopUp.prototype.createUserAdminUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-bankid="' + data[i].Id + '">' +
						data[i].Bank.BankName + ', ' + data[i].AccountName + ', ' + data[i].AccountNo + 
					'</option>';
		}

		this.selectAdminBank.setOptions(temp);
	};

	TopUp.prototype.submit1 = function() {
		var opt;
		var callback;
		var selectedBank = this.zone.find(".bank-cards .cards-ul li.selected");
		var selectedLi   = this.zone.find('.deposit-types li.selected');
		var amount       = this.topupInput.getValue();
		var userName     = app.userTotalInfo.UserName;
		var payPlatform  = selectedLi.attr('data-platform');
		var payMercode   = selectedLi.attr('data-mercode');
		var bankCode     = selectedBank.attr('data-code');
		var bankName     = selectedBank.attr('data-name');
    	var minDeposit   = parseFloat(this.zone.find('.min-deposit').text());
    	var maxDeposit   = parseFloat(this.zone.find('.max-deposit').text());
		var that         = this;

		if (!amount) {
			app.alert('请填写充值金额!');
			return;
		}

		if (!this.topupInput.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (parseFloat(amount) < minDeposit ||
			parseFloat(amount) > maxDeposit) {
			app.alert(	'最小充值金额：' + 
					minDeposit + 
					'。最大充值金额：' + 
					maxDeposit);
			return;
		}

		if (selectedBank.length < 1) {
			app.alert('请选择充值银行！');
			return;
		}

		opt = {
			url: app.urls.payForm,
			data: {
				Amount      : amount,
				UserName    : userName,
				PayPlatform : payPlatform,
				PayMerCode  : payMercode,
	            PayBankCode : bankCode,
	            PayBankName : bankName
			}
		};
		
		var payWin = window.open('');

        if (!payWin) {
            app.alert('请在浏览口中设置允许本网站的弹出式窗口');
            return;
        }

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				payWin.close();
				return;
			}
			
			app.showTopupOverlay();
            payWin.document.write(data.Data);
            payWin.document.close();  // 弹出提示层
		};

		Service.post(opt, callback);
	};

	TopUp.prototype.submit2 = function() {
		var callback;
		var selectedBank = this.zone.find(".bank-cards .cards-ul li.selected");
		var selectedLi   = this.zone.find('.deposit-types li.selected');
		var amount       = this.topupInput.getValue();
		var userName     = app.userTotalInfo.UserName;
		var payPlatform  = selectedLi.attr('data-platform');
		var payMercode   = selectedLi.attr('data-mercode');
		var bankCode     = selectedBank.attr('data-code');
		var bankName     = selectedBank.attr('data-name');
    	var minDeposit   = parseFloat(this.zone.find('.min-deposit').text());
    	var maxDeposit   = parseFloat(this.zone.find('.max-deposit').text());
		var that         = this;
		var opt          = {
			url: app.urls.payForm,
			data: {
				Amount      : amount,
				UserName    : userName,
				PayPlatform : payPlatform,
				PayMerCode  : payMercode,
	            PayBankCode : bankCode,
	            PayBankName : bankName,
	            FaceCode    : 1
			}
		};

		if (!amount) {
			app.alert('请填写充值金额!');
			return;
		}

		if (!this.topupInput.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (parseFloat(amount) < minDeposit ||
			parseFloat(amount) > maxDeposit) {
			app.alert(	'最小充值金额：' + 
					minDeposit +
					'。最大充值金额：' + 
					maxDeposit);
			return;
		}

		if (selectedBank.length < 1) {
			app.alert('请选择充值银行！');
			return;
		}

		callback = function (data) {
			that.loader1.stop();

			if (data.StatusCode) {
				app.alert(data.Message);
				return;
			}

			data.Data = $.parseJSON(data.Data);
			app.showDaddypayDialog({
				data        : data.Data,
				payBankCode : bankCode,
				platform    : payPlatform
			});
		};

		this.loader1.play();
		Service.post(opt, callback);
	};

	TopUp.prototype.submit3 = function() {
		var i;
		var callback;
		var transType  = this.zone.find('input[name="deposit-method"]:checked').attr('data-value');
		var amount     = this.topupInput3.getValue();
		var bankId     = $("#topup-user-admin-bank").find("option:selected").attr('data-bankid');
    	var minDeposit = parseFloat(this.zone.find('.min-deposit').text());
    	var maxDeposit = parseFloat(this.zone.find('.max-deposit').text());
		var that       = this;
		var opt        = {
			url: app.urls.addDeposit,
			data: {
				UserName: app.userTotalInfo.UserName,
				TrueName: app.userTotalInfo.TrueName,
				BankId: bankId,
				Amount: amount,
				DepositType: 0,
				TransType: transType
			}
		};

		if (!amount) {
			app.alert('请填写充值金额!');
			return;
		}

		if (!this.topupInput3.isPass()) {
			app.alert('格式不对');
			return;
		}

		if (parseFloat(amount) < minDeposit ||
			parseFloat(amount) > maxDeposit) {
			app.alert(	'最小充值金额：' + 
					minDeposit +
					'。最大充值金额：' + 
					maxDeposit);
			return;
		}

		if (transType == 2 || transType == 3 || transType == 4) {
			opt.data.Province = this.selectProvince.getValue();
			opt.data.City     = this.selectCity.getValue();
			opt.data.Address  = this.bankBranchInput.getValue();
		}

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			app.alert('恭喜您，成功提交存款单！ 单号:' + data + '。转账成功后，请即时联系在线客服为您添加额度。');
			
		};

		Service.post(opt, callback);
	};

	TopUp.prototype.getUserPays = function () {
		var i;
		var callback;
		var that  = this;
		var opt   = {
			url: app.urls.getUserPays,
			data: {}
		};

		callback = function (data) {
			that.zone.find('.spinner').hide();

            if (data && data.StatusCode) {
            	that.loader1.stop();
                app.alert(data.Message);
                return;
            }

            that.userPaysData = data;
            that.setDepositTypes(data);
        	that.bindDepositTypesEvents();
        	that.loader1.stop();
        	that.zone.find('.deposit-types li:first-child').click();
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	TopUp.prototype.getThirdPay = function (Id) {
		var i;
		var li;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getThirdPay,
			data: {
				id: Id
			}
		};

		callback = function (data) {
			that.loader1.stop();

            if (data && data.StatusCode) {
                app.alert(data.Message);
                return;
            }

			li = that.zone.find('.deposit-types li[data-type="AutoPays"]');
			li.attr('data-mercode', data.MerCode);
			li.attr('data-platform', data.ThirdPayCode);
			that.daddyPayData = that.sortDaddyData(data);
			that.bindDepositTypesEvents();
            that.zone.find('.deposit-types li:first-child').click();
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.sortDaddyData = function (data) {
		function sorting(a, b){
		  	return a.Sort - b.Sort;
		}

		data.BankList = data.BankList.sort(sorting);

		return data;
	};

	TopUp.prototype.setThirdAndAutoContent = function (bankList, platform) {
		var temp = '';
		var that = this;

		temp +=		'<div class="content-item">' +
						'<div class="bank-cards">' +
							'<div class="title">' +
								//(type === 'ThirdPay'? '请选择充值银行：': '请选择收款银行：') +
								'请选择充值银行' +
							'</div>' +

							'<ul class="cards-ul">';

        for (i = 0; i < bankList.length; i++) {
        	temp += 			'<li data-id="' + bankList[i].Id + '"' +
	        						' data-code="' + bankList[i].BankCode + '"' + 
	        						' data-name="' + bankList[i].BankName + '"' +
	        						'>' +
									//'<input type="radio" name="bank" />' +
									'<span class="bankLogo ' + bankList[i].CssName + '"></span>' +
									'<div class="card-overlay"></div>' +
								'</li>';
        }

	    temp += 			'</ul>' +
						'</div>' +

						'<div class="see-more">显示更多银行卡</div>' +

						'<div class="row4">' +
							'<div class="text">充值金额</div>' +
							this.topupInput.getDom() +
							'<div class="text unit">元</div>' +
							'<div class="input-notice">' +
								'<span>充值额度限定： 最低</span>' +
								'<span class="min-deposit">' +
									app.userTotalInfo.MinDeposit +
								'</span>' +
								'<span>元，最高</span>' +
								'<span class="max-deposit">' +
									app.userTotalInfo.MaxDeposit +
								'</span><span>元</span>' +
							'</div>' +
						'</div>' +

						'<div class="row5">' +
							this.button.getDom() +
						'</div>' +
					'</div>';

		this.zone.find('.content').html(temp);
		this.resizeCardsUl();
		this.bindOtherTransferEvents();
		this.setTopupRange();

		if (platform !== 'DADDYPAY' && platform !== 'TONGLUEYUNPAY') {
			this.button.setName('立即充值');
		} else {
			this.button.setName('下一步');
		}

		//this.zone.find('.bank-cards .cards-ul li:first-child').click();
	};

	TopUp.prototype.resizeCardsUl = function () {
		var lis   = this.zone.find('.cards-ul li');
		var width = this.zone.find('.cards-ul').width();
		var more  = this.zone.find('.see-more');

		if (width < 1000) {  //1行4个
			if (lis.length > 8) {
				more.show();
			} else {
				more.hide();
			}
		} else {  //1行5个
			if (lis.length > 10) {
				more.show();
			} else {
				more.hide();
			}
		}
	};

	TopUp.prototype.changeCardsUlMaxHeight = function (height) {
		var more   = this.zone.find('.see-more');
		var ul     = this.zone.find('.cards-ul');
		
		if (height === 150) {
			more.text('显示更多银行卡');
			more.removeClass('expanded');
		} else {
			more.text('收起');
			more.addClass('expanded');
		}

		ul.css('max-height', height + 'px');
	};

	TopUp.prototype.setBankContent = function () {
		var temp = '';

		temp += '<div class="content-item bank-topup">' +
					// '<select class="user-admin-banks-select">' +
					// '</select>' +
					this.selectAdminBank.getDom() +

					'<table cellpadding="0" cellspacing="0">' +
						'<tbody>' +
							'<tr>' +
								'<td class="name">收款银行：</td>' +
								'<td class="value">' +
									'<div class="left bank-name-value"></div>' +
									'<div class="right copy" style="display:none" data-clipboard-target=".bank-name-value">复制</div>' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td class="name">账户名称：</td>' +
								'<td class="value">' +
									'<div class="left user-name-value"></div>' +
									'<div class="right copy" data-clipboard-target=".user-name-value">复制</div>' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td class="td1 account">收款账号：</td>' +
								'<td class="value">' +
									'<div class="left account-value"></div>' +
									'<div class="right copy" data-clipboard-target=".account-value">复制</div>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +

					'<div class="deposit-method">' +
						'<span class="title">存款方式</span>' +
						'<ul>' +
							'<li class="active">' +
								'<input name="deposit-method" type="radio" id="topup-wyzz" data-value="1" checked="checked">' +
								'<label for="topup-wyzz">网银转账</label>' +
							'</li>' +
/*							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-atm-autocounter" data-value="2">' +
								'<label for="topup-atm-autocounter">ATM自动柜员机</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-atm-cash" data-value="3">' +
								'<label for="topup-atm-cash">ATM现金入款</label>' +
							'</li>' +*/
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-bank-counter" data-value="4">' +
								'<label for="topup-bank-counter">银行柜台</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-mobile-bank" data-value="5">' +
								'<label for="topup-mobile-bank">手机银行</label>' +
							'</li>' +
						'</ul>' +
					'</div>' +

					'<div class="payment-counter">' +
						'<div class="text">所属支行</div>' +
						this.selectProvince.getDom() +
						this.selectCity.getDom() +
						this.bankBranchInput.getDom() +
					'</div>' +

					'<div class="row4">' +
						'<div class="text">充值金额</div>' +
						this.topupInput3.getDom() +
						'<div class="text unit">元</div>' +
						'<div class="input-notice">' +
							'<span>充值额度限定： 最低</span>' +
							'<span class="min-deposit">' +
								app.userTotalInfo.MinDeposit +
							'</span>' +
							'<span>元，最高</span>' +
							'<span class="max-deposit">' +
								app.userTotalInfo.MaxDeposit +
							'</span><span>元</span>' +
						'</div>' +
					'</div>' +

					'<div class="row5">' +
						this.button3.getDom() +
					'</div>' +
				'</div>';

		this.zone.find('.content').html(temp);
		this.setTopupRange();
		this.bindBankTransferEvents();
		this.clipboard = new Clipboard('.copy');

		if (!this.provinceData) {
			this.getProvinceList();
		} else {
			this.createProvinceUl(this.provinceData);
			this.getCityList(this.provinceData[0].Id);
		}
	};

    TopUp.prototype.createLoader = function() {
        var wrapper1 = this.zone[0];
        
        this.loader1 = new Loader(wrapper1, {
        	top: '50%'
        });
    };

    TopUp.prototype.setTopupRange = function () {
    	var selectedLi = this.zone.find('.deposit-types li.selected');
    	var type       = selectedLi.attr('data-type');
    	var platform   = selectedLi.attr('data-platform');
    	var minDeposit = this.zone.find('.min-deposit');
    	var maxDeposit = this.zone.find('.max-deposit');
    	var alitxFlag  = (selectedLi.attr('data-special') === 'ali-tx');
    	var cardsUl    = this.zone.find('.cards-ul');
    	var code;
    	var firstLi;

    	if (type === 'ThirdPays') {    //第三方存款
    		if (platform === 'TONGLUEYUNPAY') {
	    		minDeposit.text('100');
	    		maxDeposit.text('190000');
    		} else if (alitxFlag) {
    			if (firstLi.attr('data-name') === '微信') {
		    		minDeposit.text(app.userTotalInfo.WXMinAmount);
		    		maxDeposit.text(app.userTotalInfo.WXMaxAmount);
    			} else {
		    		minDeposit.text(app.userTotalInfo.AliPayMinAmount);
		    		maxDeposit.text(app.userTotalInfo.AliPayMaxAmount);
    			}
    		} else {
	    		minDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMin);
	    		maxDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMax);
    		}
    	} else if (type === 'AutoPays') {
			code = firstLi.attr('data-code');
    		minDeposit.text(this.autoPayRangeDict[code].minDeposit);
    		maxDeposit.text(this.autoPayRangeDict[code].maxDeposit);
    	} else {    //银行存款
    		minDeposit.text(app.userTotalInfo.MinDeposit);
    		maxDeposit.text(app.userTotalInfo.MaxDeposit);
    	}

		firstLi = cardsUl.children('li:first-child');
		firstLi.click();
    };

	TopUp.prototype.setDepositTypes = function (data) {
		var i;
		var alipay     = null;
		var wechat     = null;
		var temp       = '';
		var thirdPays  = data.UserGroup.ThirdPays;
		var autoPays   = data.UserGroup.AutoPays;   //已经废弃
		var adminBanks = data.UserGroup.AdminBanks;

		for (i = 0; i < thirdPays.length; i++) {
			if (thirdPays[i].DeviceType != 2) {
				if (thirdPays[i].MerName === '支付宝/微信') {
					temp += '<li ' + (i == 0?' class="selected"': '') +
										'data-id="' + thirdPays[i].Id + '" ' +
										'data-type="ThirdPays" ' +
										'data-index="' + i + '" ' +
										'data-mercode="' + thirdPays[i].MerCode + '" ' +
										'data-platform="' + thirdPays[i].ThirdPayCode + '" ' + 
										'data-special="ali-tx">' +
								'<span>' +
									thirdPays[i].MerName +
								'</span>' +
							'</li>';
				} else {
					temp += '<li ' + (i == 0?' class="selected"': '') +
										'data-id="' + thirdPays[i].Id + '" ' +
										'data-type="ThirdPays" ' +
										'data-index="' + i + '" ' +
										'data-mercode="' + thirdPays[i].MerCode + '" ' +
										'data-platform="' + thirdPays[i].ThirdPayCode +'">' +
								'<span>' +
									thirdPays[i].MerName +
								'</span>' +
							'</li>';
				}
			}
		}

		for (i = 0; i < adminBanks.length; i++) {
			if (adminBanks[i].Type == 1) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>银行转账</span>' +
						'</li>';
				break;
			}

/*			if (adminBanks[i].Type == 0) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>微信</span>' +
						'</li>';
			} else if (adminBanks[i].Type == 1) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>银行转账</span>' +
						'</li>';
			} else if (adminBanks[i].Type == 2) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>支付宝</span>' +
						'</li>';
			} else if (adminBanks[i].Type == 3) {
				temp +=	'<li data-type="bank-pay" data-bankpay-type="' + adminBanks[i].Type + '">' +
							'<span>支付宝二维码</span>' +
						'</li>';
			}*/
		}

		this.zone.find('.deposit-types').html(temp);
	};

	TopUp.prototype.getUserAdminBank = function (type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getUserAdminBank,
			data: {
				type: type
			}
		};

		callback = function (data) {
            if (data && data.StatusCode) {
                app.alert(data.Message);
                return;
            }

            that.userAdminBankData[type] = data;
            that.fillBankPayContent(data);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.fillBankPayContent = function (data) {
        this.createUserAdminUl(data);

        this.zone.find('.bank-topup table .bank-name-value').text(data[0].Bank.BankName);
        this.zone.find('.bank-topup table .bank-name-value + .copy').attr({
        	'data-clipboard-text' : data[0].Bank.BankName
        });

        this.zone.find('.bank-topup table .user-name-value').text(data[0].AccountName);
        this.zone.find('.bank-topup table .user-name-value + .copy').attr({
        	'data-clipboard-text' : data[0].AccountName
        });

        this.zone.find('.bank-topup table .account-value').text(data[0].AccountNo);
        this.zone.find('.bank-topup table .account-value + .copy').attr({
        	'data-clipboard-text' : data[0].AccountNo
        });
	};

	TopUp.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	TopUp.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	TopUp.prototype.getProvinceList = function() {
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

			that.provinceData = data;
			that.createProvinceUl(data);
			that.getCityList(data[0].Id);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.getCityList = function(provinceId) {
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
		};

		Service.get(opt, callback);
	};
	
	TopUp.prototype.bindOtherTransferEvents = function() {
		var that         = this;
		var bankCardsUl  = this.zone.find('.bank-cards ul');
		var button       = this.zone.find('#topup-button');
		var more         = this.zone.find('.see-more');
		var depositTypeLi;
		var li;
		var code;
    	var minDeposit;
    	var maxDeposit;
    	var merCode;
    	var thirdPayCode;
    	var platform;

		bankCardsUl.delegate('li','click',function() {
			bankCardsUl.find('li').removeClass('selected');
			$(this).addClass('selected');

			depositTypeLi = that.zone.find('.deposit-types li.selected');
			li            = bankCardsUl.children('li.selected');
			minDeposit    = that.zone.find('.min-deposit');
			maxDeposit    = that.zone.find('.max-deposit');
			platform      = depositTypeLi.attr('data-platform');

/*			if (merCode === 4000162251) {   //微信和支付宝
				if (li.attr('data-name') === '微信') {
		    		minDeposit.text(app.userTotalInfo.WXMinAmount);
		    		maxDeposit.text(app.userTotalInfo.WXMaxAmount);
				} else if (li.attr('data-name') === '支付宝') {
		    		minDeposit.text(app.userTotalInfo.AliPayMinAmount);
		    		maxDeposit.text(app.userTotalInfo.AliPayMaxAmount);
				}
			}*/

			if (platform === 'DADDYPAY') {
				code = li.attr('data-code');
	    		minDeposit.text(that.autoPayRangeDict[code].minDeposit);
	    		maxDeposit.text(that.autoPayRangeDict[code].maxDeposit);
			} else if (platform === 'TONGLUEYUNPAY') {
	    		minDeposit.text('100');
	    		maxDeposit.text('190000');
			} else {
				if (li.attr('data-name').indexOf('微信')>-1) {
					minDeposit.text(app.userTotalInfo.WXMinAmount);
					maxDeposit.text(app.userTotalInfo.WXMaxAmount);
				}else{
					minDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMin);
					maxDeposit.text(app.userTotalInfo.ThirdPayDepositSingleMax);
				}
	    		
			}

		});

		button.click(function () {
			depositTypeLi = that.zone.find('.deposit-types li.selected');
			platform      = depositTypeLi.attr('data-platform');

			if (platform === 'TONGLUEYUNPAY' || platform === 'DADDYPAY') {
				that.submit2();
			} else {
				that.submit1();
			}
		});

		more.click(function () {
			if ($(this).hasClass('expanded')) {
				that.changeCardsUlMaxHeight(150);
			} else {
				that.changeCardsUlMaxHeight(1000);
			}
		});

		this.button.bindEvents();
		this.topupInput.bindEvents();
	};

	TopUp.prototype.bindBankTransferEvents = function() {
		var text;
		var arr;
		var methodId;
		var that = this;

		this.zone.find('#topup-button3').unbind('click').click(function () {
			that.submit3();
		});

		this.zone.find('#topup-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.zone.find('input[name="deposit-method"]').click(function () {
			that.zone.find('.deposit-method ul li').removeClass('active');
			$(this).parent('li').addClass('active');

			methodId = $(this).attr('id');
			
			if (methodId === 'topup-wyzz' || methodId === 'topup-mobile-bank') {
				that.zone.find('.payment-counter').hide();
			} else {
				that.zone.find('.payment-counter').show();
			}
		});

		this.zone.find('#topup-user-admin-bank').change(function () {
			text = $('#topup-user-admin-bank').find("option:selected").text();
			arr  = text.split(',');
            that.zone.find('.bank-topup table .bank-name-value').text(arr[0]);
            that.zone.find('.bank-topup table .bank-name-value + .copy').attr({
            	'data-clipboard-text' : arr[0]
            });
            that.zone.find('.bank-topup table .user-name-value').text(arr[1]);
            that.zone.find('.bank-topup table .user-name-value + .copy').attr({
            	'data-clipboard-text' : arr[1]
            });
            that.zone.find('.bank-topup table .account-value').text(arr[2]);
            that.zone.find('.bank-topup table .account-value + .copy').attr({
            	'data-clipboard-text' : arr[2]
            });
		});

		this.zone.find('.copy').click(function () {
			app.alert('复制成功!');
		});

		this.button3.bindEvents();
		this.topupInput3.bindEvents();
		this.bankBranchInput.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
		this.selectAdminBank.bindEvents();
	};

	TopUp.prototype.bindDepositTypesEvents = function() {
		var row1Ul;
		var content;
		var contentName;
		var platform;
		var type;
		var bankPayType;
		var index;
		var bankList;
		var methodId;
		var inputEvents   = 'input';
		var that          = this;

		row1Ul  = this.zone.find('.row1 ul');
		content = this.zone.find('.content');
		
		row1Ul.children('li').unbind('click').click(function () {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');
			type = $(this).attr('data-type');
			that.depositType = type;
			platform = $(this).attr('data-platform');

			if (type === 'ThirdPays') {
				index    = $(this).attr('data-index');
				bankList = that.userPaysData.UserGroup[type][index].BankList;
				that.setThirdAndAutoContent(bankList, platform);
			} else if (type === 'bank-pay') {
				bankPayType = $(this).attr('data-bankpay-type');
				that.setBankContent();

				if (!that.userAdminBankData) {
					that.userAdminBankData = {};
				}

				if (that.userAdminBankData[bankPayType]) {
					that.fillBankPayContent(that.userAdminBankData[bankPayType]);
				} else {
					that.getUserAdminBank(bankPayType);
				}
			}
		});
	};

	TopUp.prototype.bindEvents = function() {
		this.zone = $('.top-up');
		this.createLoader();
	};

	window.TopUp = TopUp;
}());
(function() {
	function TopupConfirmDialog(opt) {
		IMDialog.call(this, opt || {});
		this.opt = opt;
		this.daddyPayDict = {
			'ICBC': {
				id: 1,
				code: 'ICBC',
				name: '中国工商银行',
				homePage: 'http://www.icbc.com.cn/'
			},
			'CMB': {
				id: 2,
				code: 'CMB',
				name: '招商银行',
				homePage: 'http://www.cmbchina.com/'
			},
			'CCB': {
				id: 3,
				code: 'CCB',
				name: '中国建设银行',
				homePage: 'http://www.ccb.com/'
			},
			'ABC': {
				id: 4,
				code: 'ABC',
				name: '中国农业银行',
				homePage: 'http://www.abchina.com/'
			},
			'BOC': {
				id: 5,
				code: 'BOC',
				name: '中国银行',
				homePage: 'http://www.boc.cn/'
			},
			'BCM': {
				id: 6,
				code: 'BCM',
				name: '交通银行',
				homePage: 'http://www.bankcomm.com/'
			},
			'CMBC': {
				id: 7,
				code: 'CMBC',
				name: '中国民生银行',
				homePage: 'http://www.cmbc.com.cn/'
			},
			'ECC': {  //中信银行在Daddypay上的银行code
				id: 8,
				code: 'ECC',
				name: '中信银行',
				homePage: 'http://www.citicbank.com/'
			},
			'CNCB': {  //中信银行在同略云上的银行code
				name: '中信银行',
				homePage: 'http://www.citicbank.com/'
			},
			'SPDB': {
				id: 9,
				code: 'SPDB',
				name: '上海浦东发展银行',
				homePage: 'http://www.spdb.com.cn/'
			},
			'PSBC': {
				id: 10,
				code: 'PSBC',
				name: '邮政储汇',
				homePage: 'http://www.psbc.com/'
			},
			'CEB': {
				id: 11,
				code: 'CEB',
				name: '中国光大银行',
				homePage: 'http://www.cebbank.com/'
			},
			'PINGAN': {//中信银行在Daddypay上的银行code
				id: 12,
				code: 'PINGAN',
				name: '平安银行',
				homePage: 'http://bank.pingan.com/'
			},
			'PAB' : {//中信银行在同略云上的银行code
				name: '平安银行',
				homePage: 'http://bank.pingan.com/'
			},
			'CGB': {
				id: 13,
				code: 'CGB',
				name: '广发银行股份有限公司',
				homePage: 'http://www.cgbchina.com.cn/'
			},
			'HXB': {
				id: 14,
				code: 'HXB',
				name: '华夏银行',
				homePage: 'http://www.hxb.com.cn/'
			},
			'CIB': {
				id: 15,
				code: 'CIB',
				name: '福建兴业银行',
				homePage: 'http://www.cib.com.cn/'
			}
		};
		this.initDom();
	}

	TopupConfirmDialog.prototype = new IMDialog();

	TopupConfirmDialog.prototype.initDom = function() {
		var ms;
		var date  = new Date();
		var nowMs = Date.now();

		ms   = nowMs + 15 * 60 * 1000;
		date.setTime(ms);

		date = 	date.getHours() + ':' + 
				date.getMinutes() + ':' + 
				date.getSeconds();

		this.button = new Button({
			id: 'topup-confirm-dialog-button',
			name: '登录网银充值',
			width: 140,
			height: 38
		});

		var temp = '<div class="topup-confirm-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">' +
									'<span>充值确认</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<div class="row3">' +
										'<span class="dot"></span>' +
										'<span class="countdown-info">请转账至以下银行卡：</span>' +
									'</div>' +

									'<div class="row4">' +
										'<div class="bank-card">' +
											'<div class="bank-logo">' +
											'</div>' +

											'<ul class="info-ul">' +
												'<li>' +
													'<div class="name">收款姓名：</div>' +
													'<div class="value user-name-value"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li>' +
													'<div class="name">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</div>' +
													'<div class="value account-value"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li>' +
													'<div class="name">开户支行：</div>' +
													'<div class="value bank-address"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li>' +
													'<div class="name">充值金额：</div>' +
													'<div class="value amount-value"></div>' +
													'<div class="clear"></div>' +
												'</li>' +
												'<li class="post-message">' +
													'<div class="name">附&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言：</div>' +
													'<div class="value postscript"></div>' +
													'<div class="time-valid-info">(15分钟有效)</div>' +
													'<div class="clear"></div>' +
												'</li>' +
											'</ul>' +
										'</div>' +

										'<ul class="copy-ul">' +
											'<li class="copy" data-clipboard-target=".user-name-value">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".account-value">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".bank-address">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".amount-value">点击复制</li>' +
											'<li class="copy" data-clipboard-target=".postscript">点击复制</li>' +
										'</ul>' +

										'<div class="clear"></div>' +
									'</div>' +

									'<div class="row5">' +
										'<div class="go-pay">' +
											this.button.getDom() +
											'<p class="text">务必填写正确附言才能秒存秒到哦!</p>' +
										'</div>' +

										'<div class="count-down">' +
											'<div class="left count-down-text">附言将于14分59秒后过期</div>' +
											'<a class="right check-topup-record">查看充值记录</a>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	TopupConfirmDialog.prototype.getDom = function() {
		return this.el;
	};

	TopupConfirmDialog.prototype.show = function(opt) {
		var i;
		var temp;
		var receiveBankName;
		var infoUl       = this.zone.find('.info-ul');
		var copyUl       = this.zone.find('.copy-ul');
		var bankLogo     = this.zone.find('.bank-logo');
		var data         = opt.data;                  //接口返回的数据
		var payBankCode  = opt.payBankCode;           //付款银行的银行code
		var platform     = opt.platform;              //支付平台： DADDYPAY或者TONGLUEYUNPAY

		this.bankUrl     = this.daddyPayDict[payBankCode].homePage;

		if (platform === 'DADDYPAY') {
			for (i = 0; i < this.daddyPayDict.length; i++) {
				if (this.daddyPayDict[i].id == data.collection_bank_id) {
					receiveBankName = this.daddyPayDict[i].name;
				}
			}
		} else if (platform === 'TONGLUEYUNPAY') {
			receiveBankName = this.daddyPayDict[data.collection_bank_id].name;
		}

		//【1】 Daddypay有email字段，同略云没有email字段
		//【2】 对于email字段的逻辑是，有bank_card_num时就取bank_card_num, 没有bank_card_num时取email字段

		temp = '<span class="daddypay-bank">' + receiveBankName + '</span>';
		bankLogo.html(temp);

		infoUl.find('.user-name-value').text(data.bank_acc_name);
		infoUl.find('.account-value').text(data.bank_card_num || data.email);
		infoUl.find('.bank-address').text(data.issuing_bank_address);
		infoUl.find('.amount-value').text(data.amount + '元');
		infoUl.find('.postscript').text(data.note);

		copyUl.children('li[data-clipboard-target=".user-name-value"]').attr({'data-clipboard-text' : data.bank_acc_name});
		copyUl.children('li[data-clipboard-target=".account-value"]').attr({'data-clipboard-text' : data.bank_card_num || data.email});
		copyUl.children('li[data-clipboard-target=".bank-address"]').attr({'data-clipboard-text' : data.issuing_bank_address});
		copyUl.children('li[data-clipboard-target=".amount-value"]').attr({'data-clipboard-text' : data.amount});
		copyUl.children('li[data-clipboard-target=".postscript"]').attr({'data-clipboard-text' : data.note});

		this.zone.find('.go-pay').show();
		this.zone.find('.count-down').hide()

        this.showOverlay();
        this.startTimer();
	};

	TopupConfirmDialog.prototype.hide = function(){
		this.hideOverlay();
		clearInterval(this.timer);
		app.refreshWallet();
	};

	TopupConfirmDialog.prototype.startTimer = function(){
		var that          = this;
		var total         = 900;
		var countDownText = this.zone.find('.count-down-text');

		this.timer = setInterval(function () {
			total--;

			if (total > 0) {
				countDownText.text(that.formatTimerText(total));
			} else {
				countDownText.text('附言时效已过，请重新提交!');
			}
		}, 1000);
	};

	TopupConfirmDialog.prototype.formatTimerText = function(count) {
		var min = parseInt(count / 60);
		var sec = count % 60;

		return '附言将于' + min + '分' + sec + '秒后过期';
	};

	TopupConfirmDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.topup-confirm-dialog');

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.zone.find('#topup-confirm-dialog-button').click(function () {
			window.open(that.bankUrl);
			that.zone.find('.go-pay').hide();
			that.zone.find('.count-down').show();
			//app.showTopupOverlay();
		});

		this.zone.find('.check-topup-record').click(function () {
			that.hide();
			app.personCenterRouter(1, 0);
		});

		that.clipboard = new Clipboard('.copy');
        this.bindOverlayEvents();
        this.button.bindEvents();
	}

	window.TopupConfirmDialog = TopupConfirmDialog;

}());
$(function() {
	function TopupOvelay(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	};

	TopupOvelay.prototype = new IMDialog();

	TopupOvelay.prototype.initDom = function() {
		this.button1 = new Button({
			id: 'topup-overlay-finish-button',
			name: '已完成充值',
			width: 150,
			height: 40
		});

		this.button2 = new Button({
			id: 'topup-overlay-failed-button',
			name: '充值遇到问题',
			width: 150,
			height: 40
		});

		var temp = '<div class="topup-overlay">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name">充值提示</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'充值完成前，请不要关闭此窗口！' +
								'</div>'+

								'<div class="buttons">' +
									this.button1.getDom() +
									this.button2.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay9"></div>';
		this.el = temp;
	};

	TopupOvelay.prototype.getDom = function() {
		return this.el;
	};

	TopupOvelay.prototype.show = function() {
		this.showOverlay();
	};

	TopupOvelay.prototype.hide = function() {
		this.hideOverlay();
		app.refreshWallet();
	};

	TopupOvelay.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.topup-overlay');

		this.zone.find('#topup-overlay-finish-button').click(function () {
			that.hide();
		});

		this.zone.find('#topup-overlay-failed-button').click(function () {
			PubSub.publish('onlineCS', {});
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.button1.bindEvents();
		this.button2.bindEvents();
	};

	window.TopupOvelay = TopupOvelay;
}());
(function () {
	function TopupRecord () {
		this.initDom();
	}

	TopupRecord.prototype.initDom = function () {
		var temp;

		this.select = new Select({
			id: 'topup-record-select',
			width: 100,
			height: 32,
			data: [
				{
					'text': '充值类型',
					'value': '-1',
				},
				{
					'text': '银行存款',
					'value': '0',
				},
				{
					'text': '在线支付',
					'value': '1',
				},
				{
					'text': '代理转账',
					'value': '2',
				},
/*				{
					'text': '亚联支付',
					'value': '3',
				}*/
			]
		});

		this.button = new Button({
			id: 'topup-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'topUp-record-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="topup-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								this.select.getDom() +

								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">当前页小计</span>' +
								'<span class="value sub-total">0.00</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">0.00</span>' +
								'<span class="text">元</span>' +
							'</div>' +				
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead>' +
									'<tr>' + 
										'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
										'<th>订单号</th>' +
										'<th>充值类型</th>' +
										'<th>充值金额</th>' +
										'<th>状态</th>' +
									'</tr>' +
								'</thead>' +
								'<tbody>' +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	TopupRecord.prototype.getDom = function () {
		return this.el;
	};

	TopupRecord.prototype.show = function(){
		this.zone.show();
		this.queryData(0, true);
		this.queryTotal();
	};

	TopupRecord.prototype.hide = function(){
		this.zone.hide();
	};

    TopupRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	TopupRecord.prototype.queryData = function(pageIndex, firstTime) {
		var opt;
		var callback;
		var params    = '';
		var that      = this;
		var type      = this.select.getValue();
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		
		this.loader1.play();

		opt = {
			url: app.urls.topupRecords,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10
			}
		};

		if (type != -1) {
			opt.data.type = type;
		}

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	TopupRecord.prototype.queryTotal = function() {
		var that      = this;
		var type      = this.select.getValue();
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		
		var opt = {
			url: app.urls.getTopUpTotal,
			data: {
				status: '',
				type: '',
				beginTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total').text(json.toFixed(2));
		};

		Service.get(opt, callback);
	};

	TopupRecord.prototype.setData = function(data){
		var i           = 0;
		var dom         = '';
		var subTotal    = 0;
		var currentData = data.list;
		 
		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}

			subTotal += parseFloat(currentData[i].Amount);
		}

		this.zone.find('.table-zone tbody').html(dom);
		this.zone.find('.bar-zone .sub-total').text(subTotal.toFixed(2));
	};

	TopupRecord.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	TopupRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	TopupRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -15);

		this.zone    = $('.topup-record');
		fastDateUl   = this.zone.find('.fast-date');

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#topup-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.button.bindEvents();
		this.select.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.TopupRecord = TopupRecord;
}());

(function(){
	function VideoDialog(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	VideoDialog.prototype = new IMDialog();

	VideoDialog.prototype.initDom = function() {
		var temp = '<div class="video-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtitle">' +
									'<span class="title-name"></span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<video controls="controls" autoplay="autoplay" preload="none"></video>' +
								'</div>'+
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	VideoDialog.prototype.getDom = function() {
		return this.el;
	};

	VideoDialog.prototype.show = function(src) {
		this.zone.find('video').attr('src', src);
		this.showOverlay();
	};

	VideoDialog.prototype.hide = function() {
		//this.zone.find('video')[0].pause();
		this.zone.find('video').attr('src', '');
		this.hideOverlay();
	};

	VideoDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.video-dialog');

		this.zone.delegate('.close', 'click', function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.VideoDialog = VideoDialog;
}());
(function () {
	function Withdraw(opt) {
		this.opt  = opt;
		this.bankAndClass = [{"Id":221,"BankCode":"CCB","BankName":"建设银行","CssName":"bank-ccb","Sort":99},{"Id":222,"BankCode":"ICBC","BankName":"工商银行","CssName":"bank-icbc","Sort":99},{"Id":223,"BankCode":"BOC","BankName":"中国银行","CssName":"bank-chinabank","Sort":99},{"Id":224,"BankCode":"ABC","BankName":"农业银行","CssName":"bank-abchina","Sort":99},{"Id":225,"BankCode":"CMB","BankName":"招商银行","CssName":"bank-cmb","Sort":99},{"Id":226,"BankCode":"CMBC","BankName":"中国民生银行","CssName":"bank-cmbc","Sort":99},{"Id":227,"BankCode":"BOCOM","BankName":"交通银行","CssName":"bank-comm","Sort":99},{"Id":229,"BankCode":"CIB","BankName":"兴业银行","CssName":"bank-cib","Sort":99},{"Id":230,"BankCode":"SPDB","BankName":"上海浦东发展银行","CssName":"bank-spdb","Sort":99},{"Id":231,"BankCode":"GDB","BankName":"广东发展银行","CssName":"bank-cgbchina","Sort":99},{"Id":232,"BankCode":"CITIC","BankName":"中信银行","CssName":"bank-ecitic","Sort":99},{"Id":233,"BankCode":"CEB","BankName":"光大银行","CssName":"bank-cebbank","Sort":99},{"Id":234,"BankCode":"PSBC","BankName":"中国邮政储蓄银行","CssName":"bank-psbc","Sort":99},{"Id":235,"BankCode":"BOBJ","BankName":"北京银行","CssName":"bank-bankofbeijing","Sort":99},{"Id":237,"BankCode":"BOS","BankName":"上海银行","CssName":"bank-bankofshanghai","Sort":99},{"Id":238,"BankCode":"PAB","BankName":"平安银行","CssName":"bank-pingan","Sort":99},{"Id":239,"BankCode":"NBCB","BankName":"宁波银行","CssName":"bank-nbcb","Sort":99},{"Id":240,"BankCode":"NJCB","BankName":"南京银行","CssName":"bank-njcb","Sort":99}];
		this.initDom();
	}

	Withdraw.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'withdraw-button',
			name: '立即提现',
			width: 128,
			height: 38
		});

		this.moneyInput = new Input({
			id: 'withdraw-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.passwordInput = new Input({
			id: 'withdraw-pwd-input',
			width: 200,
			height: 30,
			reg: app.moneyPasswordReg,
			type: 'password'
		});

		temp 	= 	'<div class="withdraw grzx-money-action">' +
						'<div class="content">' +
							'<div class="row1">' +
								'<div class="title">请选择提款银行卡</div>' +
								'<ul class="user-banks"></ul>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">提现金额</div>' +
								this.moneyInput.getDom() +
								'<div class="text unit">元</div>' +
								'<div class="input-notice">' +
									'<span>单次提现额度限定： 最低</span>' +
									'<span class="min-single-withdraw">' +
										app.userTotalInfo.SingleMinWithdraw +
									'</span>' +
									'<span>元，最高</span>' +
									'<span class="max-single-withdraw">' +
										app.userTotalInfo.SingleMaxWithdraw +
									'</span>元' +
								'</div>' +
							'</div>' +

							'<div class="row21">' +
								'<div class="text">资金密码</div>' +
								this.passwordInput.getDom() +
								'<div class="input-notice money-pwd-notice">' +
									'<span>本次输入的密码将作为您的取款密码，6-16位字符，不可与登录密码相同</span>' +
								'</div>' +
							'</div>' +

							'<div class="row3">' +
								this.button.getDom() +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	Withdraw.prototype.addCardItem = function(data, index) {
		var i;
		var temp;
		var cssName;
		var bankName   =  data.Bank.BankName;
		var accountLen =  data.AccountNo.length;
		var tailnumber =  data.AccountNo.substring(accountLen - 4);
		var nameLen    =  data.AccountName.length;
		var tailname   =  data.AccountName[nameLen - 1];
		var cardId     =  data.Bank.Id;

		var nameStart  =  '';

		for (i = 0; i < nameLen - 1; i++) {
			nameStart += '*';
		}

		for (i = 0; i < this.bankAndClass.length; i++) {
			if (this.bankAndClass[i].BankName == bankName) {
				cssName = this.bankAndClass[i].CssName;
				break;
			}
		}

		temp 	=	'<li ' + ((index === 0)?'class="selected" ' : '') + 'data-index="' + index + '">' +
						//'<input id="withdrawBankRidio' + index + '" type="radio" name="withdrawBankRidio" ' + ((index === 0)?'checked="checked"' : '') + '>' +
						//'<label for="withdrawBankRidio' + index + '">' +
							(cssName?('<span class="bankLogo ' + cssName + '"></span>'):('<span style="margin-right: 10px;width:122px;">' + bankName + '</span>')) +
							'<span class="text">尾号：****</span>' +
							'<span class="value tailnumber">' + tailnumber + '</span>' +
							'<span class="text">[' + nameStart + '</span>' +
							'<span class="value tailname">' + tailname +'</span>' +
							'<span class="text">]</span>' +
							'<div class="card-overlay"></div>' +
						//'</label>' +
					'</li>';

		this.zone.find('.user-banks').append(temp);
	};

	Withdraw.prototype.getDom = function() {
		return this.el;
	};

	Withdraw.prototype.show = function() {
		this.zone.show();

		this.checkUserSettings();
		
		if (!this.firstTime) {
			this.getUserBankList();
			this.firstTime = true;
		}

		this.setMoneyPwdNotice();
	};

	Withdraw.prototype.hide = function() {
		this.zone.hide();
	};

	Withdraw.prototype.checkUserSettings = function() {
		if (!app.checkUserTrueName()) {
			app.alert('请先填写真实姓名', function () {
				app.personCenterRouter(2, 0);
			});

			return;
		}

		if (!app.checkUserPhone()) {
			app.showSetPhoneNumberDialog({
				successHideCallback: function () {
					app.checkUserBanckCards(function (count) {
						if (count <= 0) {
							app.showBindCardDialog({
								failedHideCallback: function () {
									app.personCenterRouter(0, 0);
								}
							});
						}
					});
				},

				failedHideCallback: function () {
					app.personCenterRouter(0, 0);
				}
			});

			return;
		}

		app.checkUserBanckCards(function (count) {
			if (count <= 0) {
				app.alert('请先绑定银行卡，才能进行提款操作', function () {
					app.showBindCardDialog({
						failedHideCallback: function () {
							app.personCenterRouter(0, 0);
						}
					});
				}, function () {
					app.personCenterRouter(0, 0);
				});
			}
		});
	};

	Withdraw.prototype.setMoneyPwdNotice = function() {
		if (!app.userTotalInfo.HasWithdrawalPassword) {
			this.zone.find('.money-pwd-notice').show();
		} else {
			this.zone.find('.money-pwd-notice').hide();
		}
	};

	Withdraw.prototype.getCenterWalletCash = function () {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
		};

		callback = function (data) {
			that.zone.find('.title .balance').text(data);
		};

		Service.get(opt, callback);
	};

	Withdraw.prototype.getUserBankList = function() {
		var i;
		var callback;
		var that = this;

		var opt  = {
			url: app.urls.getUserBankList,
			data: {}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				app.alert(data.Message);
				return;
			}

			if (data.length === 0) {
				that.zone.find('.content .row1 .title').addClass('go-bind-card');
				that.zone.find('.content .row1 .title').text('马上去绑定银行卡');
			} else {
				that.zone.find('.content .row1 .title').removeClass('go-bind-card');
				that.zone.find('.content .row1 .title').text('请选择提款银行卡');
			}

			that.zone.find('.user-banks').html('');

			for (i = 0; i < data.length; i++) {
				that.addCardItem(data[i], i);
			}

			that.userBanks = data;
		};

		Service.get(opt, callback);
	};

	Withdraw.prototype.resetDialog = function() {
		this.allPass = false;
		this.moneyInput.setValue('');
		this.passwordInput.setValue('');
	};

	Withdraw.prototype.submit = function() {
		var i;
		var index;
		var callback;
		var opt;
		var withdrawAmount;
		var bankAccountId;
		var password;
		var that           = this;
		var bankLi         = this.zone.find('.user-banks li.selected');

		if (bankLi.length < 1) {
			app.alert('请选择银行卡');
			return;
		} else {
			index = bankLi.attr('data-index');
		}

		withdrawAmount = this.moneyInput.getValue();
		bankAccountId  = this.userBanks[index].Id;
		password       = this.passwordInput.getValue();

		if (!withdrawAmount) {
			app.alert('请填写提款金额!');
			return;
		}

		if (!password) {
			app.alert('请填写提款密码!');
			return;
		}

		if (!this.moneyInput.isPass()) {
			app.alert('提款金额格式不对!');
			this.resetDialog();
			return;
		}

		if (!this.passwordInput.isPass()) {
			app.alert('取款密码格式不对!');
			this.resetDialog();
			return;
		}

		if (withdrawAmount < app.userTotalInfo.SingleMinWithdraw || withdrawAmount > app.userTotalInfo.SingleMaxWithdraw) {
			app.alert('单次提款额度最低：' + app.userTotalInfo.SingleMinWithdraw + '。最高：' + app.userTotalInfo.SingleMaxWithdraw);
			this.resetDialog();
			return;
		}

/*		if (withdrawAmount > app.userTotalInfo.Cash) {
			app.alert('余额不足!');
			this.resetDialog();
			return;
		}*/

		opt = {
			url: app.urls.withdraw,
			data: {
				BankAccountId: bankAccountId,
				Amount: withdrawAmount,
				WithdrawPwd: password
			}
		};

		callback = function (json) {
			that.resetDialog();

			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			if (json.Success === true && !json.NeedInspecte) {
				app.alert('取款成功');
				app.refreshWallet();
			} else {
				app.showWithdrawInspectDialog({
					data: json,
					BankAccountId: bankAccountId,
					Amount: withdrawAmount,
					WithdrawPwd: password
				})
			}
		};

		Service.post(opt, callback);
	};
	
	Withdraw.prototype.bindEvents = function() {
		var row1Ul;
		var that = this;

		this.zone = $('.withdraw');

		row1Ul = this.zone.find('.content .row1 ul.user-banks');

		row1Ul.delegate('li','click',function() {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');
			// row1Ul.find('input[type="radio"]').attr('checked',false);
			// $(this).find('input[type="radio"]').attr('checked','checked');
		});

		this.zone.find('#withdraw-button').click(function () {
			if (that.button.isDisable()) {
				return;
			}

			that.submit();
			that.button.disable();

			var st = setTimeout(function () {
				that.button.enable();
				clearTimeout(st);
			}, 5000);
		});

		this.zone.find('.content .row1 .title').click(function () {
			if ($(this).hasClass('go-bind-card')) {
				app.personCenterRouter(2, 1);
			}
		});

        PubSub.subscribe('onCardBinded', function (msg, data) {
        	that.getUserBankList();
        });

		this.button.bindEvents();
		this.moneyInput.bindEvents();
		this.passwordInput.bindEvents();
	}

	window.Withdraw = Withdraw;
}());
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
(function () {
	function WithdrawRecord () {
		this.initDom();
	}
	
	WithdrawRecord.prototype.initDom = function () {
		var temp;

		this.button = new Button({
			id: 'withdraw-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'withdraw-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="withdraw-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">0.00</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">0.00</span>' +
								'<span class="text">元</span>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' + 
									'<th title="美东时间比北京时间晚12小时" style="cursor:pointer;">日期（美东时间）</th>' +
									'<th>申请额度</th>' +
									'<th>实际提款</th>' +
									'<th>优惠扣款</th>' +
									'<th>行政扣款</th>' +
									'<th>转账手续费</th>' +
									'<th>状态</th>' +
								'</tr></thead>' +
								'<tbody>' +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	WithdrawRecord.prototype.getDom = function () {
		return this.el;
	};

	WithdrawRecord.prototype.show = function() {
		this.zone.show();
		this.queryData(0, true);
		this.queryTotal();
	};

	WithdrawRecord.prototype.hide = function() {
		this.zone.hide();
	};

    WithdrawRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	WithdrawRecord.prototype.queryData = function(pageIndex, firstTime){
		var opt;
		var callback;
		var that      = this;
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());

		this.loader1.play();

		opt = {
			url: app.urls.withdrawRecords,
			data: {
				beginTime: starttime,
				endTime: endtime,
				pageIndex: pageIndex,
				pageSize: 10,
				status: ''
			}
		};

		callback = function (json) {
        	that.loader1.stop();
        	that.setData(json);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	WithdrawRecord.prototype.queryTotal = function() {
		var that      = this;
		var starttime = Util.formatStringToMdTime(this.zone.find('.starttime').val());
		var endtime   = Util.formatStringToMdTime(this.zone.find('.endtime').val());
		
		var opt = {
			url: app.urls.getWithdrawTotal,
			data: {
				status: '',
				beginTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				app.alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total').text(json.toFixed(2));
		};

		Service.get(opt, callback);
	};

	WithdrawRecord.prototype.setData = function(data) {
		var i           = 0;
		var dom         = '';
		var subTotal    = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].ActualAmount + '</td>' +
							'<td>' + currentData[i].PrefFee + '</td>' +
							'<td>' + currentData[i].MgrFee + '</td>' +
							'<td>' + currentData[i].TransferFee + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].ActualAmount + '</td>' +
							'<td>' + currentData[i].PrefFee + '</td>' +
							'<td>' + currentData[i].MgrFee + '</td>' +
							'<td>' + currentData[i].TransferFee + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}

			subTotal += currentData[i].Amount;
		}

		this.zone.find('.table-zone tbody').html(dom);
		this.zone.find('.bar-zone .sub-total').text(subTotal.toFixed(2));
	};

	WithdrawRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	WithdrawRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	WithdrawRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);
		var minDate  = Util.getIntervalDate(endDay, -15);

		this.zone    = $('.withdraw-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false, theme: 'dark', lang: 'zh', minDate: minDate});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#withdraw-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.button.bindEvents();
        this.pager.bindEvents();
        this.createLoader();
	};

	window.WithdrawRecord = WithdrawRecord;
}());

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
