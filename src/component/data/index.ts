export function initDataComp(){
    customElements.define(
        "text-data",
    
    class extends HTMLElement {
        constructor() {
          // Siempre llamar primero a super en el constructor
            super();
            this.render();
          // La funcionalidad del elemento se escribe aquí
            
        }
        render(){
            const label = this.getAttribute("label");
            const shadow = this.attachShadow({mode: 'open'});  
            const div = document.createElement("div");
            const style = document.createElement("style");

            style.innerHTML = `
            * {
                box-sizing: border-box;
            }    

            .label {
                display: block;
                font-size: 18px;
            
            }
            .input {
                font-size: 18px;
                padding: 17px 13px;
                margin-top: 3px;
                border: solid 2px black;
                border-radius: 4px;
                width: 100%;
            }
            `
            div.innerHTML = `
                <label class"label">
                <text-comp variant="body">
                    ${label}
                </text-comp>
                </label>
                <input class="input" type="text" placeholder="Ingrese su ${label}">
                
            `;
            
            
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
      }
    )
}