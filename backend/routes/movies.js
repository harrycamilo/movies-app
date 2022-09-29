const express = require('express');
const router = express.Router();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=23c92ad271307fe155dd2463a2f8e69a`;

router.get('/', async (req, res, next) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
