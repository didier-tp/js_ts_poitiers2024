var tabVal = [12, 23, 5, 45, 7, 8];

tabVal.sort((a,b)=> b-a);

//où (a,b)=> a-b est une fonction de comparaison appelée en interne par sort()
//qui compare a et b et renvoie >0 si a>b , 0 si a==b et <0 si a < b

console.log("apres tri, tabVal=" + tabVal);

var tabValeursPaires = [];
var tabValeursImpaires = [];
tabVal.forEach(v=>{ /*ajouter v en  de tableau tabValeursPaires ou tabValeursImpaires  en fonction de v%2 == ou pas à 0 */
              if(v%2==0) tabValeursPaires.push(v); else tabValeursImpaires.push(v);  });
//afficher les tableaux tabValeursPaires et tabValeursImpaires
console.log("tabValeursPaires="+ tabValeursPaires);
console.log("tabValeursImpaires="+ tabValeursImpaires);

var tabJours= [ "lundi" , "mardi" , "mercredi"];  

/* a faire en TP : dans une boucle 
tabJours.forEach((j) => { ...} afficher chaque valeurs du tableau tabJours en majuscules*/
tabJours.forEach((j) => { console.log(j.toUpperCase());});

tabJours.sort(  (j1,j2)=> j2.localeCompare(j1));//trier un tableau de string par ordre decroissant
console.log("tabJours="+tabJours);


var saisonsCouleurs = []; // Tableau associatif
saisonsCouleurs["hiver"] = "blanc";
saisonsCouleurs["printemps"] = "vert";
saisonsCouleurs["ete"] = "jaune";
saisonsCouleurs["automne"] = "marron";

console.log("typeof saisonsCouleurs = " + typeof saisonsCouleurs + " et saisonsCouleurs.hiver= "+saisonsCouleurs.hiver);

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
d1.display(); // [ DDK ] Couronne Danemark : 7.7
console.log("d1 as JSON string = " +  JSON.stringify(d1) );
//{"code":"DKK","nom":"Couronne Danemark","change":7.7,"couleur":"rouge"}

console.log("code de d1=" + d1.code); //tout est par défaut public en javascript
console.log("code de d1=" + d1["code"]); //possible avec objet vu comme tableau associatif 


var tabDevises = [];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));

/* a faire en tp : ajouter dynamiquement une fonction 
.augmenterChangeEnPourcentage(pourcentageAugmentation) sur le prototype de Devise
*/
Devise.prototype.augmenterChangeEnPourcentage =function(pourcentageAugmentation) {
    this.change = this.change * (1+ pourcentageAugmentation/100);
}

Devise.prototype.toString = function(){ return "**** code=" + this.code ; }

Devise.prototype.comment="A+";
tabDevises[1].comment = "B";
tabDevises[2].comment = "Aaa";
Devise.prototype.comment="B+";

tabDevises.forEach( (d)=>{ d.augmenterChangeEnPourcentage(5);})
/* a faire en tp : appeler .augmenterChangeEnPourcentage(5) 
                    en boucle pour chaque devise du tableau tabDevises */

/* a faire en tp : afficher en boucle chaque devise via un appel à .display */
//tabDevises.forEach( (d)=>{ d.display();})
for(let d of tabDevises){
    //d.display();
    console.log(""+d);
    console.log(d.comment);
}






