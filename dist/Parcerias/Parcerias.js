"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parcerias = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Parcerias = _interopRequireDefault(require("./Parcerias.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Parcerias = _ref => {
  let {
    parceiros,
    theme
  } = _ref;
  //"container_parceiros"
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_Parcerias.default.container_parceiros, _Parcerias.default["theme" + theme])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _Parcerias.default.parceirosLabel
  }, "Parceiros"), /*#__PURE__*/_react.default.createElement("div", {
    className: _Parcerias.default.gridContainer
  }, parceiros.map((parceiro, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _Parcerias.default.logo_parceiros,
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _Parcerias.default.imageContainer,
      alt: parceiro.alt,
      src: parceiro.src
    }));
  })));
};

exports.Parcerias = Parcerias;