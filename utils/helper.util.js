import { readFileSync } from 'fs';

const findUser = (username) => {
  const rawText = readFileSync('./db.json', 'utf8');
  const users = JSON.parse(rawText);
  return users.find((user) => user.username === username);
};

export const authenticate = (req, res, next) => {
  const { username, password } = req.headers;

  const user = findUser(username);
  if (!user) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Invalid login credentials' }));
    return;
  }
  if (user.username !== username || user.password !== password) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Invalid login credentials' }));
    return;
  }
  next(req, res);
};
