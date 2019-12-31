var express    = require('express')
var serveIndex = require('serve-index')

var app = express()

const index = serveIndex("cogs", { icons: true })

app.use("/", express.static("cogs"), index)


app.listen(3000, function(err) {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log("The cog repository application has started.")
})
