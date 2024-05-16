"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employe_1 = require("./Employe");
const Personne_1 = require("./Personne");
let e1 = new Employe_1.Employe();
console.log("e1=" + JSON.stringify(e1));
let e2 = new Employe_1.Employe(2, "employe2", 3000);
console.log("e2=" + JSON.stringify(e2));
e2.afficher();
let p1 = new Personne_1.Personne();
console.log(`p1=Personne[age=${p1.age},nom=${p1.nom},numero=${p1.numero}]`);
p1.incrementerAge();
p1.nom = "toto";
p1.numero = 12;
console.log(`p1=Personne[age=${p1.age},nom=${p1.nom},numero=${p1.numero}]`);
p1.age = -5; //valeur invalide qui sera ignorée/refusée
//console.log("p1="+p1);//affiche p1=[object Object]
console.log("p1=" + JSON.stringify(p1)); //affiche p1={"numero":12,"nom":"toto","_age":1}
p1.age = 54;
console.log("p1=" + JSON.stringify(p1));
const p2 = new Personne_1.Personne(2, "titi", -33);
console.log("p2=" + JSON.stringify(p2));
//polymorphisme:
let tabPers = [];
tabPers.push(e1);
tabPers.push(p1);
tabPers.push(e2);
for (const p of tabPers) {
    console.log("");
    p.afficher(); //polymorphisme
}
//let chose : any; // 12 ou "abc" ou ...
let chose; // 12 ou "abc" ou …
let obj;
//obj= null;
obj = { numero: 2 };
//données souvent récupérées via HTTP
let persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
let persJs = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus
// persJs = new IPerson(); interdit sur IPerson qui est une interface
let persJs2 = { numero: 3, nom: "Bon", prenom: "jean" };
function affPerson(p) {
    console.log("****" + p.nom + " " + p.numero + " ");
    if (p.age) {
        console.log("******* avec age=" + p.age);
    }
}
function affPersonMoinsBien(p) {
    let pa = p;
    console.log("****" + pa["nom"] + " " + pa["numero"]);
}
affPerson(persJs);
affPerson(persJs2);
affPerson(p1);
affPerson(e1);
