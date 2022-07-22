"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderModule = _interopRequireDefault(require("./Header.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = _ref => {
  let {
    titulo,
    tituloDestaque,
    texto,
    botao,
    chamada
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.conteinerHeader
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.tituloHeader
  }, titulo, /*#__PURE__*/_react.default.createElement("span", {
    className: _HeaderModule.default.tituloDestaqueHeader
  }, tituloDestaque)), /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.textoHeader
  }, texto), /*#__PURE__*/_react.default.createElement("div", {
    className: _HeaderModule.default.conteinerChamadasHeader
  }, botao.label && /*#__PURE__*/_react.default.createElement("a", {
    className: _HeaderModule.default.buttonHeader,
    href: botao === null || botao === void 0 ? void 0 : botao.url
  }, botao === null || botao === void 0 ? void 0 : botao.label.toUpperCase()), chamada.label && /*#__PURE__*/_react.default.createElement("a", {
    className: _HeaderModule.default.consultoriaHeader,
    href: chamada === null || chamada === void 0 ? void 0 : chamada.url
  }, chamada === null || chamada === void 0 ? void 0 : chamada.label.toUpperCase())));
};

exports.Header = Header;