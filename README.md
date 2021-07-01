# validate-payment-info
### API to validate credit card payment information




### How to run the application
Run
```
npm install
npm start
```

endpoint: `POST /api/v1/payment`

example of request body:
```
{ 
  "email": "uggoprince@gmail.com"
  "phoneNumber": "+2347034799885"
  "cvv2": "509"
  "expDate": "07/21"
  "cardNumber": "4003600000000014"
}
```
