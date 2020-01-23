/**
 * Shuffles an array using the Fisher-Yates algorithm
 *
 * @see https://github.com/Daplie/knuth-shuffle/blob/master/index.js
 *
 * @param {Array} data
 */
export function shuffle(data) {
  let i = data.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}
