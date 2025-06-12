// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textAreaInput = document.getElementById('text')
const statsSection = document.getElementById('stat')

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.


textAreaInput.addEventListener('input', function(e)
{
let text = textAreaInput.value;
let characters = text.length

let wordCount = text.split(' ').length;

statsSection.innerHTML = "You've written " + wordCount + " words and " + characters + " characters.";

});

// 🤖: You will need to utilize the split method to get the words count.