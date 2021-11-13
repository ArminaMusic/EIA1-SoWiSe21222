/*
Aufgabe: L02.1_EventInspector
Name: Armina Music
Matrikel: 268021
Datum: 11.11.2021
*/
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    const button = document.getElementById("btn");
    if (button) {
        button.addEventListener("click", handleButtonClick);
    }
    document.addEventListener("customEvent", (event) => {
        console.log("Custom Event wurde ausgeführt", event);
    });
}
function handleButtonClick() {
    let event = new Event("customEvent");
    document.dispatchEvent(event);
}
function setInfoBox(_event) {
    let x = _event.pageX;
    let y = _event.pageY;
    let coordinates = `X:  ${x}  Y:  ${y}`;
    let span = document.querySelector("span");
    let target = _event.target;
    span.style.top = `${y + 5} px`;
    span.style.left = `${x + 5} px`;
    span.innerHTML = `${coordinates} <br/> ${target} <br/> ${target.id}`;
}
function logInfo(_event) {
    console.log("The type is: ", _event.type);
    console.log("The target is: ", _event.target);
    console.log("The current target is :", _event.currentTarget);
    console.log(_event);
}
//# sourceMappingURL=script.js.map