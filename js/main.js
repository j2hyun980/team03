$(function () {

  //챌린지,마라톤 탭메뉴
  $("#page_list > div").not(":first").hide();
  $("#menu_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $("#page_list > div").eq(num).show().siblings().hide();
  });

  //챌린지 상세 서브 탭메뉴
  $(".detail_list > div").not(":first").hide();
  $(".category_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".detail_list > div").eq(num).show().siblings().hide();
  });

  //마라톤 서브 탭메뉴
  $(".tab_page > div").not(":first").hide();
  $(".tag_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".tab_page > div").eq(num).show().siblings().hide();
  });

  //루틴 탭 메뉴 탭 시 하단 버튼 변경
  $("#menu_list button:first-child").click(function () {
    $(".routine .btn_btm").text("루틴 등록하기")
    $(".routine_after .btn_btm").text("러닝 시작하기")
    $(".util_routine .btn_share, .util_routine .btn_setting").show();
    $(".util_routine .btn_bell").hide();
  })
  $("#menu_list button:last-child").click(function () {
    $(".routine .btn_btm").text("내 코스 추천하기")
    $(".util_routine .btn_share, .util_routine .btn_setting").hide();
    $(".util_routine .btn_bell").show();
  })

  // 챌린지 상단 배너
  const banner01 = new Swiper(".banner01", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  // 마라톤 상단 배너
  const banner02 = new Swiper(".banner02", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  //스페셜 챌린지
  const card_slide01 = new Swiper(".card_slide01", {
    slidesPerView: 1.5,
    spaceBetween: 20,
  });

  //진행중인 대회
  const card_slide02 = new Swiper(".card_slide02", {
    slidesPerView: 1,
    spaceBetween: 20,
  });

  //이번 주 인기 후기
  const card_slide03 = new Swiper(".card_slide03", {
    slidesPerView: 1.1,
    spaceBetween: 20,
  });

  //루틴 설정 팝업
  $("#dimmed").hide();
  $(".routine .btn_btm").click(function () {
    $("#dimmed").fadeIn();
  })
  $(".popup01 .btn_close").click(function () {
    $("#dimmed").fadeOut();
  })

  //달력
  const monthNames = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
  ];

  let currentDate = new Date();

  // 임의 날짜에 표시할 이미지 URL
  const randomImageUrl = '../../img/common/calendar_day_stamp.svg';

  // 현재 월과 연도 표시
  function updateMonthDisplay() {
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    document.getElementById("currentMonth").textContent = `${year}년 ${month}`;
  }

  // 달력 업데이트
  function updateCalendarDays() {
    const calendarDays = document.getElementById("calendarDays");

    calendarDays.querySelectorAll(".day").forEach(day => day.remove());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const isToday = (day) => (
      today.getDate() === day && today.getMonth() === month && today.getFullYear() === year
    );

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay();

    // 빈 칸 추가
    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("day");
      calendarDays.appendChild(emptyCell);
    }

    // 날짜 셀 생성
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const dayCell = document.createElement("div");
      dayCell.classList.add("day");
      dayCell.textContent = day;

      // 오늘 날짜 스타일
      if (isToday(day)) {
        dayCell.classList.add("today");
      }

      // 오늘 이전 날짜에만 이미지 추가
      const currentDay = new Date(year, month, day);
      if (currentDay < today) {
        dayCell.classList.add("past-date");
        const img = document.createElement("img");
        img.src = randomImageUrl;
        dayCell.appendChild(img);
      }

      calendarDays.appendChild(dayCell);
    }
  }

  // 이전 월 이동
  document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateMonthDisplay();
    updateCalendarDays();
  });

  // 다음 월 이동
  document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateMonthDisplay();
    updateCalendarDays();
  });

  // 초기 화면 로드 시 현재 월과 달력 표시
  updateMonthDisplay();
  updateCalendarDays();
});
