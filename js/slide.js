jQuery(document).ready(function ($) {

      var slideCount = $('.slide_container div').length;
      var slideWidth = $('.slide_container div').width();
      var slideHeight = $('.slide_container div').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('.main_slide').css({ width: slideWidth, height: slideHeight });
      
      $('.slide_container').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('.slide_container > div:last-child').prependTo('.slide_container');
  
      function moveLeft() {
          $('.slide_container').animate({
              left: + slideWidth
          }, 200, function () {
              $('.slide_container > div:last-child').prependTo('.slide_container');
              $('.slide_container').css('left', '');
          });
      };
  
      function moveRight() {
          $('.slide_container').animate({
              left: - slideWidth
          }, 200, function () {
              $('.slide_container > div:first-child').appendTo('.slide_container');
              $('.slide_container').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  