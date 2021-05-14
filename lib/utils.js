const https = require('https');
const MAILERLITE_API = process.env.NEXT_PUBLIC_MAILERLITE_API;
const LIST_ID = process.env.NEXT_PUBLIC_MAILERLITE_LIST_ID;

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
  NAME: 'NAME',
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

const subscriptionEndpoint = 'https://api.mailerlite.com/api/v2/';

function httpReq(strData, options, callback) {
  var req = https.request(options, function (res) {
    res.setEncoding('utf8');

    var data = '';

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function () {
      var responseObject = JSON.parse(data);
      callback(null, responseObject);
    });
  });

  req.on('error', function (error) {
    callback(error);
  });

  req.write(strData);
  req.end();
}

function addToList(email, callback, firstName, lastName) {
  var postData = {
    apiKey: MAILERLITE_API,
    id: LIST_ID,
    email: email,
  };

  const domain = subscriptionEndpoint.split('/')[2];
  const apiPath = subscriptionEndpoint.split('com')[1];

  if (firstName) {
    postData.name = firstName;
  }
  if (lastName) {
    postData.fields = {
      last_name: lastName,
    };
  }

  var strData = JSON.stringify(postData);

  var options = {
    host: domain,
    port: 443,
    path: apiPath + 'groups/' + LIST_ID + '/subscribers',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(strData, 'utf8'),
    },
  };

  httpReq(strData, options, callback);
}

const truncateString = (str, max) =>
  str.length > max ? str.slice(0, max) + ' . . .' : str;

export {
  emailEndpoint,
  axiosConfig,
  proxyurl,
  fieldNames,
  addToList,
  truncateString,
};
