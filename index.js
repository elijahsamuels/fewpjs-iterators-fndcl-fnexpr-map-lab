const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased() {
//   return tutorials.map(sentence => sentence.split(' ').map(letter => letter[0].toUpperCase() + letter.slice(1)).join(' '));
// }

function titleCased() {
  return tutorials.map(sentence => {
    return sentence.split(' ').map(letter => {
      return letter[0].toUpperCase() + letter.slice(1);
    }).join(' ');
  });
}


// function casing(tutorial) {
//   return titleCased(tutorial);
// };

// const titleCased = tutorials.map(casing);

// function casing(tutorial) {
//   return titleCased(tutorial);
// };

// const titleCased = tutorials.map(casing);

// function titleCased(tutorial) {
//   return tutorial.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// titleCased("I'm a little tea pot");

