$(document).ready(function () {
    // Smooth scroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    // Fade-in on scroll
    $(window).on("scroll", function () {
        $(".card").each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
                $(this).addClass("show");
            }
        });
    });
});
