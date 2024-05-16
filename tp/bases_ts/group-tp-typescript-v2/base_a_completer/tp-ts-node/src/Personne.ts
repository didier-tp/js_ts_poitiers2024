class Personne{
    /*
    numero:number;
    nom : string ;
    private _age : number;

    constructor(numero:number=0,nom:string="?",age:number=0){
        this.numero=numero;
        this.nom=nom;
        this._age=age;
    }
    */

    /*public*/ humeur : string = "bonne humeur";

    constructor(public numero:number=0,
                public nom:string="?",
                private _age:number=0){
                    if(this._age <0) {
                        this.age=0; //+ ... 
                    }
    }

    public afficher():void{
        console.log(`Personne nom=${this.nom} numero=${this.numero} age=${this.age}`);
    }

    public get age(){ 
        return this._age;
    }

    public set age(newAge:number){ 
        if(newAge>=0)
            this._age = newAge;
        else{
            console.log("age inchangé car nouvelle valeur demandée négative invalide");
        }
    }

   

    incrementerAge():void{
        this._age++;
    }
}

class Employe extends Personne {
    constructor(numero:number=0,
        nom:string="?",
        private _salaire:number=2500){
            super(numero,nom);
        }

        public afficher():void{
            super.afficher(); //afficher la partie "Personne d'un employe"
            console.log(`... cette Personne est un employe avec salaire=${this._salaire} `);
        }
}

let e1 = new Employe();
console.log("e1=" + JSON.stringify(e1));
let e2 = new Employe(2,"employe2",3000);
console.log("e2=" + JSON.stringify(e2));
e2.afficher();

let p1 = new Personne();
console.log(`p1=Personne[age=${p1.age},nom=${p1.nom},numero=${p1.numero}]`);
p1.incrementerAge();
p1.nom="toto";
p1.numero=12;
console.log(`p1=Personne[age=${p1.age},nom=${p1.nom},numero=${p1.numero}]`);
p1.age=-5; //valeur invalide qui sera ignorée/refusée
//console.log("p1="+p1);//affiche p1=[object Object]
console.log("p1="+JSON.stringify(p1));//affiche p1={"numero":12,"nom":"toto","_age":1}
p1.age = 54;
console.log("p1="+JSON.stringify(p1));

const p2=new Personne(2,"titi" , -33);
console.log("p2="+JSON.stringify(p2));

//polymorphisme:
let tabPers : Personne[] = [];
tabPers.push(e1);
tabPers.push(p1);
tabPers.push(e2);

for(const p of tabPers){
    console.log("");
    p.afficher(); //polymorphisme
}

