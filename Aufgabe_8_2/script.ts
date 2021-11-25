/*
Aufgabe: L08.2_GoldenerHerbst
Name: Armina Music
Matrikel: 268021
Datum: 23.11.2021
Kommentar: es6 Version
*/

namespace L08_2_GoldenerHerbst {
    interface Vector {
        x: number;
        y: number;
    }

    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
        
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
            
        drawSky();
        drawSun({x: 300, y: 350}, "#e8d19e");
        drawMountain("#b3b3b3");
        drawMeadow({x: 0, y: 0});
        drawCloud({x: 45, y: 125}, "#dae6e1");
        drawCloud({x: 680, y: 230}, "#dae6e1");
        drawCloud({x: 530, y: 97}, "#dae6e1");
        drawCloud({x: 250, y: 30}, "#dae6e1");
        drawSingleTree(
            {x: 100, y: 300},
            [{x: 20, y: 50}, {x: 50, y: 21}, {x: 50, y: 25}, {x: 17, y: 55}],
            [60, 35, 50, 50],
            "#5e4434",
            "#1f361f"
        );
        drawSingleTree(
            {x: -50, y: 150},
            [{x: 16, y: 30}, {x: 32, y: 13}, {x: 37, y: 10}, {x: 22, y: 30}],
            [60, 35, 50, 50],
            "#6b4f3f",
            "#3a5e3a"
        );
        drawSingleTree(
            {x: 150, y: 20},
            [{x: 13, y: 20}, {x: 24, y: 10}, {x: 42, y: 35}, {x: 25, y: 43}],
            [60, 35, 50, 50],
            "#5e4434",
            "#b32f1b"
        );
        drawSingleTree(
            {x: 300, y: -40},
            [{x: 10, y: 30}, {x: 35, y: -20}, {x: 50, y: 25}, {x: 40, y: 10}],
            [60, 35, 50, 50],
            "#6e5141",
            "#3a5e3a"
        );
        drawSingleTree(
            {x: 160, y: -70},
            [{x: 10, y: 30}, {x: 35, y: -20}, {x: 50, y: 25}, {x: 40, y: 10}],
            [60, 35, 50, 50],
            "#6e5141",
            "#b3511b"
        );   
        drawSingleTree(
            {x: 60, y: 110},
            [{x: 15, y: -2}, {x: 37, y: 35}, {x: 20, y: 55}, {x: 20, y: 40}],
            [60, 35, 50, 50],
            "#6b4f3f",
            "#b3851b"
        );
        drawSquirrel();
        drawLeafRed();
        drawLeafOrange();
        drawLeafYellow();
        }

    function drawSky(): void {
                
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#c98838");
        gradient.addColorStop(1, "#d1b28c");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(450, _position.y, 130, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawMountain(_fillColor: string): void {

        crc2.beginPath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 390);
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

    function drawMeadow(_position: Vector): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
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

    function drawSingleTree(_position: Vector, treePositions: Array<Vector>, treeRadius: Array<number>, trunkColor: string, treeColor: string): void {
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

    function drawCloud(_position: Vector, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(_position.x + 20, _position.y + 30, 20, 0, 2 * Math.PI);
        crc2.arc(_position.x + 45, _position.y + 25, 30, 0, 2 * Math.PI);
        crc2.arc(_position.x + 87, _position.y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_position.x + 123, _position.y + 20, 20, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
    }

    function drawSquirrel(): void {
    
    }

    function drawLeafRed(): void {
    
    }

    function drawLeafOrange(): void {
    
    }

    function drawLeafYellow(): void {
    
    }

}




