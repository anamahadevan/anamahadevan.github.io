

// Select the new quote button using a querySelector. Assign it to a new variable.
const btn = document.getElementById("js-new-quote");

//Write an event listener to check if the button is clicked
btn.addEventListener('click', getquote); // When the button is clicked, run a function called "getQuote".
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


//Change the getQuote function to use the fetch method to get a random quote from that endpoint.

async function getquote()//Write the function declaration,
{
    // console.log("The button is clicked"); 
    try {
    const response = await fetch(endpoint) // and Add a new variable that holds the API endpoint: https://trivia.cyberwisp.com/getrandomchristmasquestion
    
        if (!response.ok) {
        throw Error(response.statusText)
        }
        const data = await response.json();
        // console.log(data);
        displayQuote(data.question)
        // showAnswer(data.answer)
    } 
    
    catch (err) { //Notice when you refresh that a quote isn't displayed. Fix that.
    console.log(err);
    alert('Sorry, there was an error fetching the quote.'); //If it fails, output an error message to the console AND via alert
    }
}

//Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.

function displayQuote(quoteparam) 
//If successful, output the quote to the console

{
    const quotetxt = document.querySelector("#js-quote-text");
    quotetxt.textContent = quoteparam; 
}


function showAnswer(quoteparam)
{
    const answer = document.querySelector("#js-answer-text");
    answer.textContent = quoteparam; 
}
//Adjust getQuote to run displayQuote at the proper place in the code.