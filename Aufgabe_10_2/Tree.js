/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    class Tree {
        constructor(_position, _treeFillColor, _trunkFillColor, _shape) {
            this.position = _position;
            this.treePositions =
                [
                    [new Golden_10_2.Vector(20, 50), new Golden_10_2.Vector(50, 21), new Golden_10_2.Vector(50, 25), new Golden_10_2.Vector(17, 55)],
                    [new Golden_10_2.Vector(15, -2), new Golden_10_2.Vector(37, 35), new Golden_10_2.Vector(20, 55), new Golden_10_2.Vector(20, 40)],
                    [new Golden_10_2.Vector(13, 20), new Golden_10_2.Vector(24, 10), new Golden_10_2.Vector(42, 35), new Golden_10_2.Vector(25, 43)],
                    [new Golden_10_2.Vector(16, 30), new Golden_10_2.Vector(32, 13), new Golden_10_2.Vector(37, 10), new Golden_10_2.Vector(22, 30)],
                    [new Golden_10_2.Vector(13, 20), new Golden_10_2.Vector(24, 10), new Golden_10_2.Vector(42, 35), new Golden_10_2.Vector(25, 43)],
                    [new Golden_10_2.Vector(10, 30), new Golden_10_2.Vector(35, -20), new Golden_10_2.Vector(50, 25), new Golden_10_2.Vector(40, 10)],
                    [new Golden_10_2.Vector(10, 30), new Golden_10_2.Vector(35, -20), new Golden_10_2.Vector(50, 25), new Golden_10_2.Vector(40, 10)],
                    [new Golden_10_2.Vector(15, -2), new Golden_10_2.Vector(37, 35), new Golden_10_2.Vector(20, 55), new Golden_10_2.Vector(20, 40)],
                    [new Golden_10_2.Vector(13, 20), new Golden_10_2.Vector(24, 10), new Golden_10_2.Vector(42, 35), new Golden_10_2.Vector(25, 43)],
                    [new Golden_10_2.Vector(10, 30), new Golden_10_2.Vector(35, -20), new Golden_10_2.Vector(50, 25), new Golden_10_2.Vector(40, 10)]
                ];
            this.treeRadius = [60, 35, 50, 50];
            this.treeColor = _treeFillColor;
            this.trunkColor = _trunkFillColor;
            this.shape = _shape;
            console.log(_position);
        }
        draw() {
            Golden_10_2.crc2.save();
            Golden_10_2.crc2.translate(this.position.x, this.position.y);
            //TreeTrunk
            Golden_10_2.crc2.beginPath();
            Golden_10_2.crc2.fillStyle = this.trunkColor;
            Golden_10_2.crc2.fillRect(0, 25, 25, 110);
            Golden_10_2.crc2.closePath();
            //Tree
            Golden_10_2.crc2.fillStyle = this.treeColor;
            this.treeRadius.forEach((radius, index) => {
                Golden_10_2.crc2.beginPath();
                Golden_10_2.crc2.arc(this.treePositions[this.shape][index].x, this.treePositions[this.shape][index].y, radius, 0, 2 * Math.PI);
                Golden_10_2.crc2.closePath();
                Golden_10_2.crc2.fill();
            });
            Golden_10_2.crc2.restore();
        }
    }
    Golden_10_2.Tree = Tree;
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Tree.js.map