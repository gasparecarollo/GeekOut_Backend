const app = require("./app")

require('dotenv').config()
const PORT = process.env.PORT;



//LISTENING
application.listen(PORT, () => {
    console.log(`Gamers ready on PORT:${PORT}`)
})