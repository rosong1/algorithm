function drop(arr, func) {
// Drop them elements.
    for(let i = 0; i < arr.length; i++) {
      if(func(arr[i])) {
        return arr;
      } else {
        arr.shift();
        i--;
        if (arr.length === 0) {
          return [];
        }
      }
    }
}