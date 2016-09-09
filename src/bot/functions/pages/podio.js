function page() {

  var stats;
  var quotes = [
      'Det er en haster',
      'Arbejd, arbejd',
      'Det er godt at være chef'
  ];

  this.init = function( settings ) {
    stats = settings;
    speak(this.randomQuote());
  };

  this.randomQuote = function(){
    // console.log(random(quotes));
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
}