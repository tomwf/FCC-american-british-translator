'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {
        text,
        locale
      } = req.body

      // Missing required field(s)
      if (text === undefined || locale === undefined) return res.json({ error: 'Required field(s) missing' })

      // Empty text
      if (text.length === 0) return res.json({ error: 'Translation with empty text' })

      let translation
      let result

      switch (locale) {
        case 'american-to-british':
          translation = translator.toBritish(text)
          result = translation === text ? 'Everything looks good to me!' : translation
          res.json({
            text,
            translation: result
          })
          break
        case 'british-to-american':
          translation = translator.toAmerican(text)
          result = translation === text ? 'Everything looks good to me!' : translation
          res.json({
            text,
            translation: result
          })
          break
        default:
          res.json({ error: 'Invalid value for locale field' })
      }
    });
};
