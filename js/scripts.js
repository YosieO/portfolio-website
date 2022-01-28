console.log('Welcome to my portfolio! 😃')

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop()> 20) {
        $('#arrow').fadeOut();
     }
    else {
      $('#arrow').fadeIn();
     }
 });
