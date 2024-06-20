// $(document).ready(function() {
//   // ページが読み込まれた時にページのトップにスクロールする
//   $(window).scrollTop(0);
// });



// ヘッダーの固定-------------------------------------------------
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-8');
  if (window.pageYOffset > 0) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});

// ハンバーガーメニュー--------------------------------------------------------
$(document).ready(function() {
  const $hamburger = $('.btn-gNav');
  const $gNav = $('.gNav');
  const $gNavLinks = $('.gNav-menu li a');

  // ハンバーガーアイコンをクリックしたときの処理
  $hamburger.on('click', function() {
    $hamburger.toggleClass('open');
    $gNav.toggleClass('open');
  });

  // ナビゲーションメニューの各項目をクリックしたときの処理
  $gNavLinks.on('click', function() {
    $gNav.removeClass('open');
    $hamburger.removeClass('open');
  });

  // ナビゲーションメニューの外側をクリックしたときにメニューを閉じる
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.gNav') && !$(event.target).closest('.btn-gNav')) {
      $gNav.removeClass('open');
      $hamburger.removeClass('open');
    }
  });
});

// スムーズスクロール---------------------------------------------------------
$(document).ready(function() {
  const $navLinks = $('.inner-nav a, .footer-menu a, .gNav-menu li a');
  $navLinks.on('click', function(e) {
    e.preventDefault();
    const targetId = $(this).attr('href');
    const $targetSection = $(targetId);
    if ($targetSection.length) {
      $('html, body').animate({
        scrollTop: $targetSection.offset().top - 10
      }, 'slow');
    }
  });
});



// フォームの送信-----------------------------------------------------------

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
    const popup = window.open("", "popupWindow", "width=400,height=200");
    popup.document.write('<html><head><title>Confirmation</title></head><body><h1>' + data + '</h1></body></html>');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
