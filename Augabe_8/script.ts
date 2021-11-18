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
let golden: number = 0.62;

function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
    return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    drawBackground();
    drawSun({x: 100, y: 75});
    drawCloud({x. 500, y: 125},{x: 250, y: 75});
    drawMountens({});
}

function drawBackground(): void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "lightblue");
    gradient.addColorStop(golden, "white");
    gradient.addColorStop(1, "green");

    crc2.fillStyle = gradient;
    crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);

}

function drawSun(_position: Vector): void {
    console.log("Sun", _position);
}

function drawMountens(_position: Vector, size: Vector): void {
    console.log("Mountens");
}
}

