import http from "http";
import fs from "fs/promises";
import path from "path";
import { URL } from "url";

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
};

const serveFile = async (filePath, contentType, response) => {
  try {
    const content = await fs.readFile(filePath);
    response.writeHead(200, { "Content-Type": contentType });
    response.end(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      const notFound = await fs.readFile("./404.html");
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(notFound);
    } else {
      response.writeHead(500);
      response.end(`Erro interno: ${error.code}`);
    }
  }
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const route = parsedUrl.pathname;

  if (route === "/random") {
    const max = parseFloat(parsedUrl.searchParams.get("max")) || 1;
    const random = Math.random() * max;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Random number: ${random.toFixed(4)}</h1>`);
    return;
  }

  let filePath = "." + route;
  if (filePath === "./") filePath = "./index.html";
  if (filePath === "./example") filePath = "./example/15447497.html";

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  await serveFile(filePath, contentType, res);
});

const PORT = 8125;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${PORT}/`);
});
