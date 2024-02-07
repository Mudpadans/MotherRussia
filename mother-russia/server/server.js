require('dotenv').config({ path: '../.env'})
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());

app.listen(PORT, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
})