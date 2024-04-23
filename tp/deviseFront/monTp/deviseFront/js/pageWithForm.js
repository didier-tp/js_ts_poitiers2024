function verifNotEmpty(elt){
    let errMessages=[];
    if(elt.value== null || elt.value == "")
        errMessages.push("ne doit pas etre vide");
    if(errMessages.length>0){
        let globalMessage = "la zone " + elt.name + " " + errMessages.join(" et ");
        console.log(globalMessage);
        document.getElementById("spanMsg").innerHTML=globalMessage;
        return false;
    }
    /*else*/ return true;
}

function verifNum(elt){
    let errMessages=[];
    if(elt.value== null || elt.value == "")
        errMessages.push("ne doit pas etre vide");
    if(isNaN(elt.value)) 
       errMessages.push("doit etre numerique");
    if(errMessages.length>0){
        let globalMessage = "la zone " + elt.name + " " + errMessages.join(" et ");
        console.log(globalMessage);
        document.getElementById("spanMsg").innerHTML=globalMessage;
        return false;
    }
    /*else*/ return true;
}

function verifForm(form){
    document.getElementById("spanMsg").innerHTML="";
    let res=true; //by default
    try{
        console.log("verifForm with form="+form);
        res = res && verifNotEmpty(form.querySelector("input[name='prenom']"));
        res = res && verifNotEmpty(form.querySelector("input[name='nom']"));
        //let eltAge = form.age ; //si <input name="age" ... />
        let eltAge = form.querySelector("input[name='age']");
        console.log("age ="+eltAge.value);
        res = res && verifNum(eltAge);
        return res;
    } catch(err){
        console.log("verifForm.err ="+err);
        return false;
    }
}