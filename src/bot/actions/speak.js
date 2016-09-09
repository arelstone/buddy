/**
 * Buddy Speaks!
 */

var languageOptions = {
  'lang': 'da-DK',
  'rate': 0.75,
  'pitch': 0.3
}

function speak(words) {
  chrome.tts.speak(words, languageOptions);
}