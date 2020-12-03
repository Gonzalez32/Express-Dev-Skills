var express = require('express');
const { report } = require('.');
var router = express.Router();
// calling the file inside the routes file
const devCtrl = require('../controllers/devs');
const dev = require('../models/dev');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET the route for dev index inside Controller/devs.js
router.get('/', devCtrl.index)
// GET the route for new inside Controller/devs.js
router.get('/new', devCtrl.new)
// GET the route for show ID inside Controller/dev.js
router.get('/:id', devCtrl.show)
// POST the route to create new skill inside Controller/dev.js
router.post('/', devCtrl.create)
// DELETE  the route inside Controller/dev.js
router.delete('/:id', devCtrl.delete)
// Edit Skill route inside Controller/dev.js
router.get('/:id/edit', devCtrl.edit)
// PUT method route inside Controller/dev.js
router.put('/:id', devCtrl.update)

module.exports = router;
