const m = Math

function AddTriplet(x, y, z, ) {
    sum = x + y + z;
    return sum;
}

function GiveRandomNumber(min, max) {
    var retval = m.round(m.random() * (max - min)) + min;
    return retval;
}

function PrintArray(array) {
    id = 1;
    array.forEach(x => {
        console.log("Element at index %i = %i", id, x);
        id++;
    });
}

function GenerateArray(n) {
    var new_vector = [];
    for (var id = 0; id < n; ++id) {
        var current_element = GiveRandomNumber(0, 100);
        new_vector.push(current_element);
    }
    return new_vector;
}

var my_Array = GenerateArray(100);

// PrintArray(my_Array);
// console.log("Sorted array:");
// console.log(my_Array.sort());
// console.log("Reversed array:");
// console.log(my_Array.reverse());

// fct_val = AddTriplet(1, 2, 3)

// console.log(fct_val);

const simpleF = function(arg) {
    return 'this is a simple function with arg: ' + arg;
}
console.log(simpleF(3));

let arrowF = (arg) => {
    return 'This is an arrow function with arg:' + arg;
}

let hello = () => {
    console.log('Hello! 😆');
}

function arr_hi(arg) {
    console.log('Hey there from an arrow function🔶 with arg %s', arg);
}

console.log(arrowF(3));

module.exports = {
    hello,
    arr_hi
};