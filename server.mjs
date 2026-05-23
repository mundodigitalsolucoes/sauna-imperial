import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 3000);

const candidateDirs = [
  path.join(root, 'dist', 'client'),
  path.join(root, 'dist', 'public'),
  path.join(root, 'dist'),
  path.join(root, '.output', 'public'),
  path.join(root, 'build', 'client'),
  path.join(root, 'build'),
  path.join(root, 'public')
];

function findIndexDir(dir, depth = 0) {
  if (depth > 4 || !fs.existsSync(dir)) return null;

  const directIndex = path.join(dir, 'index.html');
  if (fs.existsSync(directIndex)) return dir;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const found = findIndexDir(path.join(dir, entry.name), depth + 1);
    if (found) return found;
  }

  return null;
}

const publicDir = candidateDirs.map((dir) => findIndexDir(dir)).find(Boolean);

const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.mjs', 'application/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.gif', 'image/gif'],
  ['.svg', 'image/svg+xml'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2']
]);

function sendFile(res, filePath, statusCode = 200) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(statusCode, {
      'Content-Type': types.get(ext) || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (!publicDir) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Build output not found. No index.html was generated in expected directories.');
    return;
  }

  const requestUrl = new URL(req.url || '/', 'http://localhost');
  const cleanPath = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, '');
  const requestedFile = path.normalize(path.join(publicDir, cleanPath || 'index.html'));

  if (!requestedFile.startsWith(publicDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
    sendFile(res, requestedFile);
    return;
  }

  sendFile(res, path.join(publicDir, 'index.html'));
});

server.listen(port, '0.0.0.0', () => {
  console.log('Static server running on port ' + port);
  console.log('Project root: ' + root);
  console.log('Serving directory: ' + (publicDir || 'NOT FOUND'));
});
