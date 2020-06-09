$(document).ready(function(){


// $('*').remove(); TEST


// 1. Change the href attribute to "www.codefactory.wien" for all links

//$('a').attr('href', 'http://www.codefactory.wien').text('You were JQeried');


// 2. Change the text color to yellow for the <code> tags

//$('code').css('color', 'yellow');

// 3. Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element
//$('ol > li').css('background-color', '#2a7b90');

// 4. Within the form, change the placeholder text to "Express your opinion"
$('textarea').text('Express your opinion');

// 5. Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"
$('img').attr('src', "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

// 6. Change the background color to orange for all blockquote elements and the font-style to italic
$('blockquote').css('background-color', 'orange');

// 7. At the top of the page, change the logo color "Simple" to black and "Blog" to white
$('#logo:first').css('color', 'black');
$('.gray:first').css('color', 'yellow');

// 8. Remove the "Oct 01, 2006" Date from the page
$('.date').remove();

// 9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"
let newItems = ['<li><a href="http:/www.codefactory.wien/">New Templates</a></li>', '<li><a href="http:/www.codefactory.wien/">Order Template</a></li>', '<li><a href="http:/www.codefactory.wien/">Contact Us</a></li>'];

for(let i=0; i<newItems.length; i++){
    $('.sidemenu:first').append(newItems[i]);
}

// 10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."
$("p:contains('Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
$("p:contains('- William James')").text('JQuery :-)');



});

