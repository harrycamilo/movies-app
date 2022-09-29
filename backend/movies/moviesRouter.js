const express = require('express');
const { resolveUrl } = require('./services/urlResolver');
const router = express.Router();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', async (req, res, next) => {
  try {
    const tmdbResponse = await fetch(resolveUrl(req.query));
    const json = await tmdbResponse.json();
    res.json(json);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
