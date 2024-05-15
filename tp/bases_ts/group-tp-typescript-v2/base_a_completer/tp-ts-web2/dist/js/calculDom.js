//import { addition } from "./calculs"; //en pur typescript
import { addition } from "./calculs.js"; //ajustement temporaire (sans webpack)
window.addEventListener("load", function () {
    var _a;
    (_a = document.querySelector('#btnAdd')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        const eltInputA = document.querySelector('#a');
        var valA = Number(eltInputA.value);
        const eltInputB = document.querySelector('#b');
        const valB = Number(eltInputB.value);
        const valRes = addition(valA, valB);
        const eltSpanRes = document.querySelector('#res');
        eltSpanRes.innerHTML = valRes.toString();
    });
});
/*
dans calcul.html
 <script src="./js/calculDom.js" type="module"></script>
 dans tsconfig.json
  "module": "none"
*/ 
//# sourceMappingURL=calculDom.js.map