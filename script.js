// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValues(arr) {
    const newArray = [];
    arr.forEach(function(num) {
        newArray.push(num * 2)
    })
    return newArray;
}

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]


// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

function onlyEvenValues(arr) {
    const newArray = [];
    arr.forEach(function(num) {
        if(num % 2 === 0) {
            newArray.push(num);
        }
    })
    return newArray;
}

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]


// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(arr) {
    const newArray = [];
    arr.forEach(function(str) {
        let word = str[0] + str[str.length-1];
        newArray.push(word);
    })
    return newArray;
}

showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

const teachers = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ]

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(item) {
        item[key] = value;
    })
    return arr;
}

addKeyAndValue(teachers, 'title', 'instructor');