/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
var Golden;
(function (Golden) {
    class Leaf {
        constructor(_position, _fillColor, _shape) {
            this.position = _position;
            this.velocity = new Golden.Vector(0, 0);
            this.velocity.random(100, 400);
            this.fillColor = _fillColor;
            this.shape = _shape;
        }
        draw() {
            Golden.crc2.save();
            Golden.crc2.translate(this.position.x, this.position.y);
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.fillColor;
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
            Golden.crc2.closePath();
            Golden.crc2.fill();
            Golden.crc2.restore();
        }
        drawShape0() {
            Golden.crc2.bezierCurveTo(1, 1, 10, 30, 30, 20);
        }
        drawShape1() {
            Golden.crc2.ellipse(10, 10, 9, 6, -10, 20, 40);
        }
        drawShape2() {
            Golden.crc2.arc(20, 30, 10, 0, 2 * Math.PI);
        }
        drawShape3() {
            Golden.crc2.ellipse(10, 10, 9, 6, -10, 20, 40, true);
        }
        move(_timeslice) {
            let offset = new Golden.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Golden.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Golden.crc2.canvas.height;
            if (this.position.x > Golden.crc2.canvas.width)
                this.position.x -= Golden.crc2.canvas.width;
            if (this.position.y > Golden.crc2.canvas.height)
                this.position.y -= Golden.crc2.canvas.height;
        }
    }
    Golden.Leaf = Leaf;
})(Golden || (Golden = {}));
//# sourceMappingURL=Leaf.js.map