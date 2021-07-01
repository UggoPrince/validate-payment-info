import validate from 'validate.js';
import {
  cardIsValid,
  cardNotExpired,
  failure,
  objectNotEmpty as hasError,
  verifyCardType,
} from '../utils';
import { emailRule, phoneNumberRule, cardNumberRule, cvv2Rule, expDateRule } from './rules';

/**
 * ValidatePayment class handles payment validations
 * @class ValidatePayment
 */
export default class ValidatePayment {
  /**
   * validate payment
   * @async
   * @method validate
   * @param {object} req Request object
   * @param {object} res Response object
   * @param {function} - next middleware function
   * @returns {object} Response
   */
  static async validate(req, res, next) {
    const { body } = req;
    const constraints = {
      ...cardNumberRule,
      ...expDateRule,
      ...cvv2Rule,
      ...emailRule,
      ...phoneNumberRule,
    };
    let validationError = validate(body, constraints);
    if (!validationError) validationError = {};
    if (hasError(validationError)) return failure(res, 422, validationError);

    const { cardNumber, expDate } = body;
    if (!cardIsValid(cardNumber))
      validationError.cardNumber = ['Card number not valid by Luhn algorithm'];
    if (!cardNotExpired(expDate)) validationError.expDate = ['Card has expired'];

    const cardName = verifyCardType(cardNumber);
    if (cardName === null) validationError.cardName = ['Unknown card type'];

    if (hasError(validationError)) return failure(res, 422, validationError);

    req.body.cardName = cardName;

    return next();
  }
}
