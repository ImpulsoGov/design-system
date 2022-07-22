"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parcerias = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Parcerias.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Parcerias = _ref => {
  let {
    parceiros
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container_parceiros"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "parceirosLabel"
  }, "Parceiros"), /*#__PURE__*/_react.default.createElement("div", {
    className: "gridContainer"
  }, parceiros.map((parceiro, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "logo_parceiros",
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "imageContainer",
      alt: parceiro.alt,
      src: parceiro.src
    }));
  })));
};

exports.Parcerias = Parcerias;