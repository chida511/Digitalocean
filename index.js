const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end('Hello chida welcome to  i DigitalOcean CI/CD 🚀');
});
server.listen(port, () => console.log(`Running on port ${port}`));

