/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es6 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    class Leaf extends Golden_10_2.Moveable {
        constructor(_position, _fillColor, _shape) {
            super(_position);
            this.velocity = new Golden_10_2.Vector(0, 0);
            this.velocity.random(100, 400);
            this.fillColor = _fillColor;
            this.shape = _shape;
        }
        draw() {
            Golden_10_2.crc2.save();
            Golden_10_2.crc2.translate(this.position.x, this.position.y);
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
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
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            Golden_10_2.crc2.restore();
        }
        drawShape0() {
            Golden_10_2.crc2.bezierCurveTo(1, 1, 10, 30, 30, 20);
        }
        drawShape1() {
            Golden_10_2.crc2.ellipse(10, 10, 9, 6, -10, 20, 40);
        }
        drawShape2() {
            Golden_10_2.crc2.arc(20, 30, 10, 0, 2 * Math.PI);
        }
        drawShape3() {
            Golden_10_2.crc2.ellipse(10, 10, 9, 6, -10, 20, 40, true);
        }
    }
    Golden_10_2.Leaf = Leaf;
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Leaf.js.map