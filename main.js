function mergeSort(red, black) {
  if (red.length == 0) {
    return black;
  }
  if (black.length == 0) {
    return red;
  }

  let redElement = red[0];
  let blackElement = black[0];
  const mergedElement = [];
  let i = 1;
  let j = 1;

  while (redElement || blackElement) {
    if (!blackElement || redElement < blackElement) {
      mergedElement.push(redElement);
      redElement = red[i];
      i++;
    } else {
      mergedElement.push(blackElement);
      blackElement = black[j];
      j++;
    }
  }

  return mergedElement;
}

let sortedElements = mergeSort([0, 3, 5, 7, 9], [4, 8, 30]);
console.log(sortedElements);
