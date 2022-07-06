// FILTER
$('.top__select').on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $('.select').slideUp()
    } else {
        $(this).addClass('active')
        $('.select').slideDown()
    }
})

$('.select-option').on('click', function() {
    $('.selected-option').text($(this).text())
})

$('.filter__label').on('click', function() {
    $(this).toggleClass('active')
    $(this).parent().find('.filter__item').slideToggle()
})

$('.filter-btn').on('click', function() {
    $('.filter').addClass('opened')
    $('body').addClass('overflow-hidden')
})

$('.filter-close').on('click', function() {
    $('.filter').removeClass('opened')
    $('body').removeClass('overflow-hidden')
})

$('.grid-style').on('click', function() {
    $(this).parent().find('.grid-style').removeClass('active')
    $(this).addClass('active')
})

$('.top__columns .grid-style').on('click', function() {
    if ($(this).hasClass('view-lists')) {
        localStorage.setItem('product-views', 'view-lists')
        $('.category__container').addClass('view-lists-active')
    } else {
        localStorage.removeItem('product-views', 'view-lists')
        $('.category__container').removeClass('view-lists-active')
    }
})

if (localStorage.getItem('product-views') == 'view-lists') {
    $('.category__container').addClass('view-lists-active')
    $('.top__columns .grid-style').removeClass('active')
    $('.top__columns .view-lists').addClass('active')
}

// COMPARE PAGE FILTER
$('#differences').on('click', function() {
    for (let i = 0; i < $('.compare__value[data-option]').length; i++) {

        let compares = $(`.compare__value[data-option=${i}]`);

        let uniq = [];

        compares.each(function(e) {
            uniq.push(compares[e].innerText)
            uniq = [... new Set(uniq)]
        })

        if (uniq.length == 1) {
            $(`.compare__value[data-option=${i}]`).slideToggle()
        }
    }
})