export function initPageThankyou(params){  
    const div = document.createElement("div")
    div.innerHTML = `
    <h1>Gracias</h1>
    <text-comp variant="parrafo">Toda la información que nos brindaste es muy importante</text-comp>
    <div>
        <custom-button class="start-button">De nada</custom-button>
    </div>
    `     

    const startButtonEl = div.querySelector(".start-button");
    startButtonEl?.addEventListener("click",()=>{
        params.goTo("/welcome");
    } ) 

    return div;
}
