require('dotenv').config({ path: '../.env'}) 
const express = require('express')
const cors = require('cors')
const translationRoutes = require('./routes/translationRoutes')
const OpenAI = require('openai')

const app = express()
const PORT = process.env.PORT
const APIKey = process.env.APIKEY
const openai = new OpenAI({
    apiKey: APIKey
})

app.use(express.json());
app.use(cors());

app.get('/getResponse', async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4-0125-preview',
            message: [{"role":"user", "content":"Russian greetings"}],
            max_tokens: 100,
        })
        console.log(response)
        res.json(response.data)
    } catch (error) {
        console.error('Something went wrong', error)
        res.status(500).send('Error with OpenAI request')
    }
})

app.use('/api', translationRoutes)

app.listen(PORT, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
})