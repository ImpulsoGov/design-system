"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFrame = void 0;

var _react = _interopRequireDefault(require("react"));

var _IFrameModule = _interopRequireDefault(require("./IFrame.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IFrame = _ref => {
  let {
    height,
    link,
    id
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _IFrameModule.default["iframe"],
    align: "center",
    id: "formulario"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    width: "80%",
    height: height,
    src: link,
    allowFullScreen: true
  }));
};

exports.IFrame = IFrame;