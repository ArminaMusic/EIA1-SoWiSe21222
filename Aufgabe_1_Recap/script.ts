const subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
const prediacte: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
const object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

//console.log(subject, prediacte, object);

for (let index: number = 6; index >= 1; index--) {
//console.log(i);
console.log(getVerse(subject, prediacte, object));

}

function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
    let vers: string = "";

    let randomS: number = Math.floor(Math.random() * _subject.length);
    let splicedS: string = _subject.splice(randomS, 1)[0];
    vers = vers + " " + splicedS;

    let randomP: number = Math.floor(Math.random() * _predicate.length);
    let splicedP: string = _predicate.splice(randomP, 1)[0];
    vers = vers + " " + splicedP;

    let randomO: number = Math.floor(Math.random() * _object.length);
    let splicedO: string = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;

    return vers;
}