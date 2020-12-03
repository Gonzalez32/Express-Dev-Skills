// Require from Models/dev
const Dev = require('../models/dev')


module.exports = {
    index,
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
}

// Create a function to display All!
function index(req, res) {
    console.log(req.time);
    res.render('devs/index', {devs: Dev.getAll(), time: req.time})
}

// Create a function to display One by ID
function show(req, res) {
    // console.log(req.params.id);
    res.render('devs/show', {dev: Dev.getOne(req.params.id)})
}

function newSkill(req, res) {
    res.render('devs/new', )
}

function create(req, res) {
    console.log(req.body);
    // res.render('devs/posts')
    Dev.create(req.body)
    res.redirect('/devs')
}

function deleteSkill(req, res) {
    Dev.deleteOne(req.params.id)
    res.redirect('/devs')
}