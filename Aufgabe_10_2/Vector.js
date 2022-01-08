/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Golden_10_2.Vector = Vector;
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Vector.js.map