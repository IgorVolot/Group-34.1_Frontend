// Problem -> console 10 times 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// Solution 1 -> use let
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// Solution 2 -> add a variable to loop and reassign the variable for output
for (var i = 0; i < 10; i++) {
    let j = i;
    setTimeout(function () {
        console.log(j);
    }, 1000);
}

// Solution 3 -> Each iteration of loop creates a function that takes the current value i as argument j
for (var i = 0; i < 10; i++) {
    (function(j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

