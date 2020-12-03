var express = require('express');
var router = express.Router();
// calling the file inside the routes file
const devCtrl = require('../controllers/devs')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET the route for dev index inside Controller/devs.js
router.get('/', devCtrl.index)
// GET the route for show ID inside Contoroller/dev.js
router.get('/:id', devCtrl.show)

module.exports = router;
