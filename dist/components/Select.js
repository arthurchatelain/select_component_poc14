"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Select;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A select component to choose between different possibilities.
 * @prop {string} title - The select title that will be used as the default value
 * @prop {func} OnChange - Function to call when the user select a new possibility 
 * @prop {array} data - An array of string with the different possibilities
 */

/**
 * STATES DOCUMENTATION
 * @var {boolean} isOpen - Tell if the select component is open or closed
 * @var {value} string - The current value of the select
 */
function Select(props) {
  let [isOpen, setIsOpen] = (0, _react.useState)(false);
  let [value, setValue] = (0, _react.useState)(props.title);

  const ArrowBottom = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    viewBox: "0 0 330 330",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
    })
  });

  const handleClick = e => {
    // e is the new value
    setIsOpen(false);
    setValue(e);
    props.OnChange(e);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "Select",
    children: !isOpen ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "selectCell",
      onClick: () => setIsOpen(true),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: value
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowBottom, {})]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "selectContainer",
      children: props.data.map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "selectCells",
        onClick: e => {
          handleClick(e.target.firstChild.textContent);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: item
        })
      }, item))
    })
  });
}

Select.propTypes = {
  OnChange: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.array.isRequired
};