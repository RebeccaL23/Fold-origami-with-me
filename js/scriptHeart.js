//define variable i as number of clicks (global)
	var i = 0; 

//on each click of next step, add one to the click counter
$('.nextStep').on('click', function(){
	$(this).val(i++).html();
});

//disable nextStep button so user cannot click immediately 
$(document).on('click', '.nextStep', function (){

      var element = $(this);

      element.prop('disabled', true);

      setTimeout(function() {

           element.prop('disabled', false);

      }, 3200);
}); 


//refresh iframe / repeat 
$('#repeat1').on('click', function(){
	location.reload();
});

//load buttons after iframe is loaded
$('#heartFrame').load(function(){
	$('#nextStep1, #repeat1').fadeIn(400);
})

//functions called based on number of clicks of nextStep button

$('.nextStep').click(function(){
	if (i===1){
		$('#instruct1').fadeIn(200);
		$('#heartTopRight1, #heartBottomLeft1, #heartTopLeft1, #heartBottomRight1').fadeIn(900);
		$('#heartTopRight1, #heartBottomLeft1, #heartTopLeft1, #heartBottomRight1').delay(400).fadeOut(500, function(){
			$('#heartTopLeft1, #heartBottomRight1').width(248).height(248).css({
				border: '#c5bfc4 1px solid'
			})
			$('#heartTopRight1, #heartBottomLeft1').width(250).height(249).css({
				border: 'none',
			});
			$('#heartTopRight1, #heartBottomLeft1, #heartTopLeft1, #heartBottomRight1').fadeIn(800);
		});
		console.log('step1')
		
	} 
	else if (i===2){
		$('#instruct1').fadeOut(100);
		$('#instruct2').delay(100).fadeIn(200);
		$('#heartStep1').css({
			'background': 'url(images/step1.png)',
		})
		$('#heartTopRight1, #heartBottomLeft1, #heartTopLeft1, #heartBottomRight1').css({
			display: 'none'
		})
		$('#heartTopTriFront1, #heartTopTriBack1, #heartTopTriHalf1').show();
		$('#crease2').fadeIn(1000, function(){
			$('#heartTopTriHalf1').delay(600).fadeOut();
			$('#crease2').delay(400).fadeOut();
			$('#heartTopTri1').css({
				transform: 'rotateX(180deg)',
				transition: '2000ms',
			})
		});
		console.log('step2')
	}
	else if (i===3){
		$('#instruct2').fadeOut(100);
		$('#instruct3').delay(100).fadeIn(200);
		$('#heartStep1').css({
				'background': 'url(images/step2.png)'
		});
		$('#heartBottomFold1, #heartBottomFoldHalf1').fadeIn(1,function(){
			$('#heartTopTri1').delay(200).fadeOut('slow');
		});
		$('#heartBottomFoldFront1, #crease3').delay(100).fadeIn(2000, function(){
			$('#heartBottomFoldBack1').show();
			$('#heartBottomFoldHalf1').delay(600).fadeOut(500);
			$('#heartBottomFold1').css({
				transform: 'rotateX(-180deg)',
				transition: '2000ms',
			})
		})
		console.log('step3')
	}
	else if (i===4){
		$('#instruct3').fadeOut(100);
		$('#instruct4').delay(100).fadeIn(200);
		$('#heartStep1').css({
			'background': 'url(images/step3.png)'
		});
		$('#heartMiddleRightFront1, #heartMiddleRightBack1, #heartMiddleLeftFront1, #heartMiddleLeftBack1, #heartMiddleLeft1, #heartMiddleRight1, #heartMiddleRightTri, #heartMiddleLeftTri').show().delay(1000, function(){
			$('#crease4, #crease5').fadeIn(800);
			$('#heartBottomFold1').fadeOut(1500, function(){
				$('#crease4, #crease5').fadeOut(200);
				$('#heartMiddleLeft1').css({
					transform: 'rotate3d(1, 1, 0, 180deg',
					transition: '2000ms',
				})
				$('#heartMiddleRight1').css({
					transform: 'rotate3d(1, -1, 0, 180deg',
					transition: '2000ms',
					
				})
			});
			
		})
	}else if (i===5){
		$('#instruct4').fadeOut(100);
		$('#instruct5').delay(100).fadeIn(200);
		$('#heartStep1').css({
			'background': 'url(images/step4.png)'

		});
		$('#crease6, #crease7, #crease8, #crease9').fadeIn(1000);
		$('#crease6, #crease7, #crease8, #crease9').delay(200).fadeOut(1000, function(){
			$('#heartMiddle1').delay(200).fadeOut(1000)
		})
		$('#instruct5').delay(2000).fadeOut(200);
		$('#instruct6').delay(2400).fadeIn(200);
		

	}
})


