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
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined',
    };
  }

  const body = JSON.parse(event.body);

  try {
    validateLength('body.name', body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  try {
    validateEmail('body.email', body.email);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

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

  const descriptor = {
    from: `"${body.email}" <no-reply@the-alleyway.com>`,
    to: process.env.CONTACT_EMAIL,
    subject: body.subject,
    text: body.details,
  };

  try {
    await sendMail(descriptor);
    return {
      statusCode: 200,
      body: `Email sent successfully from ${body.email}`,
    };
  } catch (error) {
    return { statusCode: 500, body: error.message };
  }
};

module.exports = { handler };
