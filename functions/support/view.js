const pug = require('pug')

exports.pug = function(base)
{   
    base = base ? base + '/' : ''

    return function (id, context)
    {
        var path = id.replace('.', '/')

        return pug.renderFile(base + path + '.pug', context)
    }
}
