const input = [3, 4, 1, 4, 4, 2, 0, 4, 2, 0];

// 1. Using Set and output is array []
function remove_duplicates(array) {
  const array_without_duplicates = Array.from(new Set(array));

  return array_without_duplicates;
}

// 2. Using forEach
// function remove_duplicates(array) {
//   const array_without_duplicates = [];

//   array.forEach((element) => {
//     if (!array_without_duplicates.includes(element)) {
//       array_without_duplicates.push(element);
//     }
//   });

//   return array_without_duplicates;
// }

console.log(remove_duplicates(input));

/* --------------------------- Below the worst solution ----------------------------- */
// 3. Using the 'for in' loop and output is object {}
// function remove_duplicates(array) {
//   const object_without_duplicates = {};

//   for (const index in array) {
//     for (const index_2 in array) {
//       if (array[+index] !== array[+index_2 + +index + 1]) {
//         object_without_duplicates[array[+index]] = array[+index];
//       }
//     }
//   }

//   return object_without_duplicates;
// }
