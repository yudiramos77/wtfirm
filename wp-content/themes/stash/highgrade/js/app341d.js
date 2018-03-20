(function($) { 
	"use strict";

	// PHP vars
		// home_url
		// template_directory_uri
		// retina_logo_url
		// menu_style
		// is_front_page
		// metro_asprect_ratio
	// available as php_variables.object_name
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var animated = jQuery('.wpb_appear');
		jQuery('html').find(animated).each(function () { 
			jQuery(this).removeClass('wpb_animate_when_almost_visible').removeClass('wpb_appear').removeClass('wpb_start_animation').removeClass('wpb_left-to-right').removeClass('wpb_right-to-left');
		});
	}
	
	$('a').removeAttr('title');
		
	// retina logo or regular?
	if (window.devicePixelRatio > 1 && php_variables.retina_logo_url !== "" ) {
		jQuery(".logo").attr("src", php_variables.retina_logo_url);
	}
	
	// static megafooter
	if( php_variables.static_mega_footer == "true" ) {
		var blaheight = jQuery('.hgr_megafooter section').height();		
		//jQuery('.hgr_megafooter').parent().find('.pagesection').last().css("margin-bottom", blaheight);
		jQuery('#hgr_sections').css("margin-bottom", blaheight);
		jQuery('.hgr_megafooter section').addClass("static_mega_footer");
	}
	
	// If menu has sub-menu, submenu appears on hover top menu
	$('ul.main_navbar li.dropdown, ul.main_navbar li.dropdown-submenu, ul.fixed_navbar li.dropdown, ul.fixed_navbar li.dropdown-submenu').on( "mouseenter", function(){
		$(this).find(' > .dropdown-menu').stop(true, true).delay(100).fadeIn();
	});
	$('ul.main_navbar li.dropdown, ul.main_navbar li.dropdown-submenu, ul.fixed_navbar li.dropdown, ul.fixed_navbar li.dropdown-submenu').on( "mouseleave", function(){
		$(this).find(' > .dropdown-menu').stop(true, true).delay(50).fadeOut();
	});
	
	
	//open/close primary mobile navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('a.cd-primary-nav-trigger').removeClass('mobilemenuopen');
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('a.cd-primary-nav-trigger').addClass('mobilemenuopen');
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
		return false;
	});
	
	// Onepage navigation, front page or blog section
	if(php_variables.is_front_page ==='true') {
		jQuery("ul.main_navbar li.menu-item a[href*='#']").on( "click", function() {
			jQuery("#hgr-navbar-collapse-1").removeClass("in");
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
			  var $target = jQuery(this.hash);
			  var $selector = $target.selector;
			  $target = $target.length && $target || jQuery("[name=' + this.hash.slice(1) +']");
			  if ($target.length && $selector.length > 1) {
				var targetOffset = $target.offset().top;
				jQuery('html,body')
				.animate({scrollTop: targetOffset}, 1500);
			   return false;
			  }
			} 
		  });
		  
		jQuery("ul.main_navbar a:not(ul.main_navbar li.menu-item a[href*='#'], a.fssearch)").on(  "click", function(){
			var currentItem = jQuery(this).attr('href');
			window.location = currentItem;
			return false;
		});
		
		// Scroll nav outside the menu, ex. buttons
		jQuery("a[href*='#']:not(ul.main_navbar li.menu-item a[href*='#'], a.back-to-top, a.close-btn, a.fssearch, a.cd-primary-nav-trigger, a.vc_pagination-trigger, .hgracc-title a, .vc_tta-container a)").on(  "click", function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
			  var $target = jQuery(this.hash);
			  var $selector = $target.selector;
			  $target = $target.length && $target
			  || jQuery('[name=' + this.hash.slice(1) +']');
			  //console.log($selector);
			  if ($target.length && $selector.length > 1) {
				var targetOffset = $target.offset().top;
				jQuery('html,body')
				.animate({scrollTop: targetOffset}, 800);
			   return false;
			  }
			} 
			return false;
		});
		
		
	} else {
		//console.log('is_NOT_front_page');
		jQuery("ul.main_navbar li a, .blog_widget ul li.menu-item a, #fixedNavUl li a").on( "click", function(){
			var currentItem = jQuery(this).attr('href');
			if(currentItem.charAt(0) == '#' && currentItem.length > 1) {
				var target =  php_variables.home_url + currentItem;
				window.location = target;
				return false;
			} else {
				window.location = currentItem;
				return false;
			}
		});
	}

	
	var windowWidth = jQuery(window).width(); //retrieve current window width
	var windowHeight = jQuery(window).height(); //retrieve current window height
	
	$(window).on("resize", function () {
		if( jQuery(window).width() < 1280 ){
		  jQuery('body').addClass('fakeMobile');
	  }
		if( jQuery(window).width() > 1280 ){
		  jQuery('body').removeClass('fakeMobile');
	  }
	}).resize();
	
	
	jQuery('.hgrHeaderImage img').width(windowWidth).height(windowHeight);
	jQuery('.blogPosts').css("min-height",windowHeight);
	
	jQuery("#pagesContent").css("margin-top", windowHeight);
		
	jQuery(window).on( "resize", function() {
		windowWidth = jQuery(window).width(); //retrieve current window width
		windowHeight = jQuery(window).height(); //retrieve current window height
		jQuery('.hgrHeaderImage img').width(windowWidth).height(windowHeight);
		jQuery('.blogPosts').css("min-height",windowHeight);
	});
	
	
	jQuery('.iconeffect').on( "mouseenter", function(){
		jQuery(this).find(".icon").addClass("hoveredIcon");
	});
	jQuery('.iconeffect').on( "mouseleave", function(){
		jQuery(this).find(".icon").removeClass("hoveredIcon");
	});
	
	
	
	jQuery(".readTheBlogBtn").click(function() {
		jQuery('html, body').animate({
			scrollTop: jQuery("#blogPosts").offset().top
		}, 1000);
	});

	
	// Back to top button
		// Display the button
		jQuery(window).on( "scroll", function() {
			if (jQuery(window).scrollTop() > jQuery(window).height()) { 
				jQuery('.back-to-top').fadeIn(500);
			}
			if (jQuery(window).scrollTop() < jQuery(window).height()) {
				jQuery('.back-to-top').fadeOut(500);
			}
		});
		// Scroll to top when clicked
		$('.back-to-top').on( "click", function(event) {
			event.preventDefault();
			$('html, body').velocity("scroll", { duration: 1200, easing: [1,0,.03,1.01], mobileHA: true, queue: false }); 
			// Docs: http://cubic-bezier.com
			// http://julian.com/research/velocity/#scroll
			return false;
		});
	
	function splitColumns() {
		var winWidth = jQuery(window).width(), 
			columnNumb = 1;			
		if (winWidth > 1024) {
			columnNumb = 4;
		} else if (winWidth > 900) {
			columnNumb = 3;
		} else if (winWidth > 479) {
			columnNumb = 2;
		} else if (winWidth < 479) {
			columnNumb = 1;
		}
		return columnNumb;
	}
	
	function setColumns() { 
		var container = jQuery('#portfolio-items');
		var winWidth = jQuery(window).width(), 
			columnNumb = splitColumns(), 
			postWidth = Math.floor(winWidth / columnNumb);
		
		container.find('.portfolio-item').each(function () { 
			jQuery(this).css( { 
				width : postWidth + 'px' 
			});
		});
	}
	
	function setProjects() { 
		setColumns();
		container.isotope('layout');
	}
	
	
	if(jQuery('#portfolio-items').length != 0) {
			// Portfolio Isotope
			var container = jQuery('#portfolio-items');
			container.isotope({
				animationEngine : 'jquery',
				filter:"*",
				animationOptions: {
					duration: 500,
					queue: false
				},
				layoutMode: 'fitRows'
			});	
			jQuery('#filters a').on( "click", function(){
				jQuery('#filters li').removeClass('active');
				jQuery(this).parent().addClass('active');
				var selector = jQuery(this).attr('data-filter');
				container.isotope({ filter: selector });
				setProjects();		
				return false;
			});
			
			container.imagesLoaded(function () { 
				setProjects();	
			});
			jQuery(window).on('resize', function () { 
				setProjects();			
			});
			setProjects();
	}
	
		
		// closes opened portfolio item
		jQuery("#itemcontainer-controller").on("click",function(){
			parent.history.back();
        	return false;
		});
		
	// properly render parallax images on mobile
	jQuery(window).on( "resize", function() {
		jQuery('.parallax').each(function(){
			jQuery(this).css('background-position','center');
		});
	});
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		hgr_forMobile();
	}

	function hgr_forMobile(){
		jQuery('.parallax').each(function(){
			jQuery(this).css({"background-attachment":"scroll"});
		});
	}
	
	jQuery('.venoboxDiv').find('a').attr('data-lity','');
	
	//jQuery('.venoboxvid').venobox();
	
	
	
	/* WOOCOMMERCE */
	jQuery('.woocommerce .products li.product').on( "mouseenter", function(){
		jQuery(this).find(".add_to_cart_button").css("visibility", "visible");
	});
	jQuery('.woocommerce .products li.product').on( "mouseleave", function(){
		jQuery(this).find(".add_to_cart_button").css("visibility", "hidden");
	});
	
	jQuery(".stash_preloadermask .loading").delay(700).fadeOut("slow"); 
	jQuery(".stash_preloadermask").delay(1200).fadeOut("slow");
	
	
	
	
	
	/* 
	* Full Screen Search
	*/
	// lock scroll position, but retain settings for later
	var scrollPosition = [
		self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	
	
	$('a.fssearch, a.mobileFsSearch').on("click",function(event){
		event.preventDefault();
		
		var html = $('html'); // it would make more sense to apply this to body, but IE7 won't have that
		html.data('scroll-position', scrollPosition);
		html.data('previous-overflow', html.css('overflow'));
		html.css('overflow', 'hidden');
	  
		$('#fssearch_container').fadeIn('fast').removeClass('hidden').addClass('is-visible');
		$('.fssearch_input').focus();
		
		return false;
	});
	
	//close the full screen search modal
	$('#fssearch_container .close-btn').click(function(event) {
		event.preventDefault();
		$('#fssearch_container').fadeOut('fast').removeClass('is-visible').addClass('hidden');
		$('.fssearch_input').attr('value','');
		// un-lock scroll position
		var html = $('html');
		var scrollPosition = html.data('scroll-position');
		html.css('overflow', html.data('previous-overflow'));
	});
	
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
			// un-lock scroll position
			var html = $('html');
			var scrollPosition = html.data('scroll-position');
			html.css('overflow', html.data('previous-overflow'));
			$('#fssearch_container').fadeOut('fast').removeClass('is-visible').addClass('hidden');
			$('.fssearch_input').attr('value','');
	    }
    });
	
	
	/*
	*  Blog grid
	*/
	function doTheBlog(){
		$('#blogGridItems').isotope({
			itemSelector: '.blogGridItem',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer',
				horizontalOrder: true,
			}
		});
	}
	$(window).on( "resize", function() {
		doTheBlog();
	});
	$(document).ready(function() {
		doTheBlog();
	});
	
	
	
	/*
	*  Blog metro
	*/
	function doTheMetro(){
		$('#metroGridItems').isotope({
			itemSelector: '.metroGridItem',
			percentPosition: true,
			layoutMode: 'fitRows'
		});
	}
	function columnEqualHeight(){
		var maxHeight = $('.metro-sizer').width();
		
		
		// get the paddings and margins
		var paddT = $('.metroGridItem .postEntry').innerWidth() - $('.metroGridItem .postEntry').width();
		var margT = $('.metroGridItem .postEntry').outerWidth(true) - $('.metroGridItem .postEntry').outerWidth();
		
		if(php_variables.metro_asprect_ratio == '3x4'){
			$('.metroGridItem .postEntry').height(maxHeight+paddT);
		} 
		else if (php_variables.metro_asprect_ratio == '4x3') {
			$('.metroGridItem .postEntry').height(maxHeight-paddT-paddT-margT);
		} 
		else {
			$('.metroGridItem .postEntry').height(maxHeight-paddT);
		}
		doTheMetro();
	}
	$(window).on( "resize", function() {
		columnEqualHeight();
		doTheMetro();
	});
	$(document).ready(function() {
		columnEqualHeight();
		doTheMetro();
	});
	
	
	// Megamenus move to base div
	$('#hgr_top_navbar_container .megamenu').each(function(){
		jQuery(this).detach().prependTo('#megamenus_wrapper');
	});

	

})(jQuery);