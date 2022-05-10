import CardGame from "../CardGame";
import "./style.css";

export default function CardFrontBack() {
  /*Criando um objeto dentro do objeto window chamado CardFrontBack para guarda o handleClick especifco dele*/

  window.CardFrontBack = {};

  window.CardFrontBack.handleClick = (event) => {
    /*o $ signica q é um elemento q guarda um referencia HTML*/
    const $origin = event.target;
    const $CardFrontBack = $origin.closest(".card-front-back");

    $CardFrontBack.classList.toggle("-active");
  };

  /*NO handleclick tem ser somente em string pq ela vai ser procurada no escopo glogal*/
  return /*html*/ `
        <article class="card-front-back" onClick="CardFrontBack.handleClick(event)">
           
            <div class="card -front">
                ${CardGame()}
            </div>

            <div class="card -back">
                ${CardGame("js", "Logo Js")}
            </div>
            
        </article>
    
    `;
}
