
	new Glider(document.querySelector('.glider_linea'), {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  draggable: true,
	  dots: '#dots',
	  arrows: {
	    prev: '.glider-prev',
	    next: '.glider-next'
	  },
	  responsive: [
	    {
	      // screens greater than >= 775px
	      breakpoint: 450,
	      settings: {
	        // Set to `auto` and provide item width to adjust to viewport
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        itemWidth: 150,
	        duration: 0.25
	      }
	    },{
	      // screens greater than >= 1024px
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 4,
	        itemWidth: 150,
	        duration: 0.25
	      }
	    }
	  ]
	});

	new Glider(document.querySelector('#glider'), {
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  draggable: true,
	  dots: '#dot',
	  arrows: {
	    prev: '.glider-prev',
	    next: '.glider-next'
	  },
	  responsive: [
	    {
	      // screens greater than >= 775px
	      breakpoint: 450,
	      settings: {
	        // Set to `auto` and provide item width to adjust to viewport
	        slidesToShow: 3,
	        slidesToScroll: 2,
	        itemWidth: 150,
	        duration: 0.25
	      }
	    },{
	      // screens greater than >= 1024px
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	        itemWidth: 150,
	        duration: 0.25
	      }
	    }
	  ]
	});

