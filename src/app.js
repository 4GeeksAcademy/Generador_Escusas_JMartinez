/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function cambio() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who1 = Math.floor(Math.random() * (4 - 0) + 0);
  let action1 = Math.floor(Math.random() * (4 - 0) + 0);
  let what1 = Math.floor(Math.random() * (3 - 0) + 0);
  let when1 = Math.floor(Math.random() * (5 - 0) + 0);

  //se concatena el mensaje y se almacena en la variable
  let escusa =
    lengujues.Ingles.who[who1] +
    " " +
    lengujues.Ingles.action[action1] +
    " " +
    lengujues.Ingles.what[what1] +
    " " +
    lengujues.Ingles.when[when1];

  return escusa;
};

function render() {
  const resultado = cambio();
  return (document.getElementById("excuse").innerHTML = resultado);
}
