var express = require('express');
const { dailyEntry, protineEntry } = require('../helpers/main-helpers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const start = new Date("02/05/2020");
  const end = new Date("02/10/2020");
  let loop = new Date(start);
  while (loop <= end) {
    console.log(loop);
    let newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
    console.log(loop.getDate());
    console.log(loop.getDay());
    console.log(loop.getFullYear());
  }


  res.render('Dashboard.hbs');
});
router.post('/workout-entry', function(req, res, next) {

  console.log(req.body);
  workoutEntry(req.body).then((res)=>{
    console.log("success");
  })
});

router.post('/protine-entry', function(req, res, next) {

  console.log(req.body);
  protineEntry(req.body.protine).then((res)=>{
    console.log("success");
  })
});
module.exports = router;
