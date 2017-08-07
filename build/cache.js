if (window.location.protocol === 'http:') {
	alert(2)
	window.location.href = 'https:' + location.host;
} else {
	var i;
	var script;
	var cssArr = [];
	var jsArr  = ['env.js', 'js/check.js'];

	for (i = 0; i < jsArr.length; i++) {
		script   = document.createElement("script");
		script.type  = "text/javascript";
		script.src   = jsArr[i];
		document.body.appendChild(script);
	}

	//document.body.appendChild('<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1261702065'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1261702065' type='text/javascript'%3E%3C/script%3E"));</script>');
}