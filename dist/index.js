'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DDlogin = function (_React$Component) {
    _inherits(DDlogin, _React$Component);

    function DDlogin(props) {
        _classCallCheck(this, DDlogin);

        var _this = _possibleConstructorReturn(this, (DDlogin.__proto__ || Object.getPrototypeOf(DDlogin)).call(this, props));

        _this.createSrc = function () {
            var _this$props$options = _this.props.options,
                goto = _this$props$options.goto,
                style = _this$props$options.style,
                href = _this$props$options.href;

            var src = _this.state.url + encodeURIComponent(goto);
            src += style ? "&style=" + style : "";
            src += href ? "&href=" + href : "";
            return src;
        };

        _this.state = {
            url: "https://login.dingtalk.com/login/qrcode.htm?goto="
        };
        return _this;
    }

    _createClass(DDlogin, [{
        key: 'render',
        value: function render() {
            var iframeOption = {
                id: this.props.options.id,
                src: this.createSrc(),
                frameBorder: "0",
                allowTransparency: "true",
                scrolling: "no",
                width: this.props.options.width,
                height: this.props.options.height,
                className: this.props.className
            };
            return _react2.default.createElement('iframe', iframeOption);
        }
    }]);

    return DDlogin;
}(_react2.default.Component);

DDlogin.propTypes = {
    options: _propTypes2.default.shape({
        id: _propTypes2.default.string,
        goto: _propTypes2.default.string.isRequired,
        style: _propTypes2.default.string,
        href: _propTypes2.default.string,
        width: _propTypes2.default.string,
        height: _propTypes2.default.string
    }),
    className: _propTypes2.default.string
};

DDlogin.defaultProps = {
    options: {
        id: "login_container",
        goto: "",
        style: "",
        href: "",
        width: "350px",
        height: "350px"

    },
    className: ''
};

exports.default = DDlogin;