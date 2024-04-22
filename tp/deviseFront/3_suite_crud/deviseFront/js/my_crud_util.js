"use strict";
//fonctions utilitaires pour factoriser certaines parties
// du comportement "CRUD" ou bien "CRUD+AJAX"

function initListeners(){
	
	(document.getElementById("btnRefreshAll"))
	   .addEventListener("click",refreshAll);
	   
	(document.getElementById("btnAdd"))
	   .addEventListener("click",addNew); 
	   
	(document.getElementById("btnUpdate"))
	   .addEventListener("click",updateSelected); 
	   
	(document.getElementById("btnReset"))
	   .addEventListener("click",resetObject); 
	   
	(document.getElementById("btnDelete"))
	   .addEventListener("click",deleteSelected); 
	    
}