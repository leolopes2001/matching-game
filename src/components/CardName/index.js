//JSX
import "./style.css";
import img from "../../images/alura_img.svg";


export default function CardName() {

    function active(){
        console.log("opa")
    }
    

  return `
        <div class="card-game" onclick=${active}>
            <img src=${img}>
        </div>
    `;
}
