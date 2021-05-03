const emailEndpoint =
  'https://script.google.com/macros/s/AKfycbxXw7fnNjM-imxAYowQZWlPEO-tIT19CbTg2AttcnCkdEfVWHqCUhwgsKgL7QH9adjo/exec';
const axiosConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
};
const proxyurl = 'https://cors-anywhere.herokuapp.com/';

export { emailEndpoint, axiosConfig, proxyurl };
