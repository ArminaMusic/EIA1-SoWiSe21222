/*
Aufgabe: L09.2_GoldenerHerbstClasses
Name: Armina Music
Matrikel: 268021
Datum: 13.12.2021
Kommentar: es6 Version
*/
namespace Golden {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let leafs: Array<Leaf> = [];

    function handleLoad(_event: Event): void {
        
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // Leafs
        let leafCount: number = 30;
        let leafColors: Array<string> = ["#b32f1b", "#b3511b", "#b3851b", "#3a5e3a"];

        for (let i: number = 0; i < leafCount; i++) {
            let random: number = Math.floor(Math.random() * 4);
            let canvasRandomX: number = Math.random() * crc2.canvas.width;
            let canvasRandomY: number = Math.random() * crc2.canvas.height;

            let newLeaf: Leaf = new Leaf(new Vector(canvasRandomX, canvasRandomY), leafColors[random], random);
            
            leafs.push(newLeaf);
        }
    }

    function drawSky(_x: number, _y: number): void {    

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#c98838");
        gradient.addColorStop(1, "#d1b28c");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(550, _y, 200, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    function drawMountain(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 390);
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

    function drawGras(_x: number, _y: number): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#abb8ad");
        gradient.addColorStop(0.6, "#79917c");

        crc2.beginPath();
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y + 360); 
        crc2.lineTo(_x + 1500, _y + 460);
        crc2.lineTo(_x + 1500, _y + 820);
        crc2.lineTo(_x - 3000, _y + 820);

        crc2.closePath();
        crc2.fill();
    }

    function drawSingleTree(_x: number, _y: number, treePositions: Array<Vector>, treeRadius: Array<number>, trunkColor: string, treeColor: string): void {
        
        crc2.save();
        crc2.translate(_x, _y);

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

    function update(): void {   
        
        // crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.save();

        drawSky(0, 0);
        crc2.restore();
        crc2.save();

        drawGras(0, 0);
        crc2.restore();
        crc2.save();

        // Cloud.(0, 0, "White");
        // crc2.restore();
        // crc2.save();

        drawSun(180, 100, "#f7fae1");
        crc2.restore();
        crc2.save();

        drawMountain(0, 350, "#575554");
        crc2.restore();
        crc2.save();

        drawSingleTree(100, 200, [new Vector (20, 50), new Vector (50, 21), new Vector (50, 25), new Vector (17, 55)], [60, 35, 50, 50], "#5e4434", "#1f361f");
        crc2.restore();
        crc2.save();

        leafs.forEach(leaf => {
            leaf.draw();
            leaf.move(0.02);
        });
    }   
        
    // update();
    window.setInterval(update, 60);
    } 
