"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports["default"] = void 0;
var _checkYamlSchema = _interopRequireDefault(require("./checkYamlSchema.cjs"));
var _checkJsonSchema = _interopRequireDefault(require("./checkJsonSchema.cjs"));
var _createJsonSchema = _interopRequireDefault(
  require("./createJsonSchema.cjs")
);
var _createXmlSchema = _interopRequireDefault(require("./createXmlSchema.cjs"));
var _createYamlSchema = _interopRequireDefault(
  require("./createYamlSchema.cjs")
);
var _default = {
  chechJsonSchema: _checkJsonSchema["default"],
  checkYamlSchema: _checkYamlSchema["default"],
  createJsonSchema: _createJsonSchema["default"],
  createXmlSchema: _createXmlSchema["default"],
  createYamlSchema: _createYamlSchema["default"],
};
module.exports = _default;
