import { success } from '../utils';

/**
 * ValidCard class handles payment valid responses
 * @class ValidCard
 */
export default class ValidCard {
  /**
   * give valid response
   * @async
   * @method valid
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Response
   */
  static async valid(req, res) {
    const { cardName } = req.body;
    return success(res, 200, 'success', { valid: true, cardName });
  }
}
