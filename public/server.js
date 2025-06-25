const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Путь к вашему db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Это критически важно для Vercel: экспортируем сервер
module.exports = server;
