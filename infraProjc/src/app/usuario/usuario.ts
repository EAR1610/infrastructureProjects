export class Usuario {
    id: number;
    nombre: String;
    correo: String;
    password: String;
    usuario: string;////esto ESTA MALO
 constructor(){
    this.id=0;
    this.nombre="";
    this.correo="";
    this.usuario="";
    this.password="";

 }
}
/*
export interface Usuario {
    id: number;
    nombre: String,
    correo: String,
    password: String,
    usuario: String////esto ESTA MALO
 
}
*/