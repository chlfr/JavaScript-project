const path = require('path');

module.exports = {
  entry: ['./src/catalog.js', './src/registration.js', './src/carousel.js', './src/quotes.js', './src/apiNews.js'], // пути к js файлам
  output: {
    filename: 'main.js', // имя выходного файла
    path: path.resolve(__dirname, 'dist'), // директория для выходного файла
  },
  mode: 'production',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
}