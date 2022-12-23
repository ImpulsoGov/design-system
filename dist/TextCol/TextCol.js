"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCol = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextColModule = _interopRequireDefault(require("./TextCol.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextCol = _ref => {
  let {
    titulo,
    corpo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TextColModule.default.TextCol
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _TextColModule.default.TextColTitle
  }, titulo), /*#__PURE__*/_react.default.createElement("div", {
    className: _TextColModule.default.TextColBody
  }, corpo));
};

exports.TextCol = TextCol;