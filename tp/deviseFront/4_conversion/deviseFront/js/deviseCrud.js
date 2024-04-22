"use strict";
//devises (crud puis crud+ajax)

var devises ; //liste des devises à afficher dans le tableau html

var selectedRow; //référence sur ligne sélectionnée (api DOM)
var selectedId; //id de la devise sélectionnée (ex: "EUR" ou "USD" ou ...)
var selectedObject; //référence vers objet "Devise" sélectionné

//NB: tant que pas de "click" sur une ligne du tableau , tous les "selected..." sont
//à undefined ou null 

window.onload = () => {
    refreshAll();
    initListeners();
}

function refreshAll(){
    initDataSet();
    loadDataInHtmlTable();
    resetObject();
}

function resetObject(){
    document.getElementById("spanMsg").innerHTML="";
	document.getElementById("spanMsg").style.color="black";
	if(selectedRow!=null){
		selectedRow.style.color="black";
		selectedRow=null;
		selectedObject = null;
	}
    selectedObject = blankObject();
    displayObject(selectedObject);
}

function addNew(){
    let objectJs = objectFromInput();
    if(!canDoAction("add" , objectJs))return;
    devises.push(objectJs);
    refreshAll();
}

function updateSelected(){
    let objectJs = objectFromInput();
    if(selectedObject != null){
        if(!canDoAction("update" , objectJs))return;
        selectedObject.code = objectJs.code;
        selectedObject.name = objectJs.name;
        selectedObject.change = objectJs.change;
        updateRowCells(selectedRow,selectedObject);
    }
}

function deleteSelected(){
    console.log("deleteSelected() with selectedId="+selectedId);
    if(selectedId != null){
        //v1 (temporaire avant appel ajax)
        let indexOfObjToDelete = -1;
        for(let i in devises){
            let obj = devises[i];
            if(obj.code == selectedId){
                indexOfObjToDelete = i; break;
            }
        }
        console.log("indexOfObjToDelete="+indexOfObjToDelete);
        if(indexOfObjToDelete>=0){
        devises.splice(indexOfObjToDelete,1)
        refreshAll();
        }
    }
}

function initDataSet(){
 if(devises != null) return; //rien à faire (déjà fait)
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

function updateRowCells(row,obj){
    if(row==null)return;
	(row.cells[0]).innerHTML = obj.code;
	(row.cells[1]).innerHTML = obj.name;
	(row.cells[2]).innerHTML = obj.change;
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
    //maj variable globale:
    selectedId = idSelected;
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