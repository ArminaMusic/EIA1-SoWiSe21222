/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/

namespace Golden_10_2 {

    export class Moveable {

        position: Vector;
        velocity: Vector;

        constructor( _position: Vector) { 
            //position
            if (_position)
                this.position = _position.copy(); 
            else
                this.position = new Vector(0, 0); 

            this.velocity = new Vector(0, 0); //Geschwindigkeit
        }

        move(_timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            console.log("Moveable move");
        }
    }
}