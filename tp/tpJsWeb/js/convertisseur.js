//variables globales:
var eltTxtRadians ;
var eltTxtDegres ;
var eltSpanMessage ;
var eltUlHistorique;

var coeff;

window.addEventListener('load', initialisations);

function initialisations(){

    coeff = 180 / Math.PI;

    eltTxtRadians = document.getElementById("txtRadians");
    eltTxtDegres = document.getElementById("txtDegres");
    eltSpanMessage = document.getElementById("spanMessage");
    eltUlHistorique = document.getElementById("ulHistorique");
    razMessage();

    /*var cbShowHisto = document.getElementById("cbShowHisto");*/ //en - dans nouvelle variante
    var zoneIntermediaire = document.getElementById("zoneIntermediaire");
    /*cbShowHisto.addEventListener("change" , function(evt){*/
    zoneIntermediaire.addEventListener("change" , function(evt){
        console.log("evt.type="+evt.type);
        console.log("evt.target.id="+evt.target.id);
        var cbShowHisto = evt.target;//en + dans nouvelle variante
        if(cbShowHisto.checked){
            ulHistorique.style.display ="block";
            //ulHistorique.style.visibility ="visible";
        } else {
            ulHistorique.style.display ="none";
            //ulHistorique.style.visibility ="hidden";
        }
    })
}

function razMessage(){
    eltSpanMessage.innerHTML="<i>jusqu'ici tout va bien</i>";
    //eltSpanMessage.innerText="jusqu'ici tout va bien";
    eltSpanMessage.style.color="green";
}

function afficherErreur(errorMsg){
    eltSpanMessage.innerText=errorMsg;
    eltSpanMessage.style.color="red";
}

function radiansToDegres(){
    razMessage();
    if (isNaN(eltTxtRadians.value)){
        afficherErreur("le nombre de radians à convertir doit être numérique")
    }else{
        eltTxtDegres.value = coeff * eltTxtRadians.value;
        addConversionHistorique(""+eltTxtRadians.value+" radians = " +
                                 eltTxtDegres.value + " degres");
    }
}

function addConversionHistorique(textConv){
    var eltLiConv = document.createElement("li") ; //nouvel <li></li>
    eltLiConv.innerHTML=textConv;
    eltUlHistorique.appendChild(eltLiConv);
}

function degresToRadians(){
    razMessage();
    if (isNaN(eltTxtDegres.value)){
        afficherErreur("le nombre de degrés à convertir doit être numérique")
    }else{
        eltTxtRadians.value =   eltTxtDegres.value / coeff;
        addConversionHistorique(`${eltTxtDegres.value} degres = 
                                 ${eltTxtRadians.value} radians `  );
    }
}