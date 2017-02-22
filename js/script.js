$(document).ready(() => {
  // Set Variables
  const speed = 500        // fade speed
  const autoswitch = true   // auto slider options
  const autoswitch_speed = 4000  // auter slider speed

  // Add initial active class
  $('.slide').first().addClass('active')

  // Hide all slides
  $('.slide').hide()

  // Show first slide
  $('.active').show()

  // Switch to next slide
  const nextSlide = () => {
    $('.active').removeClass('active').addClass('oldActive')
    if ($('.oldActive').is(':last-child')) {
      $('.slide').first().addClass('active')
    } else {
      $('.oldActive').next().addClass('active')
    }
    $('.oldActive').removeClass('oldActive')
    $('.slide').fadeOut(speed)
    $('.active').fadeIn(speed)
  }

  // Switch to previous slide
  const prevSlide = () => {
    $('.active').removeClass('active').addClass('oldActive')
    if ($('.oldActive').is(':first-child')) {
      $('.slide').last().addClass('active')
    } else {
      $('.oldActive').prev().addClass('active')
    }
    $('.oldActive').removeClass('oldActive')
    $('.slide').fadeOut(speed)
    $('.active').fadeIn(speed)
  }

  // Next and previous handlers
  $('#next').on('click', nextSlide)
  $('#prev').on('click', prevSlide)

  // Autoplay slide handler
  if (autoswitch == true) {
    setInterval(nextSlide, autoswitch_speed)
  }
})
