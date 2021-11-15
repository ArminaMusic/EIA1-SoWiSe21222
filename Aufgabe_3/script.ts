/*
Aufgabe: L03_Sequenzmemory
Name: Armina Music
Matrikel: 268021
Datum: 15.11.2021
Kommentar: es6 Version
*/
namespace L03_Sequenzmemory {
    let pairAmount: number;
    let cardSymbol: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray: number[] = [];
    let cardField: HTMLElement;
    let cardContainer: HTMLElement[] = [];
    let pairFound: number = 0;
    let startButton: HTMLElement;
    let divMenu: HTMLFormElement;
    let cardValue: string[] = [];

    window.addEventListener("load", handleLoad);

    /*---------FUNKTIONEN--------*/
    function handleLoad(): void {
        divMenu = <HTMLFormElement>document.querySelector("#menu");
        startButton = <HTMLElement>document.querySelector("#startButton");
        divMenu.addEventListener("submit", handleChange);
        cardField = <HTMLDivElement>document.querySelector("#gameField");  
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        /*--------Fill FormData--------*/
        let formData: FormData = new FormData(document.forms[0]);        
        cardValue = [];
        for (let thisGame of formData) {
            cardValue.push(String(thisGame[1]));
        }         
        /*-----Spiel wird gestartet-----*/        
        startGame();
    }
    /*-----Start the Game, genertiere das Spielfeld-----*/
    function startGame(): void {        
        divMenu.classList.add("hidden");
        startButton.classList.add("hidden");
        pairAmount = Number(cardValue[0]);
        for (let i: number = 0; i < 2; i++) {            
            for (let x: number = 0; x < pairAmount; x++) {
                cardArray.push(cardSymbol[x]);
            }
        }
        /*-----Karten werden zufällig angeordnet-----*/
        cardArray.sort(() => 0.5 - Math.random());
        cardField.innerHTML = "";
        document.body.style.background = cardValue[2];
        document.body.style.fontFamily = cardValue[5];        
        for (let index: number = 0; index < cardArray.length; index++) {
            let card: HTMLElement = <HTMLElement>document.createElement(thisElement());
            card.style.width = cardValue[1] + "px";
            card.style.height = cardValue[1] + "px";
            card.style.background = cardValue[4];
            card.style.color = cardValue[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            card.addEventListener("click", flipCard);
            let allSpans: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            /*---------Interface NodeListOf<TNode>-------------*/
            /*-------DEF: Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; 
            for example, inheriting the same set of methods, or being tested in the same way.-------*/
            allSpans[index].classList.add("visible");
        }
        /*-----InnerFunction_ThisElement="div"-----*/
        function thisElement(): "div" {
            return "div";
        }
    }
    /*-----flipCards sorgt dafür, das die Karten aufgedeckt ("visible") werden-----*/
    function flipCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement> _event.target;
        cardContainer.push(target);
        cardContainer[0].style.background = "white";
        cardContainer[0].querySelector("span").classList.remove("visible");
        if (cardContainer.length == 2) {
            cardContainer[1].style.background = "white";
            cardContainer[1].querySelector("span").classList.remove("visible");
            setTimeout(compareCards, 500);
        }
    }
    /*---------Kartenpaare werden verglichen, winCheck wird ausgeführt---------*/
    function compareCards(): void {
        let spanValue0: string = <string>cardContainer[0].querySelector("span").innerHTML;
        let spanValue1: string = <string>cardContainer[1].querySelector("span").innerHTML;
        if (spanValue0 == spanValue1) {
            cardContainer[0].classList.add("visible");
            cardContainer[1].classList.add("visible");
            cardContainer = [];
            pairFound++;
            winCheck();
            /*---------winCheck wird ausgeführt, ist dieser nicht "true", wird -else- ausgeführt---------*/
        } else {
            cardContainer[0].style.background = cardValue[4];
            cardContainer[1].style.background = cardValue[4];
            cardContainer[0].querySelector("span").classList.add("visible");
            cardContainer[1].querySelector("span").classList.add("visible");
            cardContainer = [];
        }
    }
    /*---------Prüfen ob die paitFound dem pairAmount entsprechen, um das spiel bei erfüllter Bedingung zu beenden---------*/
    function winCheck(): void {
        if (pairFound == pairAmount) {
            window.alert("Du hast Gewonnen!");
            location.reload();
        }
    }
}