//business에서 사진 hover시 사진확대, 글박스 올라오기
$(".s2 > .business > div ").mouseenter(function () {
  var a = $(this).index();
  $(".businessImg")
    .eq(a - 2)
    .css({ transform: "scale(1.12)", transition: "0.5s" });
  $(".businessBox")
    .eq(a - 2)
    .stop()
    .animate({ top: "0" }, 500);
});
$(".s2 > .business > div ").mouseleave(function () {
  $(".businessImg").css({ transform: "scale(1.0)", transition: "0.5s" });
  $(".businessBox").stop().animate({ top: "80%" }, 500);
});
