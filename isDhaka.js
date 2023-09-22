/**
 * @param {string} word
 * @returns {boolean} boolean
 */

const isDhaka = (word) => {
  return (
    word.toLowerCase() ===
    word.toLowerCase().split("").reverse().join("").replaceAll(",", "")
  );
};

module.exports = isDhaka;
