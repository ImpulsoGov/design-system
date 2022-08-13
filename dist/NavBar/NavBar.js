"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NavBarModule = _interopRequireDefault(require("./NavBar.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavBarMenu = (tema, NavBarIconBranco, NavBarIconDark) => {
  let theme = tema == "ColorIP" ? NavBarIconBranco : NavBarIconDark;
  return theme;
};

const Dropdown = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default["dropdownNavBar"]
  }, /*#__PURE__*/_react.default.createElement("div", null, props.link), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.dropdownContentNavBar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.iconDropdownNavBar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.iconDropdownContainerNavBar
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.itensDropdownNavBar
  }, props.subtitles.map((subtitle, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _NavBarModule.default.dropdownItemNavBar
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: subtitle.url
    }, subtitle.label)));
  }))));
};

const DropdownMenu = attr => {
  if (attr.index == 2) {
    return /*#__PURE__*/_react.default.createElement(Dropdown, {
      link: attr.link.label,
      subtitles: attr.props.subtitles
    });
  } else {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: attr.link.url,
      className: _NavBarModule.default["theme" + attr.props.theme.cor]
    }, attr.link.label);
  }
};

const DropdownMenuMoblie = attr => {
  const [active, setMode] = (0, _react.useState)(false);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  if (attr.index == 2) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      onClick: menuVisible
    }, attr.link.label), active && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(_NavBarModule.default.subMenuMoblie, _NavBarModule.default.themeColorIP)
    }, attr.props.subtitles.map(subtitle => {
      return /*#__PURE__*/_react.default.createElement("a", {
        href: subtitle.url,
        className: _NavBarModule.default.linkNavBarMoblie
      }, subtitle.label);
    })));
  } else {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: attr.link.url
    }, attr.link.label);
  }
};

const NavBar = props => {
  const [active, setMode] = (0, _react.useState)(true);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_NavBarModule.default.container_navbar, _NavBarModule.default["theme" + props.theme.cor])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.logoWrapper_navbar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.logo_navbar
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "impulso-previne-logo_navbar",
    src: String(props.theme.logoProjeto)
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.links_navbar
  }, props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: _NavBarModule.default.link_navbar
    }, DropdownMenu({
      index,
      link,
      props
    }));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default["buttonMoblie" + props.theme.cor],
    onClick: menuVisible
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "navBarIcon",
    alt: "NavBarIcon",
    src: NavBarMenu(props.theme.cor, props.NavBarIconBranco, props.NavBarIconDark)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: active ? _NavBarModule.default["linksNavBarMoblie"] : (0, _classnames.default)(_NavBarModule.default["linksNavBarMoblie"], _NavBarModule.default["linksNavBarMoblieVisible"])
  }, props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: _NavBarModule.default.link_navbar
    }, DropdownMenuMoblie({
      index,
      link,
      props
    }));
  })));
};

exports.NavBar = NavBar;