var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

        navigation: {
        nextEl: ".swiper-button-nextt1",
        prevEl: ".swiper-button-prevv1",
      },

       breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      0: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30, // Espacio entre los slides
  },
}

    });