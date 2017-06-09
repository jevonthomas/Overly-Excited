console.log("Hello, world!")

// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
	var formedSentence = "";
  for (var i = 0; i < sentence.length; i++) {
  	formedSentence += (sentence[i]) + " ";
  	console.log(formedSentence);
  }
}

// Invoke the function and pass in the array
addExcitement(sentence)