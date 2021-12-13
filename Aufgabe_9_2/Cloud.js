/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
var Golden;
(function (Golden) {
    class Cloud {
        constructor(_position, _fillColor) {
            this.position = _position;
            this.fillColor = _fillColor;
        }
        draw() {
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
            Golden.crc2.arc(this.position.x + 20, this.position.y + 40, 20, 0, 2 * Math.PI);
            Golden.crc2.arc(this.position.x + 45, this.position.y + 25, 35, 0, 2 * Math.PI);
            Golden.crc2.arc(this.position.x + 87, this.position.y + 20, 40, 0, 2 * Math.PI);
            Golden.crc2.arc(this.position.x + 123, this.position.y + 20, 20, 0, 2 * Math.PI);
            Golden.crc2.closePath();
            Golden.crc2.fill();
        }
    }
    Golden.Cloud = Cloud;
})(Golden || (Golden = {}));
//# sourceMappingURL=Cloud.js.map