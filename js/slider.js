$('.carousel').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1190,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

      }
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

      }
  }]
});

