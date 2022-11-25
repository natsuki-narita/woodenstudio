$(function(){

    // AOS.js
    AOS.init();

    //  Vegas.js
    $(".main-visual").vegas({
        timer: false,
        transition: 'blur', 
        transitionDuration: 2000,
        delay: 10000,
        animation: 'kenburns',
        animationDuration: 10000,

        slides: [
            { src: "./imgphoto01.jpg" },
            { src: "./imgphoto011.jpg" },
            { src: "./imgphoto012.jpg" },
       
        ]
    });
    // Drawer.js
    $(document).ready(function() {
        $('.drawer').drawer();
      });

});