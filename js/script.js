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








    	$('.tab').on('click', function(e){
          e.preventDefault();

       $($(this).siblings()).removeClass('tab--active');
       $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

       
       $(this).addClass('tab--active');
       $($(this).attr('href')).addClass('tabs-content--active');

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
      $('filter-style').styler();



    });



$('.catalog__filter-btnsecond').on('click', function(){
$('.catalog__filter-btnsecond').toggleClass('catalog__filter-button--active')
});












$('.catalog__filter-btngrid').on('click', function(){
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
});

$('.catalog__filter-btnline').on('click', function(){
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
});



$('.catalog__filter-btngrid').on('click', function(){
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
  $('.product-item__wrapper')removeClass('product-item__wrapper--list');
});


$('.catalog__filter-btnline').on('click', function() {
  $(this).addClass('catalog__filter-button--active');
  $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
  $('.product-item__wrapper')addClass('product-item__wrapper--list');
});
