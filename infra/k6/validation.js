import http from 'k6/http';

const body = JSON.stringify({
  "msgType": "balance"
});

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      duration: '120s',
      rate: 10,
      timeUnit: '1s',
      preAllocatedVUs: 50,
    },
  },
};


let params = {
  timeout: '1s',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function () {
  http.post('http://localhost:3000/validation', body, params);
}
