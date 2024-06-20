// $(document).ready(function() {

jQuery(function($){
  // ナビゲーション部分
  let $nav = $("#navArea");
  let $btn = $(".toggle-btn");
  let $mask = $("#mask");

  $btn.on("click", function() {
      $nav.toggleClass("open");
  });

  $mask.on("click", function() {
      $nav.toggleClass("open");
  });

  // ナビゲーションメニュー内のリンクがクリックされたときにナビゲーションメニューを閉じる
  $nav.find("a").on("click", function() {
      $nav.removeClass("open");
  });

  // スクロール処理
  $('a[href^="#"]').on('click', function() {
      var speed = 1000;
      var offset = 0; // スクロール位置をずらす（px）
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - offset;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });

  // mainのバンドロゴを下からズームインさせる
  const $logoImg = $('.logo img');
  $logoImg.addClass('show');

  $logoImg.on('transitionend', function() {
      setTimeout(function() {
          $('.photos').css('opacity', '1');
      }, 5000); // 5秒後に画像を表示
  });

  // 画像のフェードイン
  $('.fade').each(function() {
      let observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  $(entry.target).addClass('active');
              } else {
                  $(entry.target).removeClass('active');
              }
          });
      });
      observer.observe(this);
  });
});
