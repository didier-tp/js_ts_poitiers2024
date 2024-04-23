"use strict";
//devises (crud puis crud+ajax)

window.onload = () => {
    initListeners();
}

function objectFromInput(){
	let code = (document.getElementById("inputId")).value;
	let name = (document.getElementById("inputName")).value;
	let change = (document.getElementById("inputChange")).value;
	
	document.getElementById("spanMsg").innerHTML="";
	
	let obj = { code : code,
				   name : name,
	               change : Number(change) }
	return obj;
}

function displayObject(obj){
	(document.getElementById("inputId")).value=obj.code;
	(document.getElementById("inputName")).value=obj.name;
	(document.getElementById("inputChange")).value=obj.change;
}

function insertRowCells(row,obj){
	(row.insertCell(0)).innerHTML = obj.code;
	(row.insertCell(1)).innerHTML = obj.name;
	(row.insertCell(2)).innerHTML = obj.change;
}


function blankObject(){
	return {code:"" , name: "" , change : ""};	
}


//obj = object with values to check
//action = "add" or "update" or ...
function canDoAction(action,obj){
	let ok=true; //by default
	if(obj.code==null || obj.code == "")
	  ok=false;
	if(obj.change==null || obj.change == "") 
	   ok=false;
	if(obj.name==null || obj.name == "") 
	   ok=false;
	return ok;
}



function getWsBaseUrl(){
	return "https://www.d-defrance.fr/tp/devise-api/public/devise";	
}

