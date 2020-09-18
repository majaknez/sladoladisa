$(document).ready(function(){
    
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


        $('.flavor-section div[data-link]').on('mouseenter', function(){
          
            const $logoImage = $('#logo-image').css({"display" :"none"})
            const imageSrc =$(this).attr("data-link");
            console.log(imageSrc);
            

            $(this).css({"font-weight" : "bold"});
            $('.flavor-section').find('.cover-image').css({
                "background-image": `url(${imageSrc})`
            }).end().find('.text-image').fadeIn(3000);
        })

        $('.flavor-section div[data-link]').on('mouseleave',function(){

            if ($(this).css({"font-weight":"bold"})){
                $(this).css({"font-weight":""});
              
            } else {
                console.log('greska')
            }
        })










   })