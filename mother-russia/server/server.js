require('dotenv').config({ path: '../.env'}) 
const express = require('express')
const cors = require('cors')
// const translationRoutes = require('./routes/translationRoutes')
const OpenAI = require('openai')

const app = express()
const PORT = process.env.PORT
const APIKey = process.env.APIKEY
const openai = new OpenAI({
    apiKey: APIKey
})

app.use(express.json());
app.use(cors());

app.post('/getResponse', async (req, res) => {
    try {
        const userPrompt=req.body.userPrompt
        if (!userPrompt) {
            return res.status(400).send("userPrompt is required")
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role":"user", "content":userPrompt}],
            max_tokens: 100,
        })
        console.log(response.choices[0].message.content)
        res.json(response.data)
    } catch (error) {
        console.error('Something went wrong', error)
        res.status(500).send('Error with OpenAI request')
    }
})

// app.use('/api', translationRoutes)

app.listen(PORT, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
})