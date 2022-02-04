
/*
    ===== Código de TypeScript =====
*/
// claseess 

class PersonaNormal{
    constructor(public nombre:string, public direccion:string){}
   
}




class Heroe extends PersonaNormal{
    //alterEgo:string;
    //dad:number;
    //nombreReal:number;
    //  imprimirNombre(){
    //    return this.alterEgo+' '+ this.n ombreReal
    //}
    constructor(
        public alterEgo: string,
        public edad:number,
        public nombreReal:string
        
        
    ){
        super( nombreReal,'New York,USA');
       //console.log('hey!!');
       //this.alterEgo = alterEgo;
    }

    
}


const iroman = new Heroe('Iroman',45,'tony');
//const Spiderman:Personaje2={}
console.log(iroman);

