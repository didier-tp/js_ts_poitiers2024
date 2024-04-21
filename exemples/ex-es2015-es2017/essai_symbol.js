const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false

let ageKey=Symbol('age'); //as speudo private key/property
let sizeKey=Symbol('size'); //as speudo private key/property
class Person {
	constructor(nom=null, age = 0 , size=0){ 
	    this.nom=nom;
		this[ageKey]=age;
		this[sizeKey]=size;
	}
	
	get age(){
		return this[ageKey];
	}
	
	set age(newAge){
		if(newAge>=0) 
			this[ageKey]=newAge;
	}
	
	get size(){
		return this[sizeKey];
	}
	
	set size(newSize){
		if(newSize>=0) 
			this[sizeKey]=newSize;
	}
	
	logSymbolProperties(){
		for(let key of Object.getOwnPropertySymbols(this)){
			console.log(key.toString()+"_"+this[key]);
		}
	}
}

let p1 = new Person("toto",30);
console.log(p1, JSON.stringify(p1) , p1.age);
p1.nom="Toto"; p1.age=40; p1.size=160;
console.log(p1, JSON.stringify(p1) , p1.age);
p1.age=-5; //no effect , newAge invalid
p1.size=-23;
console.log(p1, JSON.stringify(p1) , p1.age);
p1.logSymbolProperties();


