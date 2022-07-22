"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLogin = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./ButtonLogin.css";
const ButtonLogin = _ref => {
  let {} = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "ButtonLogin"
  }, "Entrar"), /*#__PURE__*/_react.default.createElement("style", {
    jsx: true
  }, "\n          .ButtonLogin{\n            background-color: #145C56;\n            color: #FFFFFF;\n            border-radius: 30px;\n            border: 1px solid #FFFFFF;\n            width: 100%;\n            height: 100%;\n            padding: 15px;\n            opacity: 1;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        \n        .ButtonLogin:hover {opacity: 0.6}\n        "));
};

exports.ButtonLogin = ButtonLogin;