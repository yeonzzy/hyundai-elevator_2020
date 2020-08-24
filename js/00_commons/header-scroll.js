//scroll에 따른 header 변화
$(window).scroll(function () {
    var windowScroll = $(window).scrollTop();
    if (windowScroll > 10) {
        $("header").css({
            background: "rgba(255,255,255,0.9)",
            "border-bottom": "1px solid #dbdbdb",
            color: "#1e3963",
            transition: "all 0.5s",
        });
        $("header > #main_menu > img").attr(
            "src",
            "http://yeonzzy.dothome.co.kr/hyundai-elevator/img/00_commons/header/hamburger_menu_scroll.png"
        );
        $("header > h1 > a> img").attr(
            "src",
            "http://yeonzzy.dothome.co.kr/hyundai-elevator/img/00_commons/header/main_logo.png"
        );
    } else {
        $("header").css({
            background: "rgba(0,0,0,0.3)",
            border: "none",
            color: "#f9f9f9",
            transition: "all 0.5s",
        });
        $("header > #main_menu > img").attr(
            "src",
            "http://yeonzzy.dothome.co.kr/hyundai-elevator/img/00_commons/header/hamburger_menu.png"
        );
        $("header > h1 > a> img").attr(
            "src",
            "http://yeonzzy.dothome.co.kr/hyundai-elevator/img/00_commons/header/main_white_logo.png"
        );
    }
});