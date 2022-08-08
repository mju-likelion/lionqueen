require("dotenv").config();

const { createServer: createHttpServer } = require("http");
const { createServer: createHttpsServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const hostname = "local.liontown.city";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const useSSL = !!process.env.USE_SSL;

const ssl =
  dev && useSSL
    ? {
      cert: fs.readFileSync(`./cert/cert.pem`),
      key: fs.readFileSync(`./cert/cert.key`),
    }
    : null;

const serverMiddleware = async (req, res) => {
  try {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      await app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      await app.render(req, res, "/b", query);
    } else {
      await handle(req, res, parsedUrl);
    }
  } catch (err) {
    console.error("Error occurred handling", req.url, err);
    res.statusCode = 500;
    res.end("internal server error");
  }
};

app.prepare().then(() => {
  useSSL
    ? createHttpsServer(ssl, serverMiddleware).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${port}`);
    })
    : createHttpServer(serverMiddleware).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
