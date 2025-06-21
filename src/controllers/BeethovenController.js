const axios = require('axios');

//const TranscripcionOnBoarding= require('../models/TranscripcionOnBoardingSaludMental');
const { OpenAI } = require("openai");


exports.consultaMano = async (req, res) => {
    try {
        res.status(200).json({ message: req.body });
    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(500).json({ error: "Error" });
    }
};