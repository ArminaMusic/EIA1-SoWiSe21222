/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
var Golden;
(function (Golden) {
    class Squirrel {
        constructor(_position, _fillColor) {
            this.position = _position;
            this.fillColor = _fillColor;
        }
        draw() {
            //Body
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -90, this.position.y + 20, 15, 22, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
            //Head
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -100, this.position.y + 4, 13, 13, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
            //Eye
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -100, this.position.y + -7, 7, 7, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
            //Ear
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -100, this.position.y + -7, 7, 7, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
            //Arm
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -107, this.position.y + 24, 9, 6, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
            //Leg
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -90, this.position.y + 40, 10, 5, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
            //Tail
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.ellipse(this.position.x + -62, this.position.y + 23, 23, 9, -10, 20, 40);
            Golden.crc2.closePath();
            Golden.crc2.fill();
        }
    }
    Golden.Squirrel = Squirrel;
})(Golden || (Golden = {}));
//# sourceMappingURL=Squirrel.js.map