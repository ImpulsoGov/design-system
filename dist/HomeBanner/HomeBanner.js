"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeBanner = void 0;

var _react = _interopRequireDefault(require("react"));

var _HomeBannerModule = _interopRequireDefault(require("./HomeBanner.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HomeBanner = _ref => {
  let {
    titulo,
    tituloDestaque,
    texto
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _HomeBannerModule.default.conteinerHeader
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _HomeBannerModule.default.tituloHeader
  }, titulo, /*#__PURE__*/_react.default.createElement("span", {
    className: _HomeBannerModule.default.tituloDestaqueHeader
  }, tituloDestaque)), /*#__PURE__*/_react.default.createElement("div", {
    className: _HomeBannerModule.default.textoHeader
  }, texto));
};

exports.HomeBanner = HomeBanner;