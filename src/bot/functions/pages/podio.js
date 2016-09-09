function page() {

  var stats;
  var quotes = [
      'Det er en haster',
      'Arbejd, arbejd'
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