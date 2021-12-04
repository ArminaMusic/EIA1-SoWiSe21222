/*
Aufgabe: L09.1_OldMacDonaldsFarm
Name: Armina Music
Matrikel: 268021
Datum: 04.12.2021
Kommentar: es2017 Version
*/
var Farm;
(function (Farm) {
    class Animal {
        constructor(_name, _breed, _foodtype, _sound, _foodneed) {
            this.name = _name;
            this.breed = _breed;
            this.foodtype = _foodtype;
            this.sound = _sound;
            this.foodneed = _foodneed;
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=animalscript.js.map