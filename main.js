// JQuery
// $(function() {
  // // ハンバーガーメニュー
  // $('.bl-hamburger-bg-w').hide();
  // $('.bl-hamburger-button, .bl-hamburger-menu, .bl-hamburger-menu-li a, .bl-hamburger-bg-w').click(function() {
  //     $('.bl-hamburger-bg-w').fadeToggle(300);
  //     $('.bl-hamburger-button, .bl-hamburger-menu').toggleClass('js-hamburger-open');
  //     $('body').toggleClass('js-hamburger-no-scroll')
  // });
  // ヘッダースクロール
//   $(window).on("scroll", function () {
//     var sliderHeight = $(".ly_header").height();
//     if (sliderHeight < $(this).scrollTop()) {
//       $(".js_header").addClass("headerColorScroll");
//     } else {
//       $(".js_header").removeClass("headerColorScroll");
//     }
//   });
//     // タブメニュー
//   $('.bl_news_li-tab').on('click', function() {
//     $('.bl_news_menu').removeClass('active');
//     $($(this).attr('id')).addClass('active');
//     $('.bl_news_li-tab').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('.bl_news_li-tab').click(function() {
//     $('.bl_news_menu').css('display','none');
//     $($(this).attr('id')).fadeIn(1000).addClass('active');
//   });

// }); 

// JavaScript
// ハンバーガーめぬー
const JsHamburgerBtn = document.querySelector('.bl-hamburger-button');
const JsHamburgerMenu = document.querySelector('.bl-hamburger-menu');
const JsHamburgerBgW = document.querySelector('.bl-hamburger-bg-w');
const body = document.body;

JsHamburgerBtn.addEventListener('click',function() {
  body.classList.toggle('js-hamburger-no-scroll');
  JsHamburgerBgW.classList.toggle('js-hamburger-open');
  JsHamburgerBtn.classList.toggle('js-hamburger-open');
  JsHamburgerMenu.classList.toggle('js-hamburger-open');
  JsHamburgerBgW.addEventListener('click', function() {
    JsHamburgerBtn.classList.remove('js-hamburger-open');
    JsHamburgerMenu.classList.remove('js-hamburger-open');
    JsHamburgerBgW.classList.remove('js-hamburger-open');
  });
});

// ヘッダースクロール
const Header = document.querySelectorAll('.js_header');
const HeaderHight = document.querySelector('.ly_header').clientHeight;

window.addEventListener('scroll',function() {
  const Offset = window.pageYOffset;
  for (let i = 0; i < Header.length; i++) {
    if (HeaderHight < Offset) {
    Header[i].classList.add('headerColorScroll');
    } else {
      Header[i].classList.remove('headerColorScroll'); 
    }
  }
});

// タブメニュー
const JsNewsLiTabs = document.querySelectorAll('.bl_news_li-tab');
const JsNewsTargets = document.querySelectorAll('.bl_news_menu');

  JsNewsLiTabs.forEach(JsNewsLiTab => {
    JsNewsLiTab.addEventListener('click', (e) => {
      let currentMenu = e.currentTarget;
      
      let currentContent = document.getElementById(currentMenu.dataset.id);
      console.log(currentContent)
      JsNewsLiTabs.forEach(JsNewsLiTab => {
        JsNewsLiTab.classList.remove('active');
      });
      currentMenu.classList.add('active');
      JsNewsTargets.forEach(JsNewsTarget => {
        JsNewsTarget.classList.remove('active');
      })
      if (currentContent !== null) {
        currentContent.classList.add('active');
      }
    });
  });


// modal (html,csc的に合わない、Bgあればいい)
// const modalArea = document.querySelector('#modal-1');
// const modalOpen = document.querySelector('.js_modal_btn');
// const modalClose = document.querySelector('.bl_modal_down');
// const modalToggle = [modalOpen, modalClose];

// for (let i = 0; i < modalToggle.length; i++) {
//   modalToggle[i].addEventListener('click',function() {
//     modalArea.classList.toggle('is-open');
//   },false);
// }


// フェードイン
const JsFades = document.querySelectorAll('.js_fade');
const cb = function(entries, observer) {
  entries.forEach((entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    } else {
      console.log('outview');
     
    }
  }))
  // alert('inter');
}
const option = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0
};
const io = new IntersectionObserver(cb,option);
JsFades.forEach(JsFade => io.observe(JsFade));




'use strict'; 
{
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    centeredSlides: true, //現在のスライドを中央に表示
    autoplay: {// 自動再生
      delay: 3000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
    },
    slidesPerView: 1, 
  });

  // spのsafariにおける100vh表示の調整
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setFillHeight);

  setFillHeight(); 
}

// フェードイン(なぜか消すとモーダルの中身消える)
AOS.init({
  offset: 150,
  delay: 0,
  duration: 1000,
  easing: "ease-out",
});

// モーダル
MicroModal.init( {
  openClass: 'is-open',
  disableScroll: true,
  awaitOpenAnimation:true,
  awaitCloseAnimation:true,
});


// pickr
flatpickr('#js_datepicker');