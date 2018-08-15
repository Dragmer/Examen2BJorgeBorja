export class Paciente {
  constructor(
    public id: number,
    public nombres: string,
    public apellidos: string,
    public fechaNacimiento: string,
    public hijos: number,
    public seguro: boolean
  ) {  }
}
