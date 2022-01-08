/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es6 Version
*/
namespace Golden_10_2 {
    export class Leaf extends Moveable {
        
        position: Vector;
        velocity: Vector;
        fillColor: string;
        shape: number;

        constructor(_position: Vector, _fillColor: string, _shape: number) {
            super(_position);
            
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 400);
            this.fillColor = _fillColor;
            this.shape = _shape;
        }

        draw(): void {  

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
    
            // check shape
            switch (this.shape) {
                case 0:
                    this.drawShape0();
                    break;
                case 1:
                    this.drawShape1();
                    break;
                case 2:
                    this.drawShape2();
                    break;
                case 3:
                    this.drawShape3();
                    break;
            
                default:
                    break;
            }
    
            crc2.closePath();
            crc2.fill();
            crc2.restore();            
        }


        drawShape0(): void {
            crc2.bezierCurveTo(1, 1, 10, 30, 30, 20);
        }
        drawShape1(): void {            
            crc2.ellipse(10, 10, 9, 6, -10, 20, 40);
        }
        drawShape2(): void {
            crc2.arc(20, 30, 10, 0, 2 * Math.PI);
        }
        drawShape3(): void {
            crc2.ellipse(10, 10, 9, 6, -10, 20, 40, true);
        }
    }
}