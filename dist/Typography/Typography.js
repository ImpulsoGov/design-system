"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ETYPOGRAPHY_VARIANTS = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TypographyModule = _interopRequireDefault(require("./Typography.module.css"));

const _excluded = ["as", "variant", "className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const ETYPOGRAPHY_VARIANTS = () => {
  return HEADLINE_XXL = "headlineXXl", HEADLINE_XL = "headlineXl", HEADLINE_L = "headlineL", HEADLINE_M = "headlineM", HEADLINE_S = "headlineS", BODY_XL = "bodyXl", BODY_L = "bodyL", BODY_M = "bodyM", BODY_S = "bodyS", BUTTON_LABEL_L = "buttonLabelL", BUTTON_LABEL = "buttonLabel", LINK = "link", CAPTION = "caption";
};

exports.ETYPOGRAPHY_VARIANTS = ETYPOGRAPHY_VARIANTS;

const Typography = _ref => {
  let {
    as = "p",
    variant = ETYPOGRAPHY_VARIANTS.BODY_M,
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const Component = as;
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: (0, _classnames.default)(_TypographyModule.default.type, _TypographyModule.default[variant], className)
  }, props), children);
};

var _default = Typography;
exports.default = _default;