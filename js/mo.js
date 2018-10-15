/*********dynamic*********/
$('.news-div').hover(function(){
	$(this).stop().animate({'top':-3+'px'},500);
	$(this).css({'box-shadow':'0 0 1px 1px #bbb'},500);
},function(){
	$(this).stop().animate({'top':0+'px'},500);
	$(this).css({'box-shadow':'0 0 0px 0px #bbb'},500);
})

$('.last').click(function(){
	var index=$(this).parent().index()-1;
	var url=$(this).parent().sibling().index().children().Attr('href');
	$(this).attr('href','url');
})
