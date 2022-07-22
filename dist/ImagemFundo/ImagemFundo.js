"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagemFundo = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImagemFundoModule = _interopRequireDefault(require("./ImagemFundo.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImagemFundoPNG = "/imagem-fundo.png";

const ImagemFundo = _ref => {
  let {
    chamada,
    chamadacolor,
    cards,
    botao
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.containerImagemFundo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.containerImagemGradiente
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _ImagemFundoModule.default.imagemFundo,
    src: ImagemFundoPNG
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.gradienteImagemFundo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.chamadaImagemFundo
  }, chamada, /*#__PURE__*/_react.default.createElement("span", {
    className: _ImagemFundoModule.default.chamadaColor
  }, chamadacolor)), /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.cardsImagemFundo
  }, cards.map((card, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.cardImagemFundo,
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.cardTitleImagemFundo
    }, card.title), /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.cardBodyImagemFundo
    }, card.body));
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: botao.url,
    className: _ImagemFundoModule.default.botaoImagemFundo
  }, botao.label.toUpperCase()))));
};

exports.ImagemFundo = ImagemFundo;