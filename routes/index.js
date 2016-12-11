var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/icecreams');
var icecreams = db.get('icecreams');
/* GET home page. */

router.get('/api/icecreams', function(req, res, next) {
  icecreams.find({}, function(err, records) {
    res.json(records);
  })
});

router.post('/api/icecreams', function(req, res, next) {
  icecreams.insert({flavor: req.body.flavor, review: req.body.review, image_url: req.body.image_url});
  res.redirect('/')
})

router.get('/:id/delete', function(req, res, next) {
  icecreams.remove({_id: req.params.id});
  res.redirect('/');
})

router.get('/:id/edit', function(req, res, next) {
  icecreams.findOne({_id: req.params.id}, function(err, record){
    res.json(record);
  });
})

router.post('/api/icecreams/:id', function(req,res,next){
  icecreams.update({_id: req.params.id}, {$set: {flavor: req.body.flavor, review: req.body.review, image_url: req.body.image_url}});
  res.redirect('/');
})

module.exports = router;
