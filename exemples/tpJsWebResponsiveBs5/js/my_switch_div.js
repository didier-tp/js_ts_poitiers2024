
var currentSubPart=null;

function switchSubPart(newIdSubPartToDisplay,postSwitchTask){
	   //1. cacher ancienne div si besoin:
	   if(currentSubPart)
	       currentSubPart.style.display = "none";
	   //2. afficher nouvelle div:
	   currentSubPart = document.getElementById(newIdSubPartToDisplay);
	   currentSubPart.style.display = "block";
	   //2. appeler si besoin fonction postSwitchTask:
	   if(postSwitchTask)
	       postSwitchTask();
}
