//Deteksi Palindrom
const detectPalindrom = (inputText) => {
  let loopTextFront = '';
  let loopTextBack = '';
  if (typeof inputText === 'string') {
    let splitText = inputText.toLowerCase().split('');
    for (let i = 0; i <= splitText.length - 1; i++) {
      loopTextFront += splitText[i];
    }
    for (let i = splitText.length - 1; i >= 0; i--) {
      loopTextBack += splitText[i];
    }
    if (loopTextFront === loopTextBack) {
      console.log('Palindrom');
    } else {
      console.log('Bukan palindrom');
    }
  } else {
    console.log('Input bukan string');
  }
};

detectPalindrom('malam');

//Words reverse
const wordsReverse = (inputWords) => {
  let loopWordBack = '';
  if (typeof inputWords === 'string') {
    let splitWords = inputWords.split(' ');
    for (let i = splitWords.length - 1; i >= 0; i--) {
      loopWordBack += splitWords[i] + ' ';
    }
    console.log(loopWordBack.trim());
  } else {
    console.log('Input bukan string');
  }
};

wordsReverse(true);
