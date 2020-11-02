//global $, jQuery, alert	=> /*  */

$(document).ready(function () {  "use strict";
		    
		 $('.carousel').carousel({
		            
		        interval: 5000
		  });
		        
});


//Show Color Option Div When Click On The Gear

$(".gear-check").click(function () { "use strict";

        $(".color-option").fadeToggle();	// show(), toggle(), fadeToggle()

		//Change Theme Color On Click

		var colorLi = $(".color-option ul li");	// I made Caching because I will use it more than one

		colorLi
			.eq(0).css("backgroundColor", "#E41B17").end()
			.eq(1).css("backgroundColor", "#E426D5").end()
			.eq(2).css("backgroundColor", "#009AFF").end()
			.eq(3).css("backgroundColor", "#FFD500");


        colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

				    //console.log($(this).attr("data-value")) 
    	  });
});

	//Loading Screen....

$(window).load(function () { "use strict";

		// fadeOut == hide it in 1000 milli second

		$(".loading-overlay .sk-chase").fadeOut(1000,

		function () {

			//Show The Scroll

			$("body").css("overflow", "auto");


			$(this).parent().fadeOut(1000,

				function () {
				    $(this).remove();
				});
		});

});


			// Caching The Scroll Top Element

var scrollButton = $("#scroll-up");

$(window).scroll(function () { "use strict";
	  //console.log( $(this).scrollTop() );

      if ($(this).scrollTop() >= 700) {

        scrollButton.show();

    } else {

        scrollButton.hide();
    }

});


//Click On The Button To Scroll Top
scrollButton.click(function () { "use strict";
				//600 is speed to scroll-up
		$("html, body").animate({scrollTop: 0}, 600);
});

