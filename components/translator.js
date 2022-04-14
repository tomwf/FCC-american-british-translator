const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  convertTime(text, language) {
    let searchSeparator
    let targetSeparator

    switch (language) {
      case 'american':
        searchSeparator = '.'
        targetSeparator = ':'
        break
      case 'british':
        searchSeparator = ':'
        targetSeparator = '.'
        break
      default:
        console.log('wrong language input for time conversion')
    }

    const pattern = new RegExp(`([012][0-9])${searchSeparator}([0-5][0-9])|([0-9])${searchSeparator}([0-5][0-9])`, 'g')

    if (pattern.test(text)) {
      const newText = `<span style='color: green'>$1$3${targetSeparator}$2$4</span>`

      text = text.replace(pattern, newText)
    }

    return text
  }

  returnValue(text, dictionaries) {
    dictionaries.forEach(dictionary => {
      for (const key in dictionary) {
        let pattern
        let newText

        if (key.endsWith('.')) {
          const title = dictionary[key]
          const newValue = title[0].toUpperCase() + title.slice(1)

          pattern = new RegExp(`${key}`, 'ig')
          newText = `<span style='color: green'>${newValue}</span>`
        } else {
          pattern = new RegExp(`(?<!-)\\b${key}\\b`, 'ig')
          newText = `<span style='color: green'>${dictionary[key]}</span>`
        }

        if (pattern.test(text)) {
          text = text.replace(pattern, newText)
        }
      }
    })

    return text
  }

  returnKey(text, dictionaries) {
    dictionaries.forEach(dictionary => {
      for (const key in dictionary) {
        const pattern = new RegExp(`(?<!-)\\b${dictionary[key]}\\b`, 'ig')
        let newValue = key

        if (pattern.test(text)) {
          // Detect titles
          if (key.endsWith('.')) {
            const title = key[0].toUpperCase() + key.slice(1)
            newValue = title
          }

          const newText = `<span style='color: green'>${newValue}</span>`
          text = text.replace(pattern, newText)
        }
      }
    })

    return text
  }

  toBritish(text) {
    let translation

    translation = this.returnValue(text, [americanToBritishSpelling, americanOnly, americanToBritishTitles])
    // translation = this.returnKey(translation, [britishOnly])
    translation = this.convertTime(translation, 'british')

    return translation
  }

  toAmerican(text) {
    let translation

    translation = this.returnValue(text, [britishOnly])
    translation = this.returnKey(translation, [americanToBritishSpelling, americanOnly, americanToBritishTitles])
    translation = this.convertTime(translation, 'american')

    return translation
  }

}

module.exports = Translator;
