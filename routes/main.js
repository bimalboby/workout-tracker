var express = require('express');
var helper = require('../helpers/main-helpers');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  // const start = new Date("02/05/2020");
  // const end = new Date("02/10/2020");
  // let loop = new Date(start);
  // while (loop <= end) {
  //   console.log(loop);
  //   let newDate = loop.setDate(loop.getDate() + 1);
  //   loop = new Date(newDate);
  //   console.log(loop.getDate());
  //   console.log(loop.getDay());
  //   console.log(loop.getFullYear());
  // }
  helper.getAllData('chest').then((data)=>{
     let vol=[]
    for (let i = 0; i < data.length; i++)
     {
       vol.push(data[i].vol)
       
    }
    console.log(vol);
    res.render('Dashboard.hbs',{d:vol});

  })


  
});
router.post('/workout-entry', function(req, res, next) {

  console.log(req.body);
  helper.workoutEntry(req.body).then((res)=>{
    console.log("success");
  })
});

router.post('/protine-entry', function(req, res, next) {

  console.log(req.body);
  helper.protineEntry(req.body.protine).then((res)=>{
    console.log("success");
  })
});

module.exports = router;
