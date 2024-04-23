function calculAdd(){
    let a = document.getElementById('txtA').value;
    let b = document.getElementById('txtB').value;
    let AplusB= Number(a) + Number(b);
    document.getElementById('resAdd').innerHTML="<b>"+AplusB+"</b>";
}

function calculTvaEtTtc(){
    let ht = document.getElementById('txtHt').value;
    let tauxTvaPct = document.getElementById('txtTauxTvaPct').value;
    let tva= Number(ht) * Number(tauxTvaPct)/100;
    let ttc= Number(ht) + tva;
    document.getElementById('spanTva').innerHTML="<b>"+tva+"</b>";
    document.getElementById('spanTtc').innerHTML="<b>"+ttc+"</b>";
}