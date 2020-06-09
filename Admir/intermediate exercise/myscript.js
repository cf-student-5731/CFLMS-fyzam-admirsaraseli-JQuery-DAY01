$(document).ready(function() {
	$("form").submit(function(e) {
		e.preventDefault();

	});

	$(":text").val("Search for...");
	

	let newItem = $('<div>New Divs</div>');
		for (i = 0; i <= 4; i++) {
		$('article').append('<div>div'+i+'</div>');
	}


	$("#myform").remove();
	$("div").addClass("box");
	$("a[href='http://www.codefactory.com/']").attr("href","http://www.codefactory.wien/");

});




