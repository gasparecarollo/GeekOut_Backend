const app = require("./app")

require('dotenv').config()
const PORT = process.env.PORT



//LISTENING
app.listen(PORT, () => {
    console.log(`Gamers ready on PORT:${PORT}`)
})