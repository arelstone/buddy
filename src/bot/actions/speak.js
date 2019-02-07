/**
 * Buddy Speaks!
 */

var languageOptions = {
  'lang': 'en-US',
  'rate': 1.0,
  'pitch': 1
}

function speak(words) {
  chrome.tts.speak(words, languageOptions);
}