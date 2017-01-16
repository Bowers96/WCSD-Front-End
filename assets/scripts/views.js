'use strict';

$('#man1').on('click', function() {
  $('.shop').hide();
  $('.item-one').show();
  $('.item-one').css('display: block;');
  $('.hat').hide();
  $('.sweater').hide();
  $('.about-wcsd').hide();
});

$('#man2').on('click', function() {
  $('.shop').hide();
  $('.hat').show();
  $('.hat').css('display: block;');
  $('.about-wcsd').hide();
});

$('#man3').on('click', function() {
  $('.shop').hide();
  $('.sweater').show();
  $('.sweater').css('display: block;');
  $('.about-wcsd').hide();
});

$('.active').on('click', function() {
  $('.shop').hide();
  $('.centered').show();
  $('.item-one').hide();
  $('.about-wcsd').hide();
});

$('#shop').on('click', function() {
  $('.centered').hide();
  $('.shop').show();
  $('.item-one').hide();
  $('.about-wcsd').hide();
});

$('.about').on('click', function() {
  $('.about-wcsd').show();
  $('.centered').hide();
  $('.shop').hide();
  $('.item-one').hide();
  $('.hat').hide();
  $('.sweater').hide();
});
