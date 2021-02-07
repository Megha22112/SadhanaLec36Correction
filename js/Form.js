 class Form{

  constructor(){


  }

   display(){

     var title = createElement('h2');
     title.html("CarRacingGame")
     title.position(130,0);

     var input = createInput("name");
     input.position(130,160);

     var button = createButton("play");
     button.position(250,200); //changed number here 

     button.mousePressed(function(){

        input.hide();
        button.hide();

        var name = input.value();
        
        playerCount = playerCount + 1;   //changed spelling here
        player.update(name);             //changed spelling here 
        player.updateCount(playerCount); //changed spelling here

        var greeting = createElement('h2');
        greeting.html('hello' + name);
        greeting.position(130,160);

     })

   }


 }