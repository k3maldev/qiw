"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var findKey = function findKey(obj, valueToFind) {
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === valueToFind) {
      keys.push(key);
    }
  }
  return keys;
};
var _default = findKey;
exports["default"] = _default;