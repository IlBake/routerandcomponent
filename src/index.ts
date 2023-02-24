import {initRouter} from "./router";
import {initTextComp} from "./component/text-field";
import {initLabelComp} from "./component/label";
import {initButtonComp} from "./component/button";
import {initReturnComp} from "./component/button-return";
import {initDataComp} from "./component/data";
import {init as initFooterEl} from "./component/footer";
import {init as initHeaderEl} from "./component/header";



(function(){
    initHeaderEl();
    initTextComp();
    initLabelComp();
    initButtonComp();
    initReturnComp();
    initDataComp();
    const root = document.querySelector(".root");
    initRouter(root);
    initFooterEl();
})();