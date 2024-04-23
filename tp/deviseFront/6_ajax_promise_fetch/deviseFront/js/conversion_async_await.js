"use strict";
//conversion de devises

window.onload=function(){
    initForm();
	(document.getElementById("btnConvert"))
	   .addEventListener("click",doConvertion); 
}


function initSelectOptions(selectId,devises){
	let selectCpt = document.getElementById(selectId);
	selectCpt.innerHTML="";
	for(let devise of devises){
			let option=document.createElement("option");
			option.innerHTML=JSON.stringify(devise)
			option.value=devise.code;
			selectCpt.appendChild(option);
		}
}

async function initForm(){	
  try{
	let wsUrl =  "https://www.d-defrance.fr/tp/devise-api/public/devise";
	let objectListJs = await fetchJsonResponseJsData(wsUrl);
	console.log("via async/await: objectListJs="+JSON.stringify(objectListJs));
		initSelectOptions("selectSourceCode",objectListJs);
		initSelectOptions("selectTargetCode",objectListJs);
   }catch(err){
	  basicErrorCallback(err);
   }
}

function basicErrorCallback(err){
	console.log("err="+err);
	if(err && err.length>256){
		err = err.substring(0,256)
	}
	document.getElementById("spanMsg").innerHTML=err;
	document.getElementById("spanMsg").style.color="red";
}

function convertUrlFromInput(){
    let baseUrl = "https://www.d-defrance.fr/tp/devise-api/public/convert";
	let montant = (document.getElementById("inputMontant")).value;
	let sourceCode = (document.getElementById("selectSourceCode")).value;
	let targetCode = (document.getElementById("selectTargetCode")).value;
	let wsUrl = `${baseUrl}?source=${sourceCode}&target=${targetCode}&amount=${montant}`;
    //exemple : https://www.d-defrance.fr/tp/devise-api/public/convert?source=EUR&target=USD&amount=50
	return wsUrl;
}

async function doConvertion(){	
	try{
		let convertUrl = convertUrlFromInput();
        let convertResponseJs=await fetchJsonResponseJsData(convertUrl);
		console.log("via async/await: convertResponseJs="+JSON.stringify(convertResponseJs));
		let convertMsg = `<b>montant converti =${convertResponseJs.result} </b>`;
		document.getElementById("spanMsg").innerHTML=convertMsg;
	}catch(err){
        basicErrorCallback(err);
	}
}