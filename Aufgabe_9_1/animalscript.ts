/*
Aufgabe: L09.1_OldMacDonaldsFarm
Name: Armina Music
Matrikel: 268021
Datum: 04.12.2021
Kommentar: es6 Version
Getauscht mit: 
*/

namespace Farm {
    export class Animal {
        name: string;
        breed: string;
        foodtype: string;
        sound: string;
        foodneed: number;

        constructor(_name: string, _breed: string, _foodtype: string, _sound: string, _foodneed: number) {
            this.name = _name;
            this.breed = _breed;
            this.foodtype = _foodtype;
            this.sound = _sound;
            this.foodneed = _foodneed;
        }
    }
}