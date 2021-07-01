"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectNotEmpty = exports.verifyCardType = exports.cardNotExpired = exports.cardIsValid = exports.process_x_www_form_urlencoded = exports.getBody = exports.successForXml = exports.success = exports.failure = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var failure = function failure(res, status, message) {
  var errorObject = {
    status: status,
    message: message
  };
  return res.status(status).send(errorObject);
};

exports.failure = failure;

var success = function success(res, status, message, data) {
  var successObject = {
    status: status,
    message: message,
    data: data
  };
  return res.status(status).send(successObject);
};

exports.success = success;

var successForXml = function successForXml(res, status, message, data) {
  var successObject = {
    status: status,
    message: message,
    data: data
  };
  return res.status(status).send(successObject);
};

exports.successForXml = successForXml;

var getBody = function getBody(req) {
  var body = [];
  return new Promise(function (resolve, reject) {
    req.on('data', function (buffer) {
      body.push(buffer);
    });
    req.on('end', function () {
      body = decodeURIComponent(Buffer.concat(body).toString());
      resolve(body);
    });
    req.on('error', function (err) {
      reject(err);
    });
  });
};

exports.getBody = getBody;

var process_x_www_form_urlencoded = function process_x_www_form_urlencoded(body) {
  var fieldsAndValues = body.split('&');
  var data = {};
  fieldsAndValues.forEach(function (element) {
    var el = element.split('=');

    var _el = _slicedToArray(el, 2),
        el1 = _el[0],
        el2 = _el[1];

    data[el1] = el2;
  });
  return data;
};

exports.process_x_www_form_urlencoded = process_x_www_form_urlencoded;

var cardIsValid = function cardIsValid(cardNumber) {
  var cardArr = cardNumber.split('');
  cardArr.reverse();
  var even = false;
  var a = '';
  var b = 0;
  cardArr.forEach(function (element) {
    if (even) {
      var _double = element * 2;

      a += "".concat(_double);
      even = false;
    } else {
      b += element * 1;
      even = true;
    }
  });
  var c = a.split('');
  var d = c.reduce(function (total, num) {
    return total + parseInt(num, 10);
  }, 0);
  var total = d + b;
  var mod = total % 10;
  if (mod === 0) return true;
  return false;
};

exports.cardIsValid = cardIsValid;

var cardNotExpired = function cardNotExpired(expDate) {
  var arr = expDate.split('/');
  var mm = arr[0];
  var yy = 20 + arr[1];
  var date = new Date(yy, mm);
  var currentDate = new Date();
  if (currentDate.getTime() >= date.getTime()) return false;
  return true;
};

exports.cardNotExpired = cardNotExpired;

var verifyCardType = function verifyCardType(cardNumber) {
  var firstChar = cardNumber.charAt(0);
  var digits = cardNumber.length;
  var cardName = null;
  if (firstChar === '3' && digits === 15) cardName = 'American Express';else if (firstChar === '4' && digits === 16) cardName = 'Visa';else if (firstChar === '5' && digits === 16) cardName = 'MasterCard';else if (firstChar === '5' && digits === 15 || firstChar === '6' && digits === 16) cardName = 'Discover';
  return cardName;
};

exports.verifyCardType = verifyCardType;

var objectNotEmpty = function objectNotEmpty(obj) {
  if (obj === undefined || obj === 'undefined') return false;

  if (Object.keys(obj).length > 0) {
    return true;
  }

  return false;
};

exports.objectNotEmpty = objectNotEmpty;