"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _checkKeys = _interopRequireDefault(require("./checkKeys.cjs"));
var _checkValue = _interopRequireDefault(require("./checkValue.cjs"));
var _findKey = _interopRequireDefault(require("./findKey.cjs"));
var checkSchema = function checkSchema(value, schema) {
  if (!(0, _checkKeys["default"])(value, schema.schema)) {
    var error = new TypeError("The value does not match the specified schema.");
    return {
      error: error,
    };
  }
  var isTypesTrue = true;
  Object.values(value).forEach(function (name) {
    if (
      !(0, _checkValue["default"])(
        name,
        schema.schema[(0, _findKey["default"])(value, name)]
      )
    ) {
      isTypesTrue = false;
    }
  });
  if (!isTypesTrue) {
    var _error = new SyntaxError(
      "The value does not match the types in the schema."
    );
    return {
      error: _error,
    };
  }
  return {
    error: false,
    schema: schema,
    schemaString: JSON.stringify(schema),
    type: "json",
  };
};
var _default = checkSchema;
exports["default"] = _default;
