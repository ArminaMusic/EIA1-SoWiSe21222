/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    class Squirrel {
        constructor(_position, _fillColor) {
            this.position = _position;
            this.fillColor = _fillColor;
        }
        draw() {
            //Body
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -90, this.position.y + 20, 15, 22, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            //Head
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -100, this.position.y + 4, 13, 13, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            //Eye
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -100, this.position.y + -7, 7, 7, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            //Ear
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -100, this.position.y + -7, 7, 7, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            //Arm
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -107, this.position.y + 24, 9, 6, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            //Leg
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -90, this.position.y + 40, 10, 5, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
            //Tail
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.ellipse(this.position.x + -62, this.position.y + 23, 23, 9, -10, 20, 40);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
        }
    }
    Golden_10_2.Squirrel = Squirrel;
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Squirrel.js.map