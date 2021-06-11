 class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1 = createSprite(100,200)
      car1.addImage("car", car1img)
      car2 = createSprite(300,200)
      car2.addImage("car", car2img)
      car3 = createSprite(500,200)
      car3.addImage("car", car3img)
      car4 = createSprite(700,200)
      car4.addImage("car", car4img)
      cars = [car1,car2,car3,car4]
    }
  
    play(){
      form.hide();
     // textSize(30)
      //text("Game Started", 100,150)
      Player.getPlayerInfo();
      player.getCarsAtEnd();

     
//var ypos = 170
var x = 175;
var y;
var index = 0
background(rgb(198,135,103));

  image (track, 0, -displayHeight*4, displayWidth, displayHeight*5)
for(var plr in allPlayers){
  

  index = index +1;
  x = x +200
  y = displayHeight - allPlayers[plr].distance;
  
  cars[index-1].x = x;
  cars[index-1].y = y;

 if(index === player.index ){
   stroke(10)
    fill("green")
    ellipse(x,y,80,80)
    cars[index - 1].shapeColor = "red";
    camera.position.x = displayWidth/2;
    camera.position.y = cars[index-1].y
  }
  
  //ypos = ypos + 20
  //textSize(15)
  //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 170, ypos)

}


     
   if(keyIsDown(UP_ARROW) && player.index !== null){
  
    player.distance = player.distance + 50;
    player.update()
  }

  if(player.distance > 3680){
    gameState = 2
    
  }
  drawSprites(); 
    }
  
    end(){
  //    console.log("Game Ended")
      
    var img = createImg("images/gameOver.png")
    img.position(displayWidth/2, displayHeight/2-200)
      
    }
  }

  



  