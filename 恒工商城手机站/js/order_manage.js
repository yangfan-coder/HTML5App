 $(".liorder-mana li").click(function(){
         var index = $(this).index();
         $(this).addClass("click-on").siblings().removeClass();
         $(".order-all .order-part").eq(index).show().siblings().hide();
    });
     $(".order-list-delete").click(function(){
         $(this).parents(".liorder-con").remove();
    });