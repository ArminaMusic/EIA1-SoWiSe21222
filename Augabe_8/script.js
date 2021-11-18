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
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x, : ., 500: , y: 125 }, { x: 250, y: 75 });
        drawMountens({});
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
    }
    function drawMountens(_position, size) {
        console.log("Mountens");
    }
})(L08_1_GenerativeKunst || (L08_1_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map