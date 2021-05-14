require('dotenv').config();

const process = require('process');
const { promisify } = require('util');

const sendMailLib = require('sendmail');

const { validateEmail, validateLength } = require('./validations');

const sendMail = promisify(sendMailLib());

const NAME_MIN_LENGTH = 1;
const NAME_MAX_LENGTH = 50;
const SUBJECT_MIN_LENGTH = 1;
const SUBJECT_MAX_LENGTH = 50;
const DETAILS_MIN_LENGTH = 20;
const DETAILS_MAX_LENGTH = 1e7;

const handler = async (event) => {
  console.log('1) inside handler');
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined',
    };
  }
  console.log('2)', process.env.CONTACT_EMAIL);
  const body = JSON.parse(event.body);

  try {
    validateLength('body.name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }
  console.log('3) name', body.name);

  try {
    validateEmail('body.email', body.email);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  console.log('4) email', body.email);

  try {
    validateLength(
      'body.subject',
      body.subject,
      SUBJECT_MIN_LENGTH,
      SUBJECT_MAX_LENGTH,
    );
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  console.log('5) subject', body.subject);

  try {
    validateLength(
      'body.details',
      body.details,
      DETAILS_MIN_LENGTH,
      DETAILS_MAX_LENGTH,
    );
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  console.log('6) details', body.details);

  const descriptor = {
    from: `"${body.email}" <no-reply@the-alleyway.com>`,
    to: process.env.CONTACT_EMAIL,
    subject: body.subject,
    text: body.details,
  };

  try {
    console.log('7) before send mail', descriptor);
    await sendMail(descriptor);
    console.log('8) after send mail', descriptor);
    return {
      statusCode: 200,
      body: `Email sent successfully from ${body.email}`,
    };
  } catch (error) {
    console.log('9) error', error.message);
    return { statusCode: 500, body: error.message };
  }
};

module.exports = { handler };
