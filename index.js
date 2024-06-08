const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/callback', (req, res) => {
    const data = req.body;
    console.log('Received callback data:', data);
    res.json({ status: 'success' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
