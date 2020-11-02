$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).scroll(function () {
       var S = $(".nav__body").offset().top - $(window).scrollTop();
       console.log(S);
       if(S <= -80.0)
       {
            $('.shadow').addClass('active');
       }else{
            $('.shadow').removeClass('active');
       }
    });
});