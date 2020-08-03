$(document).ready(function () {
    
    var nd1 = $('.the1').html();

    // jqhtmlget

    console.log(nd1);

    $('.the1').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('class-1')  
    });

    $('.nut1').click(function (e) { 
        e.preventDefault();
        $('.the1').html('Nội dung đã được thay đổi');
    });

    $(".nut2").click(function (e) { 
        e.preventDefault();
        var the1 = $('.the1').clone(true);

        $('.anh').before(the1);
    });

    console.log($('.anh').attr('src'));

    $('.nut3').click(function (e) { 
        e.preventDefault();
        $('.anh').attr('src', '2.jpg');
    });

    $('.nut4').click(function (e) { 
        e.preventDefault();

        var type = $('input').attr('type')

        if (type == 'password') {
            $('input').attr('type', 'text');
        } else {
            $('input').attr('type', 'password');
        }
        
    });

    $('.nut5').click(function (e) { 
        e.preventDefault();
        
        console.log($('input').val());

        $('input').val('');
    });

    $('input').keypress(function (e) { 

        console.log(e.which);

        if (e.which == 13) {
            console.log('vua nhan enter ak?');
        }
    });
});