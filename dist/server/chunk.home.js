exports.ids = [1];
exports.modules = {

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(189);

	__webpack_require__(192);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeView = function (_Component) {
	    _inherits(HomeView, _Component);

	    function HomeView(props) {
	        _classCallCheck(this, HomeView);

	        var _this = _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, props));

	        _this.state = {
	            list: []
	        };
	        return _this;
	    }

	    _createClass(HomeView, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'main' },
	                '\u78D0\u5B89\u6728\u5236\u54C1\u5382'
	            );
	        }
	    }]);

	    return HomeView;
	}(_react.Component);

	module.exports = HomeView;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

	

/***/ })

};;