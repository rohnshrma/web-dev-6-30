// Define a variable 'url' that holds the API endpoint for fetching a random joke
var url = "https://v2.jokeapi.dev/joke/Any";
// The URL points to JokeAPI, which returns a random joke when accessed with a GET request
// The 'Any' category means the joke can be from any category (e.g., programming, dark, pun)

// Create a new instance of XMLHttpRequest to handle HTTP requests
var request = new XMLHttpRequest();
// XMLHttpRequest is a built-in browser API that allows sending HTTP requests (e.g., GET, POST) to a server
// It is commonly used for fetching data from APIs without reloading the webpage

// Add an event listener to monitor changes in the request's state
request.addEventListener("readystatechange", () => {
  // The 'readystatechange' event fires whenever the readyState property of the request changes
  // An arrow function is used as the callback to handle the event

  // Check if the request is complete (readyState === 4) and successful (status === 200)
  if (request.readyState === 4 && request.status === 200) {
    // readyState 4 means the request is done (response fully received)
    // status 200 means the HTTP request was successful (OK)
    console.log(request.responseText, request.readyState);
    // Log the response text (the joke data, typically in JSON format) and the readyState value (4)
    // responseText contains the server's response as a string
  }

  // Check if the request is complete (readyState === 4) but failed (status is not 200)
  if (request.readyState === 4 && request.status !== 200) {
    // This block handles errors, such as network issues or invalid API endpoints
    console.log("failed to fetch result from", url);
    // Log an error message with the URL to indicate the request failed
  }
});
// The event listener ensures the code responds appropriately based on the request's outcome

// Configure the request to use the GET method and the specified URL
request.open("GET", url);
// The open() method initializes the request
// "GET" specifies the HTTP method for retrieving data
// The 'url' variable provides the target endpoint (JokeAPI in this case)

// Send the request to the server
request.send();
// The send() method executes the request, initiating communication with the server
// Since this is a GET request, no data is sent in the body (hence no arguments in send())
