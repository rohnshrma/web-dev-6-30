function leke_aa(url) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
        reject(`Failed to fetch data from ${url}`);
      }
    });
    request.open("GET", url);
    request.send();
  });
}

async function handleRequest(url) {
  try {
    const data = await leke_aa(url);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/2");
handleRequest("https://jsonplaceholder.typicode.com/users/3");
handleRequest("https://jsonplaceholder.typicode.com/users/4");
