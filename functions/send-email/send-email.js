require('dotenv').config();
const fetch = require('node-fetch');
const process = require('process');

const emailEndpoint = process.env.SEND_EMAIL_API_ENDPOINT;

const handler = async function (event) {
  const { name, subject, email, details } = JSON.parse(event.body);
  if (!details || !name || !email || !subject) {
    return {
      statusCode: 422,
      body: 'Name, email, subject, and message are required.',
    };
  }

  try {
    const response = await fetch(
      `${emailEndpoint}?name=${name}&email=${email}&subject=${subject}&body=${details}`,
      {
        method: 'post',
        headers: { Accept: 'application/json' },
      },
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke }),
    };
  } catch (error) {
    // output to netlify function log
    console.log('error', error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
