import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const port = 5000;
const directoryPath = 'guests';
const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const password = 'abracadabra';

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (req.method === 'POST' && authorizedUsers.includes(req.headers.authorization)) {
    const guestName = pathname.slice(1);
    const filePath = path.join(directoryPath, `${guestName}.json`);
    const fileData = await fs.readFile(filePath);
    const guest = JSON.parse(fileData);

    if (query.plusOne) {
      guest.plusOnes = (guest.plusOnes || []).concat(query.plusOne);
      await fs.writeFile(filePath, JSON.stringify(guest));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(guest));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'missing plusOne parameter' }));
    }
  } else if (req.method === 'GET' && authorizedUsers.includes(req.headers.authorization)) {
    try {
      const guest = await fs.readFile(path.join(directoryPath, pathname.slice(1)), 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(guest);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    }
  } else {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'unauthorized' }));
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});