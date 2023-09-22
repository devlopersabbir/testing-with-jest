/**
 *
 * @param {object} obj object
 * @returns object
 */

const shallowObj = (obj) => {
  return { ...obj };
};

module.exports = shallowObj;
