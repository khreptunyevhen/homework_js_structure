function show(arr) {
  if (arr !== undefined) {
    console.log(`The initial array: ${arr}`);
    console.log(`The average of the whole group: ${get_average(arr)}`);
    console.log(`The highest number is: ${get_highest(arr)}`);
    console.log(`The lowest number is: ${get_lowest(arr)}`);
    console.log(`The count of even values: ${how_get_even(arr)}`);
    console.log(`The count of odd values: ${how_get_odd(arr)}`);
  } else {
    console.log(`You have the wrong initial array.`);
  }
}

function create_array(arr_length, min_num, max_num) {
  if (
    Number.isInteger(arr_length) &&
    Number.isInteger(min_num) &&
    Number.isInteger(max_num)
  ) {
    let arr = [];

    for (let i = 0; i < arr_length; i++) {
      arr[i] = Math.floor(Math.random() * (max_num - min_num) + min_num);
    }

    return arr;
  } else {
    console.log(`The input values have to be the numbers.`);
  }
}

function get_average(arr) {
  let sum = 0;
  let everage;

  for (let num of arr) {
    sum += num;
  }

  everage = (sum / arr.length).toFixed(2);

  return everage;
}

function get_highest(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

function get_lowest(arr) {
  let min = arr[0];

  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

function how_get_even(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }

  return count;
}

function how_get_odd(arr) {
  let count = 0;

  for (let num of arr) {
    if (num % 2 !== 0) {
      count++;
    }
  }

  return count;
}

show(create_array(100, 1, 100));
