
const { pretty, pug } = require('./support/view.js')
const { folder, write } = require('./support/filesystem.js')

const views = folder(__dirname + '/../views')
const public = folder(__dirname + '/../public')

const view = pug(views)
const save = write(public)

const html = view('template', {
  title: 'Timothy'
})

save('pug.html', pretty(html))

