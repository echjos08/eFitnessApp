
export class Quote {
    constructor(t: string, p: string ){
        this.text = t;
        this.player= p;

    }
    text: string;
    player: string;
}

export class Player {
    id: number;
    name: string = "Testing Name";
    quotes: Quote[] = [];
    score: number = 0;
    
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: number;
    quotes: Quote[] = [];
}
