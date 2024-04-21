function test_weakMap_and_weakSet(){


//non primitive key for WeakMap and non primitiveValue for WeakSet
class MyObjectClass {
	constructor(v){ this.v = v; this.V = v.toUpperCase(); }
}

// Weak Maps (!!! with no .size , no .forEach)
//NB: les éléments stockés dans une weakMap (dont les clefs sont obligatoirement des références
//sur des objets) ne seront conservés que si il existe encore une autre référence (externe)
//sur la même valeur "objet" d'une clef .
//Autrement dit la référence constituée par la clef d'une entrée d'une WeakMap est considérée 
//comme faible et ne compte pas dans la logique de fonctionnement du "garbage collector" .
var wm = new WeakMap();
console.objKey1 = new MyObjectClass("key1");
console.objKey2 = new MyObjectClass("key2");
wm.set(console.objKey1,"val1");
wm.set(console.objKey2,"val2");
console.log("in weakMap , for console.objKey1 , value is " + wm.get(console.objKey1));
console.log("in weakMap , for console.objKey2 , value is " + wm.get(console.objKey2));
delete console.objKey2;
console.log("after delete console.objKey2 , in weakMap , for console.objKey1 , value is " + wm.get(console.objKey1));
console.log("after delete console.objKey2 , in weakMap , for console.objKey2 , value is " + wm.get(console.objKey2));
if(wm.has(console.objKey1))
	console.log("weakMap wm comporte encore une valeur associée à console.objKey1");
if(!wm.has(console.objKey2))
	console.log("weakMap wm ne comporte plus de valeur associée à console.objKey2");

// Weak Sets is not iterable et donc quasiment inutile !!!!
var ws = new WeakSet();
console.obj1=new MyObjectClass("obj1");
console.obj2=new MyObjectClass("obj2");
ws.add(console.obj1);
ws.add(console.obj2);
delete console.obj2;
if(ws.has(console.obj1))
	console.log("weakSet ws comporte encore console.obj1");
if(!ws.has(console.obj2))
	console.log("weakSet ws ne comporte plus console.obj2");

}


test_weakMap_and_weakSet();