"use strict";
window.addEventListener("load", function () {
    var _a;
    (_a = document.querySelector('#btnAdd')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var eltInputA = document.querySelector('#a');
        var valA = Number(eltInputA.value);
        var eltInputB = document.querySelector('#b');
        var valB = Number(eltInputB.value);
        var valRes = addition(valA, valB);
        var eltSpanRes = document.querySelector('#res');
        eltSpanRes.innerHTML = valRes.toString();
    });
});
/*
dans calcul.html
 <script src="./js/calculs.js"></script>
 <script src="./js/calculDom.js"></script>
*/ 
//# sourceMappingURL=calculDom.js.map