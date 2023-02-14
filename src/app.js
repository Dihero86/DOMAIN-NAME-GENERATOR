/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let printweb = document.querySelector("#domainName");
  let print = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es", ".net", ".io"];

  extension.forEach(dominio => {
    pronoun.forEach(firstword => {
      adj.forEach(secondworld => {
        noun.forEach(thirdworld => {
          print.push(` ${firstword}${secondworld}${thirdworld}${dominio}`);
        });
      });
    });
  });
  printweb.innerHTML = print;
};
