function addition(a:number, b:number):number{
    const res = a+b;
    const sRes = `a=${a} b=${b} res=a+b=${res}`;
    console.log("sRes="+sRes);
    return res;
}

const res1=addition(5,6);
console.log("res1="+res1);

enum Jour { Lundi , Mardi , Mercredi , Jeudi , Vendredi , Samedi , Dimanche}
let j : Jour ;
j = Jour.Lundi; 
console.log("j="+j + "=" + Jour[j]);
j=Jour.Vendredi;
console.log("j="+j + "=" + Jour[j]);

let j2:Jour ;
let sJ2="Lundi";
j2 = Jour[sJ2  as keyof (typeof Jour) ];
console.log("j2="+j2 + "=" + Jour[j2]);