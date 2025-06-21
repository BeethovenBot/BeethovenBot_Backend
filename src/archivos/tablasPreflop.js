// tablasPreflop.js
module.exports = {
  UTG: {
    'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
    'AKs': 'raise', 'AQs': 'raise', 'AKo': 'raise', 'KQs': 'raise'
  },
  MP: {
    'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
    'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'AKo': 'raise', 'KQs': 'raise'
  },
  CO: {
    'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise', '99': 'raise',
    'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'KQs': 'raise', 'QJs': 'raise',
    'AKo': 'raise', 'AQo': 'raise'
  },
  BTN: {
    'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise', '99': 'raise', '88': 'raise',
    'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise', 'KQs': 'raise',
    'QJs': 'raise', 'JTs': 'raise', 'T9s': 'call', '98s': 'call',
    'AKo': 'raise', 'AQo': 'raise', 'AJo': 'raise'
  },
  SB: {
    'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise', '99': 'raise',
    'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'KQs': 'raise', 'QJs': 'raise',
    'AKo': 'raise', 'AQo': 'raise'
  }
};
