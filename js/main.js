$(function () {

  //챌린지,마라톤 탭메뉴
  $("#page_list > div").not(":first").hide();
  $("#menu_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $("#page_list > div").eq(num).show().siblings().hide();
  });

  //마라톤 서브 탭메뉴
  $(".tab_page > div").not(":first").hide();
  $(".tag_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".tab_page > div").eq(num).show().siblings().hide();
  });

  // banner01
  const banner01 = new Swiper(".banner01", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  // banner02
  const banner02 = new Swiper(".banner02", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  //card_slide01
  const card_slide01 = new Swiper(".card_slide01", {
    slidesPerView: 1.5,
    spaceBetween: 20,
  });

  //card_slide02
  const card_slide02 = new Swiper(".card_slide02", {
    slidesPerView: 1,
    spaceBetween: 20,
  });

  //card_slide03
  const card_slide03 = new Swiper(".card_slide03", {
    slidesPerView: 1.1,
    spaceBetween: 20,
  });

  //루틴 설정 팝업
  $("#dimmed").hide();
  $(".routine .btn_btm").click(function () {
    $("#dimmed").fadeIn();
  })
  $(".popup .btn_close").click(function () {
    $("#dimmed").fadeOut();
  })
});
