class Support {
    name;
    designation = 'Support Web Dev';
    address = 'Bangladesh';
    constructor(name, place){
        this.name = name;
        this.address = place;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const aamir = new Support("Amir khan", 'dubai');
const Solim = new Support("Solimuddi", 'dhaka');
aamir.startSession();
Solim.startSession();
console.log(aamir, Solim);