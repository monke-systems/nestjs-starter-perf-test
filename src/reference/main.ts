import * as http from 'node:http';
import { plaintextHandler } from './plaintext';

export const main = () => {
  const server = http.createServer(plaintextHandler);
  server.listen(3000);
  console.log('Server running at http://localhost:3000/');
};
