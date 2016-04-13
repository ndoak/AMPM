$(document).ready(function() {


$('#brunch-content,#dinner-content,#dessert-content,#drinks-content,#appetizer-content').hide();


$('#link-apps').click(function() {
 $('#brunch-content').hide();
  $('#landing-content').hide();
  $('#dinner-content').hide();
   $('#dessert-content').hide();
    $('#drinks-content').hide();
  $('#appetizer-content').show(); 
  $('.food-picture').hide().css("background-image", "url(images/app.jpg)").fadeIn(2000);

});


$('#link-brunch').click(function() {
   $('#appetizer-content').hide();
    $('#landing-content').hide();
  $('#dinner-content').hide();
   $('#dessert-content').hide();
    $('#drinks-content').hide();
  $('#brunch-content').show(); 
  $('.food-picture').hide().css("background-image", "url(images/brunch.jpg)").fadeIn(2000);

});

$('#link-dinner').click(function() {
   $('#appetizer-content').hide();
    $('#landing-content').hide();
  $('#brunch-content').hide();
   $('#dessert-content').hide();
    $('#drinks-content').hide();
  $('#dinner-content').show(); 
  $('.food-picture').hide().css("background-image", "url(images/burger.jpg)").fadeIn(2000);

});

$('#link-dessert').click(function() {
   $('#appetizer-content').hide();
    $('#landing-content').hide();
  $('#dinner-content').hide();
   $('#brunch-content').hide();
    $('#drinks-content').hide();
  $('#dessert-content').show(); 
  $('.food-picture').hide().css("background-image", "url(images/dessert.jpg)").fadeIn(2000);

  });

$('#link-drinks').click(function() {
   $('#appetizer-content').hide();
    $('#landing-content').hide();
  $('#dinner-content').hide();
   $('#brunch-content').hide();
    $('#dessert-content').hide();
  $('#drinks-content').show(); 
  $('.food-picture').hide().css("background-image", "url(images/drinks.jpg)").fadeIn(2000);

});


$('#menu-container').css("overflow-y", "scroll");


  $('.description').hide();

  $('.subitems').click(function(){
    console.log(this);
  	$(this).next('.description').slideToggle();
  	$(this).next('.description').show();

});

});








