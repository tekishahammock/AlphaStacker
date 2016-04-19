var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

//  {
//   console.log( alphabet[i] );
// }

function stackLetters() {
  var letters = '';
  var counter = 1;
  for (var i = 0; i < alphabet.length; i++) {
    letters += alphabet[ i ]
    if ( counter === 5 ) {
      letters += ' ';
      counter = 0;
    }
    counter++
    console.log( letters );
  }
}

stackLetters();