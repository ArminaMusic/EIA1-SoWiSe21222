/*
Aufgabe: L08.2_GoldenerHerbst
Name: Armina Music
Matrikel: 268021
Datum: 27.11.2021
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
        drawSun({ x: 800, y: 350 }, "#e8d19e");
        drawMountain("#b3b3b3");
        drawGras({ x: 0, y: 0 });
        drawCloud({ x: 100, y: 125 }, "#dae6e1");
        drawCloud({ x: 1230, y: 230 }, "#dae6e1");
        drawCloud({ x: 900, y: 97 }, "#dae6e1");
        drawCloud({ x: 500, y: 30 }, "#dae6e1");
        drawSingleTree({ x: 120, y: 300 }, [{ x: 20, y: 50 }, { x: 50, y: 21 }, { x: 50, y: 25 }, { x: 17, y: 55 }], [60, 35, 50, 50], "#5e4434", "#1f361f");
        drawSingleTree({ x: 80, y: 575 }, [{ x: 15, y: -2 }, { x: 37, y: 35 }, { x: 20, y: 55 }, { x: 20, y: 40 }], [60, 35, 50, 50], "#6b4f3f", "#b3851b");
        drawSingleTree({ x: 240, y: 450 }, [{ x: 13, y: 20 }, { x: 24, y: 10 }, { x: 42, y: 35 }, { x: 25, y: 43 }], [60, 35, 50, 50], "#5e4434", "#b32f1b");
        drawSingleTree({ x: 300, y: 600 }, [{ x: 16, y: 30 }, { x: 32, y: 13 }, { x: 37, y: 10 }, { x: 22, y: 30 }], [60, 35, 50, 50], "#6b4f3f", "#3a5e3a");
        drawSingleTree({ x: 720, y: 390 }, [{ x: 13, y: 20 }, { x: 24, y: 10 }, { x: 42, y: 35 }, { x: 25, y: 43 }], [60, 35, 50, 50], "#5e4434", "#b32f1b");
        drawSingleTree({ x: 700, y: 590 }, [{ x: 10, y: 30 }, { x: 35, y: -20 }, { x: 50, y: 25 }, { x: 40, y: 10 }], [60, 35, 50, 50], "#6e5141", "#3a5e3a");
        drawSingleTree({ x: 1000, y: 520 }, [{ x: 10, y: 30 }, { x: 35, y: -20 }, { x: 50, y: 25 }, { x: 40, y: 10 }], [60, 35, 50, 50], "#6e5141", "#b3511b");
        drawSingleTree({ x: 940, y: 310 }, [{ x: 15, y: -2 }, { x: 37, y: 35 }, { x: 20, y: 55 }, { x: 20, y: 40 }], [60, 35, 50, 50], "#6b4f3f", "#b3851b");
        drawSingleTree({ x: 1220, y: 600 }, [{ x: 13, y: 20 }, { x: 24, y: 10 }, { x: 42, y: 35 }, { x: 25, y: 43 }], [60, 35, 50, 50], "#5e4434", "#b32f1b");
        drawSingleTree({ x: 1270, y: 390 }, [{ x: 10, y: 30 }, { x: 35, y: -20 }, { x: 50, y: 25 }, { x: 40, y: 10 }], [60, 35, 50, 50], "#6e5141", "#3a5e3a");
        drawSquirrel({ x: 550, y: 550 }, "#824f2b");
        drawSquirrel({ x: 220, y: 465 }, "#5e3e14");
        drawSquirrel({ x: 920, y: 500 }, "#4a300f");
        drawLeafRed({ x: 40, y: 350 }, "#b32f1b");
        drawLeafRed({ x: 430, y: 434 }, "#b32f1b");
        drawLeafRed({ x: 580, y: 578 }, "#b32f1b");
        drawLeafRed({ x: 1300, y: 680 }, "#b32f1b");
        drawLeafOrange({ x: 400, y: 650 }, { x: 0, y: 0 }, "#b3511b");
        drawLeafOrange({ x: 640, y: 550 }, { x: 0, y: 0 }, "#b3511b");
        drawLeafOrange({ x: 1000, y: 450 }, { x: 0, y: 0 }, "#b3511b");
        drawLeafYellow({ x: 180, y: 650 }, { x: 0, y: 0 }, "#b3851b");
        drawLeafYellow({ x: 600, y: 350 }, { x: 0, y: 0 }, "#b3851b");
        drawLeafYellow({ x: 1230, y: 450 }, { x: 0, y: 0 }, "#b3851b");
        drawLeafGreen({ x: 15, y: 550 }, { x: 0, y: 0 }, "#3a5e3a");
        drawLeafGreen({ x: 300, y: 650 }, { x: 0, y: 0 }, "#3a5e3a");
        drawLeafGreen({ x: 900, y: 510 }, { x: 0, y: 0 }, "#3a5e3a");
        drawLeafGreen({ x: 1100, y: 610 }, { x: 0, y: 0 }, "#3a5e3a");
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
        crc2.arc(550, _position.y, 200, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawMountain(_fillColor) {
        crc2.beginPath();
        let gradient = crc2.createLinearGradient(0, 0, 0, 390);
        gradient.addColorStop(0.5, "#f7f7f7");
        gradient.addColorStop(0.8, "#7d857a");
        crc2.fillStyle = gradient;
        //Mountain_1
        crc2.beginPath();
        crc2.moveTo(900, 700);
        crc2.quadraticCurveTo(100, 5, -250, 300);
        crc2.moveTo(600, 55);
        crc2.fill();
        //Mountain_2
        crc2.beginPath();
        crc2.moveTo(1500, 500);
        crc2.quadraticCurveTo(550, 40, -250, 600);
        crc2.fill();
    }
    function drawGras(_position) {
        let gradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#abb8ad");
        gradient.addColorStop(0.6, "#79917c");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.moveTo(_position.x, _position.y + 360);
        crc2.lineTo(_position.x + 1500, _position.y + 460);
        crc2.lineTo(_position.x + 1500, _position.y + 820);
        crc2.lineTo(_position.x - 3000, _position.y + 820);
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
    function drawSingleTree(_position, treePositions, treeRadius, trunkColor, treeColor) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        //TreeTrunk
        crc2.beginPath();
        crc2.fillStyle = trunkColor;
        crc2.fillRect(0, 25, 25, 110);
        crc2.closePath();
        //Tree
        crc2.fillStyle = treeColor;
        treeRadius.forEach((radius, index) => {
            crc2.beginPath();
            crc2.arc(treePositions[index].x, treePositions[index].y, radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        });
        crc2.restore();
    }
    function drawSquirrel(_position, _fillColor) {
        //Body
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -90, _position.y + 20, 15, 22, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Head
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -100, _position.y + 4, 13, 13, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Eye
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -100, _position.y + -7, 7, 7, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Ear
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -100, _position.y + -7, 7, 7, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Arm
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -107, _position.y + 24, 9, 6, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Leg
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -90, _position.y + 40, 10, 5, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
        //Tail
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + -62, _position.y + 23, 23, 9, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
    }
    function drawLeafRed(_position, _fillColor) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.bezierCurveTo(1, 1, 10, 30, 30, 20);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function drawLeafOrange(_position, _size, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + 10, _position.y + 10, 9, 6, -10, 20, 40);
        crc2.closePath();
        crc2.fill();
    }
    function drawLeafYellow(_position, _size, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_position.x + 20, _position.y + 30, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawLeafGreen(_position, _size, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.ellipse(_position.x + 10, _position.y + 10, 9, 6, -10, 20, 40, true);
        crc2.closePath();
        crc2.fill();
    }
})(L08_2_GoldenerHerbst || (L08_2_GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map