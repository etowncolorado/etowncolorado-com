const { pug } = require('./support/view.js')

const view = pug('../views')

console.log(view('template', {
    title: 'Timothy'
}));