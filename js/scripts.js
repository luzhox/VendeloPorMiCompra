


$(document).ready(function () {



 $(".boton").click(function () { 
   $(".vendelo2").slideToggle(); });
 $(".boton-cancelar").click(function () { $(".vendelo2").slideToggle("slow",function(){
   $(this).addClass("aparecio");
 }); });





  var containerEl = document.querySelector('.autos'); 
  var mixer = mixitup(containerEl, 
    { multifilter: { enable: true }
      , pagination: { limit: 6, maintainActivePage: false } }); 
      $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); if (target.length) { event.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () { var $target = $(target); $target.focus(); if ($target.is(":focus")) { return false; } else { $target.attr('tabindex', '-1'); $target.focus(); }; }); } } });
});