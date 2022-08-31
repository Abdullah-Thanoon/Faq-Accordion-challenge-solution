$('.section').click( function () {
    var a = this.nextElementSibling;
    console.log(a);
    var text = $('p',this).css('display');
    if (text == 'none') {
        $('p',this).css('display','block');
        $('h5',this).css('font-weight','700');
    }
    else{
        $('p',this).css('display','none');
        $('h5',this).css('font-weight','400');
    }
    });
