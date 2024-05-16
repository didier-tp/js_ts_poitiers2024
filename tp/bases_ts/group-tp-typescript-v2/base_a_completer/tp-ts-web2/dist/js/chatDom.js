"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener("load", function () {
    var _a;
    (_a = document.querySelector('#btnAjaxCall')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => { appelerEtAfficherResWsRest(); });
});
function afficherCatFactResult(catFactResult) {
    const eltSpanRes = document.querySelector('#res');
    eltSpanRes.innerHTML = catFactResult.fact + " de longeur = " + catFactResult.length;
    eltSpanRes.style.fontWeight = 'bold';
}
function appelerEtAfficherResWsRest() {
    return __awaiter(this, void 0, void 0, function* () {
        const wsUrl = "https://catfact.ninja/fact";
        try {
            const response = yield fetch(wsUrl);
            console.log("response.status : ", +response.status);
            if (response.ok) {
                let data = yield response.json();
                console.log("response data : " + JSON.stringify(data));
                const catFactResult = data;
                afficherCatFactResult(catFactResult);
            }
            else {
                let text = yield response.text();
                console.log("error response text : " + text);
            }
        }
        catch (ex) {
            console.log("ex : " + ex);
        }
    });
}
/*
dans chat.html
 <script src="./js/chatDom.js" type="module"></script>
 dans tsconfig.json
  "module": "none"
*/ 
//# sourceMappingURL=chatDom.js.map