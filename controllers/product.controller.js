const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.get = function (req, res) {
    res.send('Get Test controller!');
};

exports.product_create = function (req, res, next) {
  Product.create(
    {
      name: req.body.name,
      price: req.body.price
    }, function(err, results) {
      if(err) {
        res.status(400).send(err)
      }
      results.save();
      res.status(200).send(results)
    }
  )
};

exports.product_update_by_id = function (req, res, next) {
  const _id = req.params.id;
  const name = req.body.name;
  const option = {};
  const updateParams = (args) => {
    let name = args.name || undefined;
    let price = args.price || undefined;
    let obj = {};
    if(name) {
      obj.name = name;
    }
    if (price) {
      obj.price = price;
    }
    return obj;
  }

  const update = updateParams(req.body);

  Product.findOneAndUpdate(
    {
      _id: req.params.id,
    }, 
    update,
    option, function(err, results) {
      if(err) {
        res.status(400).send(err)
      }
      
      res.status(200).json({
        _id: results._id,
        message: "success"
      })
    }
  )
};

exports.product_find = function (req, res, next) {

  Product.find(
    {
      _id: req.params.id
    }, function(err, results) {
      if(err) {
        res.status(400).send(err)
      }

      res.status(200).send(results)
    }
  )
};

// TODOS: need to make delete
exports.product_delete = function (req, res, next) {
  Product.create(
    {
      name: req.body.name,
      price: req.body.price
    }, function(err, results) {
      if(err) {
        res.status(400).send(err)
      }
   
      res.status(200).send(results)
    }
  )
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

