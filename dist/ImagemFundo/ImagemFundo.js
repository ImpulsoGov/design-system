"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagemFundo = void 0;

var _link = _interopRequireDefault(require("next/link"));

var _react = _interopRequireDefault(require("react"));

var _ImagemFundoModule = _interopRequireDefault(require("./ImagemFundo.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImagemFundo = _ref => {
  let {
    chamada,
    chamadacolor,
    subtexto,
    cards,
    botao,
    imagem
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.containerImagemFundo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.containerImagemGradiente
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _ImagemFundoModule.default.imagemFundo,
    src: imagem
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.gradienteImagemFundo
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.chamadaImagemFundo
  }, chamada, /*#__PURE__*/_react.default.createElement("span", {
    className: _ImagemFundoModule.default.chamadaColor
  }, chamadacolor)), subtexto && /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.ImagemFundoSubTexto
  }, subtexto), /*#__PURE__*/_react.default.createElement("div", {
    className: _ImagemFundoModule.default.cardsImagemFundo
  }, cards.map((card, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.cardImagemFundo,
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.cardTitleImagemFundo
    }, card.title), typeof card.body == 'string' && /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.cardBodyImagemFundo
    }, card.body), Array.isArray(card.body) && /*#__PURE__*/_react.default.createElement("div", {
      className: _ImagemFundoModule.default.ImagemFundoCardBodyContainer
    }, card.body.map(item => {
      return /*#__PURE__*/_react.default.createElement(_link.default, {
        href: item.url
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: _ImagemFundoModule.default.ImagemFundoCardBodyItem
      }, item.label));
    })));
  })), botao.url && /*#__PURE__*/_react.default.createElement("a", {
    href: botao.url,
    className: _ImagemFundoModule.default.botaoImagemFundo
  }, botao.label.toUpperCase()))));
};

exports.ImagemFundo = ImagemFundo;