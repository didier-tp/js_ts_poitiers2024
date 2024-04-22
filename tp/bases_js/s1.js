"use strict";
console.log("hello world");
var g3=3;
console.log("g3="+g3);
let x=18;
let sX= x.toString();
console.log("sx="+sX + " de type=" + typeof sX);
let obj=null;
let bb=false;
let zero=0 
if(obj == zero){
    console.log("0 vu comme identique à null")
}else{
    console.log("0 vu comme différent de null")
}

if(bb == zero){
    console.log("false vu comme identique à zero")
}else{
    console.log("false vu comme différent de zero")
}

var sY="12.0"
if(isNaN(sY)){
    console.log("sY n'est pas numerique")
}else{
    console.log("sY est numerique")
}