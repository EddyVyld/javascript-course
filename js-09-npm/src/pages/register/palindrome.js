

const palindrome = (word) => {

    if(phrase === undefined || phrase === null || phrase === "" || phrase === " "){
        return false;
      };
    
    const comparacion = word.toLowerCase().replaceAll(" ", "");
    // split convierte el string en un array de caracteres
    return comparacion === comparacion.split("").reverse().join("");

}

export { palindrome }; 




// Esta la otra forma de hacerlo
/* if(phrase === undefined || phrase === null || phrase === "" || phrase === " "){
    return false;
  };
  phrase = phrase.toUpperCase(); // ANITA LAVA LA TINA
  const phraseWithoutSpaces = phrase.replaceAll( " ", "" ); // ANITALAVALATINA
  const splitPhrase = phraseWithoutSpaces.split(""); // [A, N, I, T, A, L, A, V, A, L, A, T, I, N, A]
  const reversePhrase = splitPhrase.reverse(); // [A, N, I, T, A, L, A, V, A, L, A, T, I, N, A]
  const joinReversePhrase = reversePhrase.join(""); // ANITALAVALATINA
  return phraseWithoutSpaces === joinReversePhrase; */