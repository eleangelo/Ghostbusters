$(document).ready(function () {
    const mMenuBtn = $('.m-menu-button');
    const mMenu = $('.m-menu');
    const tab = $('.tab');
    const tabsContent = $('.tabs-content')
    mMenuBtn.on('click', function() {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    })

    tab.on('click', function() {
        tab.removeClass('active');
        $(this).toggleClass('active');
        let activeTabContent = $(this).attr('data-target')
        $('.tabs-content').removeClass('visible')
        $(activeTabContent).toggleClass('visible')
        })
   
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.button-next',
        },
        breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },

            992: {
              slidesPerView: 4,
              spaceBetween: 25
            }       
          }
    })

});





