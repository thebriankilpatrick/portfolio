$(document).ready(function(){
    $('.tooltipped').tooltip();
});

// Function for hamburger sidenav display 
$(document).ready(function() {
    $('.sidenav').sidenav();
});

$(".sidenav-trigger").click(function() {
    $(".sidenav").sidenav();
})

// Animate scroll functions on click
$("#jumboBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".aboutTarget").offset().top
    }, 2000);
});

$("#portfolioPic").click(function() {
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

// Animate scroll functions for hamburger nav on click
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

// Jumbotron Picture click function
// var i = 0;

// $("#portfolioPic").click(function() {
//     if (i === 0) {
//     $(".imgContainer").prepend($("<p id='hireMe'>").text("I'm available for hire!"));
//     i++;
//     }
// })