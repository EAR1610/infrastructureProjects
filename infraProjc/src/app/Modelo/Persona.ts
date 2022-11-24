/*export class Persona{
    constructor(
        public id: number,
        public nombre: String,
        public apellido: String,
    ){}
    
}*/
export interface Persona{
    id:number;
    nombre:String;
    apellido:String;
    created_at:Date;
    updated_at:Date;
}