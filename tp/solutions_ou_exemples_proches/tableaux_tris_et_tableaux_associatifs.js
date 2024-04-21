var tabVal = [12, 23, 5, 45, 7, 8];
var s = 0;

for(var i = 0 ; i < tabVal.length ; i++){
    s += tabVal[i];
}
console.log("somme = " + s);
tabVal.sort((a,b)=> a-b); //tri par ordre croissant
//où (a,b)=> a-b est une fonction de comparaison appelée en interne par sort()
//qui compare a et b et renvoie >0 si a>b , 0 si a==b et <0 si a < b

console.log("apres tri, tabVal=" + tabVal);

var saisonsCouleurs = []; // Tableau associatif
saisonsCouleurs["hiver"] = "blanc";
saisonsCouleurs["printemps"] = "vert";
saisonsCouleurs["ete"] = "jaune";
saisonsCouleurs["automne"] = "marron";

saisonsCouleurs["printemps"] = "vert_clair";

for(clef in saisonsCouleurs){
    console.log(clef + " : " + saisonsCouleurs[clef]);
}

console.log("couleur associee au printemps=" + 
             saisonsCouleurs["printemps"]);

var tabJours= [ "lundi" , "mardi" , "mercredi"];          
tabJours.forEach((j) => {  var J = j.toUpperCase(); console.log(J);  } );       
