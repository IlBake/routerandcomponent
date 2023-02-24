export function init() {
    class Footer extends HTMLElement {
        constructor(){
        super();
        this.render();
        }
        render() {
            this.innerText = "Footer";
            this.style.height = "233px";
            this.style.backgroundColor = "#FFA0EA";
            this.style.marginTop = "60px";
            this.style.fontSize = "22px";
            this.style.display = "flex";
            this.style.justifyContent = "center";
            this.style.alignItems = "center";
        }
    }
    customElements.define("custom-footer", Footer);
}