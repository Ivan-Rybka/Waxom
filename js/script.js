$('.posts_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<img src="src/left-posts.png" class="slick-prev"  alt="">',
    nextArrow: '<img src="src/right-posts.png" class="slick-next" alt="">'
});

const playButtons = document.getElementById('buttons');
const video = document.getElementById('video');

function playVideo () {
    playButtons.style.display = 'none';
    video.play();
};

playButtons.addEventListener('click', playVideo);
