/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
//$("*").css("background-color", "yellow");

// all p elements
//$('p').css('background-color', 'green').text('you were JQueried');

// the p element with an ID of "intro"
//$('p#intro').css('background-color', 'green').text('you were JQueried');

// all elements with a class of "note"
//$('.note').css('background-color', 'green').text('you were JQueried');

// all DIV elements with a class of note
//$('p.note').css('background-color', 'green').text('you were JQueried');

// all p elements in the article element
//$('article p').css('background-color', 'green').text('you were JQueried');

// the last element in any section which is a p tag
//$('article p:last').css('background-color', 'green').text('you were JQueried');

// the first paragraph on the page
//$('p:first').css('background-color', 'green').text('you were JQueried');

// all p elements which have a link
//$('p a').css('background-color', 'green').text('you were JQueried');

// the second li within nested ul element
//$('ul li:nth-child(2)').css('background-color', 'green').text('you were JQueried');

// every second and third p element
//$('p:nth-child(2), p:nth-child(3)').css('background-color', 'green').text('you were JQueried');