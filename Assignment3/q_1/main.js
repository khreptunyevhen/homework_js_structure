const input = [3, 4, 1, 4, 4, 2, 0, 4, 2, 0];

// Using a 'for' loop
// function find_duplicates(array) {
//   const array_duplicates = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         array_duplicates.push(array[i]);
//       }
//     }
//   }

//   if (array_duplicates.length !== 0) {
//     let output_set = new Set(array_duplicates);
//     const output = Array.from(output_set);

//     return output.join(", ");
//   } else {
//     console.log("The array doesn't have duplicates.");
//   }
// }

// // Using a 'for in' loop
function find_duplicates(array) {
  const array_duplicates = [];

  for (const index in array) {
    for (const index_2 in array) {
      if (array[+index] == array[+index_2 + +index + 1]) {
        array_duplicates.push(array[+index]);
      }
    }
  }

  if (array_duplicates.length !== 0) {
    let output_set = new Set(array_duplicates);
    const output = Array.from(output_set);

    return output.join(", ");
  } else {
    console.log("The array doesn't have duplicates.");
  }
}

console.log(find_duplicates(input));