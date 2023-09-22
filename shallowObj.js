class ShallowObj {
  /**
   *
   * @param {object} obj object
   * @returns object
   */
  constructor(obj) {
    return { ...obj };
  }
}

module.exports = ShallowObj;
