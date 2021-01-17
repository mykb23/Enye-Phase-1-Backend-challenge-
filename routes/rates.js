const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
	const base = req.query.base;
	const currency = req.query.currency;
	try {
		const response = await axios.get(
			`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`
		);
		res.status(200).json({
			results: {
				base: response.data.base,
				date: response.data.date,
				rates: response.data.rates
			}
		});
	} catch (error) {
		if (error.message === 'Request failed with status code 400')
			return res.status(400).json({ message: 'NGN is not supported.' });
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
