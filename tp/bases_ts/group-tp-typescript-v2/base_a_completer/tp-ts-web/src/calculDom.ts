window.addEventListener("load", function(){
    document.querySelector('#btnAdd')?.addEventListener('click',
         function(){
            const eltInputA  = <HTMLInputElement> document.querySelector('#a');
            var valA=Number(eltInputA.value);
            const eltInputB  = <HTMLInputElement> document.querySelector('#b');
            const valB=Number(eltInputB.value);
            const valRes=addition(valA,valB);
            const eltSpanRes = <HTMLElement> document.querySelector('#res');
            eltSpanRes.innerHTML=valRes.toString();
            });
});

/*
dans calcul.html
 <script src="./js/calculs.js"></script>
 <script src="./js/calculDom.js"></script>
 dans tsconfig.json
  "module": "none"
*/