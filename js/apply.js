//头部下拉框
$('.ikuai-nav .dropdown').click(function(){
	$(this).children('a').css({
		'color':'#ffffff',
		'background-color':'#0088CC',
		'border-radius':'4px'
	});
})
//搜索框
$('.search-help-text').focus(function(){
	
	$(this).css('width','460px');
	$('.navbar-search').css('width','460px');
	$(this).css('outline','0');

})
$('.search-help-text').blur(function(){
	$(this).css('width','315px');
	$('.navbar-search').css('width','315px');
})
$('.search-help-bnt').focus(function(){
	$(this).css('outline','0');
})