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
  ${BoardGame(6)}
`
);


