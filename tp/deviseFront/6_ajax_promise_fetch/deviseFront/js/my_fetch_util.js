"use strict";
//fonctions utilitaires pour appels ajax via api fetch

function fetchJsonResponseJsData(url,options) {
	return new Promise((resolve, reject) => {
		fetch(url,options)
			.then((response) => {
				if (response.status !== 200 && response.status !== 201
				     && response.status !== 204) {
					//pas ok/200 
					var errString = 'Problem. Status Code: ' + response.status;
					response.text()
					         .then(	(errorText)=>{
								errString += (" " + errorText );
								console.log(errString); 
								reject(errString);
							 })
							 .catch((errOfErr)=>{ console.log(errString); 
								                  reject(errString);});
				}else{
				// Extract js data from a json response :
				response.json().then(function (data) {
					resolve(data); //with data as js object
				})
			   }
			})
			.catch((err) => { console.log('Fetch Error :-S', err); reject(err); });
	});
}

function fetchJsonResponseJsDataAfterPostJson(url,jsonDataToSend) {
	let options = {
		method: 'POST' ,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
		body : jsonDataToSend
		};
	return fetchJsonResponseJsData(url,options);
}

function fetchJsonResponseJsDataAfterPostJs(url,jsDataToSend) {
	return fetchJsonResponseJsDataAfterPostJson(url,JSON.stringify(jsDataToSend));
}