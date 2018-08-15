export class Medicamento {
  constructor(
    public id: number,
    public nombre: string,
    public composicion: string,
    public usadoPara: string,
    public gramosIngerir: number,
    public numeroPastillas: number,
    public fechaCaducidad: string,
  ) {  }
}
