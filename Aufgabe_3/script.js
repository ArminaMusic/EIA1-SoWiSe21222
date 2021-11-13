/*
Aufgabe: L03_Sequenzmemory
Name: Armina Music
Matrikel: 268021
Datum: 13.11.2021
*/
var L03_Sequenzmemory;
(function (L03_Sequenzmemory) {
    let pairAmount;
    let cardSymbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray = [];
    let cardField;
    let cardContainer = [];
    let pairFound = 0;
    let startButton;
    let divMenu;
    let cardValue = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        divMenu = document.querySelector("#menu");
        startButton = document.querySelector("#startButton");
        divMenu.addEventListener("submit", handleChange);
        cardField = document.querySelector("#gameField");
    }
    function handleChange(_event) {
        _event.preventDefault();
        // Fill FormData
        let formData = new FormData(document.forms[0]);
        cardValue = [];
        for (let thisGame of formData) {
            cardValue.push(String(thisGame[1]));
        }
        console.log(cardValue);
        startGame();
    }
    /*-----Start the Game, genertiere das Spielfeld-----*/
    function startGame() {
        divMenu.classList.add("hidden");
        startButton.classList.add("hidden");
        pairAmount = Number(cardValue[0]);
        for (let i = 0; i < 2; i++) {
            for (let x = 0; x < pairAmount; x++) {
                cardArray.push(cardSymbol[x]);
                console.log(cardArray);
            }
        }
        /*-----Karten werden zufällig angeordnet-----*/
        cardArray.sort(() => 0.5 - Math.random());
        cardField.innerHTML = "";
        document.body.style.background = cardValue[2];
        document.body.style.fontFamily = cardValue[5];
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement(thisElement());
            card.style.width = cardValue[1] + "px";
            card.style.height = cardValue[1] + "px";
            card.style.background = cardValue[4];
            card.style.color = cardValue[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            card.addEventListener("click", flipCard);
            let allSpans = document.querySelectorAll("span");
            /*---------Interface NodeListOf<TNode>-------------*/
            /*-------DEF: Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly;
            for example, inheriting the same set of methods, or being tested in the same way.-------*/
            allSpans[index].classList.add("visible");
        }
        /*-----InnerFunction_ThisElement="div"-----*/
        function thisElement() {
            return "div";
        }
    }
    /*-----flipCards sorgt dafür, das die Karten aufgedeckt ("visible") werden-----*/
    function flipCard(_event) {
        let target = _event.target;
        cardContainer.push(target);
        cardContainer[0].style.background = "white";
        cardContainer[0].querySelector("span").classList.remove("visible");
        if (cardContainer.length == 2) {
            cardContainer[1].style.background = "white";
            cardContainer[1].querySelector("span").classList.remove("visible");
            setTimeout(compareCards, 1000);
        }
    }
    /*---------Kartenpaare werden verglichen, winCheck wird ausgeführt---------*/
    function compareCards() {
        var _a, _b;
        let spanValue0 = cardContainer[0].querySelector("span").innerHTML;
        let spanValue1 = cardContainer[1].querySelector("span").innerHTML;
        if (spanValue0 == spanValue1) {
            cardContainer[0].classList.add("visible");
            cardContainer[1].classList.add("visible");
            cardContainer = [];
            pairFound++;
            winCheck();
            /*---------winCheck wird ausgeführt, ist dieser nicht "true", wird -else- ausgeführt---------*/
        }
        else {
            cardContainer[0].style.background = cardValue[4];
            cardContainer[1].style.background = cardValue[4];
            (_a = cardContainer[0].querySelector("span")) === null || _a === void 0 ? void 0 : _a.classList.add("visible");
            (_b = cardContainer[1].querySelector("span")) === null || _b === void 0 ? void 0 : _b.classList.add("visible");
            cardContainer = [];
        }
    }
    /*---------Prüfen ob die paitFound dem pairAmount entsprechen, um das spiel bei erfüllter Bedingung zu beenden---------*/
    function winCheck() {
        if (pairFound == pairAmount) {
            window.alert("Du hast Gewonnen - Reload zum neustarten!");
            location.reload();
        }
    }
})(L03_Sequenzmemory || (L03_Sequenzmemory = {}));
//# sourceMappingURL=script.js.map