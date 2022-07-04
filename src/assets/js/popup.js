$(document).ready(function() {

    // POPUP AUTH
    $('.button-acc, .user__menu').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay');
        $('.popup-auth').addClass('open')
    })

    $('.close-auth').on('click', function() {
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
        $('.popup-auth').removeClass('open')

        $('.button-menu').removeClass('opened')
        $('.header__right').removeClass('mobile-menu')
        $('.submenu__mobile').slideUp()
    })

    $('.input-style input, .input-style textarea').on('focus', function() {
        $(this).parent().find('.input-label').css('display', 'none');
    })

    $('.input-style input, .input-style textarea').on('blur', function() {
        if ($(this).val().length == 0) {
            $(this).parent().find('.input-label').css('display', 'block');
        }
    })

    $('.auth__tab').on('click', function() {
        $('.auth__label').attr('data-index', $(this).attr('data-active'))
        $('.auth__body').attr('data-show', $(this).attr('data-active'))

        if ($(this).attr('data-active') == '1') {
            $('.auth__title').text('Регистрация')
            $('.popup-auth__inner').addClass('resize')
        } else {
            $('.auth__title').text('Авторизация')
            $('.popup-auth__inner').removeClass('resize')
        }
    })

    $('.pass-view').on('click', function() {
        $(this).toggleClass('show')

        if ($(this).hasClass('show')) {
            $(this).parent().find('[type="password"]').attr('type', 'text')
        } else {
            $(this).parent().find('[type="text"]').attr('type', 'password')
        }
    })


    // POPUP QUESTION
    $('.product__banner-inner .button-style').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay');
        $('.popup-question').addClass('open')
    })

    $('.close-question').on('click', function() {
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay');
        $('.popup-question').removeClass('open')
    })

})