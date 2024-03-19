import http from 'http';
import { authenticate } from './utils/helper.util.js';
import books from './routes/books.js';
import authors from './routes/authors.js';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    if (body) req.body = JSON.parse(body);
    if (req.url === '/books') {
      authenticate(req, res, books);
    }
    if (req.url === '/authors') {
      authenticate(req, res, authors);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
