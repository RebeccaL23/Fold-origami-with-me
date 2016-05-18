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

      }, 3050);
});

//refresh iframe / repeat 
$('#repeat2').on('click', function(){
	location.reload();
});

//functions called based on number of clicks of nextStep button
$('.nextStep').click(function(){
	if (i===1){
		$('#instructf1').fadeIn(200);
		$('#f1BottomRight, #f1TopLeft').fadeIn(400)
		$('#f1BottomRight, #f1TopLeft').delay(500).fadeOut(400, function(){
			$('#f1TopLeft').delay(2000).width(249).height(249).css({
				borderRight: '#c5bfc4 1px solid',
				borderBottom: '#c5bfc4 1px solid',
			});
			$('#f1BottomRight').delay(2000).width(249).height(248).css({
				borderTop: '#c5bfc4 1px solid',
				borderLeft: '#c5bfc4 1px solid',
			});
		});
		$('#f1BottomRight, #f1TopLeft').delay(700).fadeIn(400);
		console.log('step1')
	} else if (i===2){
		$('#instructf1').fadeOut(100);
		$('#instructf2').delay(100).fadeIn(200);
		$('#fish').css({
			'background': 'url(images/f1.png)',
		});
		$('#f1BottomRight, #f1TopLeft, #f1s1').delay(200).hide();
		$('#f2BottomTri, #f2TopTri, #f2TopTriFront, #f2TopTriBack, #f2BottomTriFront, #f2BottomTriBack').show();
		$('#f2crease1').fadeIn(1000, function(){
			$('#f2BottomTri, #f2TopTri').show();
			$('#f2TopTri').delay(200).css({
					transform: 'rotate3d(1, 1, 0, -179deg',
					transition: '2000ms',
			})
			$('#f2BottomTri').delay(200).css({
					transform: 'rotate3d(1, -1, 0, 179deg',
					transition: '2000ms',
					
			})
		});
		console.log('step2')
	} else if (i===3){
		$('#instructf2').fadeOut(100);
		$('#instructf3').delay(100).fadeIn(200);
		$('#fish').css({
			'background': 'url(images/f2.png)',
		});
		$('#f2crease1, #f2TopTri, #f2BottomTri, #f2BottomTri, #f2TopTri, #f2TopTriFront, #f2TopTriBack, #f2BottomTriFront, #f2BottomTriBack').delay(200).hide();
		$('#f3, #f3TopLeft, #f3TopLeftTri, #f3TopTri, #f3TopLeftFront, #f3TopLeftBack, #f3TopLeftTriFront, #f3TopLeftTriBack').fadeIn(100, function(){
			$('#f3crease').delay(100).fadeIn(500, function(){
				$('#f3crease').delay(300).fadeOut(300, function(){
					$('#f3').delay(200).css({
						transform: 'rotate3d(1, -0.42, 0, -179deg',
						transition: '2000ms',	
					})
				});
			});
		});
		console.log('step3')
	}else if (i===4){
		$('#instructf3').fadeOut(100);
		$('#instructf4').delay(100).fadeIn(200);
		$('#f4crease').fadeIn(400, function(){
			$('#f4crease').fadeOut(200);
				$('#f3TopLeftTri').delay(400).css({
					transform: 'rotateX(179deg)',
					transform: 'rotate3d(1, -1, 0, +179deg',
					transition: '2000ms',	
				})
		});
	console.log('step4')
	} else if (i===5){
		$('#instructf4').fadeOut(100);
		$('#instructf5').delay(100).fadeIn(200);
		$('#fish').css({
			'background': 'url(images/f3.png)',
		})
		$('#f3, #f3TopLeft, #f3TopLeftTri, #f3TopTri, #f3TopLeftFront, #f3TopLeftBack, #f3TopLeftTriFront, #f3TopLeftTriBack').delay(200).hide();
		$('#f5, #f5BottomLeft, #f5BottomLeftTri, #f5BottomTri, #f5BottomLeftFront, #f5BottomLeftBack, #f5BottomLeftTriFront, #f5BottomLeftTriBack').fadeIn(100);
		$('#f5crease').fadeIn(400);
		$('#f5crease').delay(400).fadeOut(300, function(){
			$('#f5').delay(200).css({
				transform: 'rotate3d(2.5, 1 , 0, 179deg)',
				transition: '2000ms',	
			});
		});
		
	console.log('step5')
	} else if (i===6){
		$('#f6crease').fadeIn(700, function(){
			$('#f6crease').delay(200).fadeOut(200);
			$('#f5BottomLeftTri').delay(400).css({
					transform: 'rotateX(-179deg)',
					transform: 'rotate3d(1, 1, 0, -179deg',
					transition: '2000ms',	
				})
		});
	console.log('step6');
	} else if (i===7){
		$('#instructf5').fadeOut(100);
		$('#instructf6').delay(100).fadeIn(200);
		$('#fish').css({
			'background': 'url(images/f4.png)',
		});
		$('#f7, #f7Front, #f7Back').show();
		$('#f5, #f5BottomLeft, #f5BottomLeftTri, #f5BottomTri, #f5BottomLeftFront, #f5BottomLeftBack, #f5BottomLeftTriFront, #f5BottomLeftTriBack').fadeOut(100);
		$('#f7crease').delay(300).fadeIn(500);
		$('#f7crease').delay(500).fadeOut(400, function(){
			$('#f7').css({
				transform: 'rotateY(179deg)',
				transition: '2000ms',
			})
		});
	console.log('step7');
	} else if (i===8){
		$('#instructf6').delay(2000).fadeOut(200);
		$('#instructf7').delay(2300).fadeIn(200);
		$('#fish').css({
			'background': 'url(images/f6.png)',
		});
		$('#f7').delay(50).fadeOut(300)
	}
});