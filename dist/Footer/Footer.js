"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FooterModule = _interopRequireDefault(require("./Footer.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InstagramSVG = "/instagram.svg";
const LinkedInSVG = "/linked-in.svg";
const TwitterSVG = "/twitter.svg";

const Footer = _ref => {
  let {
    theme,
    address,
    contactCopyright,
    links,
    socialMediaURLs
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_FooterModule.default["containerFooter"], _FooterModule.default["theme" + theme.cor + "Footer"])
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: _FooterModule.default.logoWrapperFooter,
    alt: "impulso-previne-logo",
    src: String(theme.logoProjeto)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.infoLinksWrapperFooter
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.conteinerUpperFooter
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.listFooter
  }, links.map(item => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.label,
      className: _FooterModule.default.itemFooter
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item.url,
      className: _FooterModule.default["theme" + theme.cor + "Footer"]
    }, item.label));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.realizacaoFooter
  }, /*#__PURE__*/_react.default.createElement("div", null, "Realiza\xE7\xE3o:"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: _FooterModule.default.logoImpulso,
    alt: "impulso-gov-logo",
    src: String(theme.logoImpulso)
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.contactAddressSocialMediasFooter
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.contactAddressFooter
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, address.first), /*#__PURE__*/_react.default.createElement("div", null, address.second)), /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.contactFooter
  }, /*#__PURE__*/_react.default.createElement("div", null, contactCopyright.email), /*#__PURE__*/_react.default.createElement("div", null, contactCopyright.copyright))), /*#__PURE__*/_react.default.createElement("div", {
    className: _FooterModule.default.socialMediasFooter
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: _FooterModule.default.socialMediaFooter,
    href: socialMediaURLs.twitter
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _FooterModule.default.socialMediaFooter,
    alt: "twitter",
    src: TwitterSVG
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: _FooterModule.default.socialMediaFooter,
    href: socialMediaURLs.instagram
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _FooterModule.default.socialMediaFooter,
    alt: "instagram",
    src: InstagramSVG
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: _FooterModule.default.socialMediaFooter,
    href: socialMediaURLs.linkedIn
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _FooterModule.default.socialMediaFooter,
    alt: "linkedin",
    src: LinkedInSVG
  }))))));
};

exports.Footer = Footer;