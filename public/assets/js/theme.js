// JavaScript Document

 AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });
	  
	  
	  jQuery('.featured-owl').owlCarousel({
                center: true,
                items:1,
                loop:true,
                margin:0,
                nav:true,
                  navText: ['<span><img src="assets/img/arrow-left.png" width="30" /></span>','<span><img src="assets/img/arrow-right.png" width="30" /></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
               
            });
			
			
			 jQuery('.relted-owl').owlCarousel({
                items:1,
                loop:true,
                margin:20,
                nav:true,
				dots:false,
                  navText: ['<span><img src="assets/img/arrowleftne.jpg" width="15" /></span>','<span><img src="assets/img/arrowright.jpg" width="30" /></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
               
            });



jQuery('.service-home-owl').owlCarousel({
                items:1,
                loop:true,
                margin:15,
                dots: false,
                nav:true,
navText: ['<span><img src="assets/img/arrowleft.png" width="30" /></span>','<span><img src="assets/img/arrowright.png" width="30" /></span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
               
            });


jQuery('.partners-home-owl').owlCarousel({
                items:1,
                loop:true,
                margin:30,
                nav:false,
navText: ['<span><img src="assets/img/arrowleft.png" width="30" /></span>','<span><img src="assets/img/arrowright.png" width="30" /></span>'],
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
               
            });
	  


    
document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const headerfixed = document.getElementsByClassName('headerfixed');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100){
      headerfixed[0].classList.add('navbar-dark');
    }
    else{
      headerfixed[0].classList.remove('navbar-dark');
    }
  });
}


// (c) 2020-2022 Written by Simon Köhler in Panama
// github.com/koehlersimon
// simon-koehler.com

// No JavaScript needed for this example anymore!

document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classList.contains('hamburger-toggle')){
    e.target.children[0].classList.toggle('active');
  }
})

