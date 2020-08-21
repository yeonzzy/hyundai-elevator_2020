//버튼, youtubeBox>img hover시 선 생성
$(".line1, .line2, .line3, .line4").hide();
$(".btn, .youtubeBox>img").mouseenter(function () {
  $(".btn").css({ border: "0" });
  $(".line1").show();
  $(".line2").show();
  $(".line3").show();
  $(".line4").show();
});
$(".btn, .youtubeBox>img").mouseleave(function () {
  $(".btn").css({ border: "1px solid #f9f9f9" });
  $(".line1").hide();
  $(".line2").hide();
  $(".line3").hide();
  $(".line4").hide();
});
