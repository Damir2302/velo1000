$(document).ready(function() {

    // Header menu
    $('.button-menu').on('click', function() {
        if ($(this).hasClass('opened')) {
            $('.header__right').removeClass('mobile-menu')
            $('.submenu__mobile').slideUp()
            $('body').removeClass('overflow-hidden')
            $(this).removeClass('opened')
        } else {
            $(this).addClass('opened')
            $('.header__right').addClass('mobile-menu')
            $('body').addClass('overflow-hidden')
        }
    })

    $('.menu__mobile-item span').on('click', function() {
        $('.submenu__mobile').slideToggle()
    })

    // Menu
    const $nav = $('.header__menu')
    const $btn = $('.hidden-menu span')
    const $vList = $('.header__menu-list')
    const $hList = $('.hidden-menu ul')
    const $hListMenu = $('.hidden-menu')
    const breaks = []

    function updateNav() {
        let availableSpace = $nav.width() - $btn.width() - 65;
        if ($vList.width() > availableSpace) {
            breaks.push($vList.width())
            $vList.children().last().prependTo($hList)

            if ($hListMenu.hasClass('hidden')) {
                $hListMenu.removeClass('hidden')
            }

        } else {
            if (availableSpace > breaks[breaks.length - 1]) {
              $hList.children().first().appendTo($vList)
              breaks.pop()
            }

            if (breaks.length < 1) {
                $hListMenu.addClass('hidden');
            }
          }

        if ($vList.width() > availableSpace) {
            updateNav();
        }
    }

    $(window).resize(function() {
        if ($(window).width() >= 744) {
            updateNav()
        }
    })

    if ($(window).width() >= 744) {
        updateNav()
    }

    // Navbar
    const $navbar = $('.navbar__inner')
    const $navbarBtn = $('.hidden-navbar span')
    const $nav_vList = $('.navbar__menu')
    const $nav_hList = $('.hidden-navbar .hidden-list')
    const $nav_hListMenu = $('.hidden-navbar')
    const nav_breaks = []

    function updateNavbar() {
        let availableSpace;
        if ($(window).width() >= 744 && $(window).width() < 768) {
            availableSpace = $navbar.width() - $navbarBtn.width() - 10;
        } else if ($(window).width() >= 786) {
            availableSpace = $navbar.width() - $navbarBtn.width() - 40; //85
        }
        if ($nav_vList.width() > availableSpace) {
            nav_breaks.push($nav_vList.width())
            $nav_vList.children().last().prependTo($nav_hList)

            if ($nav_hListMenu.hasClass('hidden')) {
                $nav_hListMenu.removeClass('hidden')
            }

        } else {
            if (availableSpace > nav_breaks[nav_breaks.length - 1]) {
              $nav_hList.children().first().appendTo($nav_vList)
              nav_breaks.pop()
            }

            if (nav_breaks.length < 1) {
                $nav_hListMenu.addClass('hidden');
            }
          }

        if ($nav_vList.width() > availableSpace) {
            updateNavbar();
        }
    }

    $(window).resize(function() {
        if ($(window).width() >= 744) {
            updateNavbar()
        }
    })

    if ($(window).width() >= 744) {
        updateNavbar()
    }

    // Categories
    if ($(window).width() < 744) {

        $('.navbar__link').on('click', function(e) {
            e.preventDefault()
        })

        let navbarMenuHeight = $('.navbar__submenu').innerHeight()

        $('.navbar-has-submenu').on('click', function() {
            $(this).find('.navbar__submenu').slideToggle()
            $(this).toggleClass('active')
            $('#main').css('min-height', navbarMenuHeight + 'px')
        })
    }

    // Header search
    $('.button-search').on('click', function() {
        $('.header__search').addClass('active')
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
    })

    $('.search-close-btn').on('click', function() {
        $('.header__search').removeClass('active')
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
    })

    ///////////////////////////////////////////////////////
    /// ЗАКРЫВАЕМ ВСПЛЫВАШКИ ЕСЛИ ПРОМАХИВАЕМСЯ ПРИ КЛИКЕ
    ///////////////////////////////////////////////////////
    $('html').click(function(e) {
        if (!$(e.target).closest('.button-menu').length &&
            !$(e.target).closest('.header__menu').length &&
            !$(e.target).closest('.header__search').length &&
            !$(e.target).closest('.button-search').length &&
            !$(e.target).closest('.user__menu').length &&
            !$(e.target).closest('.button-acc').length &&
            !$(e.target).closest('.popup-auth__inner').length &&
            !$(e.target).closest('.product__banner-inner .button-style').length &&
            !$(e.target).closest('.popup-question__inner').length &&
            !$(e.target).closest('.filter-btn').length &&
            !$(e.target).closest('.filter.opened').length &&
            !$(e.target).closest('.top__select').length) {
            $('.header__search').removeClass('active')
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')
            $('.popup-auth').removeClass('open')
            $('.popup-question').removeClass('open')
            $('.select').slideUp();
            $('.top__select').removeClass('active');
        }
    })

    // Navbar buttons
    $('.small-button').on('click', function(e) {
        $('.small-button').find('.small-btn').removeClass('active');
        $(this).find('.small-btn').addClass('active');

        if (e.target.className == 'close-btn') {
            $('.small-button').find('.small-btn').removeClass('active');
        }
    })

    // FAQ
    $('.faq__block').on('click', function() {
        $(this).toggleClass('active')
        $(this).find('.faq__answer').slideToggle()
    })

    // CART
    $('.form__item .cart-input-checkbox input').on('change', function() {
        $(this).parent().parent().parent().find('.form__logo').removeClass('selected')
        $(this).parent().prev().addClass('selected')
    })

    // PRODUCT PAGE TABS
    if ($('.product__tabs').length) {
        let tabsSlide = new Swiper(".product__tabs", {
            slidesPerView: 'auto',
            freeMode: true
        })

        if ($(window).width() >= 744) {
            tabsSlide.destroy()
        }
    }

    $('.tab-nav').on('click', function() {
        $('.tab-nav, .tab-content').removeClass('active')
        $(this).addClass('active')

        $(`.tab-content[data-active="${$(this).attr('data-index')}"]`).addClass('active')
    })

});