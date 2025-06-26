/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html{\r\n    width:100vw;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n*{\r\npadding:0;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    background-size:cover;\r\n    background-repeat: no-repeat;\r\n    background-position:bottom;\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n    background: transparent;\r\n    align-items: baseline;\r\n    position: absolute;\r\n    width: 98vw;\r\n\r\n}\r\n\r\nnav h2{\r\n    color:white;\r\n    margin-left: 20px;\r\n    text-shadow: 0 3px 5px rgba(0,0,0,1);\r\n}\r\nnav button{\r\n    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background: transparent;\r\n    border: none;\r\n    font-size: 20px;\r\n    margin-right:40px;\r\n    color: white;\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n    transition: all ease-in-out 0.4s;\r\n}\r\n\r\nbutton{\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover{\r\n    \r\n    opacity: 1;\r\n    text-decoration: underline;\r\n}\r\n\r\n.scrollable::-webkit-scrollbar {\r\n  width: 20px;\r\n}\r\n.scrollable::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\r\n}\r\n.scrollable::-webkit-scrollbar-thumb{\r\n    background: rgb(83, 97, 71);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAbout: () => (/* binding */ generateAbout)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/cafe-coffee.png */ \"./src/pics/cafe-coffee.png\");\n\r\n\r\n\r\nfunction generateAbout(){\r\n    const bgImage = document.createElement(\"img\");\r\n    bgImage.src = _pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.style.backgroundImage = `url(${_pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_1__})`;\r\n    content.style.width = '100vw';\r\n    content.style.height = '100vh';\r\n    content.style.display = 'flex';\r\n    content.style.justifyContent = 'center';\r\n    content.style.alignItems = 'center';\r\n\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"scrollable\");\r\n    menuContainer.style.width = '50vw';\r\n    menuContainer.style.height = '80vh';\r\n    menuContainer.style.backgroundColor = \"rgba(208, 208, 208, 0.5)\";\r\n    menuContainer.style.borderRadius = \"10px\";\r\n    menuContainer.style.backdropFilter  = \"blur(10px)\";\r\n    menuContainer.style.padding = \"30px\";\r\n    content.appendChild(menuContainer);\r\n\r\n    const aboutUs = document.createElement(\"p\");\r\n    const aboutHeader = document.createElement(\"h2\");\r\n    aboutHeader.textContent = \"About Us\";\r\n    aboutUs.textContent = \"Welcome to The Daily Grind Café, your cozy corner in the city where every cup tells a story. We believe coffee is more than a beverage — it's a moment of pause, a shared smile, a creative spark. From the very beginning, our goal has been to create a space where people can slow down, connect, and enjoy the little things.\";\r\n    \r\n    aboutUs.style.fontSize = \"20px\";\r\n    aboutUs.style.marginBottom = \"30px\";\r\n    aboutUs.style.textAlign = \"justify\";\r\n\r\n    aboutHeader.style.marginBottom = \"10px\";\r\n    aboutHeader.style.fontSize = \"40px\";\r\n    aboutHeader.style.color = \"rgb(83, 97, 71)\";\r\n    aboutHeader.style.fontWeight = \"bold\";\r\n    menuContainer.appendChild(aboutHeader);\r\n    menuContainer.appendChild(aboutUs);\r\n\r\n    const ourStory = document.createElement(\"p\");\r\n    const storyHeader = document.createElement(\"h2\");\r\n    storyHeader.textContent = \"About Us\";\r\n    ourStory.textContent = \"Welcome to The Daily Grind Café, your cozy corner in the city where every cup tells a story. We believe coffee is more than a beverage — it's a moment of pause, a shared smile, a creative spark. From the very beginning, our goal has been to create a space where people can slow down, connect, and enjoy the little things.\";\r\n    \r\n    ourStory.style.fontSize = \"20px\";\r\n    ourStory.style.marginBottom = \"30px\";\r\n    ourStory.style.textAlign = \"justify\";\r\n\r\n    storyHeader.style.marginBottom = \"10px\";\r\n    storyHeader.style.fontSize = \"40px\";\r\n    storyHeader.style.color = \"rgb(83, 97, 71)\";\r\n    storyHeader.style.fontWeight = \"bold\";\r\n    menuContainer.appendChild(storyHeader);\r\n    menuContainer.appendChild(ourStory);\r\n\r\n    const order = document.createElement(\"button\");\r\n    order.innerText = \"Order Now\";\r\n    order.style.backgroundColor = \"rgb(83, 97, 71)\";\r\n    order.style.padding = \"10px 20px\";\r\n    order.style.color = \"white\";\r\n    order.style.border = \"none\";\r\n    order.style.fontSize = \"20px\";\r\n    order.style.borderRadius = \"10px\";\r\n    order.style.boxShadow = \"0 3px 5px rgba(0,0,0,0.5)\";\r\n\r\n    order.addEventListener(\"click\", () =>{\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.generateMenu)();\r\n    })\r\n\r\n    menuContainer.appendChild(order);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHome: () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/cafe-coffee.png */ \"./src/pics/cafe-coffee.png\");\n\r\n\r\nfunction generateHome(){\r\n    const bgImage = document.createElement(\"img\");\r\n    bgImage.src = _pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.style.backgroundImage = `url(${_pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_0__})`;\r\n    content.style.width = '100vw';\r\n    content.style.height = '100vh';\r\n    \r\n    const titleBox = document.createElement(\"div\");\r\n    titleBox.setAttribute(\"style\", 'width: 100vw; height: 30vh; background-color: rgba(0,0,0,0.5); position: absolute; bottom: 10vh; display:flex;'\r\n    );\r\n\r\n    content.appendChild(titleBox);\r\n\r\n    const titleStyle = 'font-size: 90px; font-weight:bold; color: rgba(130, 139, 123, 1); font-style: italic; margin-left: 50px; display:flex; justify-content:center; align-items: center;';\r\n\r\n    const title1 = document.createElement(\"h1\");\r\n    title1.setAttribute(\"style\", titleStyle)\r\n    title1.textContent = `The Grind`;\r\n\r\n    const title2 = document.createElement(\"h1\");\r\n    title2.setAttribute(\"style\", titleStyle);\r\n    title2.textContent = `Starts Here`;\r\n\r\n    const titleContainer = document.createElement(\"div\");\r\n    titleContainer.setAttribute(\"style\", \"display:flex; flex-direction: column; justify-content: center; align-items: start;\");\r\n\r\n    titleContainer.appendChild(title1);\r\n    titleContainer.appendChild(title2);\r\n\r\n    titleBox.appendChild(titleContainer);\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateMenu: () => (/* binding */ generateMenu)\n/* harmony export */ });\n/* harmony import */ var _pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pics/cafe-coffee.png */ \"./src/pics/cafe-coffee.png\");\n/* harmony import */ var _pics_coffee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pics/coffee.png */ \"./src/pics/coffee.png\");\n/* harmony import */ var _pics_pastry_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pics/pastry.png */ \"./src/pics/pastry.png\");\n\r\n\r\n\r\n\r\n\r\nfunction generateMenu(){\r\n    const bgImage = document.createElement(\"img\");\r\n    bgImage.src = _pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n    content.style.backgroundImage = `url(${_pics_cafe_coffee_png__WEBPACK_IMPORTED_MODULE_0__})`;\r\n    content.style.width = '100vw';\r\n    content.style.height = '100vh';\r\n    content.style.display = 'flex';\r\n    content.style.justifyContent = 'center';\r\n    content.style.alignItems = 'center';\r\n    \r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"scrollable\");\r\n    menuContainer.style.width = '80vw';\r\n    menuContainer.style.height = '80vh';\r\n    menuContainer.style.backgroundColor = \"rgba(208, 208, 208, 0.5)\";\r\n    menuContainer.style.borderRadius = \"10px\";\r\n    menuContainer.style.backdropFilter  = \"blur(10px)\";\r\n    menuContainer.style.overflowY = \"auto\";\r\n    content.appendChild(menuContainer);\r\n\r\n    const menuGrid = document.createElement('div');\r\n    menuGrid.style.display = \"grid\";\r\n    menuGrid.style.gridTemplateColumns = \"1fr 1fr 1fr\";\r\n    menuGrid.style.gap = \"30px\";\r\n    menuGrid.style.margin = \"30px\";\r\n\r\n    createButtons(menuContainer, menuGrid);\r\n\r\n    menuContainer.appendChild(menuGrid);\r\n\r\n    return menuContainer, menuGrid;\r\n}\r\n\r\nfunction createButtons(menuContainer, menuGrid){\r\n    const drinksButton = document.createElement(\"button\");\r\n    const pastryButton = document.createElement(\"button\");\r\n\r\n    const buttonFormat = 'background:transparent; font-family:Cambria; transition: all ease 0.4s; cursor: pointer; border: none; font-size: 20px; margin-left: 30px; margin-top: 10px; color: white;'\r\n\r\n    drinksButton.textContent = \"Drinks\";\r\n    pastryButton.textContent = \"Pastries\";\r\n\r\n    drinksButton.setAttribute(\"style\", buttonFormat);\r\n    pastryButton.setAttribute(\"style\", buttonFormat);\r\n\r\n    menuContainer.appendChild(drinksButton);\r\n    menuContainer.appendChild(pastryButton);\r\n\r\n    drinksButton.addEventListener(\"click\", () =>{\r\n        menuGrid.innerHTML = \"\";\r\n        drinksButton.style.color = \"rgb(83, 97, 71)\";\r\n        drinksButton.style.fontWeight = \"bold\";\r\n        pastryButton.style.color = \"white\";\r\n        pastryButton.style.fontWeight = \"normal\";\r\n\r\n        drinksMenu(menuGrid);\r\n    })\r\n\r\n    pastryButton.addEventListener(\"click\", () =>{\r\n        menuGrid.innerHTML = \"\";\r\n        \r\n        pastryButton.style.color = \"rgb(83, 97, 71)\";\r\n        pastryButton.style.fontWeight = \"bold\";\r\n        drinksButton.style.color = \"white\";\r\n        drinksButton.style.fontWeight = \"normal\";\r\n\r\n        pastryMenu(menuGrid);\r\n    })\r\n}\r\n\r\nclass Drinks{\r\n    constructor(name, description, price){\r\n        this.name = name;\r\n        this.description = description;\r\n        this.price = price;\r\n    }\r\n}\r\n\r\nclass Pastries extends Drinks{\r\n    constructor(name, description, price){\r\n        super(name, description, price);\r\n    }\r\n}\r\n\r\nfunction drinksMenu(menuGrid){   \r\n    const drinksArray = [\r\n        new Drinks(\r\n            \"Daily Brew\",\r\n            \"Our signature house blend — freshly ground, single-origin beans brewed to perfection. A full-bodied and aromatic cup that delivers a bold start to your day, perfect black or with a splash of milk.\",\r\n            \"₱120.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Espresso Shot\",\r\n            \"A rich and intense burst of flavor in every sip. Extracted from finely ground beans under high pressure, our espresso shot boasts a deep crema and robust character. Available as a single or a double shot for an extra caffeine kick.\",\r\n            \"₱130.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Latte Love\",\r\n            \"A smooth and creamy blend of velvety steamed milk and rich espresso, topped with hand-poured latte art. Balanced and comforting, this is the perfect drink for moments of calm and creativity.\",\r\n            \"₱160.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Caramel Macchiato\",\r\n            \"Layers of espresso and steamed milk come together with a luscious caramel drizzle, creating a decadent harmony of sweet and bold flavors. A delightful indulgence that’s both elegant and satisfying.\",\r\n            \"₱175.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Mocha Madness\",\r\n            \"For chocolate and coffee lovers alike. This drink combines rich espresso with velvety steamed milk and decadent chocolate syrup, finished with whipped cream for an irresistible treat.\",\r\n            \"₱170.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Matcha Latte\",\r\n            \"A modern classic made with finely ground Japanese matcha green tea and creamy milk. Its earthy, umami-rich flavor is both energizing and soothing — a healthy, mindful choice.\",\r\n            \"₱160.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Chai Spice Latte\",\r\n            \"A warm and fragrant blend of black tea, cinnamon, cardamom, cloves, and ginger, frothed together with milk. This spiced latte is cozy, invigorating, and perfect for a quiet afternoon.\",\r\n            \"₱150.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Iced Americano\",\r\n            \"A chilled, refreshing blend of bold espresso and cold water. This drink delivers a smooth, crisp flavor that’s perfect for warm days or those who love their coffee strong and straight-up.\",\r\n            \"₱130.00\"\r\n        ),\r\n        new Drinks(\r\n            \"Hot Chocolate\",\r\n            \"Indulgent and comforting, our hot chocolate is made from premium Belgian chocolate melted into steamed milk. Rich, creamy, and topped with a sprinkle of cocoa — it’s warmth in a cup.\",\r\n            \"₱160.00\"\r\n        )\r\n    ];\r\n    \r\n    drinksArray.forEach((item) =>{\r\n        const itemContainer = document.createElement(\"div\");\r\n        itemContainer.style.height = \"65vh\";\r\n        itemContainer.style.backgroundColor = \"rgba(255, 255, 255, 0.54)\";\r\n        itemContainer.style.borderRadius = \"10px\";\r\n        itemContainer.style.boxShadow = \"0 0 10px rgba(0, 0, 0, 0.52)\";\r\n        itemContainer.style.padding = \"10px\";\r\n        menuGrid.appendChild(itemContainer);\r\n\r\n        const header = document.createElement(\"div\");\r\n        const picture = document.createElement(\"div\");\r\n        const desc = document.createElement(\"div\");\r\n\r\n        const itemName = document.createElement(\"h2\");\r\n        const itemPrice = document.createElement(\"h2\");\r\n        const itemDesc = document.createElement(\"p\");\r\n\r\n        itemName.innerText = item.name;\r\n        itemPrice.innerText = item.price;\r\n        itemDesc.innerText = item.description;\r\n\r\n        itemPrice.style.color = \"rgb(83, 97, 71)\";\r\n        itemName.style.fontSize = \"36px\";\r\n\r\n        header.appendChild(itemName);\r\n        header.appendChild(itemPrice);\r\n        desc.appendChild(itemDesc);\r\n\r\n        header.style.display = \"flex\";\r\n        header.style.justifyContent = \"space-between\";\r\n        header.style.alignItems = \"center\";\r\n\r\n        desc.style.display = \"flex\";\r\n        desc.style.justifyContent = \"center\";\r\n        desc.style.alignItems = \"center\";\r\n        desc.style.textAlign = \"justify\";\r\n        desc.style.fontSize = \"17px\";\r\n\r\n        const coffeePic = document.createElement(\"img\");\r\n        coffeePic.src = _pics_coffee_png__WEBPACK_IMPORTED_MODULE_1__;\r\n        picture.style.backgroundImage = `url(${_pics_coffee_png__WEBPACK_IMPORTED_MODULE_1__})`;\r\n        picture.style.width = \"20vw\";\r\n        picture.style.height = \"15vw\";\r\n        picture.style.backgroundRepeat = \"no-repeat\";\r\n        picture.style.backgroundSize = \"cover\";\r\n        picture.style.marginTop = \"30px\";\r\n        itemContainer.appendChild(header);\r\n        itemContainer.appendChild(picture);\r\n        itemContainer.appendChild(desc);\r\n\r\n    });\r\n}\r\n\r\nfunction pastryMenu(menuGrid){\r\n    const pastryArray = [\r\n        new Pastries(\r\n            \"Butter Croissant\", \r\n            \"Flaky, golden layers of buttery pastry that melt in your mouth with every bite. Baked to perfection for a crisp exterior and a soft, airy interior, ideal for a light yet indulgent snack.\", \r\n            \"₱85.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Chocolate Croissant\", \r\n            \"A classic French croissant filled with a rich, dark chocolate core that oozes slightly when warm. The delicate, buttery layers contrast beautifully with the smooth, bittersweet chocolate inside.\", \r\n            \"₱100.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Almond Danish\", \r\n            \"A tender, buttery pastry topped with a generous swirl of almond cream and a sprinkle of sliced toasted almonds. Slightly sweet and nutty, with a soft center and crisp edges for perfect balance.\", \r\n            \"₱110.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Cinnamon Roll\", \r\n            \"Soft, pillowy dough rolled with a rich cinnamon sugar blend, baked until golden and finished with a luscious glaze that seeps into every swirl. Warm, comforting, and perfectly sweet.\", \r\n            \"₱120.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Banana Walnut Muffin\", \r\n            \"A moist and hearty muffin bursting with the natural sweetness of ripe bananas and the satisfying crunch of roasted walnuts. Each bite offers a warm, homemade taste that’s both wholesome and filling.\", \r\n            \"₱95.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Blueberry Crumble Muffin\", \r\n            \"A soft and fluffy muffin generously loaded with juicy blueberries, topped with a golden sugar crumble that adds a delightful crunch. Sweet, slightly tart, and perfect with a cup of coffee.\", \r\n            \"₱95.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Cheesy Ensaymada\", \r\n            \"A Filipino bakery favorite—fluffy, buttery brioche topped with melted butter, a dusting of sugar, and a generous layer of shredded cheese. Sweet, savory, and irresistibly soft.\", \r\n            \"₱90.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Ube Cheese Roll\", \r\n            \"A vibrant purple roll filled with smooth ube halaya and gooey cheese, wrapped in soft dough. This Filipino delight is a perfect blend of earthy sweetness and mild saltiness for a unique treat.\", \r\n            \"₱100.00\"\r\n        ),\r\n\r\n        new Pastries(\r\n            \"Lemon Tart\", \r\n            \"A zesty, tangy lemon curd nestled in a buttery, crumbly tart shell. The refreshing citrus flavor is perfectly balanced with a touch of sweetness, making it a bright and bold dessert.\", \r\n            \"₱115.00\"\r\n        )\r\n    ];\r\n\r\n    pastryArray.forEach((item) =>{\r\n        const itemContainer = document.createElement(\"div\");\r\n        itemContainer.style.height = \"65vh\";\r\n        itemContainer.style.backgroundColor = \"rgba(255, 255, 255, 0.54)\";\r\n        itemContainer.style.borderRadius = \"10px\";\r\n        itemContainer.style.boxShadow = \"0 0 10px rgba(0, 0, 0, 0.52)\";\r\n        itemContainer.style.padding = \"10px\";\r\n        menuGrid.appendChild(itemContainer);\r\n\r\n        const header = document.createElement(\"div\");\r\n        const picture = document.createElement(\"div\");\r\n        const desc = document.createElement(\"div\");\r\n\r\n        const itemName = document.createElement(\"h2\");\r\n        const itemPrice = document.createElement(\"h2\");\r\n        const itemDesc = document.createElement(\"p\");\r\n\r\n        itemName.innerText = item.name;\r\n        itemPrice.innerText = item.price;\r\n        itemDesc.innerText = item.description;\r\n\r\n        itemPrice.style.color = \"rgb(83, 97, 71)\";\r\n        itemName.style.fontSize = \"36px\";\r\n\r\n        header.appendChild(itemName);\r\n        header.appendChild(itemPrice);\r\n        desc.appendChild(itemDesc);\r\n\r\n        header.style.display = \"flex\";\r\n        header.style.justifyContent = \"space-between\";\r\n        header.style.alignItems = \"center\";\r\n\r\n        desc.style.display = \"flex\";\r\n        desc.style.justifyContent = \"center\";\r\n        desc.style.alignItems = \"center\";\r\n        desc.style.textAlign = \"justify\";\r\n        desc.style.fontSize = \"17px\";\r\n\r\n        const pastryPic = document.createElement(\"img\");\r\n        pastryPic.src = _pics_pastry_png__WEBPACK_IMPORTED_MODULE_2__;\r\n        picture.style.backgroundImage = `url(${_pics_pastry_png__WEBPACK_IMPORTED_MODULE_2__})`;\r\n        picture.style.width = \"20vw\";\r\n        picture.style.height = \"15vw\";\r\n        picture.style.backgroundRepeat = \"no-repeat\";\r\n        picture.style.backgroundSize = \"cover\";\r\n        picture.style.marginTop = \"30px\";\r\n        itemContainer.appendChild(header);\r\n        itemContainer.appendChild(picture);\r\n        itemContainer.appendChild(desc);\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pics/cafe-coffee.png":
/*!**********************************!*\
  !*** ./src/pics/cafe-coffee.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcafb3778433c07dfb3f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pics/cafe-coffee.png?");

/***/ }),

/***/ "./src/pics/coffee.png":
/*!*****************************!*\
  !*** ./src/pics/coffee.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d37fe801308ed173335f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pics/coffee.png?");

/***/ }),

/***/ "./src/pics/pastry.png":
/*!*****************************!*\
  !*** ./src/pics/pastry.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb227895e4db26f59620.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pics/pastry.png?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst homeButton = document.getElementById(\"home\");\r\nconst menuButton = document.getElementById(\"menu\");\r\nconst aboutButton = document.getElementById(\"about\");\r\n\r\nhomeButton.addEventListener(\"click\", ()=>{\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.generateHome)();\r\n})\r\n\r\n\r\nmenuButton.addEventListener(\"click\", () =>{\r\n    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.generateMenu)();\r\n})\r\n\r\naboutButton.addEventListener(\"click\", () =>{\r\n    ;(0,_about__WEBPACK_IMPORTED_MODULE_3__.generateAbout)();\r\n})\r\n\r\n;(0,_about__WEBPACK_IMPORTED_MODULE_3__.generateAbout)();\n\n//# sourceURL=webpack://restaurant-page/./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;