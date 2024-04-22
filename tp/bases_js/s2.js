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




