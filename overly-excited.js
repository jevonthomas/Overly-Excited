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
	var exclaim = ""
  for (var i = 0; i < sentence.length; i++) {
		//If the current value of the counter variable can be evenly divided by 3 - 
		//using the JavaScript remainder operator - 
		//then add a single exclamation point (!) to the output.
			//Add logic in the addExcitement function to the increase the number of exclamation points after every third word. 
			//The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.
		if (i > 0 && (i + 1) % 3 === 0) {
			exclaim += "!";
			formedSentence += (sentence[i]) + exclaim + " ";
			console.log(formedSentence);
		} else {
	  		formedSentence += (sentence[i] + " ");
		  	console.log(formedSentence);
  	}
  }
}

// Invoke the function and pass in the array
addExcitement(sentence)