const pug = require('pug')
const pretty = require('pretty')

exports.pretty = function(value) {
  return pretty(value, { ocd: true })
}

exports.pug = (folder) => {
  return (id, context) => {
    var path = id.replace('.', '/') + '.pug'

    return pug.renderFile(folder(path), context)
  }
}

