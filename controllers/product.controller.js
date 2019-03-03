const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.get = function (req, res) {
    res.send('Get Test controller!');
};

exports.post = function (req, res) {
  res.send('Post test!');
};

exports.put = function (req, res) {
  res.send('put test!');
};

exports.delete = function (req, res) {
  res.send('delete!');
};

exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};