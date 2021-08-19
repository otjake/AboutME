(function ($) {
    "use strict";
	
	jQuery(document).ready(function($){
		
		// 01. START PRELOADER
		$(window).load(function() {
			// Animate loader off screen
			$(".preloader").fadeOut("slow");
		});
		// 01. END PRELOADER
		
		// 02. START MENU BACKGROUND CHANGE JS
		$(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
		// 02. END MENU BACKGROUND CHANGE JS
		
		// 03. START SMOTH SCROOL JS
		$('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 70
            }, 1200);
            e.preventDefault();
        });
		// 03. END SMOTH SCROOL JS
		
		// 04. START SCROOLSPY JS
		$('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });
		// 04. END SCROOLSPY JS
		
		// 05. START TOGGLE DROPDOWN JS
		$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
		// 05. END TOGGLE DROPDOWN JS
		
		// 06. START TYPED JS
		$(".typed").typed({
            stringsElement: $(".typed-strings"),
            loop: true,
            backDelay: 1500
        });
		// 06. END TYPED JS
		
		// 07. START PORTFOLIO MIXITUP JS
		jQuery('.grid').mixitup({
			targetSelector: '.mix'
		});
		// 07. END PORTFOLIO MIXITUP JS
		
		// 08. START VENOBOX JS
		$('.image-popup').venobox({
			numeratio: true,
			infinigall: true
		});
		// 08. END VENOBOX JS
		
		// 09. START COUNTDOWN JS
		$('.counter-feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 3000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		// 09. END COUNTDOWN JS
		
		// 10. START MAGNIFIC POPUP JS
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		// 10. END MAGNIFIC POPUP JS


// customer registration form
		$(".contact-form").submit(function (e) {
			e.preventDefault();
			var form=$(this);
			var data=$(form).serialize();
			var  msg=$(".msg");
			$.ajax({
				url:"contact-process.php",
				type:"POST",
				data:data,
				success:function (response) {
					var dataResult=JSON.parse(response);
					if(dataResult.error){
						$(msg).removeClass("alert alert-success").addClass("alert alert-danger");
						$(msg).text(dataResult.error);
					}else{
						$(msg).removeClass("alert alert-danger").addClass("alert alert-success");
						$(msg).text("Hi " + dataResult.name + " You have a job for me? " +
						"I will reach out via your email " + dataResult.email );
					}

				}
			})
		})
	});
	
	// 12. START WOW ANIMATION JS
	new WOW().init();
	// 12. END WOW ANIMATION JS
	
})(jQuery);