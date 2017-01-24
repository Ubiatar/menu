webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcMenu = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-menu\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-menu/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _cssAnimation = __webpack_require__(179);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function handleSelect(info) {
	  console.log(info);
	  console.log('selected ' + info.key);
	} /* eslint no-console:0 */
	
	var animation = {
	  enter: function enter(node, done) {
	    var height = void 0;
	    return (0, _cssAnimation2.default)(node, 'rc-menu-collapse', {
	      start: function start() {
	        height = node.offsetHeight;
	        node.style.height = 0;
	      },
	      active: function active() {
	        node.style.height = height + 'px';
	      },
	      end: function end() {
	        node.style.height = '';
	        done();
	      }
	    });
	  },
	  appear: function appear() {
	    return this.enter.apply(this, arguments);
	  },
	  leave: function leave(node, done) {
	    return (0, _cssAnimation2.default)(node, 'rc-menu-collapse', {
	      start: function start() {
	        node.style.height = node.offsetHeight + 'px';
	      },
	      active: function active() {
	        node.style.height = 0;
	      },
	      end: function end() {
	        node.style.height = '';
	        done();
	      }
	    });
	  }
	};
	
	var reactContainer = document.getElementById('__react-content');
	
	var nestSubMenu = _react2.default.createElement(
	  _rcMenu.SubMenu,
	  { title: _react2.default.createElement(
	      'span',
	      null,
	      'sub menu 2'
	    ), key: '4' },
	  _react2.default.createElement(
	    _rcMenu.Item,
	    { key: '4-1' },
	    'inner inner'
	  ),
	  _react2.default.createElement(_rcMenu.Divider, null),
	  _react2.default.createElement(
	    _rcMenu.SubMenu,
	    {
	      key: '4-2',
	      title: _react2.default.createElement(
	        'span',
	        null,
	        'sub menu 3'
	      )
	    },
	    _react2.default.createElement(
	      _rcMenu.SubMenu,
	      { title: 'sub 4-2-0', key: '4-2-0' },
	      _react2.default.createElement(
	        _rcMenu.Item,
	        { key: '4-2-0-1' },
	        'inner inner'
	      ),
	      _react2.default.createElement(
	        _rcMenu.Item,
	        { key: '4-2-0-2' },
	        'inner inner2'
	      )
	    ),
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '4-2-1' },
	      'inn'
	    ),
	    _react2.default.createElement(
	      _rcMenu.SubMenu,
	      { title: _react2.default.createElement(
	          'span',
	          null,
	          'sub menu 4'
	        ), key: '4-2-2' },
	      _react2.default.createElement(
	        _rcMenu.Item,
	        { key: '4-2-2-1' },
	        'inner inner'
	      ),
	      _react2.default.createElement(
	        _rcMenu.Item,
	        { key: '4-2-2-2' },
	        'inner inner2'
	      )
	    ),
	    _react2.default.createElement(
	      _rcMenu.SubMenu,
	      { title: 'sub 4-2-3', key: '4-2-3' },
	      _react2.default.createElement(
	        _rcMenu.Item,
	        { key: '4-2-3-1' },
	        'inner inner'
	      ),
	      _react2.default.createElement(
	        _rcMenu.Item,
	        { key: '4-2-3-2' },
	        'inner inner2'
	      )
	    )
	  )
	);
	
	function onOpenChange(value) {
	  console.log('onOpenChange', value);
	}
	var commonMenu = _react2.default.createElement(
	  _rcMenu2.default,
	  { onSelect: handleSelect, onOpenChange: onOpenChange },
	  _react2.default.createElement(
	    _rcMenu.SubMenu,
	    { title: _react2.default.createElement(
	        'span',
	        null,
	        'sub menu'
	      ), key: '1' },
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '1-1' },
	      '0-1'
	    ),
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '1-2' },
	      '0-2'
	    )
	  ),
	  nestSubMenu,
	  _react2.default.createElement(
	    _rcMenu.Item,
	    { key: '2' },
	    '1'
	  ),
	  _react2.default.createElement(
	    _rcMenu.Item,
	    { key: '3' },
	    'outer'
	  ),
	  _react2.default.createElement(
	    _rcMenu.Item,
	    { disabled: true },
	    'disabled'
	  ),
	  _react2.default.createElement(
	    _rcMenu.Item,
	    { key: '5' },
	    'outer3'
	  )
	);
	
	var subMenus = _react2.default.createElement(
	  _rcMenu2.default,
	  { onSelect: handleSelect },
	  _react2.default.createElement(
	    _rcMenu.SubMenu,
	    { title: _react2.default.createElement(
	        'span',
	        null,
	        'sub menu'
	      ), key: '1' },
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '1-1' },
	      '0-1'
	    ),
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '1-2' },
	      '0-2'
	    )
	  ),
	  _react2.default.createElement(
	    _rcMenu.SubMenu,
	    { title: _react2.default.createElement(
	        'span',
	        null,
	        'sub menu 1'
	      ), key: '2' },
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '2-1' },
	      '2-1'
	    ),
	    _react2.default.createElement(
	      _rcMenu.Item,
	      { key: '2-2' },
	      '2-2'
	    )
	  ),
	  nestSubMenu
	);
	
	function render(container) {
	  var horizontalMenu = _react2.default.cloneElement(commonMenu, {
	    mode: 'horizontal',
	    // use openTransition for antd
	    openAnimation: 'slide-up'
	  });
	
	  var horizontalMenu2 = _react2.default.cloneElement(commonMenu, {
	    mode: 'horizontal',
	    openAnimation: 'slide-up',
	    closeSubMenuOnMouseLeave: false
	  });
	
	  var verticalMenu = _react2.default.cloneElement(commonMenu, {
	    mode: 'vertical',
	    openAnimation: 'zoom'
	  });
	
	  var inlineMenu = _react2.default.cloneElement(commonMenu, {
	    mode: 'inline',
	    defaultOpenKeys: ['1'],
	    openAnimation: animation
	  });
	
	  var ClickToHideMenu = _react2.default.createClass({
	    displayName: 'ClickToHideMenu',
	    getInitialState: function getInitialState() {
	      return {
	        openKeys: []
	      };
	    },
	    onOpenChange: function onOpenChange(openKeys) {
	      this.setState({
	        openKeys: openKeys
	      });
	    },
	    render: function render() {
	      return _react2.default.cloneElement(subMenus, {
	        onOpenChange: this.onOpenChange,
	        openKeys: this.state.openKeys,
	        mode: 'horizontal',
	        openAnimation: 'slide-up',
	        openSubMenuOnMouseEnter: false,
	        closeSubMenuOnMouseLeave: false
	      });
	    }
	  });
	
	  _reactDom2.default.render(_react2.default.createElement(
	    'div',
	    { style: { margin: 20 } },
	    _react2.default.createElement(
	      'h2',
	      null,
	      'antd menu'
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h3',
	        null,
	        'horizontal'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { margin: 20, width: 800 } },
	        horizontalMenu
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'horizontal keep open'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { margin: 20, width: 800 } },
	        horizontalMenu2
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'horizontal and click'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { margin: 20, width: 800 } },
	        _react2.default.createElement(ClickToHideMenu, null)
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'vertical'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { margin: 20, width: 200 } },
	        verticalMenu
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'inline'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { margin: 20, width: 400 } },
	        inlineMenu
	      )
	    )
	  ), container);
	}
	
	render(reactContainer);

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(180);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(181);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2["default"].addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2["default"].addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },

/***/ 180:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(182);
	} catch (err) {
	  var index = __webpack_require__(182);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }

});
//# sourceMappingURL=antd.js.map