const path = require('path');

module.exports = {
  entry: ['./src/index.js'], // путь к js файлу
  output: {
    filename: 'main.js', // имя выходного файла
    path: path.resolve(__dirname, 'dist'), // директория для выходного файла
  },
  module: {
    rules: [
        {
            test: /\.js$/, // обработка JavaScript файлов
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], // пресет для компиляции ES6+
                },
            },
        },
        {
            test: /\.css$/, // обработка CSS файлов
            use: ['style-loader', 'css-loader'], // применение стилевых файлов
        },
        {
            test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/, // обработка медиа-файлов
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]', // оригинальные имена файлов
                },
            },
        },
    ],
},
resolve: {
    extensions: ['.js'], // поддерживаемые расширения
},
  mode: 'production',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
}
