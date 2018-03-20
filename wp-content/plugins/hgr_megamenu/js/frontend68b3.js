/**
 * HGR MegaHeader: front end JS
 */
( function( $ ) {
	"use strict";
	
	
	(function megamenu(){

		$('li.hasmegamenu').each(function(){
			var $this = $(this);
			var megamenuid = $this.attr('data-megamenuid');
			var megamenu = '.megamenuid-' + megamenuid;
			
			
			// Mouse over menu element
			$this.on("mouseenter tap", function() {
				console.log('mouseenter menu item');
				$this.addClass('menu-hovered');
				$(megamenu).addClass('megamenu-displayed');
				
				if( $(megamenu).hasClass("megamenu-displayed") ){
					$(megamenu).fadeIn("slow");
				}
			});
			
			$this.on("mouseleave", function() {
				console.log('mouseleave menu item');
				
				$this.removeClass('menu-hovered');
				$(megamenu).removeClass('megamenu-displayed');
			});
			
		});
		
	})();
	
	
	
	
	/*//set hover delay for mega menu item in case mouse is hovering on other menu items
	(function hoverdelay(){
		(jQuery)('li.hasmegamenu').each(function(){

			var $this = (jQuery)(this),
				menuTimeoutShow,
				menuTimeoutHide;
			
			var megamenuid = $this.attr('data-megamenuid');
			var megamenu = '.megamenuid-' + megamenuid;
			
			// Mouse over menu item
			$this.on("mouseenter tap", function(e) {
				if(e.type == "tap") e.stopPropagation();
				clearTimeout(menuTimeoutShow);
				clearTimeout(menuTimeoutHide);
				
				
				
				//
				console.log('mouse over menu 1');
				console.log('megamenu ' + megamenu + ' not touched yet 2');
				
				menuTimeoutShow = setTimeout(function() {
					$this.addClass("my-megamenu-on");
					
					if( $this.hasClass("my-megamenu-on") ){
						$(megamenu).stop().css("display", "block");
					}
					
				}, 300);
				
				$(megamenu).on("mouseenter tap", function() {
					$(megamenu).addClass("megamenu-hovered");
					//
					console.log('mouse over megamenu 3 ' + megamenu);
				});
			});
			
			
			// Mouse exit menu item
			$this.on("mouseleave", function(e) {
				clearTimeout(menuTimeoutShow);
				clearTimeout(menuTimeoutHide);
				
				var megamenuid = $this.attr('data-megamenuid');
				var megamenu = '.megamenuid-' + megamenuid;
				
				// Daca nu facem hover pe megamenu
				if( !$(megamenu).hasClass("megamenu-hovered") ){
					$this.removeClass("my-megamenu-on");
					
					menuTimeoutHide = setTimeout(function() {
					if(!$this.hasClass("my-megamenu-on") ){
							$(megamenu).stop().css("display", "none");
						}
					}, 300);
				} else
				
				// Daca facem hover pe megamenu
				if( $(megamenu).hasClass("megamenu-hovered") ){
					
					$(megamenu).on("mouseenter tap", function() {
						$(megamenu).addClass("megamenu-hovered");
						//
						console.log('mouse over megamenu 4 ' + megamenu);
					});
					
					$this.on("mouseleave", function(e) {
						clearTimeout(menuTimeoutShow);
						clearTimeout(menuTimeoutHide);
						$(megamenu).stop().css("display", "none");
					});
				}
				
				
				
			});
		});	
	})();//end hippo menu hover function*/
	
	
	
	
	/*$("li.hasmegamenu")
	  .mouseenter(function() {
		var megamenuid = $( this ).attr('data-megamenuid');
		var megamenu = '.megamenuid-' + megamenuid;
		$( "#megamenus_wrapper" ).find( megamenu ).fadeToggle( "fast", "swing" );
		// if map exists
		if (typeof initialize == 'function') { 
		  initialize(); 
		}
	  })
	  .mouseleave(function() {
		var megamenuid = $( this ).attr('data-megamenuid');
		var megamenu = '.megamenuid-' + megamenuid;
		
		$( "#megamenus_wrapper" )
		  .mouseover(function() {
		  })
		  .mouseout(function() {
			$( "#megamenus_wrapper" ).find( megamenu ).fadeToggle( "fast", "swing" );
		  });
		
	  });*/
	
	
	/*$("li.hasmegamenu").mouseenter(function(){
		console.log('mouse over menu item');
		$(this).addClass('hover');
	}).mouseleave(function(){
		console.log('mouse leave menu item');
		
		var megamenuid = $( this ).attr('data-megamenuid');
		var megamenu = '.megamenuid-' + megamenuid;
		
		if($(megamenu).is(":hover")) {
			console.log('mouse over mega menu');
		}
		else {
			console.log('mouse NOT over mega menu');
		}
	
	});*/
	
	

	
	
	
	
	/*$("li.hasmegamenu").mouseenter(function(){
    	clearTimeout($(this).data('timeoutId'));
		var megamenuid = $( this ).attr('data-megamenuid');
		var megamenu = '.megamenuid-' + megamenuid;
    	$( "#megamenus_wrapper" ).find(megamenu).fadeIn("slow");
	}).mouseleave(function(){
		var megamenuid = $( this ).attr('data-megamenuid');
		var megamenu = '.megamenuid-' + megamenuid;
		
		
		
		setInterval(function(){
			var $megamenuid = $( this ).attr('data-megamenuid');
			var $megamenu = '.megamenuid-' + $megamenuid;
			
			if($megamenu.is(":hover")) {
			   //$sample.css("background", "yellow");
			}
			else {
			   var someElement = $(this),
				timeoutId = setTimeout(function(){
					$( "#megamenus_wrapper" ).find(megamenu).fadeOut("slow");
				}, 650);
			}
		}, 400);
		
		
		
		
		$(megamenu).mouseenter(function(){
			clearTimeout($(this).data('timeoutId'));
			var megamenuid = $( this ).attr('data-megamenuid');
			var megamenu = '.megamenuid-' + megamenuid;
			$( "#megamenus_wrapper" ).find(megamenu).fadeIn("slow");
		}).mouseleave(function(){
			$( this ).attr('data-megamenuid');
			var megamenu = '.megamenuid-' + megamenuid;
			var someElement = $(this),
			timeoutId = setTimeout(function(){
				$( "#megamenus_wrapper" ).find(megamenu).fadeOut("slow");
			}, 650);
			//set the timeoutId, allowing us to clear this trigger if the mouse comes back over
			someElement.data('timeoutId', timeoutId); 
		});
		
		
    	var someElement = $(this),
        timeoutId = setTimeout(function(){
            $( "#megamenus_wrapper" ).find(megamenu).fadeOut("slow");
        }, 650);
    	//set the timeoutId, allowing us to clear this trigger if the mouse comes back over
    	someElement.data('timeoutId', timeoutId); 
	});*/
		
} )( jQuery );