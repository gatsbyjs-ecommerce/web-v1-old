#! /usr/bin/node

// register babel hook
require('babel-core/register');
require('babel-polyfill');

// register application
require('./src');
