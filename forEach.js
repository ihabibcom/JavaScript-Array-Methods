const number = [2, 5, 6, 9];

//you can use for loop without using forEach Methods

// for(i = 0; i<number.length; i++){
//     // console.log(number[i]);
//     // console.log(number);
//     console.log(i+ ":"+ number[i]);
// }





//using forEach methods declaring a function

// number.forEach(eachNumber);

// function eachNumber(value, index, arr){
//     console.log("number " + index + ":" + value);
// }





// number.forEach((value, index, arr) => {
//     console.log("number " + index + ":" + value);
// });




//sumation of values;

// var sum = 0;
// number.forEach((value, index, arr) => {
//     sum += value;
// });

// console.log(sum)


const letters = ['a', 'b', 'c','a', 'c', 'd'];

let count = {};

letters.forEach(item => {
    if(count[item]) {
        count[item]++;
    }else{
        count[item] = 1;
    }
});

console.log(count);