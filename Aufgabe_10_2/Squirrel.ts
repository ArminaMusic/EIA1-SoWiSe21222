/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
namespace Golden {

    export class Squirrel {

        position: Vector;
        fillColor: string;

        constructor(_position: Vector, _fillColor: string) {
            
            this.position = _position;
            this.fillColor = _fillColor;
        }

        draw(): void {  

            //Body
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -90, this.position.y + 20, 15, 22, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Head
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -100, this.position.y + 4, 13, 13, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Eye
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -100, this.position.y + -7, 7, 7, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Ear
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -100, this.position.y + -7, 7, 7, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Arm
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -107, this.position.y + 24, 9, 6, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Leg
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -90, this.position.y + 40, 10, 5, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Tail
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.ellipse(this.position.x + -62, this.position.y + 23, 23, 9, -10, 20, 40);
            crc2.closePath();
            crc2.fill();
        }
    }
}