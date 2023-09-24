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
var _yaml = require("yaml");

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
var checkYamlSchema = function checkYamlSchema(yamlValue, schema) {
  var value = null;
  try {
    value = (0, _yaml.parse)(yamlValue);
  } catch (_) {
    // ? This place is empty because the function is requested to return 'TypeError'.
  }
  if (
    !(0, _checkKeys["default"])(
      JSON.stringify(value),
      JSON.stringify(schema.schema)
    )
  ) {
    var error = new TypeError("The value does not match the specified schema.");
    return {
      error: error,
    };
  }
  if (_typeof(schema) !== "object") {
    var _error = new TypeError(
      "The 'schema' parameter must contain a Yaml object."
    );
    console.error(_error);
    return {
      error: _error,
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
    var _error2 = new SyntaxError(
      "The value does not match the types in the schema."
    );
    return {
      error: _error2,
    };
  }
  return {
    error: false,
    schema: schema,
    schemaString: JSON.stringify(schema),
    ok: true,
    type: "yaml",
  };
};
var _default = checkYamlSchema;
exports["default"] = _default;
