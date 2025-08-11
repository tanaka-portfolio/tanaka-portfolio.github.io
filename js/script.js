$(function () {
  $(".hamburger").on("click", function () {
    // ハンバーガーメニューを開く
    $(this).toggleClass("active");

    $(".menu-content").toggleClass("waao");
  });
});
$(".menu-content ul li a").on("click", function () {
  // メニューをフェードアウト
  $(".menu-content").fadeOut(100, function () {
    // フェードアウト終わったらクラスなどリセット（見た目用）
    $(".hamburger").removeClass("active");
    $(".menu-content").removeClass("waao").show(); // 次回用に戻しておく
  });
});

$(".big_message").on("inview", function () {
  $(this).addClass("is-fade");
});
$(".picture img").on("inview", function () {
  $(this).addClass("is-fade");
});
$(".name>h3").on("inview", function () {
  $(this).addClass("is-slideIn");
});
$(".box>h3").on("inview", function () {
  $(this).addClass("is-slideUp");
});
$(".contact>h2").on("inview", function () {
  $(this).addClass("is-fade");
});
$(".boxx").on("inview", function () {
  $(this).addClass("is-fadeUp");
});
$(".fade-target").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("is-fadein");
  }
});
$(".fade-target").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("is-fadein");
  }
});

/*worksページ*/
$(".title").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("fade");
  }
});
$(".season").on("inview", function (event, isInView) {
  if (isInView) {
    setTimeout(() => {
      $(this).addClass("fade");
    }, 400);
  }
});
$(".comment").on("inview", function (event, isInView) {
  if (isInView) {
    setTimeout(() => {
      $(this).addClass("fade");
    }, 800);
  }
});
$(".js-back").on("click", function () {
  console.log("戻るボタン押された！");
  sessionStorage.setItem("scrollTo", "works");
  location.href = "./index.html";
});

const targetId = sessionStorage.getItem("scrollTo");
if (targetId) {
  sessionStorage.removeItem("scrollTo");
  $(window).on("pageshow", function () {
    const $target = $("#" + targetId);
    if ($target.length) {
      $("body").css("overflow", "hidden");
      setTimeout(function () {
        $("html, body").scrollTop($target.offset().top);
        $("body").css("overflow", "");
      }, 0);
    }
  });
}
