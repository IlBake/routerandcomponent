export function initReturnComp(){
    customElements.define(
        "custom-return",
    
    class extends HTMLElement {
        constructor() {
          // Siempre llamar primero a super en el constructor
            super();
            this.render();
          // La funcionalidad del elemento se escribe aquí
            
        }
        render(){
            // const button = this.getAttribute("button");
            const shadow = this.attachShadow({mode: 'open'});  
            const button = document.createElement("button");
            const style = document.createElement("style");

            button.className = "root";

            style.innerHTML = `
            .root{
              font-size:18px;
              padding: 17px 13px;
              margin-top: 3px;
              border-radius: 4px;
              width: 100%;
            }
            `
            button.textContent = this.textContent;
            
            shadow.appendChild(button);
            shadow.appendChild(style);
        }
      }
    )
}