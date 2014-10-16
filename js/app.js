$(document).ready(function(){

$('.newtask')

	.on('click', function(){

		var taskValue = $('input').val();
		if (taskValue != '') {

			$('ul').append("<li class='list'>" + taskValue +"</li>"); //append the new li with the input value
			
			$('input').val(''); // clear the value from the field
		}

		else {alert('Tasks cannot be blank');}

	});  // end on click function ;

$('.instruction')
		.on('click', function(event) {  // think this function is not attaching to dynamically added li items
  		
  		$('.instdiv').toggleClass('showdiv'); // can toggle the class since we captured this at time of dblclick
	});


$('ul')
		.on('click', 'li', function(event) {  // think this function is not attaching to dynamically added li items
  		var elem = $( this );  // captures this before bubbling

  		elem.toggleClass('completed'); // can toggle the class since we captured this at time of dblclick
	});

$('ul')
		.on('dblclick', 'li', function(event) {  // think this function is not attaching to dynamically added li items
  		$(this).remove();
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