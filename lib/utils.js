const emailEndpoint =
  'https://script.google.com/macros/s/AKfycbxXw7fnNjM-imxAYowQZWlPEO-tIT19CbTg2AttcnCkdEfVWHqCUhwgsKgL7QH9adjo/exec';

const axiosConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
};

const proxyurl = 'https://cors-anywhere.herokuapp.com/';

const fieldNames = {
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  EMAIL: 'EMAIL',
  WEBSITE: 'WEBSITE',
  INSTAGRAM: 'INSTAGRAM',
  TWITTER: 'TWITTER',
  VENMO: 'VENMO',
  SIGNATURE: 'SIGNATURE',
  STORY_CONCEPT: 'STORY_CONCEPT',
  PETITION_LINK: 'PETITION_LINK',
  DONATION_PAGE_LINK: 'DONATION_PAGE_LINK',
  FURTHER_EDUCATION_LINK: 'FURTHER_EDUCATION_LINK',
  MESSAGE: 'MESSAGE',
};

export { emailEndpoint, axiosConfig, proxyurl, fieldNames };
