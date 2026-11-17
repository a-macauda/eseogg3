let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    punteggioPlayer: function() {
        this.players.forEach(giocatore => {
            for (let i = 0; i < 10; i++) {
                giocatore.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
            console.log(giocatore.scores)
        });
    },

    newFriend : function(name) {
        let newPlayer = {'name': name, 'scores': []};
         for (let i = 0; i < 10; i++) {
        newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
            
        this.players.push(newPlayer);
        console.log(newPlayer.scores);
},
    punteggioTotale: function() {
        this.players.forEach( giocatore => {
        let tot = giocatore.scores.reduce((acc, score) => acc + score);
        giocatore.totale = tot;
        })
        this.players.sort((a, b) => b.totale - a.totale);
        
    },

    vincitore: function() {
        let winner = this.players[0];
        console.log(`Il vincitore è ${winner.name} con un punteggio di ${winner.totale}`);
    },

    classifica: function() {
        this.players.forEach(giocatore => {
            console.log(`${giocatore.name} ha totalizzato ${giocatore.totale} punti`);
        });

    }
}
bowling.punteggioPlayer()
bowling.newFriend('Gianluca')
bowling.punteggioTotale()
bowling.vincitore()
bowling.classifica()