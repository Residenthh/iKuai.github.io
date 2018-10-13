$('.thh-header .navbar-toggle').hover(function(){
	$(this).css('background-color','black');
},function(){
	$(this).css('background','#777');
});
//返回顶部锚点
$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top > 500){
		$('.toTop').fadeIn();
		$('.toTop').css('display','block');
	}else{
		$('.toTop').fadeOut();
		$('.toTop').css('display','none');
	}
});
//点击返回顶图标回到顶部
$('.toTop').click(function(){
	$('html,body').animate({'scrollTop':'0px'},1000);
});