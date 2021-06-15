module.exports.serielize = function serialize(arr) {
  const size = 3;
  const chunkedArray = [];
  for (let i = 0; i < 9; i = i + 3) {
    chunkedArray.push([arr[i], arr[i + 1], arr[i + 2]]);
  }
  return chunkedArray;
};

module.exports.deSerielize = function deSerielize(arr) {
  let chunkedArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      chunkedArray.push(arr[i][j]);
    }
  }
  return chunkedArray;
};
