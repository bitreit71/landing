$(document).ready(function(){
    $('.screen-4__slider').slick();
});

$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu-container').toggleClass('active_1');
  }); 
});

$(document).ready(function(){
  $('.header__phone-icon').click(function(event) {
    $('.header__phone-icon, .header__phone-container p').toggleClass('active_2');
  }); 
});
