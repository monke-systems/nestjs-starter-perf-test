import type * as http from 'node:http';

const response = 'Im plain text';

const head = {
  'Content-Type': 'text/plain',
  'Content-Length': Buffer.byteLength(response),
};

export const plaintextHandler: http.RequestListener = (req, res) => {
  res.writeHead(200, head);
  res.end(response);
};
