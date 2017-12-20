
export class Quote {
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
    picture: string;
    quotes: Quote[] = [];
}
