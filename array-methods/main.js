//! https://developer.mozilla.org/en-US/

// ********MAP********
//? The map() method creates a new array populated with the results 
//? of calling a provided function on every element in the calling array.

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

// ********FIND********
//? The find() method returns the first element in the provided array 
//? that satisfies the provided testing function. If no values satisfy 
//? the testing function, undefined is returned.

// const array2 = [5, 12, 8, 130, 44];

// const found = array2.find(element => element > 10);

// console.log(found);
// // Expected output: 12

// ********FINDINDEX********
//? The findIndex() method returns the index of the first element in an 
//? array that satisfies the provided testing function. If no elements 
//? satisfy the testing function, -1 is returned.

// const array3 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array3.findIndex(isLargeNumber));
// // Expected output: 3

// ********FILTER********
//? The filter() method creates a shallow copy of a portion of a given array, 
//? filtered down to just the elements from the given array that pass the test 
//? implemented by the provided function.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]

// ********CONCAT********
//? The concat() method is used to merge two or more arrays. This method does 
//? not change the existing arrays, but instead returns a new array.

// const array4 = ['a', 'b', 'c'];
// const array5 = ['d', 'e', 'f'];
// const array6 = array4.concat(array5);

// console.log(array6);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// ********SORT********
//? The sort() method sorts the elements of an array in place and returns the 
//? reference to the same array, now sorted. The default sort order is ascending, 
//? built upon converting the elements into strings, then comparing their 
//? sequences of UTF-16 code units values. The time and space complexity of the 
//? sort cannot be guaranteed as it depends on the implementation.

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // Expected output: Array [1, 100000, 21, 30, 4]

// ********REDUCE********
//? The reduce() method executes a user-supplied "reducer" callback function on 
//? each element of the array, in order, passing in the return value from the 
//? calculation on the preceding element. The final result of running the reducer 
//? across all elements of the array is a single value. The first time that the 
//? callback is run there is no "return value of the previous calculation". If 
//? supplied, an initial value may be used in its place. Otherwise the array element 
//? at index 0 is used as the initial value and iteration starts from the next element 
//? (index 1 instead of index 0). Perhaps the easiest-to-understand case for reduce() 
//? is to return the sum of all the elements in an array:

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

//? The reducer walks through the array element-by-element, at each step adding the current 
//? array value to the result from the previous step (this result is the running sum of all 
//? the previous steps) — until there are no more elements to add.

  //^ Syntax -->
  // Arrow function
  //^ reduce((accumulator, currentValue) => { /* … */ })
  //^ reduce((accumulator, currentValue, currentIndex) => { /* … */ })
  //^ reduce((accumulator, currentValue, currentIndex, array) => { /* … */ })

  //^ reduce((accumulator, currentValue) => { /* … */ }, initialValue)
  //^ reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
  //^ reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

  // Callback function
  //^ reduce(callbackFn)
  //^ reduce(callbackFn, initialValue)

  // Inline callback function
  //^ reduce(function (accumulator, currentValue) { /* … */ })
  //^ reduce(function (accumulator, currentValue, currentIndex) { /* … */ })
  //^ reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ })

  //^ reduce(function (accumulator, currentValue) { /* … */ }, initialValue)
  //^ reduce(function (accumulator, currentValue, currentIndex) { /* … */ }, initialValue)
  //^ reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)

// ********JOIN********
//? The join() method creates and returns a new string by concatenating all of the elements 
//? in an array (or an array-like object), separated by commas or a specified separator string. 
//? If the array has only one item, then that item will be returned without using the separator.

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"

// ********SLICE********
//? The slice() method returns a shallow copy of a portion of an array into a new array object 
//? selected from start to end (end not included) where start and end represent the index of items 
//? in that array. The original array will not be modified.

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ********SPLICE********
//? The splice() method changes the contents of an array by removing or replacing 
//? existing elements and/or adding new elements in place. To access part of an array 
//? without modifying it, see slice().

  //^ Syntax -->
  //^ splice(start)
  //^ splice(start, deleteCount)
  //^ splice(start, deleteCount, item1)
  //^ splice(start, deleteCount, item1, item2, itemN)

// const months = ['Jan', 'March', 'April', 'June'];

// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
