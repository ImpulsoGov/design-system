"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _sanitize = require("../sanitize");

var _classnames = _interopRequireDefault(require("classnames"));

var _HeaderModule = _interopRequireDefault(require("./Header.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = _ref => {
  let {
    titulo,
    texto,
    botao,
    chamada,
    theme
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_HeaderModule.default.conteinerHeader, _HeaderModule.default["theme" + theme])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.tituloHeader,
    dangerouslySetInnerHTML: {
      __html: (0, _sanitize.sanitize)(titulo)
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.textoHeader,
    dangerouslySetInnerHTML: {
      __html: (0, _sanitize.sanitize)(texto)
    }
  }), (botao.label || chamada.label) && /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.conteinerChamadasHeader
  }, botao.label && /*#__PURE__*/_react.default.createElement(_link.default, {
    href: botao.url
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)(_HeaderModule.default.buttonHeader, _HeaderModule.default["buttonHeader" + theme])
  }, botao.label.toUpperCase())), chamada.label && /*#__PURE__*/_react.default.createElement(_link.default, {
    href: chamada.url
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)(_HeaderModule.default.consultoriaHeader, _HeaderModule.default["consultoriaHeader" + theme])
  }, chamada.label.toUpperCase()))));
};

exports.Header = Header;