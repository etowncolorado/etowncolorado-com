const path = require('path')
const filesystem = require('fs')

exports.folder = (base) => {
  return (file) => {
    return path.resolve(base, file)
  }
}

exports.write = (folder) => {
  return (file, data, callback) => {
    if (!callback) {
      callback = (error) => {
        if (error) {
          console.error(error)
        } else {
          console.log('Saved: ' + file)
        }
      }
    }

    return filesystem.writeFile(folder(file), data, callback)
  }
}