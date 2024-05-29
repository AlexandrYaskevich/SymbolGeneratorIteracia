export default class Team {
    constructor() {
        this.teamPlayers = [];
    }
    add (namePlayer) {
        this.teamPlayers.push(namePlayer);
    };

    *[Symbol.iterator]() {
        const length = this.teamPlayers.length;
        for(let i = 0; i <= length; i++) {
            return  {
                next() {
                    if(i <= length) {
                        return {
                            value: this.teamPlayers[i],
                            done: false
                        }
                    }
                    return {
                        done: true
                    }
                }
            
            }
        } 
        yield  this.teamPlayers[i];   
    }
}

