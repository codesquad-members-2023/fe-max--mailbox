export function customMergeSort(arr) {
  if (arr.length <= 1) return arr;

  return merge(
    customMergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    customMergeSort(arr.slice(Math.floor(arr.length / 2)))
  );
}

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    const size1 = i < arr1.length ? parseInt(arr1[i].size) : arr1[i];
    const size2 = j < arr2.length ? parseInt(arr2[j].size) : arr2[j];

    if (size1 <= size2 || j >= arr2.length) {
      results.push(arr1[i]);
      i++;
    } else if (size1 > size2 || i >= arr1.length) {
      results.push(arr2[j]);
      j++;
    }
  }

  return results;
}
