/*
Aufgabe: L08.1_GenerativeKunst
Name: Armina Music
Matrikel: 268021
Datum: 19.11.2021
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
            for (let i = 0; i < 7; i++) {
                drawCurve();
            }
            drawParticles({x: 400, y: 1}, {x: 600, y: 800});
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

        function drawCurve(): void {
            let  x: number = 0;
            let  y: number = 0;
            
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

        function drawParticles(_position: Vector, _size: Vector): void {
            console.log("Cloud", _position, _size);
        
            let nParticles: number = 100; 
            let radiusParticles: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSL(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSL(0, 100%, 100%, 0)");
        
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
        
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }



}