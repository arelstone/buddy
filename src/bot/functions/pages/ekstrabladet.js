function page() {

  var stats;
  var quotes = [
      'Nå, tilbage til arbejdet!',
      'Så er jeg tilbage på nationen',
      'Nationen.... Lad os se hvad de siger',
      'Det er en haster',
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