/*
Aufgabe: L10.2_GoldenerHerbstPolymorphie
Name: Armina Music
Matrikel: 268021
Datum: 08.01.2022
Kommentar: es2017 Version
*/
var Golden_10_2;
(function (Golden_10_2) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let squirrels = [];
    let trees = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Golden_10_2.crc2 = canvas.getContext("2d");
        // Clouds
        let cloudCount = 4;
        for (let i = 0; i < cloudCount; i++) {
            let canvasRandomX = (Math.random() * (Golden_10_2.crc2.canvas.width - 100)) + 100;
            let canvasRandomY = Math.random() * (Golden_10_2.crc2.canvas.height - 600);
            let newCloud = new Golden_10_2.Cloud(new Golden_10_2.Vector(canvasRandomX, canvasRandomY), "#f7f7f7");
            moveables.push(newCloud);
        }
        console.log(moveables);
        // Leafs
        let leafCount = 30;
        let leafColors = ["#b32f1b", "#b3511b", "#b3851b", "#3a5e3a"];
        for (let i = 0; i < leafCount; i++) {
            let random = Math.floor(Math.random() * 4);
            let canvasRandomX = Math.random() * Golden_10_2.crc2.canvas.width;
            let canvasRandomY = Math.random() * Golden_10_2.crc2.canvas.height;
            let newLeaf = new Golden_10_2.Leaf(new Golden_10_2.Vector(canvasRandomX, canvasRandomY), leafColors[random], random);
            moveables.push(newLeaf);
        }
        //Squirrel  
        let squirrelCount = 5;
        let squirrelColors = ["#824f2b", "#5e3e14", "#4a300f"];
        for (let i = 0; i < squirrelCount; i++) {
            let random = Math.floor(Math.random() * 3);
            let canvasRandomX = Math.random() * Golden_10_2.crc2.canvas.width;
            let canvasRandomY = Math.random() * Golden_10_2.crc2.canvas.height + 500;
            let newSquirrel = new Golden_10_2.Squirrel(new Golden_10_2.Vector(canvasRandomX, canvasRandomY), squirrelColors[random]);
            squirrels.push(newSquirrel);
        }
        //Trees        
        let treeCount = 17;
        let treeColors = ["#1f361f", "#b32f1b", "#b3511b", "#b3851b", "#3a5e3a"];
        let treeTrunkColors = ["#5e4434", "#6b4f3f", "#6e5141"];
        for (let i = 0; i < treeCount; i++) {
            let treeRandom = Math.floor(Math.random() * 5);
            let treeTrunkRandom = Math.floor(Math.random() * 3);
            let canvasRandomX = (Math.random() * (Golden_10_2.crc2.canvas.width - 100)) + 100;
            let canvasRandomY = Math.random() * (Golden_10_2.crc2.canvas.height) + 390;
            let treeShapeRandom = Math.floor(Math.random() * 10);
            let newTree = new Golden_10_2.Tree(new Golden_10_2.Vector(canvasRandomX, canvasRandomY), treeColors[treeRandom], treeTrunkColors[treeTrunkRandom], treeShapeRandom);
            trees.push(newTree);
        }
    }
    //Sky
    function drawSky(_x, _y) {
        let gradient = Golden_10_2.crc2.createLinearGradient(0, 0, 0, Golden_10_2.crc2.canvas.height);
        gradient.addColorStop(0, "#c98838");
        gradient.addColorStop(1, "#d1b28c");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        Golden_10_2.crc2.fillStyle = gradient;
        Golden_10_2.crc2.fillRect(0, 0, Golden_10_2.crc2.canvas.width, Golden_10_2.crc2.canvas.height);
    }
    //Sun
    function drawSun(_x, _y, _fillColor) {
        Golden_10_2.crc2.beginPath();
        Golden_10_2.crc2.fillStyle = _fillColor;
        Golden_10_2.crc2.arc(550, _y, 200, 0, 5 * Math.PI);
        Golden_10_2.crc2.fill();
        Golden_10_2.crc2.closePath();
    }
    //Mountain
    function drawMountain(_x, _y, _fillColor) {
        Golden_10_2.crc2.beginPath();
        let gradient = Golden_10_2.crc2.createLinearGradient(0, 0, 0, 390);
        gradient.addColorStop(0.6, "#f7f7f7");
        gradient.addColorStop(0.9, "#7d857a");
        Golden_10_2.crc2.fillStyle = gradient;
        //Mountain_1
        Golden_10_2.crc2.beginPath();
        Golden_10_2.crc2.moveTo(700, 500);
        Golden_10_2.crc2.quadraticCurveTo(200, 1, -100, 500);
        Golden_10_2.crc2.moveTo(0, 0);
        Golden_10_2.crc2.fill();
        //Mountain_2
        Golden_10_2.crc2.beginPath();
        Golden_10_2.crc2.moveTo(1600, 550);
        Golden_10_2.crc2.quadraticCurveTo(1200, 110, -250, 450);
        Golden_10_2.crc2.fill();
    }
    //Gras
    function drawGras(_x, _y) {
        let gradient = Golden_10_2.crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#abb8ad");
        gradient.addColorStop(0.75, "#79917c");
        Golden_10_2.crc2.beginPath();
        Golden_10_2.crc2.fillStyle = gradient;
        Golden_10_2.crc2.moveTo(_x, _y + 360);
        Golden_10_2.crc2.lineTo(_x + 1500, _y + 460);
        Golden_10_2.crc2.lineTo(_x + 1500, _y + 820);
        Golden_10_2.crc2.lineTo(_x - 3000, _y + 820);
        Golden_10_2.crc2.closePath();
        Golden_10_2.crc2.fill();
    }
    //Update
    function update() {
        drawSky(0, 0);
        Golden_10_2.crc2.restore();
        Golden_10_2.crc2.save();
        drawGras(400, 0);
        Golden_10_2.crc2.restore();
        Golden_10_2.crc2.save();
        drawSun(0, 300, "#f7fae1");
        Golden_10_2.crc2.restore();
        Golden_10_2.crc2.save();
        drawMountain(0, 350, "#575554");
        Golden_10_2.crc2.restore();
        Golden_10_2.crc2.save();
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        squirrels.forEach(squirrel => {
            squirrel.draw();
        });
        trees.forEach(tree => {
            tree.draw();
        });
    }
    // update();
    window.setInterval(update, 60);
})(Golden_10_2 || (Golden_10_2 = {}));
//# sourceMappingURL=Main.js.map