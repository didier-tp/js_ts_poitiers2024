//fonction de type "constructeur de Devise"
function Devise(code, nom, change){
    this.code = code;
    this.nom = nom;
    this.change = change;
    this.display = function(){
        console.log('[' + this.code + "] " 
                   + this.nom + " : " + this.change)
    }
}

var d1 = new Devise("DKK" , "Couronne Danemark" , 7.7);
d1.couleur = "rouge";//possible mais pas conseillé

var d2 = new Devise("codeD2"); //undefined comme valeurs des paramètres
                               //non renseignés nom et change
console.log("d2 as JSON string = " +  JSON.stringify(d2) );
console.log("d2.nom=" +  d2.change );//d2.nom = undefined

console.log("d1=" + d1); //[oject Object]
d1.display();
console.log("d1 as JSON string = " +  JSON.stringify(d1) );
console.log("code de d1=" + d1.code); //tout est par défaut public en javascript
console.log("code de d1=" + d1["code"]); //possible avec objet vu comme tableau associatif 


var tabDevises = [];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));


Devise.prototype.augmenterChangeEnPourcentage  = function(pourcentageAugmentation){
   this.change *= (1 + pourcentageAugmentation/100); 
}

for(i in tabDevises){
    tabDevises[i].augmenterChangeEnPourcentage(5);
 }


for(let i in tabDevises){
   tabDevises[i].display();
}

//objet littéral javascript
var devise1 = {
    code : "M1",
    nom : "Monnaie1",
    change : 0.9
};

devise1.change = devise1.change + 0.1; // 1.0
devise1["change"] = devise1["change"] + 0.1; // 1.1
console.log("devise1.change = " + devise1.change);
console.log("devise1 (JSON) = " + JSON.stringify(devise1));

//devise1.display();//devise1.display is not a function
var estDeTypeDevise = (devise1 instanceof Devise);
console.log("estDeTypeDevise = " + estDeTypeDevise); //false