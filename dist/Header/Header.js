"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _sanitize = require("../sanitize");

var _HeaderModule = _interopRequireDefault(require("./Header.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = _ref => {
  let {
    titulo,
    texto,
    botao,
    chamada
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.conteinerHeader
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
  }, botao.label && /*#__PURE__*/_react.default.createElement("a", {
    className: _HeaderModule.default.buttonHeader,
    href: botao.url
  }, botao.label.toUpperCase()), chamada.label && /*#__PURE__*/_react.default.createElement("a", {
    className: _HeaderModule.default.consultoriaHeader,
    href: chamada.url
  }, chamada.label.toUpperCase())));
};

exports.Header = Header;