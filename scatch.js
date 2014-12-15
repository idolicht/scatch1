$(document).ready(function(){
                for(var i=0;i<=15;i++){
		  for(var j=0;j<=15;j++){
			$('.wrapper').append('<div class="container"></div>');
                  }
		}

enableColor();
	});

//function enableColor() {
 // $('.container').hover(function () {
 //   $(this).css({
  //    "background-color":'#dddddd'
 //  } );
// });
//}

function enableColor() {
$('.container').hover(function() {
			var color='#' + Math.random().toString(16).substring(2, 8);
			$(this).css("background-color",color);
		});
}