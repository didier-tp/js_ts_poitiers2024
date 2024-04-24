"use strict";
//conversion de devises
window.onload=()=>{
    chercherDevises();
    document.getElementById("btnConvert")
            .addEventListener("click",
                              ()=>{ effectuerConversion(); });
}

function  effectuerConversion(){
    let baseUrl = "https://www.d-defrance.fr/tp/devise-api/public/convert";
    let montant = document.getElementById("inputMontant").value ;
    let sourceCode = document.getElementById("selectSourceCode").value ;
    let targetCode = document.getElementById("selectTargetCode").value ;
    let wsUrl = `${baseUrl}?amount=${montant}&source=${sourceCode}&target=${targetCode}`;
    console.log("wsURL="+wsUrl)
    makeAjaxGetRequest(wsUrl ,
         (convertJsonResponse) => {
            console.log("convertJsonResponse="+convertJsonResponse);
            let convertResponseJs = JSON.parse(convertJsonResponse);
            document.getElementById("spanMsg").innerHTML=
              "<b>" + convertResponseJs.result+ "</b>";
          },
          errCallback
        );
}

function  errCallback(err){
    console.log(err);
}

function  fillSelectWithDeviseList(selectId,listeDevisesJs){
   let selectElt = document.getElementById(selectId);
   selectElt.innerHTML="";
   for(let devise of listeDevisesJs){
    let optionElt = document.createElement("option");
    optionElt.setAttribute("value",devise.code);
    //optionElt.innerText=devise.name;
    optionElt.innerText=JSON.stringify(devise);
    selectElt.appendChild(optionElt);
   }
}

function  chercherDevises(){
    let wsUrl = "https://www.d-defrance.fr/tp/devise-api/public/devise";
    makeAjaxGetRequest(wsUrl ,
         (deviseJsonResponse) => {
            console.log("deviseJsonResponse="+deviseJsonResponse);
            let listeDevisesJs = JSON.parse(deviseJsonResponse);
            fillSelectWithDeviseList("selectSourceCode",listeDevisesJs);
            fillSelectWithDeviseList("selectTargetCode",listeDevisesJs);
          },
          errCallback
        );
}