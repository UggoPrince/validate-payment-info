"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _paymentInfoMiddleware = _interopRequireDefault(require("../validation/paymentInfoMiddleware"));

var _controllers = _interopRequireDefault(require("../controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/payment', _paymentInfoMiddleware["default"].validate, _controllers["default"].valid);
var _default = router;
exports["default"] = _default;