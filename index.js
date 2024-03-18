const _ = require('lodash');
const moment = require('moment');

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalizeWords(sentence) {
  return _.capitalize(sentence);
}

function formatDateTime(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

module.exports = {
  reverseString,
  capitalizeWords,
  formatDateTime
};
