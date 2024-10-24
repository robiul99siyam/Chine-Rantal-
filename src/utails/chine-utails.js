// create myMap function
export const myMap = (array, cb) => {
  let newArr = [];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let temp = cb(array[i], i, array);
    newArr.push(temp);
  }

  return newArr;
};

//  get url path function create

export const getImageUrl = (name) => {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
};

export function myFilter(array, cb) {
  let newArr = [];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    if (cb(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
