require('dotenv').config({ path: '../.env'})  
const express = require('express')
const cors = require('cors')
// const translationRoutes = require('./routes/translationRoutes')
const { OpenAI } = require('openai')

const app = express()
app.use(express.json());
app.use(cors());
 
const PORT = process.env.PORT
const APIKey = process.env.APIKEY
const openai = new OpenAI({
    apiKey: APIKey
})

app.post('/translate', async (req, res) => {
    const userPrompt=req.body.userPrompt
    if (!userPrompt) {
        return res.status(400).send("userPrompt is required")
    }

    const likelyLanguage = userPrompt.match(/[а-яА-Я]/) ? 'Russian' : 'English'

    const translationPrompt = likelyLanguage === 'English'
        ? `Translate the following English text into Russian: ${userPrompt}`
        : `Переведите следующий русский текст на английский: ${userPrompt}`

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {role: 'system', content: "You are a bilingual Russian-English translator."},
                {role: 'user', content: translationPrompt}
            ],
            max_tokens: 100,
        });
        let translation = response.choices[0].message.content.trim()

        const instructionEnglish = "Translate the following Russian text into English:";
        if (likelyLanguage === 'Russian' && translation.startsWith(instructionEnglish)) {
            translation = translation.substring(instructionEnglish.length).trim();
        }

        console.log((JSON.stringify(response.choices[0].message)))
        res.json({ translation })
    } catch (error) {
        console.error('OpenAI request error', error)
        res.status(500).send('Failed to fetch translation')
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