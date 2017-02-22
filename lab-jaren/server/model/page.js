'use strict';

const uuid = require('uuid');
const firebase = require('firebase');
const createError = require('http-errors');
const debug = require('debug')('fireslog:page-model');

const Page = module.exports = function(opts) {
  this.id = opts.id || uuid.v1();
  this.title = opts.title;
  this.content = opts.content;
  this.showInNav = opts.showInNav;
};

Page.fetchAll = function() {
  debug('page fetchAll');
  return firebase.database().ref('/pages').once('value')
  .then(snapShot => {
    let data = snapShot.val();
    let pages = Object.keys(data).map(key => data[key]);
    return pages;
  });
};

Page.findByIdAndDelete = function(id) {
  debug('page findByIdAndDelete');
  return firebase.database().ref('/pages')
  .child(id).remove()
  .then(() => firebase.auth().signOut())
  .catch(err => {
    firebase.auth().signOut();
    throw err;
  });
};

Page.prototype.validate = function() {
  debug('page validate');
  if(!this.title || !this.content || !this.showInNav)
    return Promise.reject(createError(400, 'missing a required property'));
  return Promise.resolve();
};

Page.prototype.save = function() {
  debug('page save');
  return this.validate()
  .then(() => {
    return firebase.database().ref('/pages')
    .child(this.id).set(this);
  })
  .then(() => {
    return firebase.auth().signOut();
  })
  .then(() => this)
  .catch(err => {
    firebase.auth().signOut();
    throw err;
  });
};
