const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Отдаем статические файлы из папки build
app.use(express.static(path.join(__dirname, 'build')));

// Для всех остальных маршрутов отдаём index.html (для SPA-приложений)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});