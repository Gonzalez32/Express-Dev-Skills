// Require from Models/dev
const Dev = require('../models/dev')


module.exports = {
    index,
    show, 

}

// Create a function to display All!
function index(req, res) {
    res.render('devs/index', {devs: Dev.getAll()})
}

// Create a function to display One by ID
function show(req, res) {
    // console.log(req.params.id);
    res.render('devs/show', {dev: Dev.getOne(req.params.id)})
}