var Coche = (function () {
    function Coche() {
    }
    Coche.prototype.Coche = function (nombre, color, velocidad) {
        this.nombre = nombre;
        this.color = color;
        this.velocidad = velocidad;
    };
    Coche.prototype.getNombre = function () {
        return this.nombre;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    return Coche;
}());
//# sourceMappingURL=Coche.js.map