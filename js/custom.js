// document.querySelector('.current-year').text(new Date().getFullYear());
$('#year').text(new Date().getFullYear());

$('.carousel').carousel({
  interval: 7000,
  keyboard: true,
  wrap: true,
  pause: hover,
});
