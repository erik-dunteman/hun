function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively sort both halves
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left: number[], right: number[]): number[] {
    const mergedArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both arrays and push the smaller one into the merged array
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Push any remaining elements from the left and right arrays
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [6, 3, 8, 5, 2, 7, 4, 1];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray);
  