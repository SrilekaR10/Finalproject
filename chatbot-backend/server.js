const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Chatbot endpoint
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message; // Get user message from the request

    try {
        // Call OpenAI API (GPT-3.5 or GPT-4)
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }],
            },
            {
                headers: {
                    Authorization: `Bearer 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`, // Replace with your OpenAI API key
                },
            }
        );

        const aiResponse = response.data.choices[0].message.content; // Extract AI reply

        // Send the AI reply back to the frontend
        res.json({ reply: aiResponse });
    } catch (error) {
        console.error(error); // Log any errors
        res.status(500).json({ reply: 'Sorry, something went wrong!' });
    }
});