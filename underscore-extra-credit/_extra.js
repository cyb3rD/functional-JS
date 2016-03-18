// 1. Use _.reduce to multiply all the values in an array.
var srcArray = [5,3,27];
var resultReduce = _.reduce(srcArray, function(memo, num){ return memo*num; }, 1);
console.log(resultReduce);

// 2. Use _.reduce to concatenate all strings in an array.
var resultReduce = _.reduce(srcArray, function(memo, element){
        return memo+element.toString();
    }, '');
console.log(resultReduce);

// 3. Write a function that takes an array of names and congratulates them.
// Make sure to use _.reduce as part of the function.
var congratulateUsers = function(arNames){
    _.each(arNames, function(name, index, arNames) {
        var arGreeting = ["Hello, "];
        arGreeting.push(name);
        _.reduce(arGreeting, function(memo, element){
            console.log( memo + element);
        })
    });
};
var arNames = ["John", "Jack", "Donny"];
congratulateUsers(arNames);

//  4. _.pluck takes an object and a property name and returns the property
// name's value. Write your own version called myPluck.
var myPluck = function(obj, propName){
    var propValue;
    _.each(obj, function(val, key, obj){
        (propName === key) ? propValue = val : propValue = '';
    });
    return propValue;
};

var objFilm = {
    rating: 8.0,
    title: "Star Wars VII"
}

console.log(myPluck(objFilm, "title"));

 // 5. Use _.filter to return all strings in an array that start with the letter 'Z'.
var strArray = ["Zooma", "Karamba", "uCoz", "ninja"];
var strWithZ = _.filter(strArray, function(element){
    return (element.charAt(0) === 'Z');
});

console.log(strWithZ);

 // 6. Use _.where on your farm animals from the lecture slides to return all animals
 //  who contain the value 3 at the property name space.