/*
Aufgabe: L08.1_GenerativeKunst
Name: Armina Music
Matrikel: 268021
Datum: 19.11.2021
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
        for (let i = 0; i < 7; i++) {
            drawCurve();
        }
        drawParticles({ x: 600, y: 800 });
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
    function drawCurve() {
        let x = 0;
        let y = 0;
        crc2.save();
        crc2.translate(0, Math.max(70, Math.random() * 500));
        crc2.beginPath();
        crc2.moveTo(0, 0);
        do {
            x += 10;
            y = Math.sin(x) * Math.random() * 100;
            console.log(x, y);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.strokeStyle = "red";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.restore();
    }
    function drawParticles(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 100;
        let radiusParticles = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSL(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSL(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(L08_1_GenerativeKunst || (L08_1_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map