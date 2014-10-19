var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var secrets = require('../config/secrets');

/**
 * GET /userVote
 * User Voting preferences page.
 */

exports.userVote = function(req, res) {
  res.render('account/my-vote', {
    title: 'My Vote'
  });
};
