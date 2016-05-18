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

      }, 2500);
}); 

//next step and repeat buttons show after background animation when heart is selected

//refresh iframe / repeat 
$('#repeat3').on('click', function(){
	location.reload();
});

//functions called based on number of clicks of nextStep button
$('.nextStep').click(function(){
	if (i===1){
		$('#instruct11').fadeIn(200);
		$('#foxCrease1').fadeIn(1100, function(){
			$('#foxBottom').css({
				transform: 'rotateX(179deg)',
				transition: '2000ms'
			});
		});	
	} else if (i===2){
		$('#instruct11').fadeOut(100);
		$('#instruct12').delay(100).fadeIn(200);
		$('#foxOrigami').css({
			'background': 'url(images/fox1.png)'
		});
		$('#foxBottom').delay(100).hide();
		$('#foxTopTri').show();
		$('#foxTop').css({
			background: 'none',
		});
		$('#foxCrease2').delay(100).fadeIn(400, function(){
			$('#foxTopTri').css({
				transform: 'rotateX(-179deg)',
				transition: '2000ms'
			});
			$('#foxCrease2').fadeOut(200);
		});
	} else if (i===3){
		$('#instruct12').fadeOut(100);
		$('#instruct13').delay(100).fadeIn(200);
		$('#foxOrigami').css({
			'background': 'url(images/fox2.png)'
		});
		$('#foxTopLeftTri, #foxTopRightTri').show();
		$('#foxTopTri').delay(100).hide();
		$('#foxCrease3, #foxCrease4').delay(100).fadeIn(500, function(){
			$('#foxTopLeftTri').delay(300).css({
				transform: 'rotate3d(1, 0.7, 0, 179deg',
				transition: '2000ms',
			});
			$('#foxTopRightTri').delay(300).css({
				transform: 'rotate3d(1, -0.7, 0, 179deg',
				transition: '2000ms',
			});
			$('#foxCrease3, #foxCrease4').fadeOut(200);
		});
	} else if (i===4){
		$('#instruct13').fadeOut(100);
		$('#instruct14').delay(100).fadeIn(200);
		$('#foxOrigami').css({
			'background': 'url(images/fox3.png)',
			transform: 'rotateY(180deg)',
			transition: '2000ms'
		});
		$('#foxTopRightTri, #foxTopLeftTri').fadeOut(200);
	} else if (i===5){
		$('#instruct14').fadeOut(100);
		$('#instruct15').delay(100).fadeIn(200);
		$('#instruct15').delay(2300).fadeOut(400);
		$('#instruct16').delay(2750).fadeIn(300);
		$('#foxOrigami').css({
			'background': 'url(images/fox4.png)',
		});
	}
})