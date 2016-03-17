// 1.Write a function, funcCaller, that takes a func (a function) and an arg
//  (any data type). The function returns the func called
//  with arg(as an argument).
var num = 0;

var funcCaller = function(func, arg) {
    return func(arg);
}

var add10 = function(num) {
    return num +=10;
}

console.log(funcCaller(add10,10))

// 2.Write a function, firstVal, that takes an array, arr, and a function, func,
//  and calls func with the first index of the arr, the index # and the whole array.
var firstVal = function(arr, func) {
    func(arr[0], 0, arr);
}

// 3.Change firstVal to work not only with arrays but also objects.
// Since objects are not ordered, you can use any key-value pair on the object.
var firstValObj = function(obj, func) {

    if(Array.isArray(obj)) {
        func(obj[0], 0, obj);
    } else {
        // for (var key in obj){
        //     func(obj[key], key, obj);
        // }
        var arProp = Object.keys(obj);
        for (var i = 0; i < arProp.length; i++ ){
            func(obj[arProp[0]], arProp[0], obj);
        }
    }

}

// 4.[Extra Credit] Write a function, once, (see: http://underscorejs.org/#once)
//  that takes a function and returns a version of that function which can only
//  be called once. [Hint: you need a closure]
//   You probably don't want to be able to double charge someone's credit card.
var myOnce = function(sourceFunc) {
    var executed = false,
        resultFunc = null;

    var newFunction = function() {
        // check for being executed
        if (executed) {
            resultFunc = function () {console.log('Already been invoked');};
        } else {
            resultFunc = sourceFunc;
        }
        // Setup 1st execution flag
        executed = true;
        return resultFunc();
    }
    // return new function, using closure
    return newFunction;
}

var someFunc = function () {
    console.log('someFunc running..');
}


console.log('---------------');
console.log('Original someFunc(): \n' + someFunc);
console.log('---------------');
// someFunc wrapped by myOnce functon
var init = myOnce(someFunc);
console.log('someFunc() wrapped by myOnce() function using closure: \n' + init);
console.log('---------------');

console.log('checking...');
init();
init();
init();