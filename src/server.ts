import http from "node:http";
const hostname = "127.0.0.1";
const port = 3000;
export async function main() {
  const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Not today!\n");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  });
  return server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
