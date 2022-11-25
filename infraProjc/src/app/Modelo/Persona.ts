export class Persona{
    id:number;
    nombre:String;
    apellido:String;
    created_at:Date;
    updated_at:Date;
    constructor( ){
        this.id=0;
        this.nombre="";
        this.apellido="";
        this.created_at= new Date;
        this.updated_at= new Date;
    }
    
}

/*
export interface Persona{
    id:number;
    nombre:String;
    apellido:String;
    created_at:Date;
    updated_at:Date;
}

*/
