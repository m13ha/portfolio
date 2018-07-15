$('.html5').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rotate');
    $('.html-info').fadeIn('slow');
    $('.html-info').toggleClass('grow')
});


$('.css3').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rotate');
    $('.css-info').fadeIn('slow');
    $('.css-info').toggleClass('grow')
})


$('.js').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('rotate');
    $('.js-info').fadeIn('slow');
    $('.social-icon-container-2').toggleClass('show');
    $('.js-info').toggleClass('grow')
})