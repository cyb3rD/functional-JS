//Looping with _.each
function AnimalMaker(name) {
    return {
        speak: function() {
            console.log("My name is: ", name);
        }
    };
};

var animalNames = ['Fluffy','Buffy','Smokey'];
var farm = [];

_.each(animalNames, function(name) {
    farm.push(AnimalMaker(name))
});

console.log(farm[0].speak());
// 1. Use _.each to loop through an array and console.log() all the values.
_.each(animalNames, function(name, index, list) {
    console.log('Animal name: ' + name + 'Animal index: ' + index);
});
// 2. Write a function called checkValue that searches an array for a value.
// It takes an array and a value and returns true if the value exists in
// the array, otherwise it returns false


// 3. Write using _.each
var checkValue = function(array, valToSearch) {
    var result = false;
    _.each(array, function(val, index, array) {
        if (valToSearch === val) {
            result = true;
        }
    });
    return result;
}

console.log(checkValue(animalNames, 'Buffy'));

// 4. Write a loop that pushes all the values in an object to an array.
var pushObjValToArrayWithLoop = function(obj) {
    var resultArray = [];

    for (var prop in obj) {
        resultArray.push(obj[prop]);
    };

    return resultArray;
}


// 5. Use _.map to mimic the previous behavior.
var pushObjValToArrayWithMap = function(obj) {
    var resultArray = [];
    // _.map - push result of the callbak function to the array
    resultArray = _.map(obj, function(val, key, obj) {
        return val;
    });

    return resultArray;
}

// Testing tasks 3,5
var objSample = {
        five: 5,
        seven: 7,
        str: 'Sample String'
    },
    arLoopSample = [],
    arMapSample = [];

arLoopSample = pushObjValToArrayWithMap(objSample);
console.log('Result looped array: ');
console.log(arLoopSample);

arMapSample = pushObjValToArrayWithMap(objSample);
console.log('Result mapped array: ');
console.log(arMapSample);

// 6. Use _.filter to return all the even numbers in an array
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
 return num % 2 == 0;
});

console.log(evens);


