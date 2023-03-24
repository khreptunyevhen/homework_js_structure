const input = [3, 4, 1, 4, 4, 2, 0, 4, 2, 0];

// Using the 'for in' loop and output is object {}
function remove_duplicates(array) {
  const object_without_duplicates = {};

  for (const index in array) {
    for (const index_2 in array) {
      if (array[+index] !== array[+index_2 + +index + 1]) {
        object_without_duplicates[array[+index]] = array[+index];
      }
    }
  }

  return object_without_duplicates;
}

// Using Set and output is array []
// function remove_duplicates(array) {
//   const array_without_duplicates = Array.from(new Set(array));

//   return array_without_duplicates;
// }

console.log(remove_duplicates(input));
