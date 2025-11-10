// creating a promise

// function checkEligibility(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("Eligible");
//       } else {
//         reject("Not Eligible");
//       }
//     }, 5000);
//   });
// }

// checkEligibility(12)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

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
// var url = "https://v2.jokeapi.dev/joke/Any";
// var url = "https://jsonplaceholder.typicode.com/users/1";
// var url = "https://jsonplaceholder.typicode.com/users/2";

leke_aa("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

leke_aa("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

leke_aa("https://jsonplaceholder.typicode.com/users/3")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
