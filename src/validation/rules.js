export const emailRule = {
  email: {
    presence: true,
    email: {
      message: 'is not valid',
    },
  },
};

export const phoneNumberRule = {
  phoneNumber: {
    presence: true,
    format: {
      pattern: '^([+]?(234)[\\d]{10}|(234)[\\d]{10}|[\\d]{11})$',
    },
  },
};

export const cvv2Rule = {
  cvv2: {
    presence: true,
    format: {
      pattern: '^[0-9]+$',
    },
    length: {
      minimum: 3,
      maximum: 4,
    },
  },
};

export const expDateRule = {
  expDate: {
    presence: true,
    format: {
      pattern:
        '^([1-9]{1}/[1-9]{1}[0-9]{1}|[0]{1}[1-9]{1}/[1-9]{1}[0-9]{1}|[1][0-2]/[1-9]{1}[0-9]{1})$',
    },
  },
};

export const cardNumberRule = {
  cardNumber: {
    presence: true,
    format: {
      pattern: '^[0-9]+$',
    },
    length: {
      minimum: 13,
      maximum: 16,
    },
  },
};
