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

        set(_x: number, _y: number): void  {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
        
        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        
        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        
        copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
    
    }