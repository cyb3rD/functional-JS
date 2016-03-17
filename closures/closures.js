// Task 1-4
var nonsense = function(string) {
    var blab = function() {
        alert(string);
    };
    setTimeout(blab, 2000);
    return blab;
}

var blabLater = nonsense("Sample string");

console.log('*** blabLater ***');
console.log(blabLater);
console.log('***');

var blabAgainLater = nonsense("NewString");

console.log('*** blabAgainLater ***');
console.log(blabLater);
console.log('***');

// 5. Write a function with a closure. The first function should only take one
// argument, someone's first name, and the inner function should take one more
// argument, someone's last name. The inner function should console.log both
// the first name and the last name.
var lastNameTrier = function(firstName) {
    var innerFunction = function(lastName) {
        console.log('First Name: ' + firstName + ' Last Name: ' + lastName);
    };
    return innerFunction;
}

var firstNameJohn = lastNameTrier ('John');
firstNameJohn('Tucker');

// 6. Create a storyWriter function that returns an object with two methods.
// One method, addWords adds a word to your story and returns the story while
// the other one, erase, resets the story back to an empty string.

