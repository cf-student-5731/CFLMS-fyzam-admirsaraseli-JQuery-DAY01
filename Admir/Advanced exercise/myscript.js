$(document).ready(function() {

	 $("a").attr("href","http://www.codefactory.wien/");

	 $("code").css("color", "red");

	 $("ol > li").css("background-color","#2a7b90");

	 $("textarea").text("Express your opinion");

	 var imgsrc = "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg";
	 $("img").attr("src",imgsrc);

	 $("blockquote").css({"background-color":"orange","font-style":"italic"});

	 $("h1#logo").css("color", "black");
	 $("span.gray").css("color", "white");

	 $("span.date").remove();

	 let newItems = ['<li><a href="http:/www.codefactory.wien/">New Templates</a></li>', '<li><a href="http:/www.codefactory.wien/">Order Template</a></li>', '<li><a href="http:/www.codefactory.wien/">Contact Us</a></li>'];

	for(let i=0; i<newItems.length; i++){
    	$('.sidemenu:first').append(newItems[i]);
    }

    $("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
}); 




