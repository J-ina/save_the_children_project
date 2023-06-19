$(function () {
  // 풀다운 메뉴 이벤트
  $(".gnb").mouseover(function () {
    $(".gnb").find(".lnb").stop().slideDown();
    $(".gnb").next(".bg_lnb").stop().slideDown();
  })
  $(".lnb,.bg_lnb").mouseover(function () {
    $(".lnb").stop().slideDown();
    $(".bg_lnb").stop().slideDown();
  })
  $(".bg_lnb,.short_cut_bar").mouseleave(function () {
    $(".lnb").stop().slideUp();
    $(".bg_lnb").stop().slideUp();
  })

  // 배너 마우스 이벤트
  const banner_box = $(".banner_wrap");
  const banner = $(".banner");
  let banner_timer = setInterval(banner_slide, 3000);

  banner_box.mouseover(function () {
    clearInterval(banner_timer);
  })
  banner_box.mouseout(function () {
    banner_timer = setInterval(banner_slide, 3000);
  })

  // 배너 이동 버튼 이벤트 (모바일)
  const banner_prev = $(".prev_btn");
  const banner_next = $(".next_btn");
  banner_prev.click(function () {
    clearInterval(banner_timer);
    banner_current_index --;
    if(banner_current_index < 0) {
      banner_current_index = banner.length - 1;
    }
    banner_move(banner_current_index);
  })
  banner_next.click(function () {
    clearInterval(banner_timer);
    banner_current_index ++;
    if(banner_current_index == banner.length) {
      banner_current_index = 0;
    }
    banner_move(banner_current_index);
  })

  // 배너 타이틀 마우스 이벤트
  const banner_title = $(".banner_title > li");
  let banner_current_index = 0;

  banner_title.mouseover(function () {
    banner_current_index = $(this).index();
    on_active(banner_title, $(this));
    banner_move(banner_current_index);
    clearInterval(banner_timer);
  })
  banner_title.mouseout(function () {
    banner_timer = setInterval(banner_slide, 3000);
  })
  
  // 후원 금액 클릭 이벤트
  const amount_value = [10000, 30000, 50000, 100000];
  const amount_btn = $(".amount_btn > button");
  const amount = $("#amount");
  let amount_btn_index = 0;

  amount_btn.click(function () {
    amount_btn_index = $(this).index();
    amount.attr("value", `${amount_value[amount_btn_index]}`);
  })

  // 캠페인 리스트 마우스 이벤트
  const campaign_box = $("#campaign");
  const campaign_txt = $(".campaign_txt > li");
  const campaign_title = $(".campaign_title > li");
  let campaign_current_index = 0;

  campaign_title.mouseover(function () {
    campaign_current_index = $(this).index();
    on_active(campaign_title, $(this));
    on_active(campaign_txt, campaign_txt.eq(campaign_current_index));
    campaign_box.css(
      "background-image",
      `url(img/campaign_${campaign_current_index}.jpg)`
    );
  })

  // 유튜브 탭 클릭 이벤트
  const video_title = $(".video_title");

  video_title.click(function () {
    on_active(video_title, $(this));
  })

  // 스토리 리스트 마우스 이벤트
  const story_list = $(".story_list > li");
  const story_img = $(".story_img");
  let story_current_index = 0;

  story_list.mouseover(function () {
    story_current_index = $(this).index();
    story_img.css(
      "background-image",
      `url(img/story_${story_current_index}.jpg)`
    );
  })

  // 푸터 사이트 클릭 이벤트
  $(".sites_btn").click(function () {
    $(".sites_btn").next().stop().slideUp();
    $(this).next().stop().slideToggle();
  })

  // active 클래스 추가 function
  function on_active(items, e_item) {
    items.removeClass("active");
    e_item.addClass("active");
  }

  // 배너 위치 이동 function
  function banner_move(i) {
    let banner_left = -100 * i;
    banner_box.stop().animate({ left: `${banner_left}%` }, 500);
  }

  // 배너 슬라이드 function
  function banner_slide() {
    banner_current_index ++;
    if (banner_current_index == banner.length) {
      banner_current_index = 0;
    }
    on_active(banner_title, banner_title.eq(banner_current_index));
    banner_move(banner_current_index);
  }
})