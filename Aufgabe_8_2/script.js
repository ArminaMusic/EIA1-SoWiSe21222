/*
Aufgabe: L08.2_GoldenerHerbst
Name: Armina Music
Matrikel: 268021
Datum: 23.11.2021
Kommentar: es6 Version
*/
var L08_2_GoldenerHerbst;
(function (L08_2_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun({ x: 300, y: 350 }, "#e8d19e");
        drawMountain("#b3b3b3");
        drawMeadow({ x: 0, y: 0 });
        drawCloud({ x: 45, y: 125 }, "#dae6e1");
        drawCloud({ x: 680, y: 230 }, "#dae6e1");
        drawCloud({ x: 530, y: 97 }, "#dae6e1");
        drawCloud({ x: 250, y: 30 }, "#dae6e1");
        drawTree({ x: 750, y: 300 });
        drawSquirrel();
        drawLeafRed();
        drawLeafOrange();
        drawLeafYellow();
    }
    function drawSky() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#c98838");
        gradient.addColorStop(1, "#d1b28c");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(450, _position.y, 130, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawMountain(_fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        let gradient = crc2.createLinearGradient(0, 0, 0, 390);
        gradient.addColorStop(0.5, "#f7f7f7");
        gradient.addColorStop(0.8, "#7d857a");
        crc2.fillStyle = gradient;
        //Mountain_1
        crc2.beginPath();
        crc2.moveTo(600, 600);
        crc2.quadraticCurveTo(100, 5, -250, 300);
        crc2.moveTo(600, 55);
        crc2.fill();
        //Mountain_2
        crc2.beginPath();
        crc2.moveTo(1000, 500);
        crc2.quadraticCurveTo(850, 40, -250, 600);
        crc2.fill();
    }
    function drawMeadow(_position) {
        let gradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#abb8ad");
        gradient.addColorStop(0.6, "#79917c");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.moveTo(_position.x, _position.y + 360);
        crc2.lineTo(_position.x + 1300, _position.y + 460);
        crc2.lineTo(_position.x + 1300, _position.y + 620);
        crc2.lineTo(_position.x - 3000, _position.y + 620);
        crc2.closePath();
        crc2.fill();
    }
    function drawTree(_position) {
        //TreeTrunk_1
        crc2.beginPath();
        crc2.fillStyle = "#5e4434";
        crc2.fillRect(290, 325, 25, 110);
        //Tree_1
        crc2.beginPath();
        crc2.fillStyle = "#1f361f";
        crc2.arc(320, 310, 60, 0, 2 * Math.PI);
        crc2.arc(290, 315, 35, 0, 2 * Math.PI);
        crc2.arc(270, 300, 50, 0, 2 * Math.PI);
        crc2.arc(310, 250, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //TreeTrunk_2
        crc2.beginPath();
        crc2.fillStyle = "#6b4f3f";
        crc2.fillRect(700, 405, 25, 110);
        //Tree_2
        crc2.beginPath();
        crc2.fillStyle = "#3a5e3a";
        crc2.arc(680, 355, 60, 0, 2 * Math.PI);
        crc2.arc(740, 375, 55, 0, 2 * Math.PI);
        crc2.arc(690, 415, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //TreeTrunk_3
        crc2.beginPath();
        crc2.fillStyle = "#6e5141";
        crc2.fillRect(130, 425, 25, 110);
        //Tree_3
        crc2.beginPath();
        crc2.fillStyle = "#3a5e3a";
        crc2.arc(120, 410, 60, 0, 2 * Math.PI);
        crc2.arc(190, 415, 35, 0, 2 * Math.PI);
        crc2.arc(170, 400, 50, 0, 2 * Math.PI);
        crc2.arc(110, 350, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawCloud(_position, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_position.x + 20, _position.y + 30, 20, 0, 2 * Math.PI);
        crc2.arc(_position.x + 45, _position.y + 25, 30, 0, 2 * Math.PI);
        crc2.arc(_position.x + 87, _position.y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_position.x + 123, _position.y + 20, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawSquirrel() {
    }
    function drawLeafRed() {
    }
    function drawLeafOrange() {
    }
    function drawLeafYellow() {
    }
})(L08_2_GoldenerHerbst || (L08_2_GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map