"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TituloTexto = void 0;

var _react = _interopRequireDefault(require("react"));

var _sanitize = require("../sanitize");

var _TituloTextoModule = _interopRequireDefault(require("./TituloTexto.module.css"));

var _ImagensFull = require("../Imagens/ImagensFull");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImageTop = _ref => {
  let {
    top,
    link,
    titulo
  } = _ref;

  if (top == true) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ImagensFull.ImagensFull2, {
      imagem: link
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: _TituloTextoModule.default.tituloTexto,
      dangerouslySetInnerHTML: {
        __html: (0, _sanitize.sanitize)(titulo)
      }
    }));
  } else if (top == false) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: _TituloTextoModule.default.tituloTexto,
      dangerouslySetInnerHTML: {
        __html: (0, _sanitize.sanitize)(titulo)
      }
    }), /*#__PURE__*/_react.default.createElement(_ImagensFull.ImagensFull2, {
      imagem: link
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: _TituloTextoModule.default.tituloTexto,
      dangerouslySetInnerHTML: {
        __html: (0, _sanitize.sanitize)(titulo)
      }
    }));
  }
};

const TituloTexto = _ref2 => {
  let {
    titulo,
    texto,
    imagem
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TituloTextoModule.default.containerTexto
  }, /*#__PURE__*/_react.default.createElement(ImageTop, {
    top: imagem.posicao,
    link: imagem.url,
    titulo: titulo
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _TituloTextoModule.default.corpoTexto,
    dangerouslySetInnerHTML: {
      __html: (0, _sanitize.sanitize)(texto)
    }
  }));
};

exports.TituloTexto = TituloTexto;