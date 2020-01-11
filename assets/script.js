// Function for hamburger sidenav display 
$(document).ready(function() {
    $('.sidenav').sidenav();
});

$(".sidenav-trigger").click(function() {
    $(".sidenav").sidenav();
})


// Try removing the style: transform and set it to "none"
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

$("#sideAboutBtn").click(function() {
    $(".sidenav").removeAttr("style", "transform: translateX(0%)");
    $(".sidenav").css("style", "transform: translateX(-105%)");
    $(".sidenav-overlay").removeAttr("style", "opacity: 0");
    $(".sidenav-overlay").removeAttr("style", "display: none");
    $("body").removeAttr("style", "overflow: hidden");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutTarget").offset().top
    }, 2000);
    $(".sidenav-overlay").css("style", "opacity: 0");
});

$("#sidePortfolioBtn").click(function() {
    $(".sidenav").removeAttr("style", "transform: translateX(0%)");
    $(".sidenav").css("style", "transform: translateX(-105%)");
    $(".sidenav-overlay").removeAttr("style", "opacity: 0");
    $(".sidenav-overlay").removeAttr("style", "display: none");
    $("body").removeAttr("style", "overflow: hidden");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".portfolioTarget").offset().top
    }, 2000);
    $(".sidenav-overlay").css("style", "opacity: 0");
});
