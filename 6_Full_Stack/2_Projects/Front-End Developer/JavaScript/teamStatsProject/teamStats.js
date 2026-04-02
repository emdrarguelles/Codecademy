const team = {
  _players: [
    {firstName: 'Ed', lastName: 'A', age: 35 },
    {firstName: 'Marcus', lastName: 'B', age: 25 },
    {firstName: 'Daniel', lastName: 'C', age: 15 },
  ],
  _games: [
    {opponent: 'Ade', teamPoints: 50, opponentPoints: 45 },
    {opponent: 'Bsucram', teamPoints: 45, opponentPoints: 50 },
    {opponent: 'Cleinad', teamPoints: 39, opponentPoints: 38 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {firstName: newFirstName, lastName: newLastName, age: newAge }
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints }
    this._games.push(game);
  },
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games);