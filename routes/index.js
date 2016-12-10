var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/icecreams');
var icecreams = db.get('icecreams');
/* GET home page. */

router.get('/api/icecreams', function(req, res, next) {
  icecreams.find({}, function(err, records) {
    console.log(records);
    res.json(records);
  })
});

router.post('/api/icecreams', function(req, res, next) {
  icecreams.insert({flavor: req.body.flavor});
  res.redirect('/')
})

router.get('/:id/delete', function(req, res, next) {
  icecreams.remove({_id: req.params.id});
  res.redirect('/');
})

// router.get('/icecreams', function(req, res, next) {
//   icecreams.find({}, function(err, records) {
//     console.log(records);
//     res.render('/views/icecreams.html', {allIcecreams: records})
//   });
// });
//
// router.get('/icecreams/new', function(req, res, next) {
//   res.redirect('/views/new.html')
// })
//
// router.post('/icecreams/new', function(req, res, next) {
//   icecreams.insert({ flavor: req.body.flavor});
//   res.redirect('/icecreams');
// });

module.exports = router;
