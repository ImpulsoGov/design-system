"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagensFull3 = exports.ImagensFull2 = exports.ImagensFull = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImagensFullModule = _interopRequireDefault(require("./ImagensFull.module.css"));

var _ImagensFull2Module = _interopRequireDefault(require("./ImagensFull2.module.css"));

var _ImagensFull3Module = _interopRequireDefault(require("./ImagensFull3.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImagensFull = _ref => {
  let {
    imagem
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagensFullModule.default.containerBanner1
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _ImagensFullModule.default.imageContainerBanner1,
    alt: "BannerImage1",
    src: String(imagem)
  }));
};

exports.ImagensFull = ImagensFull;

const ImagensFull2 = _ref2 => {
  let {
    imagem
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagensFull2Module.default.containerBanner2
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _ImagensFull2Module.default.imageContainerBanner2,
    alt: "BannerImage1",
    src: String(imagem)
  }));
};

exports.ImagensFull2 = ImagensFull2;

const ImagensFull3 = _ref3 => {
  let {
    imagem
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagensFull3Module.default.containerBanner3
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _ImagensFull3Module.default.imageContainerBanner3,
    alt: "BannerImage1",
    src: String(imagem)
  }));
};

exports.ImagensFull3 = ImagensFull3;