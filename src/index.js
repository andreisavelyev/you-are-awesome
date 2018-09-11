// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = prop => {
  return prop;
};
const createNotEnumerableProperty = prop => {
  Object.defineProperty(Object.prototype, prop, {
    enumerable: false,
    set: value => (prop = value),
    get: () => prop
  });
  return prop;
};
const createProtoMagicObject = () => {
  function f() {}
  f.__proto__ = f.prototype;
  return f;
};
const incrementor = (() => {
  let num = 0;

  function inc() {
    ++num;

    return inc;
  }

  inc.toString = function() {
    return num;
  };
  return inc;
})();

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = arr => {
  return arr.sort((a, b) => b.__proto__ - a.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
