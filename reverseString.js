class ReverseString {
  /**
   * @param {string} word
   * @returns {string} string
   */
  static reverse(word) {
    return word.toLowerCase().split("").reverse().join().replaceAll(",", "");
  }
}

// console.log(ReverseString.reverse("Sabbir"));

module.exports = ReverseString;
