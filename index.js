const express = require('express');
const app = express();

app.get('/', (rec, res) => {
    res.send({ lmao: 'bub' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);