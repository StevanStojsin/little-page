$(document).ready(function(){
    var navToggle = true;
    $(".nav-toggle").on("click", function(){
        $(".main-nav").slideToggle();
        if(navToggle) {
            $(".nav-toggle img").attr("src", "../img/close.png");
            navToggle = false;
        }
        else if(!navToggle) {
            $(".nav-toggle img").attr("src", "img/nav-toggle.png");
            navToggle = true;
        }
    });
});