//JSX
import "./style.css";
import imgAlura from "../../images/alura_img.svg";
import imgJs from "../../images/js_card.svg";
import imgCss from "../../images/css_card.svg";
import imgHtml from "../../images/html_card.svg";

export default function CardGame(imgType, alt = "Logo Alura") {
  let img = imgAlura;

  if (imgType === "js") {
    img = imgJs;
  }

  if (imgType === "css") {
    img = imgCss;
  }

  if (imgType === "html") {
    img = imgHtml;
  }

  return /*html*/ `
        <div class="card-game">
            <img src="${img}" alt="${alt}"/>
        </div>
    `;
}
