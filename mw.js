//1. general modal
$(".info").modaal({
	overlay_close:true,

	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
});
	
//3. image modal
$(".gallery").modaal({
	type: 'image',
	overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
});

//4. video modal
$(".video-open").modaal({
	type: 'video',
	overlay_close:true,
	background: '#28BFE7',
	overlay_opacity:0.8, 
	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
});
	
//5. iframe modal
$(".iframe-open").modaal({
		type:'iframe',
		width: 800,
		height:800,
		overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
});



function fadeAnime(){
    var windowHeight = $(window).height();
    var topOfWindow = $(window).scrollTop();
    
    $('.fadeInSlowTrigger').each( function(){
        var targetPosition = $(this).offset().top;
        if(topOfWindow > targetPosition+100 - windowHeight){
            $(this).addClass("fadeInSlow");
        }else if(topOfWindow < targetPosition-100 - windowHeight){
            $(this).removeClass("fadeInSlow");
        }
    });
    
    $('.fadeInTrigger').each( function(){
        var targetPosition = $(this).offset().top;
        if(topOfWindow > targetPosition-100 - windowHeight){
            $(this).addClass("fadeIn");
        }else if(topOfWindow < targetPosition-100 - windowHeight){
            $(this).removeClass("fadeIn");
        }
    });
    
    $('.fadeOutTrigger').each( function(){
        var targetPosition = $(this).offset().top;
        if(topOfWindow > targetPosition-100 - windowHeight){
            $(this).addClass("fadeOut");
        }else if(topOfWindow < targetPosition-100 - windowHeight){
            $(this).removeClass("fadeOut");
        }
    });
    
    
}

$(window).scroll(function(){
    fadeAnime();
});