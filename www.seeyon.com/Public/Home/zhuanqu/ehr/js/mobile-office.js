window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='../../../bdimg.share.baidu.com/static/api/js/share6e53.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];


jQuery(document).ready(function($) {
	var PC = $(window).width() > 992,
		mobile = $(window).width() < 1025,
        winWidth = $(window).width(),
        winHeight = $(window).height();

	function mobileOffice(){
		$('.live-head-drop').click(function(){
			$(this).toggleClass('active');
			$('.live-anchor').toggle();
		})
		$('.live-anchor a').click(function(){
			if(!PC){
				$('.live-anchor').hide();
				$('.live-head-drop').removeClass('active');
			}
			$('html,body').animate({
	            scrollTop: $('.scroll-wrap .sec').eq($(this).index()).offset().top - 50
	        }, 300)
		})
		$(window).scroll(function(){
			if($(window).scrollTop() < $(window).height()/2){
				$('.live-anchor a').eq(0).addClass('active').siblings().removeClass('active');
			}
			$('.scroll-wrap .sec').each(function(){
				if($(window).scrollTop() > $(this).offset().top - $(window).height()/2){
			        $('.live-anchor a').eq($(this).index()).addClass('active').siblings().removeClass('active');
				}
			})
		})

		// section2
		if(mobile){
		    var indexS2 = new Swiper('.section2 .items', {
		        speed: 500,
		        slidesPerView: 2,
		        spaceBetween: 20,
	            pagination: {
	                el: '.section2 .swiper-pagination',
	                clickable: true,
	            },
		        breakpoints: {
		            768: {
		                slidesPerView: 1,
		            }
		        },
		    });
		}

	    // section3
	    $('.section3 .tab-tit span:eq(0)').addClass('active')
	    var indexS3 = new Swiper('.section3 .tab-tit', {
	        speed: 500,
	        slidesPerView: 5,
	        spaceBetween: 100,
	        simulateTouch : false,
	        slideToClickedSlide: true,
	        breakpoints: {
	            1600: {
	                spaceBetween: 60,
	            },
	            768: {
	                slidesPerView: 2,
	                spaceBetween: 0,
	            }
	        },
	        on: {
	            transitionStart: function () {},
	            init: function () {
	                this.emit('transitionStart');
	            }
	        }
	    });
	    $('.section3 .tab-tit span').click(function () {
	        $(this).addClass('active').siblings().removeClass('active'), $('.section3 .tab-cont .child').eq($(this).index()).addClass('active').siblings().removeClass('active')
	    })

	    // section6
	    var v = 0,
		    vl = $('.section6 .tab-tit span').length-1,
	    	vtimer;
	    $('.section6 .tab-tit span:eq(0)').addClass('active')
	    var indexS6 = new Swiper('.section6 .tab-tit', {
	        speed: 500,
	        slidesPerView: 'auto',
	        simulateTouch : false,
	        slideToClickedSlide: true,
	        breakpoints: {
	            768: {
	                slidesPerView: 2,
	                allowTouchMove: true,
	            }
	        },
	        on: {
	            init: function () {
				    if(!mobile){
					    $('.section6 .tab-cont .child:eq(0) video')[0].play();
					    vtimer = setInterval(function(){
					    	v++;
					    	if(v > vl){
					    		v = 0;
					    	}
					    	vchangev();
					    }, 15000)
				    }
	            }
	        }
	    });
	    if(!mobile){
		    $('.section6 .tab-tit span').click(function () {
		    	clearInterval(vtimer)
		    	v = $(this).index();
		    	vchangev();
			    vtimer = setInterval(function(){
			    	v++;
			    	if(v > vl){
			    		v = 0;
			    	}
			    	vchangev();
			    }, 15000)
		    })
	        $('.mobile-office .section6 .button-prev').click(function(){
	            v--;
	            if(v < 0){
	                v = 0;
	                return false;
	            }
		    	vchangev();
			    vtimer = setInterval(function(){
			    	v++;
			    	if(v > vl){
			    		v = 0;
			    	}
			    	vchangev();
			    }, 15000)
	        })
	        $('.mobile-office .section6 .button-next').click(function(){
	            v++;
	            if(v > vl){
	                v = vl;
	                return false;
	            }
		    	vchangev();
			    vtimer = setInterval(function(){
			    	v++;
			    	if(v > vl){
			    		v = 0;
			    	}
			    	vchangev();
			    }, 15000)
	        })
		    function vchangev(){
		        $('.section6 .tab-tit span').eq(v).addClass('active').siblings().removeClass('active')
		        $('.section6 .tab-cont .child').eq(v).addClass('active').siblings().removeClass('active');
		        $('.section6 .tab-cont .child').siblings().eq(v).find('video')[0].pause();
		        $('.section6 .tab-cont .child').siblings().eq(v).find('video')[0].currentTime = 0;
		        $('.section6 .tab-cont .child').eq(v).find('video')[0].play();
		    }
	    }else{
		    $('.section6 .tab-tit span').click(function () {
		    	v = $(this).index();
		    	$('.section6 .tab-tit span').eq(v).addClass('active').siblings().removeClass('active')
		        $('.section6 .tab-cont .child').eq(v).addClass('active').siblings().removeClass('active');
		    })
	    }


	}
	$('.mobile-office').length && mobileOffice();

})





