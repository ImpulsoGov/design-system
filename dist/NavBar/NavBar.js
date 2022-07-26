"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _link = _interopRequireDefault(require("next/link"));

var _NavBarModule = _interopRequireDefault(require("./NavBar.module.css"));

var _SearchBar = require("../SearchBar/SearchBar");

var _Modal = require("../Modal");

var _ModalLogged = require("../ModalLogged");

var _Login = require("../Login");

var _MenuMoblie = require("../MenuMoblie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavBarMenu = (tema, NavBarIconBranco, NavBarIconDark) => {
  let theme = tema == "ColorIP" || tema == "ColorAGP" || tema == "ColorSM" ? NavBarIconBranco : NavBarIconDark;
  return theme;
};

const Menu = _ref => {
  let {
    link,
    tema
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_link.default, {
    href: link.url
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: _NavBarModule.default["theme" + tema]
  }, link.label));
};

const SeletorMunicipios = _ref2 => {
  let {
    parentProps
  } = _ref2;
  const [display, setDisplay] = (0, _react.useState)(false);
  const refList = (0, _react.useRef)();
  const refSeletor = (0, _react.useRef)();

  const hideList = () => setDisplay(false);

  const [itemSelecionado, setItemSelecionado] = (0, _react.useState)(parentProps.municipio);
  (0, _react.useEffect)(() => {
    const handleClick = e => {
      if (display && refList.current && !refList.current.contains(e.target)) {
        if (!refSeletor.current.contains(e.target)) {
          hideList();
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [display]);

  if ((parentProps === null || parentProps === void 0 ? void 0 : parentProps.SeletorTipo) == 1) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _NavBarModule.default.NavBarSeletorMunicipiosContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: parentProps.theme.cor != "WhiteSM" ? _NavBarModule.default.NavBarSeletorMunicipios : _NavBarModule.default.NavBarSeletorMunicipiosWhite,
      onClick: () => setDisplay(!display),
      ref: refSeletor
    }, parentProps.municipio, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        float: 'right',
        marginRight: '15px'
      }
    }, "\u25BE")), display && /*#__PURE__*/_react.default.createElement("div", {
      className: _NavBarModule.default.NavBarSeletorMunicipiosLista,
      ref: refList
    }, parentProps.data.map(municipio => {
      const municipio_uf = municipio.nome + " - " + municipio.uf;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _NavBarModule.default.NavBarSeletorMunicipiosItem,
        key: municipio_uf,
        onClick: () => {
          setItemSelecionado(municipio_uf);
          parentProps.setMunicipio(municipio_uf);
          setDisplay(false);
        }
      }, municipio_uf);
    })));
  } else {
    return /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
      data: parentProps.data,
      theme: parentProps.theme.cor,
      municipio: parentProps.municipio,
      setMunicipio: parentProps.setMunicipio
    });
  }
};

const DropdownMenuMoblie = attr => {
  const [active, setMode] = (0, _react.useState)(false);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  return /*#__PURE__*/_react.default.createElement(_link.default, {
    href: attr.link.url
  }, /*#__PURE__*/_react.default.createElement("a", null, attr.link.label));
};

const NavBar = props => {
  var _props$user, _props$user2, _props$user3, _props$user4, _props$user5, _props$user6, _props$user7, _props$user8, _props$user8$label, _props$user9, _props$user10, _props$user11;

  const [active, setMode] = (0, _react.useState)(true);
  const [modal, setModal] = (0, _react.useState)(false);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  const Logged = /*#__PURE__*/_react.default.createElement(_ModalLogged.ModalLogged, {
    nome: props === null || props === void 0 ? void 0 : (_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.nome,
    label: props === null || props === void 0 ? void 0 : (_props$user2 = props.user) === null || _props$user2 === void 0 ? void 0 : _props$user2.label,
    cargo: props === null || props === void 0 ? void 0 : (_props$user3 = props.user) === null || _props$user3 === void 0 ? void 0 : _props$user3.cargo,
    button: props === null || props === void 0 ? void 0 : (_props$user4 = props.user) === null || _props$user4 === void 0 ? void 0 : _props$user4.button,
    logout: props === null || props === void 0 ? void 0 : (_props$user5 = props.user) === null || _props$user5 === void 0 ? void 0 : _props$user5.logout,
    equipe: props === null || props === void 0 ? void 0 : (_props$user6 = props.user) === null || _props$user6 === void 0 ? void 0 : _props$user6.equipe
  });

  const login = /*#__PURE__*/_react.default.createElement(_Login.Login, {
    titulo: "Fa\xE7a o login para ver o painel de busca ativa",
    button: {
      label: "entrar"
    },
    entrar: props === null || props === void 0 ? void 0 : (_props$user7 = props.user) === null || _props$user7 === void 0 ? void 0 : _props$user7.login
  });

  const ModalChildren = [Logged, login];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_NavBarModule.default.container_navbar, _NavBarModule.default["theme" + props.theme.cor])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.logoWrapper_navbar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.logo_navbar
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("img", {
    className: _NavBarModule.default.logoWrapper_navbar,
    alt: "impulso-previne-logo_navbar",
    src: String(props.theme.logoProjeto)
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.NavBarSearchConteinerMoblie
  }, /*#__PURE__*/_react.default.createElement(SeletorMunicipios, {
    parentProps: props
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.links_navbar
  }, props.menu && props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: link.label,
      className: _NavBarModule.default.link_navbar
    }, /*#__PURE__*/_react.default.createElement(Menu, {
      link: link,
      tema: props.theme.cor
    }), link.sub && /*#__PURE__*/_react.default.createElement("div", {
      className: _NavBarModule.default.NavBarSubMapContainer,
      key: index
    }, link.sub && link.sub.map((subContent, index) => {
      const NavBarSubMenuContainerPosition = {
        top: (index * 30).toString() + 'px'
      };
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: _NavBarModule.default.NavBarSubMenuContainer,
        key: subContent.label
      }, /*#__PURE__*/_react.default.createElement(_link.default, {
        href: subContent.url
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: _NavBarModule.default.NavBarSubMenuAnchor
      }, subContent.label))), subContent.item && /*#__PURE__*/_react.default.createElement("div", {
        className: _NavBarModule.default.NavBarSubMenuItemContainer,
        style: NavBarSubMenuContainerPosition,
        key: subContent.item
      }, subContent.item.map((subcontent, index) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _NavBarModule.default.NavBarSubMenuItem,
          key: subcontent.label
        }, /*#__PURE__*/_react.default.createElement(_link.default, {
          href: subcontent.url
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: _NavBarModule.default.NavBarSubMenuItemAnchor
        }, subcontent.label)));
      })));
    })));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.NavBarSearchConteiner
  }, /*#__PURE__*/_react.default.createElement(SeletorMunicipios, {
    parentProps: props
  })), (props === null || props === void 0 ? void 0 : props.user) != null && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_NavBarModule.default.NavBarLogin, _NavBarModule.default['NavBarLogin' + props.theme.cor], _NavBarModule.default[(props === null || props === void 0 ? void 0 : (_props$user8 = props.user) === null || _props$user8 === void 0 ? void 0 : (_props$user8$label = _props$user8.label) === null || _props$user8$label === void 0 ? void 0 : _props$user8$label.length) == 1 ? 'NavBarLogged' : 'NavBarLogOut']),
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
  }, /*#__PURE__*/_react.default.createElement(_MenuMoblie.MenuMoblie, {
    menus: props.menu,
    logged: props !== null && props !== void 0 && (_props$user9 = props.user) !== null && _props$user9 !== void 0 && _props$user9.nome ? true : false,
    user: props === null || props === void 0 ? void 0 : props.user,
    login: props === null || props === void 0 ? void 0 : (_props$user10 = props.user) === null || _props$user10 === void 0 ? void 0 : _props$user10.login,
    logout: props === null || props === void 0 ? void 0 : (_props$user11 = props.user) === null || _props$user11 === void 0 ? void 0 : _props$user11.logout
  }))), modal && /*#__PURE__*/_react.default.createElement("div", {
    className: _NavBarModule.default.NavBarModalContainer
  }, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    show: modal,
    setModal: setModal,
    child: props !== null && props !== void 0 && props.user.nome ? ModalChildren[0] : ModalChildren[1]
  })));
};

exports.NavBar = NavBar;