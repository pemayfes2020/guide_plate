function autoLink(){
	location.href="main_page.html";
}

window.onload = function(){//ページの読み込みが終わったら
	setTimeout(autoLink,15000);//１０秒後にautoLinkを呼び出す
}
