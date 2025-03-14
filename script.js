function insertionSort(arr) {
  // Start from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // The current element to insert
    let j = i - 1; // Index for the sorted portion of the array

    // Shift elements of arr[0..i-1], that are greater than current, to one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift the element to the right
      j--; // Move the index to the left
    }

    // Insert the current element into the correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Test the function
let arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted Array:", insertionSort(arr)); // Output: [1, 2, 5, 5, 6, 9]
