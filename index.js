const iframes = document.querySelectorAll('iframe[data-src]');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
});

iframes.forEach(iframe => {
    observer.observe(iframe);
});

$('#about').click(function () {

    const destino = $('#about_it')
    const offset = 80; // Adjust this value as needed
    const scrollToPosition = destino.offset().top - offset;

    $('html').animate({
        scrollTop: scrollToPosition
    }, 1000);
})

$('#subtittles').click(function () {

    const destino = $('#videos-subtittles')
    const offset = 80; // Adjust this value as needed
    const scrollToPosition = destino.offset().top - offset;

    $('html').animate({
        scrollTop: scrollToPosition
    }, 1000);
})

$('#NoSubtittles').click(function () {
    const destino = $('#videos-NoSubtittles');
    const offset = 80; // Adjust this value as needed
    const scrollToPosition = destino.offset().top - offset;

    $('html').animate({
        scrollTop: scrollToPosition
    }, 1000);
});