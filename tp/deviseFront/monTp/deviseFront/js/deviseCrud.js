"use strict";
//devises (crud puis crud+ajax)

var devises=[]; //liste globale d'objets "Devise" à afficher dansle tableau html
var selectedRow ; //ligne selectionnée ou undefined/null
var selectedId; // id (ou code) de la ligne sélectionée (ou undefined/null) ex: EUR
var selectedObject // objet javascript complet associé à la ligne sélectionnée (ou undefined/null)

function onSelectRow(evt){
    //console.log("evt.type="+evt.type);
    //console.log("evt.target.tagName="+evt.target.tagName);
    //let row = evt.target.parentElement;
    let row = evt.target.parentNode;
    //console.log("row.tagName="+row.tagName);
    if(selectedRow !=null){
        selectedRow.style.color = "black"; //remettre en noir l'ancienne ligne sélectionnée
    }
    selectedRow=row;
    selectedRow.style.color = "blue";//mettre en bleu la nouvelle ligne sélectionnée
    selectedId = selectedRow.firstChild.innerText;
    console.log("selectedId="+selectedId);
    //let selectedIdV2=row.getAttribute("id");
    let selectedIdV2=row.getAttribute("value");
    console.log("selectedIdV2="+selectedIdV2);
    selectedObject=findDeviseByCode(selectedId);
    storeDeviseInFormInputs();
    document.querySelectorAll(".whenSelected")
            .forEach( (elt)=>{ elt.disabled = false});
}

function storeDeviseInFormInputs(){
    if(selectedObject==null) return;
    document.getElementById("inputId").value=selectedObject.code;
    document.getElementById("inputName").value=selectedObject.name;
    document.getElementById("inputChange").value=selectedObject.change;
}

function findDeviseByCode(code){
    let devise=null;
    for(let d of devises){
        if(d.code==code){
            devise=d; break;
        }
    }
    return devise;
}

window.onload=()=>{
    initDataSet();
    loadDataInHtmlTable();
    //document.getElementById("btnDelete").disabled = true;
    document.querySelectorAll(".whenSelected")
            .forEach( (elt)=>{ elt.disabled = true});
}

function initDataSet(){
   devises = [
    {name:"Euro",change:1,code:"EUR"},
   {name:"Dollar",change:1.1,code:"USD"},
   {name:"Livre",change:0.9,code:"GBP"},
   {name:"Yen",change:123.7,code:"JPY"}];

}

function loadDataInHtmlTable(){
    let tbodyElt = document.getElementById("table_body");
    //boucle (au sens forEach) sur tableau global "devises":
    for(let devise of devises){
         let row = tbodyElt.insertRow(-1); //insérer nouvelle <tr>...</tr> en dernière position
         //NB: row.insertCell(numColonne) insère une nouvelle cellule <td>...</td> dans la ligne row
         (row.insertCell(0)).innerHTML=devise.code;
         (row.insertCell(1)).innerHTML=devise.name;
         (row.insertCell(2)).innerHTML=devise.change;
         row.addEventListener("click",onSelectRow);
         //row.setAttribute("id","_"+devise.code);
         row.setAttribute("value","_"+devise.code);
    }
}

