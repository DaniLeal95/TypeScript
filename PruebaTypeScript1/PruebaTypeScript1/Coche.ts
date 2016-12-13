export class Coche {
    private nombre: string;
    private color: string;
    private velocidad: number;

    public Coche(nombre: string, color: string, velocidad: number) {
        this.nombre = nombre;
        this.color = color;
        this.velocidad = velocidad;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public getColor(): string {
        return this.color;
    }
    public getVelocidad(): number {
        return this.velocidad;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public setVelocidad(velocidad: number): void {
        this.velocidad = velocidad;
    }

}