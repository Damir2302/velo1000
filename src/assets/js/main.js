$(document).ready(function() {

    // Header menu
    $('.button-menu').on('click', function() {
        $('.header__right').toggleClass('mobile-menu')
    })

    $('.menu__mobile-item span').on('click', function() {
        $('.submenu__mobile').slideToggle()
    })

    // Menu
    const $nav = $('.header__menu');
    const $btn = $('.hidden-list span');
    const $hList = $('.hidden-list ul');
    const $vList = $('.header__menu-list');
    const breaks = [];

    function updateNav() {
        let availableSpace = $nav.width() - $btn.width() - 30;
        console.log(availableSpace)
        if ($vList.width() > availableSpace) {
            breaks.push($vList.width());
            $vList.children().last().prependTo($hList);
        } else {
            if (availableSpace > breaks[breaks.length - 1]) {
              $hList.children().first().appendTo($vList);
              breaks.pop();
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

});