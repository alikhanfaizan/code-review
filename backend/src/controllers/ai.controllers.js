const aiService=require("../services/ai.services")

module.exports.getReview= async (req, res) => {
    try {
         const {code} = req.body;
        if (!code) {
            return res.status(400).send('Prompt is required');
        }
       const response = await aiService(code);
        res.send(response);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}