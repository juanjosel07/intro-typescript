
/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] =['Bash','counter','healing'];

interface Personaje {
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}

const personaje:Personaje = {

    nombre:'Strider',
    hp:100,
    habilidades:['Bash','counter','healing']


}

personaje.puebloNatal ='pueblo viejo';

console.table(personaje);
