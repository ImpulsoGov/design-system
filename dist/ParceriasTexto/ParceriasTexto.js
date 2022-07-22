"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParceriasTexto = void 0;

var _react = _interopRequireDefault(require("react"));

var _ParceriasTextoModule = _interopRequireDefault(require("./ParceriasTexto.module.css"));

var _sanitize = require("../sanitize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ParceriasTexto = _ref => {
  let {
    text,
    label,
    parceiros
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ParceriasTextoModule.default.container_parceiros
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ParceriasTextoModule.default.textoParcerias,
    dangerouslySetInnerHTML: {
      __html: (0, _sanitize.sanitize)(text)
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _ParceriasTextoModule.default.parceirosLabel
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: _ParceriasTextoModule.default.gridContainer
  }, parceiros.map((parceiro, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _ParceriasTextoModule.default.logo_parceiros,
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _ParceriasTextoModule.default.imageContainer,
      alt: parceiro.alt,
      src: parceiro.src
    }));
  })));
};

exports.ParceriasTexto = ParceriasTexto;