
window.addEventListener("load", function(){
    document.querySelector('#btnAjaxCall')?.addEventListener('click',
         ()=>{appelerEtAfficherResWsRest(); });
});

/* URL = https://catfact.ninja/fact */
interface CatFactResult{
  fact : string;
  length : number;
}

function afficherCatFactResult(catFactResult :CatFactResult){
  const eltSpanRes = <HTMLElement> document.querySelector('#res');
  eltSpanRes.innerHTML=catFactResult.fact + " de longeur = " + catFactResult.length;
  eltSpanRes.style.fontWeight='bold';
}

async function appelerEtAfficherResWsRest()  {
  const wsUrl = "https://catfact.ninja/fact";
  try{
    const response  = await fetch(wsUrl);
    console.log("response.status : ", + response.status);
    if(response.ok){
      let data  = await response.json();
      console.log("response data : " + JSON.stringify(data));
      const catFactResult = <CatFactResult> data;
      afficherCatFactResult(catFactResult);
    }else{
     let text  = await response.text();
     console.log("error response text : " + text);
    }
  }catch(ex){
    console.log("ex : " + ex);
  }
}

/*
dans chat.html
 <script src="./js/chatDom.js" type="module"></script>
 dans tsconfig.json
  "module": "none"
*/