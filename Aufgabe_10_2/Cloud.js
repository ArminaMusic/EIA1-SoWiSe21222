/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    class Cloud extends Golden_10_2.Moveable {
        constructor(_position, _fillColor) {
            super(_position);
            this.position = _position;
            this.fillColor = _fillColor;
            this.velocity = new Golden_10_2.Vector(150, 0);
        }
        draw() {
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.fillColor;
            Golden_10_2.crc2.arc(this.position.x + 20, (this.position.y + 40), 20, 0, 2 * Math.PI);
            Golden_10_2.crc2.arc(this.position.x + 45, (this.position.y + 25), 35, 0, 2 * Math.PI);
            Golden_10_2.crc2.arc(this.position.x + 87, (this.position.y + 20), 40, 0, 2 * Math.PI);
            Golden_10_2.crc2.arc(this.position.x + 123, (this.position.y + 20), 20, 0, 2 * Math.PI);
            Golden_10_2.crc2.closePath();
            Golden_10_2.crc2.fill();
        }
    }
    Golden_10_2.Cloud = Cloud;
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Cloud.js.map