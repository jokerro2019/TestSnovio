$.getJSON( "../new.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<div class='search_content-item'><h1>" + val.title +"</h1><p>" + val.description + 
      "</p><span><img src='img/Vector.png'>" + val.comments +
      "</span></div>" );
    });
   $(items.join('')).appendTo( ".search_content" );

   setTimeout(function(){
    $(".search_content div:first-of-type").addClass( "hover" );
    var comments = "<div class='comments'><h4>Comments</h4><p>" + data[0].commentsblock1 + 
    "</p><div class='border'></div><p>" + data[0].commentsblock2 + "</p><button class='js-btn'>add comment</button></div>"
    $(comments).appendTo(".hover");
    }, 0);

  });

  setTimeout(function(){
    $('.js-btn').click(function(){
        $('.comments').css('display', 'block');
        $('.add_comments').css('display', 'block');
        $('.js-btn-comments').css('display', 'block');
        $('.loader').css('display', 'none');
    });
    function btnClose(){
        console.log('close');
        $('.add_comments').css('display', 'none');
        $('.comments').css('display', 'none');
        $('textarea').val("");
    };
    $('.btn-close').click(function(){
        btnClose();
    });
    
    $('.js-btn-comments').click(function(){
        $(this).css('display', 'none');
        $('.loader-1').css('display', 'block');
        setTimeout(function(){
            $('.loader-1').css('display', 'none');
            $('.loader-2').css('display', 'block');
        }, 2000);
        setTimeout(btnClose, 3000);
    });
    }, 500);

$('.btn-menu').click(function(){
$('.navigation_menu_list').toggleClass('show');
});

  
