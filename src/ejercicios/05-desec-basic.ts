
/*
    ===== Código de TypeScript =====
*/



interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}

interface Detalles {
    autor:string;
    anio:number;
}

const reproductor : Reproductor={

    volumen:90,
    segundo:36,
    cancion:'Mes',
    detalles:{
        autor:'Ed Sheeran',
        anio:2015
    }
}
//desestructuracion
const {volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles
//console.log('El volumen actual es de:', volumen);
//console.log('El segundo actual es de:', segundo);
//console.log('El cancion actual es de:',cancion);
//console.log('El autor es:',autorDetalle);


const dbz:string []=['goku','vegeta','Trunks'];
const [ , , p3]=dbz;

console.log('personaje 1:',p3);