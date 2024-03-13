
const openai = require()

const translateText= async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.createCompletion({
            model: "gpt-4-0125-preview", 
            prompt: req.body.prompt,
        })
        res.json({ translation: response.data.choices[0].text })
    } catch (error) {
        console.error('OpenAI Error:', error)
        res.status(500).send('Error translating text')
    }
};

module.exports = { translateText }