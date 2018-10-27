///////////menu
$("#menu-icon").click(function(){
if ($(this).data( "stat" )=="closed"){
        $(this).parent().find("a:not(:first-child)").fadeIn().slideDown();
        $(this).data( "stat","open");
}
else{
        $(this).parent().find("a:not(:first-child)").fadeOut();
        $(this).data( "stat","closed");

}

}
);
/////////slider
$(document).ready(function(){
        $(".slid-button").click(function(){
          var currentSlider= $(this).closest('.slider');
          $(currentSlider).find('.slid-button').removeClass("current-slid-button");
          $(currentSlider).find('.slid').removeClass("current-slid");
          var slider=$(this).data( "sliderid" );
          $("#"+slider).addClass("current-slid");
          $(this).addClass("current-slid-button");
    
        });
    
    });

//////////////smooth scroll
$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });