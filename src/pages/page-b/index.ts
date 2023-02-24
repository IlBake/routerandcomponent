export function initPageB(params){  
    const div = document.createElement("div")
    div.innerHTML = `
    <text-comp variant="title">Necesitamos algunos datos más</text-comp>
    <div class="contenedor-nombre">
       <text-data label="Email"></<text-data>        
    </div>
    <div class="contenedor-nombre">
       <text-data label="Comida Favorita"></<text-data>        
    </div>
    <div class="contenedor-nombre">
       <text-data label="Alguna de estas opciones"></<text-data>        
    </div>
    
    
    <div>
        <custom-button class="start-button">Continuar</custom-button>
        <custom-return class="custom-return">Volver</custom-return>
    </div>

    `    

    const startButtonEl = div.querySelector(".start-button");
    startButtonEl?.addEventListener("click",()=>{
        params.goTo("/thankyou");
    } ) 

    const returntButtonEl = div.querySelector(".custom-return");
    returntButtonEl?.addEventListener("click",()=>{
        params.goTo("/welcome");
    } ) 
    return div;
}