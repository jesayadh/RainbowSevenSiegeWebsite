var interval = setInterval(function () {
  changeSlide('next');
}, 4000);

function changeSlide(direction) {
var currImage = $('.active');
var nextImage = currImage.next();
var prevImage = currImage.prev();

if (direction == 'next') {
if (nextImage.length)
  nextImage.addClass('active');
else
  $('.slider img').first().addClass('active');
} else {
if (prevImage.length)
  prevImage.addClass('active');
else
  $('.slider img').last().addClass('active');
}
currImage.removeClass('active');
}