"use strict";
//fonctions utilitaires pour appels ajax via api fetch

function fetchJsonResponseJsData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				if (response.status !== 200) {
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