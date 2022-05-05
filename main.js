import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import CardName  from "./src/components/CardName";
import DivAll from "./src/components/DivAll"

function active(){
    console.log("opa")
}

//Toda variavel que começa com $ guarda uma referencia da tela
const $root = document.querySelector("#root");

const $htmlCardGame = DivAll()

console.log($htmlCardGame)

$root.insertAdjacentHTML("beforeend", $htmlCardGame) 