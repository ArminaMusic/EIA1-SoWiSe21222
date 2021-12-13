/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/

namespace Golden {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        random(_minLength: number, _maxLength: number, _minAngle: number = 0, _maxAngle: number = 2 * Math.PI): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = calculateRandom(_minAngle, _maxAngle);

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
}