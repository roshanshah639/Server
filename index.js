import http from "http";

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end("<h1>Hello, I am NodeJs Server</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
