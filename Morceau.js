


module.exports = class Morceau {

    private titremorceau : string;
    private nomartiste : string;

    constructor(titremorceau,nomartiste) {

        this.titremorceau = titremorceau;
        this.nomartiste = nomartiste;
    }


    get titremorceau() {
        return this.titremorceau;
    }

    set titremorceau(value) {
        this.titremorceau = value;
    }

    get nomartiste() {
        return this.nomartiste;
    }

    set nomartiste(value) {
        this.nomartiste = value;
    }

    public void printheo(){
        system.out.print("heo");
    }
}


exports.post=function(){
    console.log('Hello')
}
