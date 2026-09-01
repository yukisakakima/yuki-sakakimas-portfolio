const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const publicDirectory = path.resolve(__dirname, '..', 'public');
const port = Number(process.env.PORT) || 3000;
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
};

function resolveFilePath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const requestedPath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const fileName = path.extname(requestedPath) ? requestedPath : `${requestedPath}.html`;
  const filePath = path.resolve(publicDirectory, fileName);

  return filePath.startsWith(`${publicDirectory}${path.sep}`) ? filePath : null;
}

http.createServer((request, response) => {
  const filePath = resolveFilePath(request.url);

  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not Found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  fs.createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Static site running at http://localhost:${port}`);
});
