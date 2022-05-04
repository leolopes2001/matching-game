import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import CardName  from "./src/components/CardName";





//Toda variavel que começa com $ guarda uma referencia da tela
const $root = document.querySelector("#root");
const $htmlCardGame = CardName()

console.log($htmlCardGame)

$root.insertAdjacentHTML("beforeend", $htmlCardGame ) 