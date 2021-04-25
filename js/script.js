layui.use(['layer', 'element'], function(){
       

        // bootstrap-progress
        startProgress('bootstrap', $("#demo"));
        startProgress('bootstrap', $("#demo2"));
        startProgress('bootstrap', $("#demo3"));
        startProgress('bootstrap', $("#demo4"));

       


        

        function startProgress(type, filter, index) {
          // step-1
          let percentage = 50
          const progress = new Progress({
                      get: function () {
                        percentage = percentage + Math.random()*10|0;
                        if(percentage>90){
                            percentage = 90;
                        }
                        progress.update(percentage);
                      },
                      set: function (percentage) {
                        switch(type) {
                          case 'bootstrap':
                            filter.css('width', percentage+'%').text(percentage+'%');
                        }
                      }
                    });
          // step2 start
          progress.start();
        }
      })

$(document).ready(function(){
  // fakeloader
  window.FakeLoader.init({
  auto_hide: true
});
  // slick slider
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
     responsive: [
    {
      breakpoint: 1190,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    }, 
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
    });
      // owl
  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2,
            margin:5
        },
        992:{
            items:3
        }
    }
    });
});

// wow js
new WOW().init();