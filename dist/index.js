"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.send('Welcome to API that validate payment information');
});
app.use('/api/v1', _routes["default"]);
app.use('*', function (req, res) {
  return res.status(404).json({
    status: 404,
    message: 'No endpoint matches that URL'
  });
});
var PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.info("Server listening on port 7000");
});