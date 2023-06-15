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
	    var k = 0,
	    	kl = $('.section3 .tab-tit span').length-1;
	    $('.section3 .tab-tit span:eq(0)').addClass('active')
	    var indexS3 = new Swiper('.section3 .tab-tit', {
	        speed: 500,
	        slidesPerView: 5,
	        spaceBetween: 70,
	        simulateTouch : false,
	        slideToClickedSlide: true,
	        breakpoints: {
	            1600: {
	                spaceBetween: 60,
	            },
	            768: {
	                slidesPerView: 5,
	                spaceBetween: 0,
		            // navigation: {
		            //     prevEl: $('.section3 .button-prev'),
		            //     nextEl: $('.section3 .button-next'),
		            // },
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
	    	k = $(this).index();
	        $(this).addClass('active').siblings().removeClass('active'), $('.section3 .tab-cont .child').eq(k).addClass('active').siblings().removeClass('active')
	    })
	    $('.section3 .button-prev').click(function(){
	    	k--;
	    	if(k < 0){
	    		k = 0;
	    		return false;
	    	}
	    	indexS3.slideTo(k, 500, false);
	    	$('.section3 .tab-tit span').eq(k).addClass('active').siblings().removeClass('active')
	    	$('.section3 .tab-cont .child').eq(k).addClass('active').siblings().removeClass('active')
	    })
	    $('.section3 .button-next').click(function(){
	    	k++;
	    	if(k > kl){
	    		k = kl;
	    		return false;
	    	}
	    	indexS3.slideTo(k, 500, false);
	    	$('.section3 .tab-tit span').eq(k).addClass('active').siblings().removeClass('active')
	    	$('.section3 .tab-cont .child').eq(k).addClass('active').siblings().removeClass('active')
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
				    // if(!mobile){
					    $('.section6 .tab-cont .child:eq(0) video')[0].play();
					    vtimer = setInterval(function(){
					    	v++;
					    	if(v > vl){
					    		v = 0;
					    	}
					    	vchangev();
					    }, 15000)
				    // }
	            }
	        }
	    });
	    $('.section6 .tab-tit span').click(function () {
	    	clearInterval(vtimer);
	    	vtimer = null;
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
	    function vchangev(){
	    	$('.section6 .tab-cont .child').each(function(){
	    		var vid = $(this).find('video')[0]
	    		vid.currentTime = 0;
	    	})
	        $('.section6 .tab-tit span').eq(v).addClass('active').siblings().removeClass('active')
	        $('.section6 .tab-cont .child').eq(v).addClass('active').siblings().removeClass('active');
	        $('.section6 .tab-cont .child').eq(v).siblings().find('video').trigger('pause');
	        // $('.section6 .tab-cont .child').eq(v).siblings().find('video').currentTime = 0;
	        $('.section6 .tab-cont .child').eq(v).find('video').trigger('play');
	    }
	    if(!mobile){
	        $('.mobile-office .section6 .button-prev').click(function(){
		    	clearInterval(vtimer);
		    	vtimer = null;
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
		    	clearInterval(vtimer);
		    	vtimer = null;
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
	    }
	}
	$('.mobile-office').length && mobileOffice();

})





