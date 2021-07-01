export const failure = (res, status, message) => {
  const errorObject = {
    status,
    message,
  };
  return res.status(status).send(errorObject);
};

export const success = (res, status, message, data) => {
  const successObject = {
    status,
    message,
    data,
  };
  return res.status(status).send(successObject);
};

export const successForXml = (res, status, message, data) => {
  const successObject = {
    status,
    message,
    data,
  };
  return res.status(status).send(successObject);
};

export const getBody = (req) => {
  let body = [];
  return new Promise((resolve, reject) => {
    req.on('data', (buffer) => {
      body.push(buffer);
    });
    req.on('end', () => {
      body = decodeURIComponent(Buffer.concat(body).toString());
      resolve(body);
    });
    req.on('error', (err) => {
      reject(err);
    });
  });
};

export const process_x_www_form_urlencoded = (body) => {
  const fieldsAndValues = body.split('&');
  const data = {};
  fieldsAndValues.forEach((element) => {
    const el = element.split('=');
    const [el1, el2] = el;
    data[el1] = el2;
  });
  return data;
};

export const cardIsValid = (cardNumber) => {
  const cardArr = cardNumber.split('');
  cardArr.reverse();
  let even = false;
  let a = '';
  let b = 0;
  cardArr.forEach((element) => {
    if (even) {
      const double = element * 2;
      a += `${double}`;
      even = false;
    } else {
      b += element * 1;
      even = true;
    }
  });
  const c = a.split('');
  const d = c.reduce((total, num) => total + parseInt(num, 10), 0);
  const total = d + b;
  const mod = total % 10;
  if (mod === 0) return true;
  return false;
};

export const cardNotExpired = (expDate) => {
  const arr = expDate.split('/');
  const mm = arr[0];
  const yy = 20 + arr[1];
  const date = new Date(yy, mm);
  const currentDate = new Date();
  if (currentDate.getTime() >= date.getTime()) return false;
  return true;
};

export const verifyCardType = (cardNumber) => {
  const firstChar = cardNumber.charAt(0);
  const digits = cardNumber.length;
  let cardName = null;
  if (firstChar === '3' && digits === 15) cardName = 'American Express';
  else if (firstChar === '4' && digits === 16) cardName = 'Visa';
  else if (firstChar === '5' && digits === 16) cardName = 'MasterCard';
  else if ((firstChar === '5' && digits === 15) || (firstChar === '6' && digits === 16))
    cardName = 'Discover';
  return cardName;
};

export const objectNotEmpty = (obj) => {
  if (obj === undefined || obj === 'undefined') return false;
  if (Object.keys(obj).length > 0) {
    return true;
  }
  return false;
};
