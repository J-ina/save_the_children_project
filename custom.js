$(function () {
  // nav slide
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

  // banner slide active
  const banner_box = $(".banner_wrap");
  const banner = $(".banner");
  let banner_timer = setInterval(banner_slide, 3000);

  banner_box.mouseover(function () {
    clearInterval(banner_timer);
  })
  banner_box.mouseout(function () {
    banner_timer = setInterval(banner_slide, 3000);
  })

  // banner title active
  const banner_title = $(".banner_title > li");
  let banner_current_index = 0;

  banner_title.mouseover(function () {
    banner_current_index = $(this).index();
    on_active(banner_title, $(this));
    banner_move(banner_current_index);
    clearInterval(banner_timer);
  })

  // donate amount btn active
  const amount_value = [10000, 30000, 50000, 100000];
  const amount_btn = $(".amount_btn > button");
  const amount = $("#amount");
  let amount_btn_index = 0;

  amount_btn.click(function () {
    amount_btn_index = $(this).index();
    amount.attr("value", `${amount_value[amount_btn_index]}`);
  })

  // campaign list active
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

  // youtube tab active
  const video_title = $(".video_title");

  video_title.click(function () {
    on_active(video_title, $(this));
  })

  // story img active
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

  // footer sites btn active
  $(".sites_btn").click(function () {
    $(".sites_btn").next().stop().slideUp();
    $(this).next().stop().slideToggle();
  })

  // on class function
  function on_active(items, e_item) {
    items.removeClass("on");
    e_item.addClass("on");
  }

  // banner slide init function
  function banner_slide() {
    let n = banner_current_index + 1;
    if (n == banner.length) {
      n = 0;
      banner_current_index = 0;
    }
    banner_title.eq(n).trigger("mouseover");
  }

  // banner move function
  function banner_move(i) {
    let banner_left = -100 * i;
    if(i == 0) {
      banner_box.stop().animate({ left: "0" }, 500);
    } else {
      banner_box.stop().animate({ left: `${banner_left}%` }, 500);
    }
  }
})