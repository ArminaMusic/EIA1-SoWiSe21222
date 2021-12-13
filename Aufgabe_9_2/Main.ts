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
    let clouds: Array<Cloud> = [];
    let squirrels: Array<Squirrel> = [];
    let trees: Array<Tree> = [];

    function handleLoad(_event: Event): void {

        console.log(Tree, Squirrel);
        
        
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // Clouds
        let cloudCount: number = 4;

        for (let i: number = 0; i < cloudCount; i++) {
            let canvasRandomX: number = Math.random() * crc2.canvas.width;
            let canvasRandomY: number = Math.random() * crc2.canvas.height - 600;

            let newCloud: Cloud = new Cloud(new Vector(canvasRandomX, canvasRandomY), "#f7f7f7");
            
            clouds.push(newCloud);
        }

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

        //Squirrel  
        let squirrelCount: number = 5;
        let squirrelColors: Array<string> = ["#824f2b", "#5e3e14", "#4a300f"];

        for (let i: number = 0; i < squirrelCount; i++) {
            let random: number = Math.floor(Math.random() * 3);
            let canvasRandomX: number = Math.random() * crc2.canvas.width;
            let canvasRandomY: number = Math.random() * crc2.canvas.height + 500;

            let newSquirrel: Squirrel = new Squirrel(new Vector(canvasRandomX, canvasRandomY), squirrelColors[random]);
            
            squirrels.push(newSquirrel);
        }

        //Trees
        console.log(Tree);
        
        let treeCount: number = 10;
        let treeColors: Array<string> = ["#1f361f", "#b32f1b", "#b3511b", "#b3851b", "#3a5e3a"]; 
        let treeTrunkColors: Array<string> = ["#5e4434", "#6b4f3f", "#6e5141"];

        for (let i: number = 0; i < treeCount; i++) {
            let treeRandom: number = Math.floor(Math.random() * 5);
            let treeTrunkRandom: number = Math.floor(Math.random() * 3);
            let canvasRandomX: number = Math.random() * crc2.canvas.width;
            let canvasRandomY: number = Math.random() * crc2.canvas.height + 200;
            let treeShapeRandom: number = Math.floor(Math.random() * 10);

            let newTree: Tree = new Tree(new Vector(canvasRandomX, canvasRandomY), treeColors[treeRandom], treeTrunkColors[treeTrunkRandom], treeShapeRandom);
            
            trees.push(newTree);
        }
    }

    //Sky
    function drawSky(_x: number, _y: number): void {    

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#c98838");
        gradient.addColorStop(1, "#d1b28c");
        gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Sun
    function drawSun(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();
        crc2.fillStyle = _fillColor;

        crc2.arc(550, _y, 200, 0, 5 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }

    //Mountain
    function drawMountain(_x: number, _y: number, _fillColor: string): void {

        crc2.beginPath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 390);
        gradient.addColorStop(0.6, "#f7f7f7");
        gradient.addColorStop(0.9, "#7d857a");
        crc2.fillStyle = gradient;

        //Mountain_1
        crc2.beginPath();
        crc2.moveTo(700, 500);
        crc2.quadraticCurveTo(200, 1, -100, 500);
        crc2.moveTo(0, 0);
        crc2.fill();

        //Mountain_2
        crc2.beginPath();
        crc2.moveTo(1600, 550);
        crc2.quadraticCurveTo(1200, 110, -250, 450);
        crc2.fill();
    }

    //Gras
    function drawGras(_x: number, _y: number): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
        gradient.addColorStop(0.5, "#abb8ad");
        gradient.addColorStop(0.75, "#79917c");

        crc2.beginPath();
        crc2.fillStyle = gradient;

        crc2.moveTo(_x, _y + 360); 
        crc2.lineTo(_x + 1500, _y + 460);
        crc2.lineTo(_x + 1500, _y + 820);
        crc2.lineTo(_x - 3000, _y + 820);

        crc2.closePath();
        crc2.fill();
    }

    //Update
    function update(): void {   

        drawSky(0, 0);
        crc2.restore();
        crc2.save();

        drawGras(400, 0);
        crc2.restore();
        crc2.save();

        drawSun(0, 300, "#f7fae1");
        crc2.restore();
        crc2.save();

        drawMountain(0, 350, "#575554");
        crc2.restore();
        crc2.save();

        // drawSingleTree(100, 200, [new Vector (20, 50), new Vector (50, 21), new Vector (50, 25), new Vector (17, 55)], [60, 35, 50, 50], "#5e4434", "#1f361f");
        // crc2.restore();
        // crc2.save();

        leafs.forEach(leaf => {
            leaf.draw();
            leaf.move(0.02);
        });

        clouds.forEach(cloud => {
            cloud.draw();
        });

        squirrels.forEach(squirrel => {
            squirrel.draw();
        });

        trees.forEach(tree => {
            // tree.draw();
        });
    }   
        
    // update();
    window.setInterval(update, 60);
    } 
