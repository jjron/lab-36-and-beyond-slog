'use strict';

require('./lib/mock-env.js');
const {expect} = require('chai');
const superagent = require('superagent');
//const Page = require('../model/page.js');
const serverControl = require('./lib/server-control.js');
const baseURL = process.env.API_URL;

describe('testing page router', function() {
  before(serverControl.start);
  after(serverControl.stop);

  before(done => {
    superagent.get(`${baseURL}/api/login`)
    .auth('chewie@holo.com', 'kylorensux')
    .then(res => {
      this.tempToken = res.text;
      done();
    })
    .catch(done);
  });

  it('should create a page', done => {
    superagent.put(`${baseURL}/api/pages`)
    .send({
      title: 'example page',
      content: '# I AM PAGE\n* oh\n* yes',
      showInNav: true,
    })
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      this.tempPage = res.body;
      expect(res.status).to.equal(200);
      expect(!!res.body.id).to.equal(true);
      expect(res.body.title).to.equal('example page');
      expect(res.body.content).to.equal('# I AM PAGE\n* oh\n* yes');
      expect(res.body.showInNav).to.equal(true);
      done();
    })
    .catch(done);
  });

  it('should respond with a 401', done => {
    superagent.put(`${baseURL}/api/pages`)
    .send({
      title: 'example page',
      content: '# I AM PAGE\n* oh\n* yes',
      showInNav: true,
    })
    .then(done)
    .catch(err => {
      expect(err.status).to.equal(401);
      done();
    })
    .catch(done);
  });

  it('should respond with a 400', done => {
    superagent.put(`${baseURL}/api/pages`)
    .send({title: 'example page', showInNav: true})
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(done)
    .catch(err => {
      expect(err.status).to.equal(400);
      done();
    })
    .catch(done);
  });

  it('valid GET should respond with 200 and array of pages', done => {
    superagent.get(`${baseURL}/api/pages`)
    .then(res => {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.instanceof(Array);
      done();
    })
    .catch(done);
  });

  it('should update the page', done => {
    this.tempPage.title = 'wat';
    superagent.put(`${baseURL}/api/pages`)
    .send(this.tempPage)
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      expect(res.status).to.equal(200);
      expect(!!res.body.id).to.equal(true);
      expect(res.body.title).to.equal(this.tempPage.title);
      expect(res.body.content).to.equal('# I AM PAGE\n* oh\n* yes');
      expect(res.body.showInNav).to.equal(true);
      done();
    })
    .catch(done);
  });

  it('delete without auth should respond with 401', done => {
    superagent.delete(`${baseURL}/api/pages/${this.tempPage.id}`)
    .then(done)
    .catch(res => {
      expect(res.status).to.equal(401);
      done();
    })
    .catch(done);
  });

  it('should delete the page', done => {
    superagent.delete(`${baseURL}/api/pages/${this.tempPage.id}`)
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      expect(res.status).to.equal(204);
      done();
    })
    .catch(done);
  });
});
