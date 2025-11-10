const { promises } = require("dns");

// Define a function 'sendRequest' that takes a URL and a callback function as parameters
function sendRequest(url, cb) {
  // The 'url' parameter specifies the API endpoint to fetch data from
  // The 'cb' parameter is a callback function to handle the response (error or data)

  // Create a new instance of XMLHttpRequest to handle HTTP requests
  var request = new XMLHttpRequest();
  // XMLHttpRequest is a browser API for making HTTP requests (e.g., GET, POST)
  // It allows asynchronous data fetching from a server without reloading the page

  // Add an event listener to monitor changes in the request's state
  request.addEventListener("readystatechange", () => {
    // The 'readystatechange' event fires whenever the request's readyState changes
    // An arrow function is used as the callback to process the event

    // Check if the request is complete (readyState === 4) and successful (status === 200)
    if (request.readyState === 4 && request.status === 200) {
      // readyState 4 means the request is complete (response fully received)
      // status 200 means the HTTP request was successful (OK)
      cb(null, JSON.parse(request.responseText));
      // Call the callback function with 'null' for error and the parsed JSON response
      // JSON.parse converts the response string (responseText) into a JavaScript object
    }

    // Check if the request is complete (readyState === 4) but failed (status is not 200)
    if (request.readyState === 4 && request.status !== 200) {
      // This block handles errors, such as network issues or invalid API endpoints
      cb("failed to fetch", null);
      // Call the callback function with an error message and 'null' for data
    }
  });

  // Configure the request to use the GET method and the specified URL
  request.open("GET", url);
  // The open() method initializes the request
  // "GET" specifies the HTTP method for retrieving data
  // The 'url' parameter provides the target endpoint

  // Send the request to the server
  request.send();
  // The send() method executes the request, initiating communication with the server
  // No data is sent in the body for a GET request, so send() has no arguments
}

// Define a variable 'url' with the API endpoint for fetching a random joke
var url = "https://v2.jokeapi.dev/joke/Any";
// The URL points to JokeAPI, which returns a random joke in JSON format
// The 'Any' category means the joke can be from any category (e.g., programming, pun)

// Call the sendRequest function with the URL and a callback function to handle the response
sendRequest(url, (err, data) => {
  // The callback function takes two parameters: 'err' (error) and 'data' (response)
  // This follows the Node.js-style error-first callback pattern

  // Check if there is an error
  if (err) {
    console.log("Error =>", err);
    // If an error exists, log the error message (e.g., "failed to fetch")
  } else {
    console.log("Data =>", data);
    // If no error, log the parsed JSON data (the joke object)
    // The data is a JavaScript object containing joke details (e.g., setup, delivery, or joke)
  }
});

// request
// callback
// fetch -> promise -> pass -> fail
// promises
// async await
