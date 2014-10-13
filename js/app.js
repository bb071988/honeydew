$(document).ready(function(){

$('button')

	.on('click', function(){

		var taskValue = $('input').val();
		if (taskValue != '') {

			$('ul').append("<li class='list'>" + taskValue +"</li>"); //append the new li with the input value
			
			$('input').val(''); // clear the value from the field
		}

		else {alert('Tasks cannot be blank');}

	});  // end on click function ;


$('li')
		.on('dblclick', function() {  // think this function is not attaching to dynamically added li items
  		$('li').toggleClass('completed');
  		//alert('double clicked');
	});
	


});  // end the document ready function


/*

.on('dblclick', function() {
  			$('this').toggleClass('completed');
			})


$('li')
		on('dblclick',(function() {
  		alert( "Hello World!" );
	}); 


*/