// z - a 내림차순
export const sortAscend = (arr, key) =>
  arr.sort((a, b) => {
    if (a[key] > b[key]) return -1;
    if (b[key] < a[key]) return 1;
    return 0;
  });

// a - z 오름차순
export const sortDescend = (arr, key) =>
  arr.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (b[key] > a[key]) return 1;
    return 0;
  });
