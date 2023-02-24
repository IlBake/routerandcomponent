export function initTextComp(){
    class TextComponent extends HTMLElement {
        constructor() {
          // Siempre llamar primero a super en el constructor
            super();
            this.render();
          // La funcionalidad del elemento se escribe aquí
            
        }
        render(){
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({mode: 'open'});  
            const div = document.createElement("div");
            const style = document.createElement("style");

            style.innerHTML = `
              * {
              box-sizing: border-box;
              }
              .title{
                font-style: normal;
                font-weight: 700;
                font-size: 52px;
                line-height: 61px;
              }
            
              .body {
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
              }
              
              .parrafo {
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 26px;
                width: 294px;
                margin-top: 73px;
              }
            `
            
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
      }
      customElements.define('text-comp', TextComponent);
}