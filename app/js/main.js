
$(function () {
    $("[data-header]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('header');

        $(blockId).slideToggle();
    });

    $(".vertical-slider").wrapInner( "<div class='vertical-slider-box'></div>");

    $('.vertical-slider-box').slick({
        dots: false,
        arrows: false,
        vertical: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        verticalSwiping: true,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: false,
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 556,
              settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            }
          ]
      });



      $('.teacher__slider-list').slick({
        centerMode: true,
        dots: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 556,
            settings: {
              centerMode: false,
              slidesToShow: 1,
            }
          }
        ]
      });

});

$(function () {
    $('.congratulations__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1899,
                settings: {
                slidesToShow: 4,
                }
            },
            {
                breakpoint: 1556,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 1211,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 841,
                settings: {
                slidesToShow: 1,
                }
            },
        ]
      });
});