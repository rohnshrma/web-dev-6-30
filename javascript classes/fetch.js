// Define a variable 'url' with the API endpoint for fetching a random joke
var url = "https://v2.jokeapi.dev/joke/Any";
// The URL points to JokeAPI, which returns a random joke in JSON format
// The 'Any' category means the joke can be from any category (e.g., programming, pun)

// Initiate a GET request to the specified URL using the fetch API
fetch(url)
  // fetch() returns a Promise that resolves to a Response object
  // fetch is a modern browser API for making HTTP requests, simpler than XMLHttpRequest
  .then((response) => {
    // The first .then() receives the Response object, which contains response metadata
    // console.log("Response => ", response);
    // The commented console.log would show the Response object (e.g., status, headers)
    return response.json();
    // response.json() is a method that parses the response body as JSON
    // It returns a Promise that resolves to the parsed JavaScript object
  })
  .then((data) => {
    // The second .then() receives the parsed JSON data from response.json()
    console.log("Data => ", data);
    // Log the parsed data, which is a JavaScript object containing joke details
    // Example output: { category: "Pun", type: "single", joke: "...", ... }
  })
  .catch((err) => {
    // The .catch() handles any errors that occur during the fetch or JSON parsing
    console.log("err => ", err);
    // Logs errors, such as network failures or invalid JSON
    // Example error: TypeError: Failed to fetch
  });

//   ==============
// Separator to distinguish between the two fetch calls
//   ==============

// Initiate another GET request to the same URL using fetch
fetch(url)
  .then((response) => {
    // The first .then() receives the Response object
    // console.log("Response => ", response);
    // The commented console.log would show the Response object
    return response.json().then((data) => {
      // response.json() returns a Promise that resolves to the parsed JSON
      // Nesting a .then() inside here is unnecessary and creates a nested Promise
      console.log("Data => ", data);
      // Log the parsed data, similar to the first fetch call
      // This logs the same type of data as the first call (e.g., joke object)
    });
    // This returns a Promise that resolves to undefined (since the inner .then() doesn't return anything)
  })
  .catch((err) => {
    // The .catch() handles errors from the fetch or JSON parsing
    console.log("err => ", err);
    // Logs errors, similar to the first fetch call
  });
