"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parcerias = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ParceriasModule = _interopRequireDefault(require("./Parcerias.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Parcerias = _ref => {
  let {
    parceiros,
    theme
  } = _ref;
  //"container_parceiros"
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_ParceriasModule.default.container_parceiros, _ParceriasModule.default["theme" + theme])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ParceriasModule.default.parceirosLabel
  }, "Parceiros"), /*#__PURE__*/_react.default.createElement("div", {
    className: _ParceriasModule.default.gridContainer
  }, parceiros.map((parceiro, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _ParceriasModule.default.logo_parceiros,
      key: index
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: _ParceriasModule.default.imageContainer,
      alt: parceiro.alt,
      src: parceiro.src
    }));
  })));
};

exports.Parcerias = Parcerias;