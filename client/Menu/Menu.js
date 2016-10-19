
Template.Menu.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');  //has to be small caps
  });
});
Template.Menu.helpers ({
  recipes: ()=> {
    return Recipes.find({inMenu: true}); //subscribed menu items
  }
});
