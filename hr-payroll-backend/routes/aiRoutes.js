const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

// Endpoint for AI query
router.post('/query', async (req, res) => {
  try {
    const { query } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: query,
      max_tokens: 150
    });
    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    res.status(500).send('Error processing AI request');
  }
});

module.exports = router;
