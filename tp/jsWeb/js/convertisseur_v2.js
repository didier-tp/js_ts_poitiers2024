//variables globales:
var eltTxtRadians ;
var eltTxtDegres ;
var eltSpanMessage ;

var coeff;

window.onload= ()=> {
    initialisations();

    document.getElementById("btnDegresToRadians")
            .addEventListener("click" ,() => { degresToRadians(); });

    //document.getElementById("btnRadiansToDegres")
     document.querySelector("#btnRadiansToDegres")
            .addEventListener("click" , radiansToDegres);

     let eltUlHistorique = document.querySelector("#ulHistorique");
     let cbShowHisto = document.getElementById("cbShowHisto");
            cbShowHisto.addEventListener("change" , function(){
                if(cbShowHisto.checked){
                    eltUlHistorique.style.display="block";
                } else {
                    eltUlHistorique.style.display="none";
                }
            })            
}

function addConversionHistorique(textConv){
    let eltUlHistorique = document.querySelector("#ulHistorique");
    let eltLiConv = document.createElement("li") ; //nouvel <li></li>
    eltLiConv.innerHTML=textConv;
    eltUlHistorique.appendChild(eltLiConv);
}

function initialisations(){

    coeff = 180 / Math.PI;

    eltTxtRadians = document.getElementById("txtRadians");
    eltTxtDegres = document.getElementById("txtDegres");
    eltSpanMessage = document.getElementById("spanMessage");
    razMessage();
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
        let txtConv = `${eltTxtRadians.value} radians = ${eltTxtDegres.value} degres`;
        addConversionHistorique(txtConv);
    }
}

function degresToRadians(){
    razMessage();
    if (isNaN(eltTxtDegres.value)){
        afficherErreur("le nombre de degrés à convertir doit être numérique")
    }else{
        eltTxtRadians.value =   eltTxtDegres.value / coeff;
        let txtConv = `${eltTxtDegres.value}  degres = ${eltTxtRadians.value} radians`;
        addConversionHistorique(txtConv);
    }
}