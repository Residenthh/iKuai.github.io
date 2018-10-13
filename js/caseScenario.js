$('.thh-header .navbar-toggle').hover(function(){
	$(this).css('background-color','black');
},function(){
	$(this).css('background','#777');
});

$('.example').children('li').click(function(){
	$(this).addClass('patch');
	$(this).siblings().removeClass('patch');
	//获取当前li的索引值
	var index = $(this).index();
	$('.example-list').eq(index).slideDown(1000);
	$('.example-list').eq(index).css('display','block');
	$('.example-list').eq(index).siblings('.example-list').css('display','none');
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
