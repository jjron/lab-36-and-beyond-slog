'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const debug = require('debug')('fireslog:page-router');

const Page = require('../model/page.js');
const bearerAuth = require('../lib/bearer-auth.js');

const pageRouter = module.exports = new Router();

pageRouter.put('/api/pages', bearerAuth, jsonParser, (req, res, next) => {
  debug('PUT /api/pages');
  new Page(req.body).save()
  .then(page => res.json(page))
  .catch(next);
});

pageRouter.get('/api/pages', (req, res, next) => {
  debug('GET /api/pages');
  Page.fetchAll()
  .then(pages => res.json(pages))
  .catch(next);
});

pageRouter.delete('/api/pages/:id', bearerAuth, (req, res, next) => {
  debug('DELETE /api/pages/:id');
  Page.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(204))
  .catch(next);
});
