function steamroller(arr) {
  const resultArr = [];
  const isArray = (arg) => Object.prototype.toString.call(arg) === "[object Array]";
  const roller = (Arr) => {
    Arr.forEach(item => {
      if (isArray(item)) {
        roller(item);
      } else {
        resultArr.push(item);
      }
    });
  };
  roller(arr);
  return resultArr;
}