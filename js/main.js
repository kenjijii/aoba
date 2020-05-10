document.addEventListener('DOMContentLoaded', function() {
    const MenuEle = document.getElementById('menu_btn');
    // MenuEle.addEventListener('click', function() {
    // });
    const $wrapper = document.getElementById('gloval-nav');
    const $wr = document.querySelector('body');
    const $navBtn = document.getElementById('nav-btn');
    const menus = document.querySelectorAll('.ls');
    const addclick=function(el){
      el.addEventListener('click', (function(e){
      SmoothScollMi(e);
      navCloseFunc();
      }));
    };
    menus.forEach(function (elem) {
    addclick(elem);
    });
    const SmoothScollMi=function(e){
      const target = e.target;
      // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
      e.preventDefault();
      const targetId = target.hash;
      console.log(targetId);
      const targetElement = document.querySelector(targetId);
      // 画面上部から要素までの距離
      const rectTop = targetElement.getBoundingClientRect().top;
      // 現在のスクロール距離
      const offsetTop = window.pageYOffset;
      // スクロール位置に持たせるバッファ
      let buffer=77;
      if(targetId=="#voice"){
      buffer = 60;
    }else if (targetId=="#contactForm") {
        buffer = 43;
      }
      const top = rectTop + offsetTop - buffer;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
    // .addEventListener('click',navToggle);
    // MenuEle.addEventListener('click', navToggle);
// alert("test");
    function navToggle() {
        event.preventDefault();
      if ($wr.classList.contains('open')) {
        navCloseFunc();
      } else {
        navOpenFunc();
      }
    }
    function navOpenFunc() {
      MenuEle.classList.add('active');
      $wr.classList.add('open');
    }
    function navCloseFunc() {
      MenuEle.classList.remove('active');
      $wr.classList.remove('open');
    }
    MenuEle.addEventListener('click', navToggle);
    // $wrapper.addEventListener('click',navToggle);
  });
