$('.html5').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rotate');
    $('.html-info-container').fadeIn('slow');
    $('.html-info').toggleClass('grow')
});


$('.css3').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rotate');
    $('.css-info-container').fadeIn('slow');
    $('.css-info').toggleClass('grow')
})


$('.js').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rotate');
    $('.js-info-container').fadeIn('slow');
    $('.social-icon-container-2').toggleClass('show');
    $('.js-info').toggleClass('grow')
})