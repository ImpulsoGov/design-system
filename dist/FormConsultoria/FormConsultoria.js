"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormConsultoria = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _FormConsultoriaModule = _interopRequireDefault(require("./FormConsultoria.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormConsultoria = _ref => {
  let {
    title,
    mail,
    link,
    button
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "formulario"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _FormConsultoriaModule.default.containerFormConsultoria
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _FormConsultoriaModule.default.titleFormConsultoria
  }, title, /*#__PURE__*/_react.default.createElement("span", {
    className: _FormConsultoriaModule.default.mailFormConsultoria
  }, mail)), button != "" && /*#__PURE__*/_react.default.createElement(_link.default, {
    href: link
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: _FormConsultoriaModule.default.buttonFormConsultoria
  }, button.toUpperCase()))));
};

exports.FormConsultoria = FormConsultoria;