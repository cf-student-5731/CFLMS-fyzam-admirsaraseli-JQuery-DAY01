$("form").submit(function(e) {

	e.preventDefault();
	
	
	


});

// Remove the form from the page
//$('form').remove();

// Create 5 new DIVs in the article element
for (let i = 0; i<5; i++){
	let newDiv = `<div>hello ${i} </div>`;
	$('article').append(newDiv);
}


// Within the input field change the value to "Search for..."
$('input').val('Search for...');




// Add a class name of "box" to each new DIV
$('div').addClass('box');




// Change the link to "www.codefactory.wien"
$('a').attr('href', 'http://www.codefactory.wien');