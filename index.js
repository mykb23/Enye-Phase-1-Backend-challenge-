const express = require('express');
const app = express();

const port = 5000;

const ratesRouter = require('./routes/rates.js');

app.use('/api/rates', ratesRouter);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
