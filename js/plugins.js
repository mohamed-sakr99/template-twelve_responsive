$(document).ready(function(){
    //add toggle class two span of navbar
    $('.navbar-toggler').on('click', function(){
        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    })

    //adjust header height
    $('.header .carousel').height($(window).height());
    $(window).resize(function(){
        $('.header .carousel').height($(window).height());
    });

    // shuffle between elemnets
    var mixer = mixitup('.gallary');

    //venobox
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    $('nav li a').click(function(){
        //add Class active to links
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

        //smooth scroll
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top -67
        },600)
    });
     
    
     //button up
     $(window).scroll(function(){
        if($(this).scrollTop() >= 1000) {
            $('.btn-up').fadeIn(500);
        }else {
            $('.btn-up').fadeOut(500);
        }
     })
     $('.btn-up').click(function(){
         $('html, body').animate({
             scrollTop: 0
         },1000)
     });

    //coloring links depend on scrolling
    $(window).scroll(function(){
        $('section').each(function(){
            if($(window).scrollTop() >= $(this).offset().top -67) {
                var secID = $(this).attr('id');
                $('nav li a').removeClass('active');
                $('nav li a[data-scroll = "'+ secID+'"]').addClass('active');
            }
        });
    });
});