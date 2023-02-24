import {initPageA} from "./pages/page-a";
import {initPageB} from "./pages/page-b";
import {initPageThankyou} from "./pages/thankyou";

// creamos una collections (array de objetos)
const routes = [
    {
        path: /\/welcome/,
        component: initPageA,
    },
    {
        path: /\/step-1/,
        component: initPageB,
    },
    {
        path: /\/thankyou/,
        component: initPageThankyou,
    },
    
];

// (function(){

//     window.addEventListener("load",()=>{
//         handleRoute(location.pathname); //Sirve para cuando entramos por primera vez
//     })    
// })()

export function initRouter(container){
    function goTo(path){
        history.pushState({}, "", path);
        handleRoute(path);
    }
    
    function handleRoute(route){
        console.log("recibio una nueva ruta de nombre ", route);
        
        for(const r of routes){
            if(r.path.test(route)){
                const el: any = r.component({goTo: goTo});
                
                if (container?.firstChild) {
                    container.firstChild.remove();
                }
                container?.appendChild(el);
            }
        }
    }
    if(location.pathname == "/"){
        goTo("/welcome");
    }else{
        handleRoute(location.pathname);
    }
}