import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distClient = path.join(root, 'dist', 'client');
const distRoot = path.join(root, 'dist');
const publicDir = fs.existsSync(distClient) ? distClient : distRoot;
const port = Number(process.env.PORT || 3000);

const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.svg', 'image/svg+xml'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2']
]);

function sendFile(res, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': types.get(ext) || 'application/octet-stream' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || '/', 'http://localhost');
  const cleanPath = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, '');
  const requestedFile = path.join(publicDir, cleanPath || 'index.html');

  if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
    sendFile(res, requestedFile);
    return;
  }

  sendFile(res, path.join(publicDir, 'index.html'));
});

server.listen(port, '0.0.0.0', () => {
  console.log('Static server running on port ' + port);
  console.log('Serving directory: ' + publicDir);
});
