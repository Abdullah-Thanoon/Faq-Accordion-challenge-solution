$('.section').click(function(){    
    var text = $('p',this).css('max-height');
    if(text == '64px')
    {
        $('p').css('max-height','0');
        $('h5').css('font-weight','400');
        $('.arrow').css('transform','rotate(0deg)');
    }
    else{
    document.querySelectorAll(".section").forEach((section) => {
        $('p').css('max-height','0');
        $('h5').css('font-weight','400');
        $('.arrow').css('transform','rotate(0deg)');
        });
    $('p',this).css('max-height','4rem');
    $('h5',this).css('font-weight','700');
    $('.arrow',this).css('transform','rotate(180deg)');
    }
});
