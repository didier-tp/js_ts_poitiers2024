var strAbc = "abc";
console.log(typeof strAbc[Symbol.iterator]); // "function"

let itStrAbc = strAbc[Symbol.iterator]();          
console.log(itStrAbc.next());  // { value: "a", done: false }
console.log(itStrAbc.next());  // { value: "b", done: false }
console.log(itStrAbc.next());  // { value: "c", done: false }
console.log(itStrAbc.next());  // { value: undefined, done: true }

let itAbc = strAbc[Symbol.iterator](); 
var tabAbc = [ 'a', 'b' , 'c' ];
//let itAbc = tabAbc[Symbol.iterator]() ;
/*
let loopItem = null;
while((loopItem=itAbc.next()) && !loopItem.done) {
	console.log(loopItem.value);
}*/
for(let eltOfAbc of itAbc){
	console.log(">"+eltOfAbc);
}


var monIterable = {};
monIterable[Symbol.iterator] = function* () {
    yield 'e1';
    yield 'e2'; //yield signifie "rendre , produire , donner , générer , ..."
    yield 'e3';
};
//NB: String, Array, TypedArray, Map et Set sont des itérables natifs 
//car les prototypes de chacun ont tous une méthode Symbol.iterator.

for(let elt of monIterable){
	console.log(">>"+elt);
}//>>e1  >>e2  >>e3

var myArray1 = [ 'e0' , ...monIterable , 'e4' ,'e5' ];
var myArray2 = [  ...monIterable  ];
console.log(myArray1); //[ 'e0', 'e1', 'e2', 'e3', 'e4', 'e5' ]
console.log(myArray2); //[ 'e1', 'e2', 'e3' ]

//Fonction génératrice élémentaire avec syntaxe "function*" et "yield" :
function* idMaker(){
  var index = 0;
  while(index<10)
    yield index++; //yield retourne la valeur et se met en pause (attente du futur appel)
}
//NB: le fait que la fonction génératrice (function*) soit prévue pour être appelée
//plusieurs fois via un itérateur et que yield établisse automatiquement une attente
//du prochain appel correspond à une fonctionnalité très spéciale du langage es6/es2015
//appelée PROTOCOLE d'iteration .

//itérable1 basé sur générateur:
var genIt1 = idMaker();
console.log(genIt1.next().value); // 0
console.log(genIt1.next().value); // 1
console.log(genIt1.next().value); // 2
console.log("-------------");
//itérable2 basé sur même générateur:
var genIt2 = idMaker();
console.log(genIt2.next().value); // 0
console.log(genIt2.next().value); // 1
console.log("-------------");
//itérable3 basé sur même générateur:
var genIt3 = idMaker();
var myArray3 = [  ...genIt3 ];
console.log(myArray3);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

class MyBasicFifo{
	constructor(){
		this.internalArray = [];
		this[Symbol.iterator]=this.fifoIteratorGenerator;
	}
	
	pop(){
		if(this.internalArray.length>0)
			return this.internalArray.pop();
	}
	
	push(elt){
		this.internalArray.push(elt);
		let taille=this.internalArray.length;
		for(let i=taille-1;i>0;i--){
			this.internalArray[i]=this.internalArray[i-1];
		}
		this.internalArray[0]=elt;
	}
	
     * fifoIteratorGenerator() {
        var index = this.internalArray.length -1;
			while(index>=0)
				yield this.internalArray[index--]; 
     }
	 
	 
		
}

let fifo1 = new MyBasicFifo();
fifo1.push("a"); fifo1.push("b"); fifo1.push("c");
console.log(fifo1.pop());
console.log(fifo1.pop());
console.log(fifo1.pop());


fifo1.push("aa"); fifo1.push("bb"); fifo1.push("cc");
let fifo1It = fifo1.fifoIteratorGenerator();
let arr1 = [ ...fifo1It ]
console.log(arr1);

for(let e of fifo1){
	console.log(`>>${e}`);
}




