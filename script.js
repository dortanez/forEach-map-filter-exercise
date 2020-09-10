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



// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
    const vowels = ['a','e','i','o','u'];
    const lowerCaseString = str.toLowerCase();
    const letterArr = lowerCaseString.split('');
    const myObj = {};
    letterArr.forEach(function(letter) {
        if(vowels.indexOf(letter) !== -1) {
            if(myObj[letter] === undefined) {
                myObj[letter] = 1;
            } else {
                myObj[letter]++
            }
        }    
    })
    return myObj;
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}



// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr) {
    const doubledArr = arr.map(function(num) {
        return num * 2;
    })

    return doubledArr;
}

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]



// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr) {
    const newArr = arr.map(function(num, i) {
        return num * i
    })
    return newArr;
}

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]



// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arr, key) {
    const newArr = arr.map(function(item) {
        return item[key];
    })
    return newArr;
}

extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  )
  // ['Elie', 'Tim', Matt', 'Colt']



// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

function extractFullName(arr) {
    const newArr = arr.map(function(item) {
        return item.first + ' ' + item.last
    })
    return newArr;
}

extractFullName([
{first: 'Elie', last:"Schoppik"},
{first: 'Tim', last:"Garcia"},
{first: 'Matt', last:"Lane"},
{first: 'Colt', last:"Steele"}
])
  
// ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']



// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key) {
    const newArr = arr.filter(function(item) {
        return item[key];
    })
    return newArr;
}

filterByValue(
[
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
],
'isCatOwner'
)
// [
// {first: 'Tim', last:"Garcia", isCatOwner: true},
// {first: 'Colt', last:"Steele", isCatOwner: true}
// ]



// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, value) {
    const found = arr.filter(function(num) {
        return num === value;
    })
    return found;
}

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined



// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arr, key, value) {
    const findIt = arr.filter(function(item) {
        return item[key] === value;
    })[0]
    return findIt;
}

findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  )



  // Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

  function removeVowels(str) {
      const letters = ['a','i','e','o','u']
      const newStr= str.toLowerCase();
      const newArr = newStr.split('');
      const result = newArr.filter(function(val) {
          return letters[letters.indexOf(val)] === undefined;
      })
      return result.join('');
  }

removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')



// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
    const newArr = arr.filter(function(num) {
        return num % 2 !== 0;
    }).map(function(item) {
        return item * 2;
    })
    return newArr;
}

doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []