export class SuperHero{
    id?: number;
    name = "";
    firstName = "";
    lastName = "";
    place = "";

    constructor(id?: number, name = "", firstName = "", lastName = "", place = "") {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.place = place;
    }
}