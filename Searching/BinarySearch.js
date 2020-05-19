function binarySearch(array, x, low, high) {

    if (high >= low) {
      let mid = low + (high - low) / 2;

      if (array[mid] == x)
        return mid;

      if (array[mid] > x)
        return binarySearch(array, x, low, mid - 1);

      return binarySearch(array, x, mid + 1, high);
    }

    return -1;
  }

  let array = [3, 4, 5, 6, 7, 8, 9 ];
    let n = array.length;
    let x = 4;
    let result = binarySearch(array, x, 0, n - 1);
    if (result == -1)
      console.log("Not found");
    else
    console.log("Element found at index " + result);