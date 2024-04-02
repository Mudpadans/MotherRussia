require('dotenv').config({ path: '../.env'})    
const express = require('express')
const cors = require('cors')
// const translationRoutes = require('./routes/translationRoutes')
const { OpenAI } = require('openai')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json());
app.use(cors());
 
const PORT = process.env.PORT
const APIKey = process.env.APIKEY
const openai = new OpenAI({
    apiKey: APIKey
})

app.use(express.static(path.join(__dirname, "../build")))
const speechFile = path.join(__dirname, "speech.mp3");

app.post('/translate', async (req, res) => {
    const userPrompt=req.body.userPrompt
    if (!userPrompt) {
        return res.status(400).send("userPrompt is required")
    }

    const likelyLanguage = userPrompt.match(/[а-яА-Я]/) ? 'Russian' : 'English'

    const translationPrompt = likelyLanguage === 'English'
        ? `Translate the following English text into Russian with a English way to pronounce it in parentheses: ${userPrompt}`
        : `Translate the following Russian text into English with a Russian way to pronounce it in parentheses: ${userPrompt}`

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                {role: 'system', content: "You are a bilingual Russian-English translator."},
                {role: 'user', content: translationPrompt}
            ],
            max_tokens: 100,
        });
        let translation = response.choices[0].message.content.trim()

        const instructionEnglish = "Translate the following Russian text into English with a Russian way to pronounce it in parentheses:";
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

app.post('/text-to-speech', async (req, res) => {
    const { text } = req.body
    if (!text) {
        return res.status(400).send("text is required")
    }

    try {
        const audioResponse = await openai.audio.speech.create({
            model: "tts-1",
            voice: "alloy",
            input: text
        })

        const buffer = Buffer.from(await audioResponse.arrayBuffer())

        await fs.promises.writeFile(speechFile, buffer)
        console.log(audioResponse)
        console.log(speechFile)
    } catch (error) {
        console.error('OpenAI TTS request error', error);
        res.status(500).send('Failed to synthesize speech')
    }
})

app.get('/audio', (req, res) => {
    console.log(`Serving audio from: ${speechFile}`)
    res.sendFile(speechFile)
})

// app.use('/api', translationRoutes)

app.listen(PORT, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
})