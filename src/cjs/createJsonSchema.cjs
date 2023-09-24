"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Creates an object containing type rules for the JSON format.
 *
 * @param {object} schema
 *
 * @returns {object}
 */

var createJsonSchema = function createJsonSchema(schema) {
  if (_typeof(schema) !== "object") {
    var error = new TypeError("The 'schema' parameter must contain a JSON object.");
    console.error(error);
    return {
      error: error
    };
  }
  Object.values(schema).forEach(function (value) {
    if (value !== "string" && value !== "number" && value !== "boolean" && value !== "object" && value !== "function" && value !== "undefined" && value !== "null") {
      var _error = new TypeError("'schema' must consist of valid type values.");
      console.error(_error);
      return {
        error: _error
      };
    }
  });
  return {
    error: false,
    schema: schema,
    schemaString: JSON.stringify(schema),
    ok: true,
    type: "json"
  };
};
var _default = createJsonSchema;
exports["default"] = _default;