$(document).ready(function() {
    // Menu toggle
    $('.hamburger').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('active');
    });

    // Close menu when clicking anywhere else
    $(document).click(function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.hamburger').removeClass('active');
            $('.nav-links').removeClass('active');
        }
    });

    // Close menu when clicking a nav link
    $('.nav-links a').click(function() {
        $('.hamburger').removeClass('active');
        $('.nav-links').removeClass('active');
    });
});
