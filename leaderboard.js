
console.log("Hello world");
PlayersList = new Meteor.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.player = function(){
    return PlayersList.find();
  }
}

if(Meteor.isClient){
  Template.leaderboard.events({
    'click li.player' : function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    }
  });
}
//selected class helper
if(Meteor.isClient){
  Template.leaderboard.selectedClass = function(){
    var selectedPlayer = Session.get('selectedPlayer');
    var playerId = this._id;
    if(selectedPlayer === playerId){
      return 'selected';
    }
  }
}

if(Meteor.isServer){

}
