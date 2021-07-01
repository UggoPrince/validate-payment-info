"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardNumberRule = exports.expDateRule = exports.cvv2Rule = exports.phoneNumberRule = exports.emailRule = void 0;
var emailRule = {
  email: {
    presence: true,
    email: {
      message: 'is not valid'
    }
  }
};
exports.emailRule = emailRule;
var phoneNumberRule = {
  phoneNumber: {
    presence: true,
    format: {
      pattern: '^([+]?(234)[\\d]{10}|(234)[\\d]{10}|[\\d]{11})$'
    }
  }
};
exports.phoneNumberRule = phoneNumberRule;
var cvv2Rule = {
  cvv2: {
    presence: true,
    format: {
      pattern: '^[0-9]+$'
    },
    length: {
      minimum: 3,
      maximum: 4
    }
  }
};
exports.cvv2Rule = cvv2Rule;
var expDateRule = {
  expDate: {
    presence: true,
    format: {
      pattern: '^([1-9]{1}/[1-9]{1}[0-9]{1}|[0]{1}[1-9]{1}/[1-9]{1}[0-9]{1}|[1][0-2]/[1-9]{1}[0-9]{1})$'
    }
  }
};
exports.expDateRule = expDateRule;
var cardNumberRule = {
  cardNumber: {
    presence: true,
    format: {
      pattern: '^[0-9]+$'
    },
    length: {
      minimum: 13,
      maximum: 16
    }
  }
};
exports.cardNumberRule = cardNumberRule;