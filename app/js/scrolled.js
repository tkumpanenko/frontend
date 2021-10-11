let scrolled;

window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50) {
        $('.main_header').addClass('active');
    }
    if(50 > scrolled) {
        $('.main_header').removeClass('active');
    }
}