"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
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
exports.Personne = Personne;
