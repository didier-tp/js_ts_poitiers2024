"use strict";
function addition(a, b) {
    const res = a + b;
    const sRes = `a=${a} b=${b} res=a+b=${res}`;
    console.log("sRes=" + sRes);
    return res;
}
const res1 = addition(5, 6);
console.log("res1=" + res1);
var Jour;
(function (Jour) {
    Jour[Jour["Lundi"] = 0] = "Lundi";
    Jour[Jour["Mardi"] = 1] = "Mardi";
    Jour[Jour["Mercredi"] = 2] = "Mercredi";
    Jour[Jour["Jeudi"] = 3] = "Jeudi";
    Jour[Jour["Vendredi"] = 4] = "Vendredi";
    Jour[Jour["Samedi"] = 5] = "Samedi";
    Jour[Jour["Dimanche"] = 6] = "Dimanche";
})(Jour || (Jour = {}));
let j;
j = Jour.Lundi;
console.log("j=" + j + "=" + Jour[j]);
j = Jour.Vendredi;
console.log("j=" + j + "=" + Jour[j]);
let j2;
let sJ2 = "Lundi";
j2 = Jour[sJ2];
console.log("j2=" + j2 + "=" + Jour[j2]);
//# sourceMappingURL=calcul.js.map