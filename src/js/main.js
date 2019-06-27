$(document).ready(function () {

    /* Добавления скролла к началу страницы */
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    })
    $('#toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        
    })

    /* Изменение иконки скрола по нажатию */
    $('#toTop').click(function(){
        if 
            ($(this).html ()=='<i class="fas fa-arrow-up"></i>'){
            $(this).html('<i class="fas fa-rocket"></i>')
            }
    })

    /* Изменение цвета при наведении мыши на скролл */
    $('#toTop').mouseover(function() {
        $('i').css('color', 'white')
       /*  $(this).css('background', 'yellow'); */
    })
    
    /* Изменение цвета скролла после того, как мышь убрали */
    $('#toTop').mouseout(function() {
        $('i').css('color', 'black')
        $(this).css('background', 'linear-gradient(to right, #69d2e7 0%, #817bff 100%)');
    })


})






