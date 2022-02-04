
/*
    ===== Código de TypeScript =====
*/

import { Producto,calculaISV } from "./desectrucfuncion";

//import { Producto, calculaISV } from 'desectrucfuncion';

const carritoCompras: Producto[]=[{

    desc:'telefono 1',
    precio: 100
},
{
    desc:'telefono 2',
    precio:50
},
];

const [total,isv]=calculaISV( carritoCompras);

console.log ('total',total);
console.log( 'ISV',isv)