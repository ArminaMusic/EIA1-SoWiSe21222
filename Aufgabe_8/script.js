/*
Aufgabe: L08.1_GenerativeKunst
Name: Armina Music
Matrikel: 268021
Datum: 18.11.2021
Kommentar: es6 Version
*/
var L08_1_GenerativeKunst;
(function (L08_1_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawCurvis();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(0, "pink");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCurvis() {
        let x = 0;
        let y = 0;
        crc2.beginPath();
        crc2.moveTo(x, y);
        do {
            x += 50;
            y = Math.sin(10) * Math.random();
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        let gradient = crc2.createLinearGradient(0, 0, 0, 0);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.7, "orange");
        crc2.lineTo(x, 0);
        crc2.closePath();
    }
})(L08_1_GenerativeKunst || (L08_1_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map