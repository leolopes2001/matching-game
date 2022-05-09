import CardGame from "../../components/CardName";
import "./style.css";
export default function BoardGame(cards) {
  const $htmlContent = CardGame().repeat(cards);

  console.log($htmlContent);

  return /*html*/ `
  <section class="board-game">
        ${$htmlContent} 
  </section>`;
}
