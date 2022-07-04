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