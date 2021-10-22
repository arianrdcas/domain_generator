/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dom = [".cl", ".cu", ".vz"];

  for (var prono of pronoun) {
    for (var adjetivo of adj) {
      for (var non of noun) {
        for (var dominio of dom) {
          console.log(prono + adjetivo + non + dominio);
        }
      }
    }
  }
};
