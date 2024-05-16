"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
const Personne_1 = require("./Personne");
class Employe extends Personne_1.Personne {
    constructor(numero = 0, nom = "?", _salaire = 2500) {
        super(numero, nom);
        this._salaire = _salaire;
    }
    afficher() {
        super.afficher(); //afficher la partie "Personne d'un employe"
        console.log(`... cette Personne est un employe avec salaire=${this._salaire} `);
    }
}
exports.Employe = Employe;
