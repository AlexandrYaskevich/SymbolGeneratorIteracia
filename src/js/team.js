

export default class Team {
    constructor() {
        this.teamPlayers = [];
    }
    add (namePlayer) {
        this.teamPlayers.push(namePlayer);
    };
    *generatorTeam() {
        for (let player in this.teamPlayers) {
          let plaerone = this.teamPlayers[player];

          yield plaerone;
        }
    }
    [Symbol.iterator]() {
        const index = 0;
       
            return  {
                next() {
                   if(index <=  this.teamPlayers.length) {
                        return {
                            value: this.teamPlayers[index],
                            done: false
                        }
                    }
                    index++;
                    return {
                        done: true
                    }
                }
            
            }  
           
    }

}


