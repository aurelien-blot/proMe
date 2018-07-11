
var fixmeTop = $('nav').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('nav').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {                                   // apply position: static
        $('nav').css({                      // if you scroll above it
            position: 'static'
        });
    }

});


$('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");
    if (the_id === '#') {
        return;
    }
    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');
    return false;
});
/*
$('#interestDiv .contentPart i').each(function () {
    $(this).mouseover(function(){
        console.log('test');
        $(this).animate({
            translateY: '20px'
        },500)});
});
*/