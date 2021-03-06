const devs = [
    {id: 123, dev: 'Write Clean Code', done: true},
    {id: 1234, dev: 'After Clean up code take break', done: false},
    {id: 12345, dev: 'Learn Node.js', done: true},
    {id: 123456, dev: 'Use Express-g too speed up app', done: true},
    {id: 1234567, dev: 'Eat read sleep code!', done: true},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,

}

function getOne(id) {
    return devs.find(dev => dev.id === parseInt(id))
}

function getAll() {
    return devs
}

function create(id) {
    id.id = Date.now()*1000000
    id.done = false
    devs.push(id)
}

function deleteOne(id) {
    const index = devs.findIndex(dev => dev.id === parseInt(id))
    devs.splice(index, 1)
}

function update(id, newSkill) {
    const index = devs.findIndex(dev => dev.id === parseInt(id))
    devs[index].dev = newSkill.dev
    devs[index].done = newSkill.done === 'on' ? true : false
}