$("#submitBtn").click(function(){
    $(this).css({"background":"#2ecc71","color":"#FFF"})
    if($("#yourName").val()==""){
        $(".wrong-tip").eq(0).css("display","inline-block");
        $("#form").submit(function(){
            return false;
        });
    }else{
        $(".wrong-tip").eq(0).css("display","none");
    }
    if($("#yourNumber").val()==""){
        $(".wrong-tip").eq(1).css("display","inline-block");
        $("#form").submit(function(){
            return false;
        });
    }else{
        $(".wrong-tip").eq(1).css("display","none");
    }
    if($("#companyName").val()==""){
        $(".wrong-tip").eq(2).css("display","inline-block");
        $("#form").submit(function(){
            return false;
        });
    }else{
        $(".wrong-tip").eq(2).css("display","none");
    }
    if($("#oemNeeds").val()=="") {
        $(".wrong-tip").eq(3).css("display","inline-block");
        $("#form").submit(function(){
            return false;
        });
    }else{
        $(".wrong-tip").eq(3).css("display","none");
    }
})