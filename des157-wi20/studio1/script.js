(function(){
    
    "use strict";

    // listen for the submission of the form
    document.getElementById("myform").addEventListener("submit", function(event){
        // pre vent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        var formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        var words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( var i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        //You can see the array in the console, if you want...
        console.log(words);

        //run a function to put the words into the madlib... Function below...
        //Pass the array of words the user typed into the function
        makeMadLib(words);

    });

    //This function takes an array input, then constructs the madlib, peppering
    //in the user's words where necessary.
    function makeMadLib(theWords){
        var madlib = `Dear ${theWords[0]}, you are so stunning you remind me of ${theWords[1]}. You're as ${theWords[2]} as they come. We should ${theWords[3]} together sometime! <3 Happy Valentines Day. `;

        //Get the madlib container
        var mlContainer = document.getElementById('madlib');

        //Change the guts of the container to your madlib
        mlContainer.innerHTML = `<p>${madlib}</p>`;

        //change the class on the madlib container so you can see it.
        mlContainer.setAttribute("class", "visible");
    }





}()); 
 