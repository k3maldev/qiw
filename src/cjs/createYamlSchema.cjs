"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _yaml = require("yaml");
function _typeof(obj) {
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
/**
 * Creates an object containing type rules for the Yaml format.
 *
 * @param {object} schema
 *
 * @returns {object}
 */

var createYamlSchema = function createYamlSchema(yamlSchema) {
  var schema = null;
  try {
    schema = (0, _yaml.parse)(yamlSchema);
  } catch (_) {
    // ? This place is empty because the function is requested to return 'TypeError'.
  }
  if (_typeof(schema) !== "object") {
    var error = new TypeError(
      "The 'schema' parameter must contain a Yaml object."
    );
    console.error(error);
    return {
      error: error,
    };
  }
  Object.values(schema).forEach(function (value) {
    if (
      value !== "string" &&
      value !== "number" &&
      value !== "boolean" &&
      value !== "object" &&
      value !== "function" &&
      value !== "undefined" &&
      value !== "null"
    ) {
      var _error = new TypeError("'schema' must consist of valid type values.");
      console.error(_error);
      return {
        error: _error,
      };
    }
  });
  return {
    error: false,
    schema: schema,
    schemaString: (0, _yaml.stringify)(schema),
    type: "yaml",
  };
};
var _default = createYamlSchema;
exports["default"] = _default;
