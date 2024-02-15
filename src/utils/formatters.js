function formatProduct(product) {
  return {
    _id: product._id,
    type: 'product',
    gameTitle: product.gameTitle.title,
    description: product.gameTitle.description,
    image: product.gameTitle.image,
    genres: formatGenres(product.gameTitle.genres),
    platform: product.platform.name,
    stock: product.stock,
    price: product.price,
  };
}

function formatGameTitle(gameTitle) {
  return {
    ...gameTitle,
    genres: formatGenres(gameTitle.genres),
  };
}

function formatGenres(genres) {
  return genres.map((genre) => genre.name);
}

export { formatProduct, formatGameTitle, formatGenres };
