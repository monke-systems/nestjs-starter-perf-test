import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      duration: '150s',
      rate: 5000,
      timeUnit: '1s',
      preAllocatedVUs: 500,
    },
  },
};

export default function () {
  http.get('http://localhost:3000/plaintext');
}
