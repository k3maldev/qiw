"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var checkKeys = function checkKeys(one, two) {
  return JSON.stringify(Object.keys(one)) == JSON.stringify(Object.keys(two));
};
var _default = checkKeys;
exports["default"] = _default;