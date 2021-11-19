/*
Aufgabe: L08.1_GenerativeKunst
Name: Armina Music
Matrikel: 268021
Datum: 18.11.2021
Kommentar: es6 Version
*/

namespace L08_1_GenerativeKunst {
        interface Vector {
            x: number;
            y: number;
        }
        
        window.addEventListener("load", handleLoad);
        let crc2: CanvasRenderingContext2D;
        
        function handleLoad(_event: Event): void {
            let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
            if (!canvas)
            return;
            crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
            
            drawBackground();
            drawCurvis();

        }

        function drawBackground(): void {
            console.log("Background");
        
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "orange");
            gradient.addColorStop(0, "pink");
            gradient.addColorStop(1, "HSL(170, 80%, 30%)");
        
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        function drawCurvis(): void {

            let x: number = 0;
            let y: number = 0;

            crc2.beginPath();
            crc2.moveTo(x, y);

            do {
                x += 50;
                y = Math.sin(10) * Math.random();
                
                crc2.lineTo(x, y);
            } while ( x < crc2.canvas.width);

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 0);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(0.7, "orange");

            crc2.lineTo(x, 0);
            crc2.closePath();

        }



}