export function initLabelComp(){
    customElements.define(
        "text-label",
    
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
// export function init() {
//     class TextField extends HTMLElement {
//         constructor(){
//         super();
//         this.render();
//         }
//         render() {
//             const shadow = this.attachShadow({mode: 'open'});

//             const label = this.getAttribute("label");

//             const style = document.createElement("style");
//             style.innerHTML = `
//             .root {
//                 display: flex;
//                 flex-direction: column;
//             }
//             .label {
//                 font-size: 18px;
//             }
//             .input {
//                 font-size: 18px;
//                 padding: 17px 13px;
//                 margin-top: 3px;
//                 border: solid 2px black;
//                 border-radius: 4px;
//             }
//             `

//             const div = document.createElement("div");
//             div.classList.add("root1");

//             div.innerHTML = `
//                 <label class"label">${label}</label>
//                 <input class="input" type="text" placeholder="Ingrese su ${label}">
//             `;
//             shadow.appendChild(style);
//             shadow.appendChild(div);
            
//         }
//     }
//     customElements.define("text-field", TextField);
// }