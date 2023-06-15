
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});







/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();









/*!
jquery.countup.min.js
*/
!function(t){"use strict";t.fn.countUp=function(e){var a=t.extend({time:2e3,delay:10},e);return this.each(function(){var e=t(this),n=a,u=function(){e.data("counterupTo")||e.data("counterupTo",e.text());var t=parseInt(e.data("counter-time"))>0?parseInt(e.data("counter-time")):n.time,a=parseInt(e.data("counter-delay"))>0?parseInt(e.data("counter-delay")):n.delay,u=t/a,r=e.data("counterupTo"),o=[r],c=/[0-9]+,[0-9]+/.test(r);r=r.replace(/,/g,"");for(var d=(/^[0-9]+$/.test(r),/^[0-9]+\.[0-9]+$/.test(r)),s=d?(r.split(".")[1]||[]).length:0,i=u;i>=1;i--){var p=parseInt(Math.round(r/u*i));if(d&&(p=parseFloat(r/u*i).toFixed(s)),c)for(;/(\d+)(\d{3})/.test(p.toString());)p=p.toString().replace(/(\d+)(\d{3})/,"$1,$2");o.unshift(p)}e.data("counterup-nums",o),e.text("0");var f=function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),a):(delete e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))};e.data("counterup-func",f),setTimeout(e.data("counterup-func"),a)};e.waypoint(u,{offset:"100%",triggerOnce:!0})})}}(jQuery);








/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);













/*
 * jQuery liMarquee v 4.6
 *
 * Copyright 2013, Linnik Yura | LI MASS CODE | http://masscode.ru
 * http://masscode.ru/index.php/k2/item/44-limarquee
 * Free to use
 *
 * Last Update 20.11.2014
 */
(function ($) {
	var methods = {
		init: function (options) {
			var p = {
				direction: 'left', //Указывает направление движения содержимого контейнера (left | right | up | down)
				loop: -1, //Задает, сколько раз будет прокручиваться содержимое. "-1" для бесконечного воспроизведения движения
				scrolldelay: 0, //Величина задержки в миллисекундах между движениями
				scrollamount: 50, //Скорость движения контента (px/sec)
				circular: true, //Если "true" - строка непрерывная 
				drag: true, //Если "true" - включено перетаскивание строки
				runshort: true, //Если "true" - короткая строка тоже "бегает", "false" - стоит на месте
				hoverstop: true, //true - строка останавливается при наведении курсора мыши, false - строка не останавливается
				inverthover: false, //false - стандартное поведение. Если "true" - строка начинает движение только при наведении курсора
				xml: false //Путь к xml файлу с нужным текстом
			};
			if (options) {
				$.extend(p, options);
			}

			return this.each(function () {
				var enterEvent = 'mouseenter';
				var leaveEvent = 'mouseleave';
				if(p.inverthover){
					enterEvent = 'mouseleave';
					leaveEvent = 'mouseenter';	
				}
				
								
				var
					loop = p.loop,
					strWrap = $(this).addClass('str_wrap').data({scrollamount:p.scrollamount}),
					fMove = false;
					
				
				
				var strWrapStyle = strWrap.attr('style'); 
				
				if(strWrapStyle){
					var wrapStyleArr = strWrapStyle.split(';');
					var startHeight = false;
					for(var i=0; i < wrapStyleArr.length; i++){
						var str = $.trim(wrapStyleArr[i]);					
						var tested =  str.search(/^height/g);
						if(tested != -1){
							startHeight = parseFloat(strWrap.css('height'));
						}
					}
				}

				var code = function () {
					
					strWrap.off('mouseleave');
					strWrap.off('mouseenter');
					strWrap.off('mousemove');
					strWrap.off('mousedown');
					strWrap.off('mouseup');

					
					if(!$('.str_move',strWrap).length){
						strWrap.wrapInner($('<div>').addClass('str_move'));
					}
					
					var
					strMove = $('.str_move', strWrap).addClass('str_origin'),
					strMoveClone = strMove.clone().removeClass('str_origin').addClass('str_move_clone'),
					time = 0;

					if (!p.hoverstop) {
						strWrap.addClass('noStop');
					}

					var circCloneHor = function(){
						strMoveClone.clone().css({
							left:'100%',
							right:'auto',							
							width: strMove.width()
						}).appendTo(strMove);
						strMoveClone.css({
							right: '100%',
							left:'auto',
							width: strMove.width()
						}).appendTo(strMove);
					}
					
					var circCloneVert = function(){
						strMoveClone.clone().css({
							top: '100%',
							bottom:'auto',
							height: strMove.height()
						}).appendTo(strMove);
						strMoveClone.css({
							bottom: '100%',
							top:'auto',
							height:strMove.height()
						}).appendTo(strMove);
					}
					
					
					
					if (p.direction == 'left') {
						strWrap.height(strMove.outerHeight())
						if (strMove.width() > strWrap.width()) {
							var leftPos = -strMove.width();
							
							if (p.circular) {
								
								if (!p.xml) {
									circCloneHor()
									leftPos = -(strMove.width() + (strMove.width() - strWrap.width()));
								}
							}
							if (p.xml) {
								strMove.css({
									left:strWrap.width()	
								})
							}
							var
							strMoveLeft = strWrap.width(),
								k1 = 0,
								timeFunc1 = function () {
									var
									fullS = Math.abs(leftPos),
										time = (fullS / strWrap.data('scrollamount')) * 1000;
									if (parseFloat(strMove.css('left')) != 0) {
										fullS = (fullS + strWrap.width());
										time = (fullS - (strWrap.width() - parseFloat(strMove.css('left')))) / strWrap.data('scrollamount') * 1000;
									}
									return time;
								},
								moveFuncId1 = false,
								moveFunc1 = function () {
									if (loop != 0) {
										strMove.stop(true).animate({
											left: leftPos
										}, timeFunc1(), 'linear', function () {
											$(this).css({
												left: strWrap.width()
											});
											if (loop == -1) {
												moveFuncId1 = setTimeout(moveFunc1, p.scrolldelay);
											} else {
												loop--;
												moveFuncId1 = setTimeout(moveFunc1, p.scrolldelay);
											}
										});
									}
								};
								strWrap.data({
									moveId: moveFuncId1	,
									moveF : moveFunc1
								})
								if(!p.inverthover){
									moveFunc1();
								}
							
							if (p.hoverstop) {
								strWrap.on(enterEvent, function () {
									$(this).addClass('str_active');
									clearTimeout(moveFuncId1);
									strMove.stop(true);
								}).on(leaveEvent, function () {
									$(this).removeClass('str_active');
									$(this).off('mousemove');
									moveFunc1();
								});

								if (p.drag) {
									strWrap.on('mousedown', function (e) {
										if(p.inverthover){
											strMove.stop(true);
										}
										//drag
										var dragLeft;
										var dir = 1;
										var newX;
										var oldX = e.clientX;
										//drag
										
										strMoveLeft = strMove.position().left;
										k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
										
										
										
										$(this).on('mousemove', function (e) {
											fMove = true;
											
											//drag
											newX = e.clientX;
											if(newX > oldX){
												dir = 1
											}else{
												dir = -1
											}
											oldX = newX	
											dragLeft = k1 + (e.clientX - strWrap.offset().left);
											
											if (!p.circular) {
												if(dragLeft < -strMove.width() && dir < 0){
													dragLeft = strWrap.width();
													strMoveLeft = strMove.position().left;
													k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												if(dragLeft > strWrap.width() && dir > 0){
													dragLeft = -strMove.width();
													strMoveLeft = strMove.position().left;
													k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
											}else{
												if(dragLeft < -strMove.width() && dir < 0){
													dragLeft = 0;
													strMoveLeft = strMove.position().left;
													k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												if(dragLeft > 0 && dir > 0){
													dragLeft = -strMove.width();
													strMoveLeft = strMove.position().left;
													k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
	
											}
											
											
											strMove.stop(true).css({
												left: dragLeft
											});
											//drag
											
										
											
										}).on('mouseup', function () {
											$(this).off('mousemove');
											if(p.inverthover){
												strMove.trigger('mouseenter')
											}
											setTimeout(function () {                             
												fMove = false
											}, 50)
											
										});
										return false;
									})
									.on('click', function () {
										if (fMove) {
											return false
										}
									});
								} else {
									strWrap.addClass('no_drag');
								};
							}
						} else {
							if (p.runshort) {
								strMove.css({
									left: strWrap.width()
								});
								var
								strMoveLeft = strWrap.width(),
									k1 = 0,
									timeFunc = function () {
										time = (strMove.width() + strMove.position().left) / strWrap.data('scrollamount') * 1000;
										return time;
									};
								var moveFunc = function () {
									var leftPos = -strMove.width();
									strMove.animate({
										left: leftPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											left: strWrap.width()
										});
										if (loop == -1) {
											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										}
									});
								};
								strWrap.data({
									moveF : moveFunc
								})
								if(!p.inverthover){
									moveFunc();
								}
								if (p.hoverstop) {
									strWrap.on(enterEvent, function () {
										$(this).addClass('str_active');
										strMove.stop(true);
									}).on(leaveEvent, function () {
										$(this).removeClass('str_active');
										$(this).off('mousemove');
										moveFunc();
									});

									if (p.drag) {
										strWrap.on('mousedown', function (e) {
											if(p.inverthover){
												strMove.stop(true);
											}
											
											//drag
											var dragLeft;
											var dir = 1;
											var newX;
											var oldX = e.clientX;
											//drag
											
											strMoveLeft = strMove.position().left;
											k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
											$(this).on('mousemove', function (e) {
												fMove = true;
												
												
												//drag
												newX = e.clientX;
												if(newX > oldX){
													dir = 1
												}else{
													dir = -1
												}
												oldX = newX	
												dragLeft = k1 + (e.clientX - strWrap.offset().left);
												
												if(dragLeft < -strMove.width() && dir < 0){
													dragLeft = strWrap.width();
													strMoveLeft = strMove.position().left;
													k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												if(dragLeft > strWrap.width() && dir > 0){
													dragLeft = -strMove.width();
													strMoveLeft = strMove.position().left;
													k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												
												
												strMove.stop(true).css({
													left: dragLeft
												});
												
												
												
											}).on('mouseup', function () {
												if(p.inverthover){
													strMove.trigger('mouseenter')
												}
												$(this).off('mousemove');
												setTimeout(function () {                             
													fMove = false
												}, 50)
											});
											return false;
										})
										.on('click', function () {
											if (fMove) {
												return false
											}
										});
									} else {
										strWrap.addClass('no_drag');
									};
								}
							} else {
								strWrap.addClass('str_static');
							}
						};
					};
					if (p.direction == 'right') {
						strWrap.height(strMove.outerHeight())
						strWrap.addClass('str_right');
						strMove.css({
							left: -strMove.width(),
							right: 'auto'
						})
						
						if (strMove.width() > strWrap.width()) {
							var leftPos = strWrap.width();
							strMove.css({
								left: 0
							})
							if (p.circular) {
								if (!p.xml) {
									circCloneHor()
									//Определяем крайнюю точку
									leftPos = strMove.width();
								}
							}
							
							var
							k2 = 0;
							timeFunc = function () {
								var
								fullS = strWrap.width(), //крайняя точка
									time = (fullS / strWrap.data('scrollamount')) * 1000; //время
								if (parseFloat(strMove.css('left')) != 0) {
									fullS = (strMove.width() + strWrap.width());
									time = (fullS - (strMove.width() + parseFloat(strMove.css('left')))) / strWrap.data('scrollamount') * 1000;
								}
								return time;
							};
							var moveFunc = function () {

								if (loop != 0) {
									strMove.animate({
										left: leftPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											left: -strMove.width()
										});
										if (loop == -1) {
											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										};
									});
								};
							};
							strWrap.data({
								moveF : moveFunc
							})
					
							if(!p.inverthover){
								moveFunc();
							}
							if (p.hoverstop) {
								strWrap.on(enterEvent, function () {
									$(this).addClass('str_active');
									strMove.stop(true);
								}).on(leaveEvent, function () {
									$(this).removeClass('str_active');
									$(this).off('mousemove');
									moveFunc();
								});

								if (p.drag) {
									
									strWrap.on('mousedown', function (e) {
										if(p.inverthover){
											strMove.stop(true);
										}
										
										
										//drag
										var dragLeft;
										var dir = 1;
										var newX;
										var oldX = e.clientX;
										//drag
										
										strMoveLeft = strMove.position().left;
										k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
										$(this).on('mousemove', function (e) {
											
											fMove = true;
											
											//drag
											newX = e.clientX;
											if(newX > oldX){
												dir = 1
											}else{
												dir = -1
											}
											oldX = newX	
											dragLeft = k2 + (e.clientX - strWrap.offset().left);


											if (!p.circular) {

												if(dragLeft < -strMove.width() && dir < 0){
													dragLeft = strWrap.width();
													strMoveLeft = strMove.position().left;
													k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												if(dragLeft > strWrap.width() && dir > 0){
													dragLeft = -strMove.width();
													strMoveLeft = strMove.position().left;
													k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
											}else{
												if(dragLeft < -strMove.width() && dir < 0){
													dragLeft = 0;
													strMoveLeft = strMove.position().left;
													k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												if(dragLeft > 0 && dir > 0){
													dragLeft = -strMove.width();
													strMoveLeft = strMove.position().left;
													k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
	
											}
											
											strMove.stop(true).css({
												left: dragLeft
											});
											

										}).on('mouseup', function () {
											if(p.inverthover){
												strMove.trigger('mouseenter')
											}
											$(this).off('mousemove');
											setTimeout(function () {                             
												fMove = false
											}, 50)
										});
										return false;
									})
									.on('click', function () {
										if (fMove) {
											return false
										}
									});
								} else {
									strWrap.addClass('no_drag');
								};
							}
						} else {
														
							if (p.runshort) {
								
								var k2 = 0;
								var timeFunc = function () {
									time = (strWrap.width() - strMove.position().left) / strWrap.data('scrollamount') * 1000;
									return time;
								};
								var moveFunc = function () {
									var leftPos = strWrap.width();
									strMove.animate({
										left: leftPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											left: -strMove.width()
										});
										if (loop == -1) {
											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										};
									});
								};

								strWrap.data({
									moveF : moveFunc
								})

								if(!p.inverthover){
									moveFunc();
								}
								if (p.hoverstop) {
									strWrap.on(enterEvent, function () {
										$(this).addClass('str_active');
										strMove.stop(true);
									}).on(leaveEvent, function () {
										$(this).removeClass('str_active');
										$(this).off('mousemove');
										moveFunc();
									});

									if (p.drag) {
										strWrap.on('mousedown', function (e) {
											if(p.inverthover){
												strMove.stop(true);
											}
											
											//drag
											var dragLeft;
											var dir = 1;
											var newX;
											var oldX = e.clientX;
											//drag
											
											strMoveLeft = strMove.position().left;
											k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
											$(this).on('mousemove', function (e) {
												fMove = true;
												
												
												
												//drag
												newX = e.clientX;
												if(newX > oldX){
													dir = 1
												}else{
													dir = -1
												}
												oldX = newX	
												dragLeft = k2 + (e.clientX - strWrap.offset().left);
												
												if(dragLeft < -strMove.width() && dir < 0){
													dragLeft = strWrap.width();
													strMoveLeft = strMove.position().left;
													k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}
												if(dragLeft > strWrap.width() && dir > 0){
													dragLeft = -strMove.width();
													strMoveLeft = strMove.position().left;
													k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
												}

												strMove.stop(true).css({
													left:dragLeft
												});
												
											}).on('mouseup', function () {
												if(p.inverthover){
													strMove.trigger('mouseenter')
												}
												$(this).off('mousemove');
												setTimeout(function () {                             
													fMove = false
												}, 50)
											});
											return false;
										})
										.on('click', function () {
											if (fMove) {
												return false
											}
										});
									} else {
										strWrap.addClass('no_drag');
									};
								}
							} else {
								strWrap.addClass('str_static');
							}
						};
					};
					if (p.direction == 'up') {
						strWrap.addClass('str_vertical');
						
						if (strMove.height() > strWrap.height()) {
							var topPos = -strMove.height();
							if (p.circular) {
								if (!p.xml) {
									circCloneVert();									
									topPos = -(strMove.height() + (strMove.height() - strWrap.height()));
								}
							}
							if (p.xml) {
								strMove.css({
									top:strWrap.height()	
								})
							}
							var
							k2 = 0;
							timeFunc = function () {
								var
								fullS = Math.abs(topPos),
									time = (fullS / strWrap.data('scrollamount')) * 1000;
								if (parseFloat(strMove.css('top')) != 0) {
									fullS = (fullS + strWrap.height());
									time = (fullS - (strWrap.height() - parseFloat(strMove.css('top')))) / strWrap.data('scrollamount') * 1000;
								}
								
								return time;
							};
							var moveFunc = function () {
								if (loop != 0) {
									strMove.animate({
										top: topPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											top: strWrap.height()
										});
										if (loop == -1) {
											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										};
									});
								};
							};
							
							strWrap.data({
								moveF : moveFunc
							})
							
							if(!p.inverthover){
								moveFunc();
							}
							if (p.hoverstop) {
								strWrap.on(enterEvent, function () {
									$(this).addClass('str_active');
									strMove.stop(true);
								}).on(leaveEvent, function () {
									$(this).removeClass('str_active');
									$(this).off('mousemove');
									moveFunc();
								});

								if (p.drag) {
									strWrap.on('mousedown', function (e) {
										if(p.inverthover){
											strMove.stop(true);
										}
										
										//drag
										var dragTop;
										var dir = 1;
										var newY;
										var oldY = e.clientY;
										//drag
										
										
										strMoveTop = strMove.position().top;
										k2 = strMoveTop - (e.clientY - strWrap.offset().top);
										$(this).on('mousemove', function (e) {
											
											fMove = true;

											//drag
											newY = e.clientY;
											if(newY > oldY){
												dir = 1
											}else{
												if(newY < oldY){
													dir = -1
												}
											}
											oldY = newY	
											dragTop = k2 + e.clientY - strWrap.offset().top;


											if (!p.circular){
												if(dragTop < -strMove.height() && dir < 0){
													dragTop = strWrap.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
												if(dragTop > strWrap.height() && dir > 0){
													dragTop = -strMove.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}	
											}else{
												if(dragTop < -strMove.height() && dir < 0){
													dragTop = 0;
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
												if(dragTop > 0 && dir > 0){
													dragTop = -strMove.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
											}


											strMove.stop(true).css({
												top: dragTop
											});
											//drag
											
											
											
											
											
											
											
											
											
											
											
											
										}).on('mouseup', function () {
											if(p.inverthover){
												strMove.trigger('mouseenter')
											}
											$(this).off('mousemove');
											setTimeout(function () {                             
												fMove = false
											}, 50)
										});
										return false;
									})
									.on('click', function () {
										if (fMove) {
											return false
										}
									});
								} else {
									strWrap.addClass('no_drag');
								};
							}
						} else {
							if (p.runshort) {
								strMove.css({
									top: strWrap.height()
								});
								var k2 = 0;
								var timeFunc = function () {
									
									time = (strMove.height() + strMove.position().top) / strWrap.data('scrollamount') * 1000;
									
									return time;
								};
								var moveFunc = function () {
									var topPos = -strMove.height();
									strMove.animate({
										top: topPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											top: strWrap.height()
										});
										if (loop == -1) {
											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										};
									});
								};
								strWrap.data({
									moveF : moveFunc
								})
								if(!p.inverthover){
									moveFunc();
								}
								if (p.hoverstop) {
									strWrap.on(enterEvent, function () {
										$(this).addClass('str_active');
										strMove.stop(true);
									}).on(leaveEvent, function () {
										$(this).removeClass('str_active');
										$(this).off('mousemove');
										moveFunc();
									});

									if (p.drag) {
										strWrap.on('mousedown', function (e) {
											if(p.inverthover){
												strMove.stop(true);
											}
											
											//drag
											var dragTop;
											var dir = 1;
											var newY;
											var oldY = e.clientY;
											//drag
											
											strMoveTop = strMove.position().top;
											k2 = strMoveTop - (e.clientY - strWrap.offset().top);
											$(this).on('mousemove', function (e) {
												
												
												fMove = true;

												//drag
												newY = e.clientY;
												if(newY > oldY){
													dir = 1
												}else{
													if(newY < oldY){
														dir = -1
													}
												}
												oldY = newY	
												dragTop = k2 + e.clientY - strWrap.offset().top;
												
												if(dragTop < -strMove.height() && dir < 0){
													dragTop = strWrap.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
												if(dragTop > strWrap.height() && dir > 0){
													dragTop = -strMove.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}	
												//*drag
												
												strMove.stop(true).css({
													top: dragTop
												});
												
												
											}).on('mouseup', function () {
												if(p.inverthover){
													strMove.trigger('mouseenter')
												}
												$(this).off('mousemove');
												setTimeout(function () {                             
													fMove = false
												}, 50)
											});
											return false;
										})
										.on('click', function () {
											if (fMove) {
												return false
											}
										});
									} else {
										strWrap.addClass('no_drag');
									};
								}
							} else {
								strWrap.addClass('str_static');
							}
						};
					};
					if (p.direction == 'down') {

						strWrap.addClass('str_vertical').addClass('str_down');
						strMove.css({
							top: -strMove.height(),
							bottom: 'auto'
						})
						if (strMove.height() > strWrap.height()) {
							var topPos = strWrap.height();
							if (p.circular) {
								if (!p.xml) {
									circCloneVert();									
									topPos = strMove.height();
								}
							}
							if (p.xml) {
								strMove.css({
									top:-strMove.height()
								})
							}
							var
							k2 = 0;
							timeFunc = function () {
								var
								fullS = strWrap.height(), //крайняя точка
									time = (fullS / strWrap.data('scrollamount')) * 1000; //время

								if (parseFloat(strMove.css('top')) != 0) {
									fullS = (strMove.height() + strWrap.height());
									time = (fullS - (strMove.height() + parseFloat(strMove.css('top')))) / strWrap.data('scrollamount') * 1000;
								}
								return time;
							};
							var moveFunc = function () {

								if (loop != 0) {
									strMove.animate({
										top: topPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											top: -strMove.height()
										});
										if (loop == -1) {

											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										};
									});
								};
							};
							strWrap.data({
								moveF : moveFunc
							})
							if(!p.inverthover){
								moveFunc();
							}
							if (p.hoverstop) {
								strWrap.on(enterEvent, function () {
									$(this).addClass('str_active');
									strMove.stop(true);
								}).on(leaveEvent, function () {
									$(this).removeClass('str_active');
									$(this).off('mousemove');
									moveFunc();
								});

								if (p.drag) {
									strWrap.on('mousedown', function (e) {
										if(p.inverthover){
											strMove.stop(true);
										}
										
										//drag
										var dragTop;
										var dir = 1;
										var newY;
										var oldY = e.clientY;
										//drag
										
										
										strMoveTop = strMove.position().top;
										k2 = strMoveTop - (e.clientY - strWrap.offset().top);
										$(this).on('mousemove', function (e) {
											
											fMove = true;
											
											//drag
											newY = e.clientY;
											if(newY > oldY){
												dir = 1
											}else{
												if(newY < oldY){
													dir = -1
												}
											}
											oldY = newY	
											dragTop = k2 + e.clientY - strWrap.offset().top;


											if (!p.circular){
												if(dragTop < -strMove.height() && dir < 0){
													dragTop = strWrap.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
												if(dragTop > strWrap.height() && dir > 0){
													dragTop = -strMove.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}	
											}else{
												if(dragTop < -strMove.height() && dir < 0){
													dragTop = 0;
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
												if(dragTop > 0 && dir > 0){
													dragTop = -strMove.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
											}


											strMove.stop(true).css({
												top: dragTop
											});
											//drag



										}).on('mouseup', function () {
											if(p.inverthover){
												strMove.trigger('mouseenter')
											}
											$(this).off('mousemove');
											setTimeout(function () {                             
												fMove = false
											}, 50)
										});
										return false;
									})
									.on('click', function () {
										if (fMove) {
											return false
										}
									});
								} else {
									strWrap.addClass('no_drag');
								};
							}
						} else {
							if (p.runshort) {
								var k2 = 0;
								var timeFunc = function () {
									time = (strWrap.height() - strMove.position().top) / strWrap.data('scrollamount') * 1000;
									return time;
								};
								var moveFunc = function () {
									var topPos = strWrap.height();
									strMove.animate({
										top: topPos
									}, timeFunc(), 'linear', function () {
										$(this).css({
											top: -strMove.height()
										});
										if (loop == -1) {
											setTimeout(moveFunc, p.scrolldelay);
										} else {
											loop--;
											setTimeout(moveFunc, p.scrolldelay);
										};
									});
								};
								strWrap.data({
									moveF : moveFunc
								})
								if(!p.inverthover){
									moveFunc();
								}
								if (p.hoverstop) {
									strWrap.on(enterEvent, function () {
										$(this).addClass('str_active');
										strMove.stop(true);
									}).on(leaveEvent, function () {
										$(this).removeClass('str_active');
										$(this).off('mousemove');
										moveFunc();
									});

									if (p.drag) {
										strWrap.on('mousedown', function (e) {
											if(p.inverthover){
												strMove.stop(true);
											}
											
											//drag
											var dragTop;
											var dir = 1;
											var newY;
											var oldY = e.clientY;
											//drag
											
											strMoveTop = strMove.position().top;
											k2 = strMoveTop - (e.clientY - strWrap.offset().top);
											$(this).on('mousemove', function (e) {
												fMove = true;

												//drag
												newY = e.clientY;
												if(newY > oldY){
													dir = 1
												}else{
													if(newY < oldY){
														dir = -1
													}
												}
												oldY = newY	
												dragTop = k2 + e.clientY - strWrap.offset().top;
	
	
												if(dragTop < -strMove.height() && dir < 0){
													dragTop = strWrap.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}
												if(dragTop > strWrap.height() && dir > 0){
													dragTop = -strMove.height();
													strMoveTop = strMove.position().top;
													k2 = strMoveTop - (e.clientY - strWrap.offset().top);
												}	
												//*drag
												
												strMove.stop(true).css({
													top: dragTop
												});
												
												
												
												
												
												
												
												
											}).on('mouseup', function () {
												if(p.inverthover){
													strMove.trigger('mouseenter')
												}
												$(this).off('mousemove');
												setTimeout(function () {                             
													fMove = false
												}, 50)
											})
											return false;
										})
										.on('click', function () {
											if (fMove) {
												return false
											}
										});
									} else {
										strWrap.addClass('no_drag');
									};
								}
							} else {
								strWrap.addClass('str_static');
							}
						};
					};
					
					
					
					
				}
				if (p.xml) {
					$.ajax({
						url: p.xml,
						dataType: "xml",
						success: function (xml) {
							var xmlTextEl = $(xml).find('text');
							var xmlTextLength = xmlTextEl.length;
							for(var i = 0; i < xmlTextLength; i++){
								var xmlElActive = xmlTextEl.eq(i);
								var xmlElContent = xmlElActive.text();
								var xmlItemEl = $('<span>').text(xmlElContent).appendTo(strWrap);
								
								if(p.direction == 'left' || p.direction == 'right'){
									xmlItemEl.css({display:'inline-block',textAlign:'right'});	
									if(i > 0){
										xmlItemEl.css({width:strWrap.width()+xmlItemEl.width()});	
									}
								}
								if(p.direction == 'down' || p.direction == 'up'){
									xmlItemEl.css({display:'block',textAlign:'left'});	
										if(i > 0){
											xmlItemEl.css({paddingTop:strWrap.height()});
										}
								}
								
							}
							code();
						}
					});
				} else {
					code();
				}
				strWrap.data({
					ini:code,
					startheight: startHeight	
				})
				
				
				
				
			});
		},
		update: function () {
			var el = $(this);
			var str_origin = $('.str_origin',el);
			var str_move_clone = $('.str_move_clone',el);
			str_origin.stop(true);
			str_move_clone.remove();
			el.data('ini')();
		},
		destroy: function () {
			
			var el = $(this);
			var elMove = $('.str_move',el);
			var startHeight = el.data('startheight');
			
			$('.str_move_clone',el).remove();
			el.off('mouseenter');
			el.off('mousedown');
			el.off('mouseup');
			el.off('mouseleave');
			el.off('mousemove');
			el.removeClass('noStop').removeClass('str_vertical').removeClass('str_active').removeClass('no_drag').removeClass('str_static').removeClass('str_right').removeClass('str_down');
			
			var elStyle = el.attr('style'); 
			if(elStyle){
				var styleArr = elStyle.split(';');
				for(var i=0; i < styleArr.length; i++){
					var str = $.trim(styleArr[i]);
					var tested =  str.search(/^height/g);
					if(tested != -1){
						styleArr[i] = '';	
					}
				}
				var newArr = styleArr.join(';');
				var newStyle =  newArr.replace(/;+/g,';')
			
				if(newStyle == ';'){
					el.removeAttr('style');	
				}else{
					el.attr('style',newStyle);	
				}
				
				if(startHeight){
					el.css({height:startHeight})	
				}
			}
			elMove.stop(true);

			if(elMove.length){
				var context = elMove.html();
				elMove.remove();
				el.html(context);
			}
	
		},
		pause: function(){	
			var el = $(this);
			var elMove = $('.str_move',el);
			elMove.stop(true);
		}, 
		play: function(){
			var el = $(this);
			$(this).off('mousemove');
			el.data('moveF')();	
		}
		
	};
	$.fn.liMarquee = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Метод ' + method + ' в jQuery.liMarquee не существует');
		}
	};
})(jQuery);