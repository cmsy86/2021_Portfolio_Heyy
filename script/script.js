$(function(){

    // GNB
    $("nav#gnb li.mainLi:nth-child(2), nav#gnb li.mainLi:nth-child(4)").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(300);
        $("div#gnbBG").stop().slideDown(300);
    });
    $("nav#gnb li.mainLi:nth-child(2), nav#gnb li.mainLi:nth-child(4)").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp(300);
        $("div#gnbBG").stop().slideUp(300);
    });

    // MAIN Slide Show
    setInterval (fnSlide, 6000);
    function fnSlide(){
        $("#slide img").eq(0).fadeOut(
            2000,
            function(){
                $(this).insertAfter("#slide img:last-child");
            }
        );
        $("#slide img").eq(1).fadeIn(6000);
    }

    // MAIN Search Popup
    $("div#searchIcon i").click(function(){
        $("div#searchBG").css({"display": "block"});
    });
    $("div#closeBtn").click(function(){
        $("div#searchBG").css({"display": "none"});
    });

    // HOTELS Indicators
    new Swiper('.swiper1', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev',
        },
    });

    new Swiper('.swiper2', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev',
        },
    });

    new Swiper('.swiper3', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev',
        },
    });

    new Swiper('.swiper4', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev',
        },
    });

    new Swiper('.swiper5', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            clickable : true,
        },
        navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev',
        },
    });



    
})