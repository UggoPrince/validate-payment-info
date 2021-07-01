"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validate3 = _interopRequireDefault(require("validate.js"));

var _utils = require("../utils");

var _rules = require("./rules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * ValidatePayment class handles payment validations
 * @class ValidatePayment
 */
var ValidatePayment = /*#__PURE__*/function () {
  function ValidatePayment() {
    _classCallCheck(this, ValidatePayment);
  }

  _createClass(ValidatePayment, null, [{
    key: "validate",
    value:
    /**
     * validate payment
     * @async
     * @method validate
     * @param {object} req Request object
     * @param {object} res Response object
     * @param {function} - next middleware function
     * @returns {object} Response
     */
    function () {
      var _validate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var body, constraints, validationError, cardNumber, expDate, cardName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = req.body;
                constraints = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _rules.cardNumberRule), _rules.expDateRule), _rules.cvv2Rule), _rules.emailRule), _rules.phoneNumberRule);
                validationError = (0, _validate3["default"])(body, constraints);
                if (!validationError) validationError = {};

                if (!(0, _utils.objectNotEmpty)(validationError)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", (0, _utils.failure)(res, 422, validationError));

              case 6:
                cardNumber = body.cardNumber, expDate = body.expDate;
                if (!(0, _utils.cardIsValid)(cardNumber)) validationError.cardNumber = ['Card number not valid by Luhn algorithm'];
                if (!(0, _utils.cardNotExpired)(expDate)) validationError.expDate = ['Card has expired'];
                cardName = (0, _utils.verifyCardType)(cardNumber);
                if (cardName === null) validationError.cardName = ['Unknown card type'];

                if (!(0, _utils.objectNotEmpty)(validationError)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", (0, _utils.failure)(res, 422, validationError));

              case 13:
                req.body.cardName = cardName;
                return _context.abrupt("return", next());

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validate(_x, _x2, _x3) {
        return _validate2.apply(this, arguments);
      }

      return validate;
    }()
  }]);

  return ValidatePayment;
}();

exports["default"] = ValidatePayment;