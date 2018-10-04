// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = prop => prop;

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

  const inc = () => {
    ++num;

    return inc;
  };

  inc.toString = () => num;

  return inc;
})();

let asyncNum = 0;
const asyncIncrementor = () => {
  return new Promise(resolve => {
    return resolve(++asyncNum);
  });
};

const createIncrementer = () => {
  let a = 0;

  function* incr() {
    do {
      yield ++a;
    } while (a);
  }

  return incr();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = param => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};
const getDeepPropertiesCount = obj => {
  return JSON.stringify(obj).match(/\d+/g).length;
};
const createSerializedObject = () => new String();
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
