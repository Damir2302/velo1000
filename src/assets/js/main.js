$(document).ready(function() {

    // Header menu
    $('.button-menu').on('click', function() {
        $('.header__right').toggleClass('mobile-menu')
        $('.submenu__mobile').slideUp()
        $('body').toggleClass('overflow-hidden')
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
            availableSpace = $navbar.width() - $navbarBtn.width() - 65; //85
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

        $('.navbar-has-submenu').on('click', function() {
            $(this).find('.navbar__submenu').slideToggle()
            $(this).toggleClass('active')
        })
    }

});