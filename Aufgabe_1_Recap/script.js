/*
Aufgabe: L00_Preparation
Name: Armina Music
Matrikel: 268021
Datum: 11.11.2021
*/
var subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var prediacte = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
//console.log(subject, prediacte, object);
for (var index = 6; index >= 1; index--) {
    //console.log(i);
    console.log(getVerse(subject, prediacte, object));
}
function getVerse(_subject, _predicate, _object) {
    var vers = "";
    var randomS = Math.floor(Math.random() * _subject.length);
    var splicedS = _subject.splice(randomS, 1)[0];
    vers = vers + " " + splicedS;
    var randomP = Math.floor(Math.random() * _predicate.length);
    var splicedP = _predicate.splice(randomP, 1)[0];
    vers = vers + " " + splicedP;
    var randomO = Math.floor(Math.random() * _object.length);
    var splicedO = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=script.js.map