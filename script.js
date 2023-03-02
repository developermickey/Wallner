$('.canvas_open').on('click', function(){
    $('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
});

$('.canvas_close,.off_canvars_overlay').on('click', function(){
    $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
});


/*---Off Canvas Menu---*/
var $offcanvasNav = $('.offcanvas_main_menu'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
$offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

$offcanvasNavSubMenu.slideUp();

$offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length){
            $this.siblings('ul').slideUp('slow');
        }else {
            $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
            $this.siblings('ul').slideDown('slow');
        }
    }
    if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
      $this.parent().toggleClass('menu-open');
    }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
      $this.toggleClass('menu-open');
    }
});


jQuery(document).ready(function($) {
    $('.home-silder').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});

jQuery(document).ready(function($) {
    $('.blogs-silder').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  // asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  accessibility: false, 
  arrows: true,
  vertical:true,
  focusOnSelect: true,
  responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }]
});

jQuery(document).ready(function($) {
  $('.product-silder').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});
});

jQuery(document).ready(function () {
  jQuery('.sub-menu ul').hide();
jQuery(".sub-menu a").click(function () {
jQuery(this).parent(".sub-menu").children("ul").slideToggle("100");
jQuery(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
});