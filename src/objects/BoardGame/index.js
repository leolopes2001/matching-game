import CardFrontBack from "../../components/CardFrontBack"
import "./style.css";

export default function BoardGame(cards) {


  const $htmlCardFrontBack = CardFrontBack()

  const $htmlContent = $htmlCardFrontBack.repeat(cards);

  

  return /*html*/ `
    <section class="board-game">
          ${$htmlContent} 
    </section>`;
}
