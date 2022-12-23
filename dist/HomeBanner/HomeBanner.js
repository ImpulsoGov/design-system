"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeBanner = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _HomeBannerModule = _interopRequireDefault(require("./HomeBanner.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HomeBanner = _ref => {
  let {
    titulo,
    tituloDestaque,
    texto,
    theme
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_HomeBannerModule.default.conteinerHeader, _HomeBannerModule.default["conteinerHeader" + theme])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_HomeBannerModule.default.tituloHeader, _HomeBannerModule.default["tituloHeader" + theme])
  }, titulo, /*#__PURE__*/_react.default.createElement("span", {
    className: theme ? (0, _classnames.default)(_HomeBannerModule.default["tituloDestaqueHeader" + theme]) : (0, _classnames.default)(_HomeBannerModule.default.tituloDestaqueHeader)
  }, tituloDestaque)), /*#__PURE__*/_react.default.createElement("div", {
    className: _HomeBannerModule.default.textoHeader
  }, texto));
};

exports.HomeBanner = HomeBanner;