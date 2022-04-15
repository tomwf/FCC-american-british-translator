const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const highlight = (text) => `<span class="highlight">${text}</span>`

suite('Functional Tests', () => {
  test('Translation with text and locale fields', (done) => {
    const req = {
      text: 'Mangoes are my favorite fruit.',
      locale: 'american-to-british'
    }

    chai.request(server)
      .post('/api/translate')
      .send(req)
      .end((err, res) => {
        if (err) console.error(err)

        assert.deepEqual(res.body, {
          text:  'Mangoes are my favorite fruit.',
          translation: `Mangoes are my ${highlight('favourite')} fruit.`
        })
        done()
      })
  })

  test('Translation with text and invalid locale field', (done) => {
    const req = {
      text: 'I ate yogurt for breakfast.',
      locale: 'invalid locale'
    }

    chai.request(server)
      .post('/api/translate')
      .send(req)
      .end((err, res) => {
        if (err) console.error(err)

        assert.deepEqual(res.body, { error: 'Invalid value for locale field' })
        done()
      })
  })

  test('Translation with missing text field', (done) => {
    const req = {
      locale: 'american-to-british'
    }

    chai.request(server)
      .post('/api/translate')
      .send(req)
      .end((err, res) => {
        if (err) console.error(err)

        assert.deepEqual(res.body, { error: 'Required field(s) missing' })
        done()
      })
  })

  test('Translation with missing locale field', (done) => {
    const req = {
      text: 'Can you toss this in the trashcan for me?'
    }

    chai.request(server)
      .post('/api/translate')
      .send(req)
      .end((err, res) => {
        if (err) console.error(err)

        assert.deepEqual(res.body, { error: 'Required field(s) missing' })
        done()
      })
  })

  test('Translation with empty text', (done) => {
    const req = {
      text: '',
      locale: 'american-to-british'
    }

    chai.request(server)
      .post('/api/translate')
      .send(req)
      .end((err, res) => {
        if (err) console.error(err)

        assert.deepEqual(res.body, { error: 'No text to translate' })
        done()
      })
  })

  test('Translation with text that needs no translation', (done) => {
    const req = {
      text: 'We watched the footie match for a while.',
      locale: 'american-to-british'
    }

    chai.request(server)
      .post('/api/translate')
      .send(req)
      .end((err, res) => {
        if (err) console.error(err)

        assert.deepEqual(res.body, {
          text: 'We watched the footie match for a while.',
          translation: 'Everything looks good to me!'
        })
        done()
      })
  })
});
