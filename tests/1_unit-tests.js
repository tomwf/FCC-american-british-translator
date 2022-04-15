const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()
const highlight = (text) => `<span class="highlight">${text}</span>`

suite('Unit Tests', () => {
  suite('toBritish()', () => {
    test('Mangoes are my favorite fruit.', () => {
      const text = 'Mangoes are my favorite fruit.'

      assert.strictEqual(translator.toBritish(text), `Mangoes are my ${highlight('favourite')} fruit.`)
    })

    test('I ate yogurt for breakfast.', () => {
      const text = 'I ate yogurt for breakfast.'

      assert.strictEqual(translator.toBritish(text), `I ate ${highlight('yoghurt')} for breakfast.`)
    })

    test('We had a party at my friend\'s condo.', () => {
      const text = 'We had a party at my friend\'s condo.'

      assert.strictEqual(translator.toBritish(text), `We had a party at my friend\'s ${highlight('flat')}.`)
    })

    test('Can you toss this in the trashcan for me?', () => {
      const text = 'Can you toss this in the trashcan for me?'

      assert.strictEqual(translator.toBritish(text), `Can you toss this in the ${highlight('bin')} for me?`)
    })

    test('The parking lot was full.', () => {
      const text = 'The parking lot was full.'

      assert.strictEqual(translator.toBritish(text), `The ${highlight('car park')} was full.`)
    })

    test('Like a high tech Rube Goldberg machine.', () => {
      const text = 'Like a high tech Rube Goldberg machine.'

      assert.strictEqual(translator.toBritish(text), `Like a high tech ${highlight('Heath Robinson device')}.`)
    })

    test('To play hooky means to skip class or work.', () => {
      const text = 'To play hooky means to skip class or work.'

      assert.strictEqual(translator.toBritish(text), `To ${highlight('bunk off')} means to skip class or work.`)
    })

    test('No Mr. Bond, I expect you to die.', () => {
      const text = 'No Mr. Bond, I expect you to die.'

      assert.strictEqual(translator.toBritish(text), `No ${highlight('Mr')} Bond, I expect you to die.`)
    })

    test('Dr. Grosh will see you now.', () => {
      const text = 'Dr. Grosh will see you now.'

      assert.strictEqual(translator.toBritish(text), `${highlight('Dr')} Grosh will see you now.`)
    })

    test('Lunch is at 12:15 today.', () => {
      const text = 'Lunch is at 12:15 today.'

      assert.strictEqual(translator.toBritish(text), `Lunch is at ${highlight('12.15')} today.`)
    })
  })

  suite('toAmerican()', () => {
    test('We watched the footie match for a while.', () => {
      const text = 'We watched the footie match for a while.'

      assert.strictEqual(translator.toAmerican(text), `We watched the ${highlight('soccer')} match for a while.`)
    })

    test('Paracetamol takes up to an hour to work.', () => {
      const text = 'Paracetamol takes up to an hour to work.'

      assert.strictEqual(translator.toAmerican(text), `${highlight('Tylenol')} takes up to an hour to work.`)
    })

    test('First, caramelise the onions.', () => {
      const text = 'First, caramelise the onions.'

      assert.strictEqual(translator.toAmerican(text), `First, ${highlight('caramelize')} the onions.`)
    })

    test('I spent the bank holiday at the funfair.', () => {
      const text = 'I spent the bank holiday at the funfair.'

      assert.strictEqual(translator.toAmerican(text), `I spent the ${highlight('public holiday')} at the ${highlight('carnival')}.`)
    })

    test('I had a bicky then went to the chippy.', () => {
      const text = 'I had a bicky then went to the chippy.'

      assert.strictEqual(translator.toAmerican(text), `I had a ${highlight('cookie')} then went to the ${highlight('fish-and-chip shop')}.`)
    })

    test('I\'ve just got bits and bobs in my bum bag.', () => {
      const text = 'I\'ve just got bits and bobs in my bum bag.'

      assert.strictEqual(translator.toAmerican(text), `I've just got ${highlight('odds and ends')} in my ${highlight('fanny pack')}.`)
    })

    test('The car boot sale at Boxted Airfield was called off.', () => {
      const text = 'The car boot sale at Boxted Airfield was called off.'

      assert.strictEqual(translator.toAmerican(text), `The ${highlight('swap meet')} at Boxted Airfield was called off.`)
    })

    test('Have you met Mrs Kalyani?', () => {
      const text = 'Have you met Mrs Kalyani?'

      assert.strictEqual(translator.toAmerican(text), `Have you met ${highlight('Mrs.')} Kalyani?`)
    })

    test('Prof Joyner of King\'s College, London.', () => {
      const text = 'Prof Joyner of King\'s College, London.'

      assert.strictEqual(translator.toAmerican(text), `${highlight('Prof.')} Joyner of King's College, London.`)
    })

    test('Tea time is usually around 4 or 4.30.', () => {
      const text = 'Tea time is usually around 4 or 4.30.'

      assert.strictEqual(translator.toAmerican(text), `Tea time is usually around 4 or ${highlight('4:30')}.`)
    })
  })
    })
  })
});
