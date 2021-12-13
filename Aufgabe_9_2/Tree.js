/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
var Golden;
(function (Golden) {
    class Tree {
        constructor(_position, _treeFillColor, _trunkFillColor, _shape) {
            this.position = _position;
            this.treePositions =
                [
                    [new Golden.Vector(20, 50), new Golden.Vector(50, 21), new Golden.Vector(50, 25), new Golden.Vector(17, 55)],
                    [new Golden.Vector(15, -2), new Golden.Vector(37, 35), new Golden.Vector(20, 55), new Golden.Vector(20, 40)],
                    [new Golden.Vector(13, 20), new Golden.Vector(24, 10), new Golden.Vector(42, 35), new Golden.Vector(25, 43)],
                    [new Golden.Vector(16, 30), new Golden.Vector(32, 13), new Golden.Vector(37, 10), new Golden.Vector(22, 30)],
                    [new Golden.Vector(13, 20), new Golden.Vector(24, 10), new Golden.Vector(42, 35), new Golden.Vector(25, 43)],
                    [new Golden.Vector(10, 30), new Golden.Vector(35, -20), new Golden.Vector(50, 25), new Golden.Vector(40, 10)],
                    [new Golden.Vector(10, 30), new Golden.Vector(35, -20), new Golden.Vector(50, 25), new Golden.Vector(40, 10)],
                    [new Golden.Vector(15, -2), new Golden.Vector(37, 35), new Golden.Vector(20, 55), new Golden.Vector(20, 40)],
                    [new Golden.Vector(13, 20), new Golden.Vector(24, 10), new Golden.Vector(42, 35), new Golden.Vector(25, 43)],
                    [new Golden.Vector(10, 30), new Golden.Vector(35, -20), new Golden.Vector(50, 25), new Golden.Vector(40, 10)]
                ];
            this.treeRadius = [60, 35, 50, 50];
            this.treeColor = _treeFillColor;
            this.trunkColor = _trunkFillColor;
            this.shape = _shape;
            console.log(_position);
        }
        draw() {
            Golden.crc2.save();
            Golden.crc2.translate(this.position.x, this.position.y);
            //TreeTrunk
            Golden.crc2.beginPath();
            Golden.crc2.fillStyle = this.trunkColor;
            Golden.crc2.fillRect(0, 25, 25, 110);
            Golden.crc2.closePath();
            //Tree
            Golden.crc2.fillStyle = this.treeColor;
            this.treeRadius.forEach((radius, index) => {
                Golden.crc2.beginPath();
                Golden.crc2.arc(this.treePositions[this.shape][index].x, this.treePositions[this.shape][index].y, radius, 0, 2 * Math.PI);
                Golden.crc2.closePath();
                Golden.crc2.fill();
            });
            Golden.crc2.restore();
        }
    }
    Golden.Tree = Tree;
})(Golden || (Golden = {}));
//# sourceMappingURL=Tree.js.map