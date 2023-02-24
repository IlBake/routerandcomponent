export function initPageA(params){  
            const div = document.createElement("div")
            div.innerHTML = `
            <text-comp variant="title">Te damos la bienvenida a esta página</text-comp>
            <text-comp variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</text-comp>
            <text-comp variant="parrafo">Para continuar ingresá tu nombre</text-comp>
            <div class="contenedor-nombre">
               <text-label label="Nombre"></<text-label> 
               
            </div>
            <div>
                <custom-button class="start-button">Comenzar</custom-button>
            </div>

            `    

            const startButtonEl = div.querySelector(".start-button");
            startButtonEl?.addEventListener("click",()=>{
                params.goTo("/step-1");
            } ) 
            return div;
        }
      