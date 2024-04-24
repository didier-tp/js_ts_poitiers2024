"use strict";
//conversion de devises

/*
function fetchAsJsData(url){
  return new Promise((resolve,reject)=>{
    fetch(url)
      .then((response)=>{
          if(response.status !== 200 && response.status !==201){
               reject("bad response , status=" + response.status);
        }else{
              response.json().then((jsData)=> {resolve(jsData);})
                             .catch((err)=> {reject(err);});
        }
       })
        .catch((err)=> {reject(err);})
    });
}
*/

async function fetchAsJsData(url){
/*try{*/
    const response =  await fetch(url);
    if(response.status !== 200 && response.status !==201){
        throw "bad response , status=" + response.status;
    }else{
       return response.json();
    }

  /*
  } catch(err){
    throw err;
  }*/
}

window.onload=()=>{
    chercherDevises();
    document.getElementById("btnConvert")
            .addEventListener("click",
                              ()=>{ effectuerConversion(); });
}
/*
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
*/
/*
function  effectuerConversion(){
  let baseUrl = "https://www.d-defrance.fr/tp/devise-api/public/convert";
  let montant = document.getElementById("inputMontant").value ;
  let sourceCode = document.getElementById("selectSourceCode").value ;
  let targetCode = document.getElementById("selectTargetCode").value ;
  let wsUrl = `${baseUrl}?amount=${montant}&source=${sourceCode}&target=${targetCode}`;
  console.log("wsURL="+wsUrl)
 
  fetchAsJsData(wsUrl)
 .then( (jsResConv) => {
     //NB: le résultat de response.json() est déjà au format js (pas besoin JSON.parse())
     console.log("convertJsonResponse="+JSON.stringify(jsResConv));
      document.getElementById("spanMsg").innerHTML=
              "<b>" + jsResConv.result+ "</b>";
 })
 .catch((err)=>{ console.log(err); 
                document.getElementById("spanMsg").innerHTML= err })
}
*/
/*
async function  effectuerConversion(){
 try{
  let baseUrl = "https://www.d-defrance.fr/tp/devise-api/public/convert";
  let montant = document.getElementById("inputMontant").value ;
  let sourceCode = document.getElementById("selectSourceCode").value ;
  let targetCode = document.getElementById("selectTargetCode").value ;
  let wsUrl = `${baseUrl}?amount=${montant}&source=${sourceCode}&target=${targetCode}`;
  console.log("wsURL="+wsUrl)

  const jsResConv= await fetchAsJsData(wsUrl);
  console.log("convertJsonResponse="+JSON.stringify(jsResConv));
  document.getElementById("spanMsg").innerHTML=
          "<b>" + jsResConv.result+ "</b>";
 } catch(err){
  console.log(err); 
  document.getElementById("spanMsg").innerHTML= err
 }
}
*/

async function  effectuerConversion(){
  try{
   let baseUrl = "https://www.d-defrance.fr/tp/devise-api/public/devise";
   let montant = document.getElementById("inputMontant").value ;
   let sourceCode = document.getElementById("selectSourceCode").value ;
   let targetCode = document.getElementById("selectTargetCode").value ;
   let wsUrl1 = `${baseUrl}/${sourceCode}`;
   let wsUrl2 = `${baseUrl}/${targetCode}`;
   console.log("wsURL1="+wsUrl1);console.log("wsURL2="+wsUrl2);
/*
   const deviseSource= await fetchAsJsData(wsUrl1);
   const deviseTarget= await fetchAsJsData(wsUrl2);
*/

   const [ deviseSource,deviseTarget ]= 
       await Promise.all ([fetchAsJsData(wsUrl1) ,fetchAsJsData(wsUrl2)]);


   const montantConverti = montant * deviseTarget.change / deviseSource.change;
   document.getElementById("spanMsg").innerHTML=
           "<i>" + montantConverti+ "</i>";
  } catch(err){
   console.log(err); 
   document.getElementById("spanMsg").innerHTML= err
  }
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
/*
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
*/

function  chercherDevises(){
  let wsUrl = "https://www.d-defrance.fr/tp/devise-api/public/devise";
 fetch(wsUrl)
 .then((response)=>{
     if(response.status !== 200 && response.status !==201){
         return Promise.reject("bad response , status=" + response.status);
     }else{
       return response.json();
     }
 })
 .then( (jsDevises) => {
     //NB: le résultat de response.json() est déjà au format js (pas besoin JSON.parse())
     console.log("devisesJsonResponse="+JSON.stringify(jsDevises));
     fillSelectWithDeviseList("selectSourceCode",jsDevises);
     fillSelectWithDeviseList("selectTargetCode",jsDevises);
 })
 .catch((err)=>{ console.log(err); 
                document.getElementById("spanMsg").innerHTML= err })
  
}