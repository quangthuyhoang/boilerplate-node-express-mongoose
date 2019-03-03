const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.get = function (req, res) {
    res.send('Get Test controller!');
};

exports.product_create = function (req, res, next) {
  console.log("heyyyeyeyey")
  console.log(req.body)
  // let product = new Product(
  //     {
  //         name: 'req.body.name',
  //         price: 'req.body.price'
  //     }
  // );
  Product.create(
    {
      name: req.body.name,
      price: req.body.price
    }, function(err, results) {
      if(err) {
        console.log("err");
        res.status(400).send(err)
      }
      console.log("results", results);
      results.save();
      res.stats(200).send("results", results)
    }
  )
  // product.save(function (err) {
  //     if (err) {
  //         return next(err);
  //     }
  //     res.send('Product Created successfully')
  // })
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