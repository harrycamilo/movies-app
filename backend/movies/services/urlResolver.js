module.exports.resolveUrl = (queryParams) => {
  let url = process.env.TMDB_BASE_URL;

  url += queryParams.titleFilter ? '/search/movie' : '/movie/top_rated';
  url += `?api_key=${process.env.TMDB_API_KEY}`;
  url += queryParams.titleFilter ? `&query=${queryParams.titleFilter}` : '';
  url += `&page=${queryParams.page ?? "1"}`;

  return url;
};
