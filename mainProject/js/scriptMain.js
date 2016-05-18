
////////////////////////////////////////////////  A B O U T   P A G E  ////////////////////////////////////
// deny form submission default 
$('form').on('submit', function(event){

	//stop the form from being submitted
	event.preventDefault();
	console.log('stopped form submission');

}); 

////after submission, disable input & change value of submit 
$('form').on('submit', function(){
	$('input[type=text]').val('');
	$('input[type=text]').prop('disabled', true);
	$('input[type=submit]').val('Thanks!');
})

//open & close about popup
$('#li2').on('click', function(){
	event.preventDefault();
	$('#aboutmain').show();
});

$('#exit').on('click', function(){
	$('#aboutmain').hide();
});


/////////////////////////////////////// L A N D I N G   //////////////////////////////////////////
$(document).ready(function(){
	$('#title1').delay(500).fadeIn(2000, function(){
		$('#title1').delay(210).fadeOut('slow');
		$('#background1').delay(200).animate({width: '-=100%', right:'-=100%'}, 2000, function(){
			$('#background1').hide()
		});
		$('nav').delay(1200).fadeIn(300);
	});
	$('#background2').delay(2200).fadeIn(700);
});

//hide frame when choosing shapes
$('#li1').on('click', function(){
	$('#heartFrame, #foxFrame, #fishFrame').fadeOut(700);
	//move nav back 
	$('nav').fadeOut(200, function(){
		$('nav').removeClass('nav2');
		$('nav').fadeIn(600);
	})
	
});

//////////////////////////////////////// S W I T CH  (backgrounds) ? ?? ? / ////////////////////////////////

$('#shape1, #repeat1').on('click', function(){
	$('#li1').removeClass('underlineNav');
	$('#background1').css({
		backgroundColor: '#fef4ff'
	});
	$('nav').fadeOut(400);
	$('#homeImg').fadeOut(800);
	$('#title1').show();
	$('#background1').show(function(){
		$('#background1').delay(300).animate({width:'+=100%', left:'0%'}, 1400, function(){
			$('#background2').css({
				background: 'url(images/background2.png)',
			});
			$('nav').addClass('nav2');
			$('#li1').addClass('navItem');
			$('nav').delay(300).fadeIn(400);
			$('#heartFrame').delay(630).show();
			$('#background1').delay(200).animate({width: '-=100%', left:'-=100%'}, 1400, function(){
				$('#background1').hide();
			});
			$('#title1').delay(460).fadeOut('slow');
		});
	});
	
});


$('#shape2').on('click', function(){
	$('#li1').removeClass('underlineNav');
	$('#background1').css({
		backgroundColor: '#f4f7ff'
	});
	$('nav').fadeOut(400);
	$('#homeImg').fadeOut(800);
	$('#title1').show();
	$('#background1').show(function(){
		$('#background1').delay(300).animate({width:'+=100%', left:'0%'}, 1400, function(){
			$('#background2').css({
				background: 'url(images/background3.png)',
			});
			$('nav').addClass('nav3');
			$('nav').delay(300).fadeIn(400);
			$('#fishFrame').delay(10).show();
			$('#background1').delay(200).animate({width: '-=100%', left:'-=100%'}, 1400 , function(){
				$('#background1').hide();
			});
			$('#title1').delay(460).fadeOut('slow');
		});
	});
})

$('#shape3').on('click', function(){
	$('#li1').removeClass('underlineNav');
	$('#background1').css({
		backgroundColor: '#fffbee'
	});
	$('nav').fadeOut(400);
	$('#homeImg').fadeOut(800);
	$('#title1').show();
	$('#background1').show(function(){
		$('#background1').delay(300).animate({width:'+=100%', left:'0%'}, 1400, function(){
			$('#background2').css({
				background: 'url(images/background4.png)',
			});
			$('nav').addClass('nav2');
			$('nav').delay(300).fadeIn(400);
			$('#foxFrame').delay(10).show();
			$('#background1').delay(200).animate({width: '-=100%', left:'-=100%'}, 1400, function(){
				$('#background1').hide();
			});
			$('#title1').delay(460).fadeOut('slow');
		});
	});
})


/////////////////////*************////////// SHAPES PAGE animations ////////////*********//////////////////////
$('#shape1').mouseenter(function(){
	$('#hr1').animate({width: '43%'}, 500);
}).mouseleave(function(){
	$('#hr1').animate({width: '0%'}, 500);
});
$('#shape2').mouseenter(function(){
	$('#hr2').animate({width: '43%'}, 500);
}).mouseleave(function(){
	$('#hr2').animate({width: '0%'}, 500);
});
$('#shape3').mouseenter(function(){
	$('#hr3').animate({width: '43%'}, 500);
}).mouseleave(function(){
	$('#hr3').animate({width: '0%'}, 500);
});

////////// CONTROL SCROLL SPEED /////////
$('#shape1, #shape2, #shape3').click(function(){
	$('html,body').animate({scrollTop:0}, 800); 
	return false;

});

$('#li1').click(function(){
	$('#li1').addClass('underlineNav');
	$('nav').removeClass('nav2, nav3')
	$('#title2').fadeOut(200);
	$('html,body').animate({scrollTop:600}, 800); 
	return false;
});



