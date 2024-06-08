const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/callback', (req, res) => {
    const data = req.body;
    console.log('Received callback data:', data);
    // 確認接收到的數據正確處理，並根據需求進行操作
    res.json({ status: 'success' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
