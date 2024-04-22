"use strict";
//devises (crud puis crud+ajax)

var devises ; //liste des devises à afficher dans le tableau html

var selectedRow; //référence sur ligne sélectionnée (api DOM)
var selectedId; //id de la devise sélectionnée (ex: "EUR" ou "USD" ou ...)
var selectedObject; //référence vers objet "Devise" sélectionné

//NB: tant que pas de "click" sur une ligne du tableau , tous les "selected..." sont
//à undefined ou null , idem suite à un reset .

window.onload = () => {
    initDataSet();
    loadDataInHtmlTable();
    let btnRefreshAll = document.getElementById("btnRefreshAll");
    btnRefreshAll.addEventListener("click" ,()=>{
        initDataSet();
        loadDataInHtmlTable();
        selectedObject = blankObject();
        displayObject(selectedObject);
    });

    let btnReset = document.getElementById("btnReset");
    btnReset.addEventListener("click" ,()=>{
        selectedObject = blankObject();
        displayObject(selectedObject);
    });

}

function initDataSet(){
   devises = [
    { code : "EUR" , name : "Euro" , change : 1.0 },
    { code : "USD" , name : "Dollar", change : 1.1},
    { code : "GBP" , name : "Livre", change : 0.9},
    { code : "JPY" , name : "Yen", change : 123.7,}
   ]
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

function loadDataInHtmlTable(){
    let bodyElt = document.getElementById("table_body");
    bodyElt.innerHTML="";//vider le tableau avant de le re-remplir
    for(let obj of devises){
        let row = bodyElt.insertRow(-1);
        insertRowCells(row,obj);
        row.addEventListener("click" , onSelectRow);
    }
}

function onSelectRow(evt){
	document.getElementById("spanMsg").innerHTML="";
	document.getElementById("spanMsg").style.color="black";
	let clickElt = evt.target;
	if(selectedRow!=null){
		selectedRow.style.color="black";
	}
	let parentRow = clickElt.parentElement;
	selectedRow = parentRow;
	parentRow.style.color="blue";
	let idSelected=parentRow.firstChild.innerText;
	console.log("idSelected="+idSelected);
	searchById(idSelected);
}

function searchById(idSelected){
    //v1 (temporaire avant appel ajax)
    selectedObject = null;
    for(let obj of devises){
       if(obj.code == idSelected){
        selectedObject = obj; break;
       }
    }
    if(selectedObject!=null){
       displayObject(selectedObject)
    }

    //v2 avec appel ajax
}