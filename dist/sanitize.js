"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = void 0;

var _dompurify = _interopRequireDefault(require("dompurify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sanitize = content => {
  return typeof window !== "undefined" ? _dompurify.default.sanitize(content, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ['allow', 'allowFullScreen', 'frameBorder', 'scrolling', 'width', 'height', 'title', 'src']
  }) : content;
};

exports.sanitize = sanitize;