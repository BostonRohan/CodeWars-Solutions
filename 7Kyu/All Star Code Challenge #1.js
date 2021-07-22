//Establishing a function with name, team and ppg parameters.
function NBAplayer(name, team, ppg) {
    this.name = name;
    this.team = team;
    this.ppg = ppg;
}
//Function that finds the sum of the player objects.
function sumPPG(playerOne, playerTwo) {
    //Adding the ppg of player 1 and 2.
    return playerOne.ppg + playerTwo.ppg;
}
var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);
sumPPG(iverson, jordan);