var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

//  {
//   console.log( alphabet[i] );
// }

function stackLetters() {
  var letters = '';
  for (var i = 0; i < alphabet.length; i++) {
    letters += alphabet[ i ]
    if ( ( letters.length % 5 ) === 0 ) {
      letters += ' ';
    }
    console.log( letters );
    console.log( "Letters length is:" + letters.length );
  }
}

stackLetters();