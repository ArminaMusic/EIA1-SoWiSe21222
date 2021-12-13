/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
var Golden;
(function (Golden) {
    window.addEventListener("load", handleLoad);
    let leafs = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Golden.crc2 = canvas.getContext("2d");
        // Leafs
        let leafCount = 30;
        let leafColors = ["#b32f1b", "#b3511b", "#b3851b", "#3a5e3a"];
        for (let i = 0; i < leafCount; i++) {
            let random = Math.floor(Math.random() * 4);
            let canvasRandomX = Math.random() * Golden.crc2.canvas.width;
            let canvasRandomY = Math.random() * Golden.crc2.canvas.height;
            let newLeaf = new Golden.Leaf(new Golden.Vector(canvasRandomX, canvasRandomY), leafColors[random], random);
            leafs.push(newLeaf);
        }
    }
    function drawSky(_x, _y) {
        let gradient = Golden.crc2.createLinearGradient(0, 0, 0, Golden.crc2.canvas.height);
        gradient.addColorStop(0, "#c98838");
        gradient.addColorStop(1, "#d1b28c");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        Golden.crc2.fillStyle = gradient;
        Golden.crc2.fillRect(0, 0, Golden.crc2.canvas.width, Golden.crc2.canvas.height);
    }
    function drawSun(_x, _y, _fillColor) {
        Golden.crc2.beginPath();
        Golden.crc2.fillStyle = _fillColor;
        Golden.crc2.arc(550, _y, 200, 0, 5 * Math.PI);
        Golden.crc2.fill();
        Golden.crc2.closePath();
    }
    function drawMountain(_x, _y, _fillColor) {
        Golden.crc2.beginPath();
        let gradient = Golden.crc2.createLinearGradient(0, 0, 0, 390);
        gradient.addColorStop(0.5, "#f7f7f7");
        gradient.addColorStop(0.8, "#7d857a");
        Golden.crc2.fillStyle = gradient;
        //Mountain_1
        Golden.crc2.beginPath();
        Golden.crc2.moveTo(900, 700);
        Golden.crc2.quadraticCurveTo(100, 5, -250, 300);
        Golden.crc2.moveTo(600, 55);
        Golden.crc2.fill();
        //Mountain_2
        Golden.crc2.beginPath();
        Golden.crc2.moveTo(1500, 500);
        Golden.crc2.quadraticCurveTo(550, 40, -250, 600);
        Golden.crc2.fill();
    }
    function drawGras(_x, _y) {
        let gradient = Golden.crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#abb8ad");
        gradient.addColorStop(0.6, "#79917c");
        Golden.crc2.beginPath();
        Golden.crc2.fillStyle = gradient;
        Golden.crc2.moveTo(_x, _y + 360);
        Golden.crc2.lineTo(_x + 1500, _y + 460);
        Golden.crc2.lineTo(_x + 1500, _y + 820);
        Golden.crc2.lineTo(_x - 3000, _y + 820);
        Golden.crc2.closePath();
        Golden.crc2.fill();
    }
    function drawSingleTree(_x, _y, treePositions, treeRadius, trunkColor, treeColor) {
        Golden.crc2.save();
        Golden.crc2.translate(_x, _y);
        //TreeTrunk
        Golden.crc2.beginPath();
        Golden.crc2.fillStyle = trunkColor;
        Golden.crc2.fillRect(0, 25, 25, 110);
        Golden.crc2.closePath();
        //Tree
        Golden.crc2.fillStyle = treeColor;
        treeRadius.forEach((radius, index) => {
            Golden.crc2.beginPath();
            Golden.crc2.arc(treePositions[index].x, treePositions[index].y, radius, 0, 2 * Math.PI);
            Golden.crc2.closePath();
            Golden.crc2.fill();
        });
        Golden.crc2.restore();
    }
    function update() {
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Golden.crc2.save();
        drawSky(0, 0);
        Golden.crc2.restore();
        Golden.crc2.save();
        drawGras(0, 0);
        Golden.crc2.restore();
        Golden.crc2.save();
        // Cloud.(0, 0, "White");
        // crc2.restore();
        // crc2.save();
        drawSun(180, 100, "#f7fae1");
        Golden.crc2.restore();
        Golden.crc2.save();
        drawMountain(0, 350, "#575554");
        Golden.crc2.restore();
        Golden.crc2.save();
        drawSingleTree(100, 200, [new Golden.Vector(20, 50), new Golden.Vector(50, 21), new Golden.Vector(50, 25), new Golden.Vector(17, 55)], [60, 35, 50, 50], "#5e4434", "#1f361f");
        Golden.crc2.restore();
        Golden.crc2.save();
        leafs.forEach(leaf => {
            leaf.draw();
            leaf.move(0.02);
        });
    }
    // update();
    window.setInterval(update, 60);
})(Golden || (Golden = {}));
//# sourceMappingURL=Main.js.map