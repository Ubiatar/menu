webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(187);


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcMenu = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-menu\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-menu/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0 */
	
	var children = [];
	for (var i = 0; i < 20; i++) {
	  children.push(_react2.default.createElement(
	    _rcMenu.Item,
	    { key: String(i) },
	    i
	  ));
	}
	
	var menuStyle = {
	  width: 200,
	  height: 200,
	  overflow: 'auto'
	};
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement('link', { href: '//cdn.bootcss.com/font-awesome/4.2.0/css/font-awesome.css', rel: 'stylesheet' }),
	  _react2.default.createElement(
	    'h2',
	    null,
	    'keyboard scrollable menu'
	  ),
	  _react2.default.createElement(
	    _rcMenu2.default,
	    { style: menuStyle },
	    children
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=scrollable.js.map