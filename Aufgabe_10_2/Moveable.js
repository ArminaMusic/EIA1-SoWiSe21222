/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    class Moveable {
        constructor(_position) {
            //position
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Golden_10_2.Vector(0, 0);
            this.velocity = new Golden_10_2.Vector(0, 0); //Geschwindigkeit
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Golden_10_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Golden_10_2.crc2.canvas.height;
            if (this.position.x > Golden_10_2.crc2.canvas.width)
                this.position.x -= Golden_10_2.crc2.canvas.width;
            if (this.position.y > Golden_10_2.crc2.canvas.height)
                this.position.y -= Golden_10_2.crc2.canvas.height;
        }
        draw() {
            console.log("Moveable move");
        }
    }
    Golden_10_2.Moveable = Moveable;
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Moveable.js.map