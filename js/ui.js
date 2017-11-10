var winW = $(window).width();
var fontNum = 3;
function fontCtrl(o) {
	var wrap = $('html')
	if (o === 'minus' && fontNum > 1) {
		fontNum -= 1;
		wrap.removeAttr('class').addClass('fontCtrl'+fontNum);
	}
	if (o === 'plus' && fontNum < 5) {
		fontNum += 1;
		wrap.removeAttr('class').addClass('fontCtrl'+fontNum);
	}
}
function siteOpen(obj) {
	var listWrap = $('.'+obj);
	listWrap.show();
	listWrap.on('mouseleave', function(){
		$(this).hide();
	});
}
function tabMenu(_this) {
	var $this = $(_this),
		tabWrap = $this.closest('.tabContents'),
		tabList = tabWrap.find('.tabMenu'),
		tabContent = tabWrap.find('.tabContent');

	tabList.on('click', function(){
		var idx = $this.parent().index();
		tabList.find('li').eq(idx).addClass('active').siblings().removeClass('active');
		tabContent.eq(idx).show().siblings('.tabContent').hide();
	})


}
function fontSize(w) {
	if (w <= 560) {
		var fontSize = w / 5.12;
		$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
	} else {
		$('html').css('font-size','62.5%');
	}
}
fontSize(winW);
$(window).resize(function(){
	var winW = $(window).width();
	fontSize(winW);
});
function getCookie(name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x==name) return unescape(y);
	}
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getInternetVersion(ver) {
	var rv = -1;
	var ua = navigator.userAgent;
	var re = null;
	if(ver == "MSIE"){
		re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	}else{
	re = new RegExp(ver+"/([0-9]{1,}[\.0-9]{0,})");
		}
	if (re.exec(ua) != null){
		rv = parseFloat(RegExp.$1);
	}
	return rv;
}
function browserCheck() {
	var ver = 0;
	if(navigator.appName.charAt(0) == "M"){
		ver = getInternetVersion("MSIE");
		if (ver < "9"){
			$('body').prepend('<div id="version"><p>고객님께서는 현재 Internet Explorer 구형버전으로 접속 중이십니다. 이 사이트는 Internet Explorer 최신버전에 최적화 되어 있습니다. <a href="http://windows.microsoft.com/ko-kr/internet-explorer/download-ie" target="_blank">Internet Explorer 업그레이드 하기</a></p><p>만약 WINDOW XP를 사용 중이시라면 구글 크롬을 설치 하여주시기 바랍니다. <a href="https://www.google.co.kr/chrome/browser/desktop/">구글 크롬 설치 하기</a></p> <button type="button" class="versionClose">X</button></div>');
		}
	}
}
browserCheck();

$('#version').on('click','.versionClose',function(){
	$('#version').hide();
});
