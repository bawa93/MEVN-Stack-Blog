var express = require('express');
var router = express.Router();

var Users = require('../models/Users.js');
var Posts = require('../models/Posts.js');
var Categories = require('../models/Categories.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  Users.find(function (err, response) {
    res.json(response);
  });

});


router.get('/posts', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  Posts.find().populate('category').populate('author').exec(function (err, response) {
    if (err) {
      console.log(err)
    }
    res.json(response);
  });

});


router.get('/categories', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  Categories.find().exec(function (err, response) {
    if (err) {
      console.log(err)
    }


    res.json(response);
  });

});

router.get('/:category_id/posts', function(req, res, next) {
    let category_id = req.params.category_id;

    Posts.find({
        category: category_id
    }).populate('category').populate('author').exec(function (err, response) {
        if (err) {
            console.log(err)
        }
        res.json(response);
    });
});


router.get('/author/:author/posts', function(req, res, next) {
    let author_id = req.params.author;
    Posts.find({
        author: author_id
    }).populate('category').populate('author').exec(function (err, response) {
        if (err) {
            console.log(err)
        }
        res.json(response);
    });
});


router.get('/posts/create', function(req, res, next) {
  res.render('posts/create');
});


router.post('/posts', function (req, res, next) {
  // res.render('index', { title: 'Express' });

  let post = new Posts({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
      author: req.body.author
  });


  post.save(function(err, result) {
     if (err) {
         console.log(err);
     }
     return res.json({id: result._id});
  });
});



module.exports = router;
