import CardName from "../CardName";
import PlayerTitle from "../PlayerTitle";

import "./style.css";
export default function DivAll() {


    
  return `
        <article class="container">
            <div class="all_card">
                <div class="player-1-and-2">
                    ${PlayerTitle()}
                    ${PlayerTitle()}
                </div>
                <div class="cards">
                    ${CardName("html")}
                    ${CardName("html")}
                    ${CardName("css")}
                    ${CardName("css")}
                    ${CardName("js")}
                    ${CardName("js")}
                </div>
            </div>
        </article>
    
    
    `;
}
