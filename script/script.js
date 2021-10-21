$(function(){

    // GNB
    $("nav#gnb li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(300);
    });
    $("nav#gnb li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(300);
    });

    // Slide
    setInterval (fnSlide, 3000);
    function fnSlide(){
        $("#slide img").eq(0).fadeOut(
            3000,
            function(){
                $(this).insertAfter("#slide img:last-child");
            }
        );
        $("#slide img").eq(1).fadeIn(5000);
    }

    // Search Popup
    $("div#searchIcon i").click(function(){
        $("div#searchBG").css({"display": "block"});
    });
    $("div#closeBtn").click(function(){
        $("div#searchBG").css({"display": "none"});
    });

});