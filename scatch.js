$(document).ready(function(){
                for(var i=0;i<=2369;i++){
		 
			$('.wrapper').append('<div class="container"></div>');
                  
		}

enableColor();



	});
function yellow(){
  document.getElementById("demo").innerHTML="yellow";
  enableYellow();
}

function green(){
  document.getElementById("demo").innerHTML="green";
  enableGreen();
}

function blue(){
  document.getElementById("demo").innerHTML="blue";
  enableBlue();
}

function red(){
  document.getElementById("demo").innerHTML="red";
  enableRed();
}

function black(){
  document.getElementById("demo").innerHTML="black";
  enableBlack();
}

function myFunction(){

  document.getElementById("demo").innerHTML="random";
  enableColor();
}




function enableColor() {
$('.container').hover(function() {
			var color='#' + Math.random().toString(16).substring(2, 8);
			$(this).css("background-color",color);
		                  });
                       }

function enableYellow() {
$('.container').hover(function() {
			var color='#ffff00';
			$(this).css("background-color",color);
		                  });
                       }

function enableBlue() {
$('.container').hover(function() {
			var color='blue';
			$(this).css("background-color",color);
		                  });
                       }

function enableRed() {
$('.container').hover(function() {
			var color='red';
			$(this).css("background-color",color);
		                  });
                       }

function enableBlack() {
$('.container').hover(function() {
			var color='black';
			$(this).css("background-color",color);
		                  });
                       }

function enableGreen() {
$('.container').hover(function() {
			var color='green';
			$(this).css("background-color",color);
		                  });
                       }
