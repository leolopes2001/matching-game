import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import ScoreBoard from "./src/objects/ScoreBoard";
import CardFrontBack from "./src/components/CardFrontBack";
import BoardGame from "./src/objects/BoardGame"


//Toda variavel que começa com $ guarda uma referencia da tela
const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
  ${ScoreBoard()}
  ${BoardGame(2)}
`
);

let all_cards = document.querySelectorAll(".card-game");
document.addEventListener("click", (e) => {
  let my_img = e.target;
  my_img.classList.toggle("active");
});
all_cards.forEach((card) => {
  card.addEventListener("click", card_toggle);
});
