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
console.log(my_Array);

// fct_val = AddTriplet(1, 2, 3)

// console.log(fct_val);