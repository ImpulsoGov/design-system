"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NavBarModule = _interopRequireDefault(require("./NavBar.module.css"));

var _SearchBar = require("../SearchBar/SearchBar");

var _Modal = require("../Modal");

var _ModalLogged = require("../ModalLogged");

var _Login = require("../Login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavBarMenu = (tema, NavBarIconBranco, NavBarIconDark) => {
  let theme = tema == "ColorIP" || tema == "ColorAGP" || tema == "ColorSM" ? NavBarIconBranco : NavBarIconDark;
  return theme;
};

const DropdownMenu = attr => {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: attr.link.url,
    className: _NavBarModule.default["theme" + attr.props.theme.cor]
  }, attr.link.label);
};

const DropdownMenuMoblie = attr => {
  const [active, setMode] = (0, _react.useState)(false);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  return /*#__PURE__*/_react.default.createElement("a", {
    href: attr.link.url
  }, attr.link.label);
};

const NavBar = props => {
  var _props$user, _props$user$label;

  const [active, setMode] = (0, _react.useState)(true);
  const [modal, setModal] = (0, _react.useState)(false);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  const Logged = /*#__PURE__*/_react.default.createElement(_ModalLogged.ModalLogged, {
    nome: props.user.nome,
    label: props.user.label,
    cargo: props.user.cargo,
    button: props.user.button,
    logout: props.user.logout
  });

  const login = /*#__PURE__*/_react.default.createElement(_Login.Login, {
    titulo: "Fa\xE7a o login para ver o painel de busca ativa",
    button: {
      label: "entrar"
    },
    entrar: props.user.login
  });

  const ModalChildren = [Logged, login];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_NavBarModule.default.container_navbar, _NavBarModule.default["theme" + props.theme.cor])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.logoWrapper_navbar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.logo_navbar
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: _NavBarModule.default.logoWrapper_navbar,
    alt: "impulso-previne-logo_navbar",
    src: String(props.theme.logoProjeto)
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.NavBarSearchConteinerMoblie
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    data: props.data,
    theme: props.theme.cor,
    municipio: props.municipio,
    setMunicipio: props.setMunicipio
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.links_navbar
  }, props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: _NavBarModule.default.link_navbar
    }, DropdownMenu({
      index,
      link,
      props
    }), props.submenu && /*#__PURE__*/_react.default.createElement("div", {
      className: _NavBarModule.default.NavBarSubMenuContainer
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: props.submenu[index].url,
      className: _NavBarModule.default.NavBarSubMenu
    }, props.submenu[index].label), props.submenu[index].sub && /*#__PURE__*/_react.default.createElement("a", {
      href: props.submenu[index].sub.url,
      className: _NavBarModule.default.NavBarSecondSubMenu
    }, props.submenu[index].sub.label)));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.NavBarSearchConteiner
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    data: props.data,
    theme: props.theme.cor,
    municipio: props.municipio,
    setMunicipio: props.setMunicipio
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_NavBarModule.default.NavBarLogin, _NavBarModule.default['NavBarLogin' + props.theme.cor], _NavBarModule.default[(props === null || props === void 0 ? void 0 : (_props$user = props.user) === null || _props$user === void 0 ? void 0 : (_props$user$label = _props$user.label) === null || _props$user$label === void 0 ? void 0 : _props$user$label.length) == 1 ? 'NavBarLogged' : 'NavBarLogOut']),
    onClick: () => setModal(!modal)
  }, props.user.label)), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default["buttonMoblie" + props.theme.cor],
    onClick: menuVisible
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "navBarIcon",
    alt: "NavBarIcon",
    src: NavBarMenu(props.theme.cor, props.NavBarIconBranco, props.NavBarIconDark)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: active ? (0, _classnames.default)(_NavBarModule.default["linksNavBarMoblie"]) : (0, _classnames.default)(_NavBarModule.default["linksNavBarMoblie"], _NavBarModule.default["linksNavBarMoblieVisible"], _NavBarModule.default["linksNavBarMoblie" + props.theme.cor])
  }, props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: _NavBarModule.default.link_navbar
    }, DropdownMenuMoblie({
      index,
      link,
      props
    }));
  }))), modal && /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.NavBarModalContainer
  }, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    show: modal,
    setModal: setModal,
    child: props.user.nome ? ModalChildren[0] : ModalChildren[1]
  })));
};

exports.NavBar = NavBar;