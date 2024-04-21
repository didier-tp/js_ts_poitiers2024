class Pays {
	constructor(nom="?",capitale="?",population=0,superficie=0){
		this.nom=nom; 
		this.capitale=capitale;
		this.propulation=population;
		this.superficie=superficie;
	}
}
const p1 = new Pays('France' , 'Paris' , 67000000 , 643801);

const p2 = { nom : 'Allemagne' , capitale : 'Berlin' , population : 83000000, superficie : 357386};
const p = p2;  //ou bien =p1
//p=p1; interdit car "const p"
p.population=83000001 //autorisé
console.log(JSON.stringify(p));

const { nom , capitale } = p;
console.log("nom="+nom+" capitale="+capitale);
//nom="?"; interdit car nom et capitale sont considérées comme des variables "const"

//NB: les noms "population" et "superficie" doivent correspondre à des propriétés de l'objet 
//dont il faut (partiellement) extraire certaines valeurs (sinon "undefined")
//l'ordre n'est pas important
const { superficie , population } = p;
console.log("population="+population+"superficie="+superficie);

const [ id , label ] = [ 123 , "abc" ];
console.log("id="+id+" label="+label);

//const array1Iterable = [ 123 , "abc" ];
//var iterable1 = array1Iterable; 
const string1Iterable = "XYZ";
var iterable1 = string1Iterable; 
const [ partie1 , partie2 ] = iterable1;
console.log("partie1="+partie1+" partie2="+partie2);

//const [ v1 , v2, v3 ] = { p1 : "val1" , p2 : "val2" , p3 : "val3" }; not working (no iterable)
//const { pv1 , pv2 , pv3 } = ["val1" ,  "val2" ,  "val3" ];//not working (property name not match)

function fxabc_with_named_param( { paramX=0 , a=0 , b=0 , c=0 } = { } ){
	//return ax^2+bx+c
	return a * Math.pow(paramX,2) + b * paramX + c;
}

let troisFois4 = fxabc_with_named_param( { paramX :4 , b : 3 } );
console.log("troisFois4="+troisFois4 );//12
let deuxFois4AuCarreplus6 = fxabc_with_named_param( { paramX :4 , a : 2 , c :6} );
console.log("deuxFois4AuCarreplus6="+deuxFois4AuCarreplus6 );//38

const dayArray = ['lundi', 'mardi' , 'mercredi'];
for (const entry of dayArray.entries()) {
    console.log(entry);
}
//[ 0, 'lundi' ]
//[ 1, 'mardi' ]
//[ 2, 'mercredi' ]

for (const [index, element] of dayArray.entries()) {
    console.log(`${index}. ${element}`);
}
// 0. lundi
// 1. mardi
// 2. mardi

const mapBoolNoYes = new Map([
    [false, 'no'],
    [true, 'yes'],
]);
for (const [key, value] of mapBoolNoYes) {
    console.log(`${key} => ${value}`);
}
// false => no
// true => yes


