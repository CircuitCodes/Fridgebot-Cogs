var express    = require('express')
var serveIndex = require('serve-index')

var app = express()

const index = serveIndex("cogs", { icons: true })

app.use("/", express.static("cogs"), index)


app.listen(process.env.PORT, function(err) {
    if(err) {
        console.error(err)
        process.exit(1)
    }
    console.log("The cog repository application has started.")
})
