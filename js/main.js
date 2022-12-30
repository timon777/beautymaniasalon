$(document).ready(function () {
  $('.header__burger').click(function () {
    $(this).children().toggleClass('active')
    $('.header__item').toggleClass('active')
    return false
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__burger, .header__item').length) {
      $('.header__item').removeClass('active')
      $('.header__burger a').removeClass('active')
    }
    e.stopPropagation()
  })

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 10) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  })

  $('.service__slider').slick({
    slidesToShow: 3,
    arrows: false,
    loop: false,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          loop: true,
          infinite: true,
        },
      },
    ],
  })

  $('.price__header').click(function () {
    $(this).toggleClass('active')
    $(this).next().slideToggle(300)
  })

  $('.team__items').slick({
    slidesToShow: 3,
    arrows: false,
    loop: false,
    infinite: false,
    dots: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  $('.reviews__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    loop: false,
    infinite: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $('.work__items').slick({
    slidesToShow: 3,
    loop: false,
    infinite: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top_button').fadeIn(500)
    } else {
      $('.top_button').fadeOut(500)
    }
  })
  $('.top_button').click(function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 500)
  })

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    })
  }
  let options = { threshold: [0.5] }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.element-animation')
  for (let elm of elements) {
    observer.observe(elm)
  }

  $('.header__nav li a').on('click', function () {
    $('.header__item').removeClass('active')
    $('.header__burger a').removeClass('active')

    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 85,
      },
      500
    )

    return false
  })

  $('.footer__nav li a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 85,
      },
      500
    )

    return false
  })
})
