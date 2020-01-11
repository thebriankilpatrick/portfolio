// Function for hamburger sidenav display 
$(document).ready(function() {
    $('.sidenav').sidenav();
});

$("#jumboBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutTarget").offset().top
    }, 2000);
});

$("#aboutBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutTarget").offset().top
    }, 2000);
});

$("#portfolioBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".portfolioTarget").offset().top
    }, 2000);
});
