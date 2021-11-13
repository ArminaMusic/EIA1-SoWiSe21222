/*
Aufgabe: L00_Preparation
Name: Armina Music
Matrikel: 268021
Datum: 11.11.2021
*/
const subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
const prediacte = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
const object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
//console.log(subject, prediacte, object);
for (let index = 6; index >= 1; index--) {
    //console.log(i);
    console.log(getVerse(subject, prediacte, object));
}
function getVerse(_subject, _predicate, _object) {
    let vers = "";
    let randomS = Math.floor(Math.random() * _subject.length);
    let splicedS = _subject.splice(randomS, 1)[0];
    vers = vers + " " + splicedS;
    let randomP = Math.floor(Math.random() * _predicate.length);
    let splicedP = _predicate.splice(randomP, 1)[0];
    vers = vers + " " + splicedP;
    let randomO = Math.floor(Math.random() * _object.length);
    let splicedO = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=script.js.map