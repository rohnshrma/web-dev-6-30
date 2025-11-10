// selector

// id : single element

var mainDiv = document.getElementById("main");

console.log(mainDiv);

// class : htmlCollection
var paras = document.getElementsByClassName("para");

console.log(paras);

// tagname : htmlCollection

var parass = document.getElementsByTagName("p");
console.log(parass);

// querySelector : singleElement

// tagname , # , .

console.log(document.querySelector("#main"));
console.log(document.querySelector(".para"));
console.log(document.querySelector("p"));

// querySelectorAll : nodeList

// tagname , # , .

console.log(document.querySelectorAll("#main"));
console.log(document.querySelectorAll(".para"));
console.log(document.querySelectorAll("p"));
