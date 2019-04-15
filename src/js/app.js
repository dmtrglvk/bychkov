import './components/svg'
import objectFitImages from 'object-fit-images'

$(() => {
    let images = $('.image-object-fit');
    if(images.length) {
        objectFitImages(document.querySelectorAll('.image-object-fit'));
    }
});

$(document).on('mousemove', (e) => {
    $('.cursor').css({
        left: e.pageX,
        top: e.pageY
    });
    $("a").on("mouseover", () => {
        $('.cursor').addClass('enlarge');
    }).on("mouseout", () => {
        $('.cursor').removeClass('enlarge');
    });
});