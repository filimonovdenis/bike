// $(function(){
	

// $('.banner-section__slider').slick({
// 	dots: true,

// 	prevArrow:'button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img-kvadro/arrow-left.svg"></button>';
    
//     nextArrow:'button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img-kvadro/arrow-right.svg"></button>';
// });

// });

$(function(){
    	$('.banner-section__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
          dots: true,
            prevArrow:
             '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img-kvadro/arrow-left.svg"</button>',
             
            nextArrow:
             '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img-kvadro/arrow-right.svg"</button>',
              
    	});

// responsive: [
            //   {
            //     breakpoint:1301,
            //     settings:{
            //       arrows:false,
            //       dots:true
            //     }
            //   },
            //   {
            //     breakpoint:1201,
            //     settings:{
            //       slidesToShow: 3,
            // slidesToScroll: 1,
            //     }
            //   }
              // ]


$('.product-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,



            prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="img-kvadro/left-arrow-black.svg"></button>',

            nextArrow:  '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="img-kvadro/right-arrow-black.svg"></button>',
            responsive: [
              {
                breakpoint:1201,
                settings:{

                  slidesToShow: 3,
                  arrows:false,
                }
              },
              {
                breakpoint:870,
                settings:{

                  slidesToShow: 2,
                  arrows:false,
                }
              }, 
               {
                breakpoint:590,
                settings:{

                  slidesToShow: 1,
                  arrows:false,
                }
              }

              ]
})
$(".rate-yo").rateYo({
  rating: 3.6,
  ratedFill: "#1C62CD",
  spacing: "7px",
  normaFill:"C4C4C4"
});



    	$('.tab').on('click', function(e){
          e.preventDefault();

       $($(this).siblings()).removeClass('tab--active');
       $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

       
       $(this).addClass('tab--active');
       $($(this).attr('href')).addClass('tabs-content--active');

       $('.product-slider').slick('setPosition');

    	});




    	$('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    	});



    	$('.product-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow:
             '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="img-kvadro/left-arrow-black.svg"</button>',
             
            nextArrow:
             '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="img-kvadro/right-arrow-black.svg"</button>'

            });

      $('.filter-style').styler();

//       $(document).ready(function(){
// alert(jQuery.fn.jquery);
// });
$('.filter__item-drop, .filter__extra').on('click', function(){
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle('200');
});



$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 100000,
  max: 500000,  

});








    });






$('.menu__btn').on('click', function(){
  $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
})

$('.footer__topdrop').on('click', function(){
  $(this).next().slideToggle();
}); 

// 1


   var link = document.querySelector(".user-list");
   var popup = document.querySelector(".modal-login");
     var close = document.querySelector(".modal-close");
     var form = popup.querySelector("form");
     var login = popup.querySelector("[name=login]");
     var password = popup.querySelector("[name=password]");


     var isStorageSupport = true;
     var storage = "";

     try {
      storage = localStorage.getItem("login");
     } catch (err) {
      isStorageSupport = false;
     }


   link.addEventListener("click", function (evt) {
    evt.preventDefault();
      popup.classList.add("modal-show");
      //login.focus();
     

      
     //close.addEventListener("click", function(evt) {
      //evt.preventDefault();
      //popup.classList.remove("modal-show");
    

     if (storage) {
      login.value = storage;
      password.focus();
     } else {
      login.focus();
     }
 });
     close.addEventListener("click", function(evt){
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
     })

     form.addEventListener("submit", function (evt) {
          if (!login.value || !password.value) {
            evt.preventDefault();
            popup.classList.add("modal-error");
              popup.offsetWidth = popup.offsetWidth;
              popup.classList.add("modal-error");
          } else {
             if (isStorageSupport) {
              localStorage.setItem("login", login.value);
             }
          }
        });

     window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal-show")) {
                 popup.classList.remove("modal-show")
            } 
          }
        });
     if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
     }


// 2



$('.aside__btn').on('click', function(){
  $(this).next().slideToggle();
}); 



// search__tabs-item--active