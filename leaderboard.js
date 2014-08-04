
console.log("Hello world");
PlayersList = new Meteor.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.player = function(){
    return "A list of player should be here.";
  }
}
if(Meteor.isServer){

}
