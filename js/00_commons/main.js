$(document).ready(function(){
        

    
    
//      1300px이상일때 키이미지 슬라이드와 버튼 (pc기본)
    var slide =$("#slide>ul>li");
    var slideBtn = $("#slide_btn > ul > li");
    var current = 0;
    var setIntervalId;
    timer();
    
    slideBtn.on({click:function(){
        var tg = $(this);
        var i = tg.index();
        slideBtn.removeClass('on');
        tg.addClass('on');
        
        move(i);
    }
    });
    
    function move(i) {
        
        if(current == i) return;
        var current1 = slide.eq(current);
        var next1 = slide.eq(i);
        
        current1.css({left:0}).stop().animate({left:"-100%"});
        next1.css({left:"100%"}).stop().animate({left:0});
        
        current = i;
    }
    
    function timer() {
        setIntervalId = setInterval(function(){
           var a = current + 1;
            if (a == slide.length) {
                a = 0;
            }
           
            slideBtn.eq(a).trigger('click');
        },5000);
    }
    
    
//      1300px이상일때 하이라이트 컨텐츠 (pc기본)
    $("#highlight > article > a > .a_hover").hide();
//    $("#highlight > article > a > img").css({"opacity":"0"});
    $("#highlight > article").mouseenter(function(){
        var i = $(this).index();
        $("#highlight > article > a > img").eq(i-1).css({"transform":"scale(1.15)","transition":"all 0.5s"});
        $("#highlight > article > a > img").eq(i-1).css({"opacity":"0.6"});
        $("#highlight > article > a > span").eq(i-1).hide();
        $("#highlight > article > a > .a_hover").eq(i-1).show();
    });
    $("#highlight > article").mouseleave(function(){
        $("#highlight > article > a > img").css({"transform":"scale(1.0)","transition":"all 0.5s"});
        $("#highlight > article > a > img").css({"opacity":"1"});
        $("#highlight > article > a > span").show();
        $("#highlight > article > a > .a_hover").hide();
    });
    
//      1300px이상일때 VIP혜택 각각hover시 겉줄 효과 (pc기본)
    $(".line01, .line02, .line03, .line04").hide();
    $(".vip_w > #vipB").mouseenter(function(){
        var i = $(this).index();
        $(".vip_w > #vipB > .Bimg > img").eq(i).css({"transform":"scale(1.15)","transition":"all ease 0.6s"});
        $(".line01").eq(i).show();
        $(".line02").eq(i).show();
        $(".line03").eq(i).show();
        $(".line04").eq(i).show();
    });
    $(".vip_w > #vipB").mouseleave(function(){
        var i = $(this).index();
        $(".vip_w > #vipB > .Bimg img").eq(i).css({"transform":"scale(1.0)","transition":"all ease 0.6s"});
        $(".line01").eq(i).hide();
        $(".line02").eq(i).hide();
        $(".line03").eq(i).hide();
        $(".line04").eq(i).hide();
    });
    

//      1300px이상일때 스크롤 top, bottom (pc기본)
    
    
    $(window).scroll(function(){
       if($(this).scrollTop() >=500) {
           $("#gotoTop").fadeIn();
       } else {
           $("#gotoTop").fadeOut();
       }
    });
        $("#gotoTop").click(function(){
           $("html,body").animate({scrollTop:0},700); 
        });
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() >=100) {
           $("#gotoBottom").fadeIn();
       } else {
           $("#gotoBottom").fadeOut();
       }
    });
        $("#gotoBottom").click(function(){
           $("html,body").animate({scrollTop:10000}, 3000); 
        });
    
    

});


//      1300px이상일때 어트랙션 컨텐츠 이미지 슬라이드 (pc기본)]

$(document).ready(function(){

        var rImgBox = $("#r_image");
        var rImgSlide = rImgBox.find(">.image");
        var rImage = rImgSlide.find("> ul > li");
        var rImageWidth = rImgSlide.width();
        var rImageLength = rImage.length;
        var current = 0;
        var setIntervalId;
        timer();
    
        var rContentsSlide = $("#ride_contents");
        var rContentsLength = rContentsSlide.find(">.ride_contents_w>div").length;
        var rContentsWidth = rContentsSlide.width();
        var rContentsCurrent = 0;
        
        rImgBox.find(">.left").on({click:function(){
           current--;
            if(current<0){current = rImageLength-1};
            showImage(current);
            showBorder(current);
        
            rContentsCurrent--;
            if(rContentsCurrent<0){rContentsCurrent = rContentsLength-1};
            showdiv(rContentsCurrent);
            
        }
        });
        
        rImgBox.find(">.right").on({click:function(){
           current++;
            if(current>=rImageLength){current=0};
            showImage(current);
            showBorder(current);
        
            rContentsCurrent++;
            if(rContentsCurrent>=rContentsLength){rContentsCurrent = 0};
            showdiv(rContentsCurrent);
            
        }
        });


        function showImage(index){
            var left = (index*rImageWidth);
            rImage.css('display', 'none');
            rImage.eq(index).css('display','block');
            current=index;
        }
    
        function showBorder(index){
            $("#thumbnail > ul > li").removeClass('thumb');
            $("#thumbnail > ul > li").eq(index).addClass('thumb');
        }
        
        function showdiv(index){
            var div = (index*rContentsWidth);
            rContentsSlide.find(">.ride_contents_w>div").css('display','none');
            rContentsSlide.find(">.ride_contents_w>div").eq(index).css('display','block');
            rContentsCurrent=index;
        }
    
        function timer() {
        setIntervalId = setInterval(function(){
           var n = current + 1;
            if (n == rImageLength) {
                n = 0;
            }
            $("#thumbnail>ul>li").eq(n).trigger('click');
        },3500);
    }
    
    $("#thumbnail > ul > li").on({click:function(){
        var i = $(this).index();
        showImage(i);
        showdiv(i);
    },click:function(){
        var ch = $(this);
        var i = ch.index();
        $("#thumbnail > ul > li").removeClass('thumb');
        ch.addClass('thumb');
        showImage(i);
        showdiv(i);
    }
    });
                                 
    
    
});