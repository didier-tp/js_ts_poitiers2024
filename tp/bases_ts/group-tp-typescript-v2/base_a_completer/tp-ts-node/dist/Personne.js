"use strict";
class Personne {
    constructor(numero = 0, nom = "?", _age = 0) {
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
        /*
        numero:number;
        nom : string ;
        private _age : number;
    
        constructor(numero:number=0,nom:string="?",age:number=0){
            this.numero=numero;
            this.nom=nom;
            this._age=age;
        }
        */
        /*public*/ this.humeur = "bonne humeur";
        if (this._age < 0) {
            this.age = 0; //+ ... 
        }
    }
    afficher() {
        console.log(`Personne nom=${this.nom} numero=${this.numero} age=${this.age}`);
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge >= 0)
            this._age = newAge;
        else {
            console.log("age inchangé car nouvelle valeur demandée négative invalide");
        }
    }
    incrementerAge() {
        this._age++;
    }
}
class Employe extends Personne {
    constructor(numero = 0, nom = "?", _salaire = 2500) {
        super(numero, nom);
        this._salaire = _salaire;
    }
    afficher() {
        super.afficher(); //afficher la partie "Personne d'un employe"
        console.log(`... cette Personne est un employe avec salaire=${this._salaire} `);
    }
}
let e1 = new Employe();
console.log("e1=" + JSON.stringify(e1));
let e2 = new Employe(2, "employe2", 3000);
console.log("e2=" + JSON.stringify(e2));
e2.afficher();
let p1 = new Personne();
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
const p2 = new Personne(2, "titi", -33);
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
//# sourceMappingURL=Personne.js.map