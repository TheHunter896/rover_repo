var table = [10][10];
var current_rover_x;
var current_rover_y; //Global positions of the rover to be used by all functions. 
var win_global_x;
var win_global_y;
var global_obs_x = [];
var global_obs_y = [];


function inception(){

console.log("Welcome to the Mars Rover game, press the button in the middle to aquire further information.");
var thing = prompt("If you type Instructions, the instructions will appear, if you type Simple, the game will start in simple mode (without obstables), if you type Complex, the game will start in complex mode (with obstacles)");
if(thing == "Instructions" || thing == "instructions"){
  instructions();
}
if(thing == "complex" || thing == "Complex"){
  complex();
}
if(thing == "Simple" || thing == "simple"){
  simple();
}
}

function instructions(){
  //Function that shows the instructions left to do.
 
    console.log("The instrucions are the following \n - The 0 in the table represents your rover, while the empty squares are the table where you can move it.");
    console.log("\n - To move the rover moveRight type in the text area that will appear automatically when you start the game.");
    console.log("\n - To move left type movelLeft.");
    console.log("\n - To move forward type moveForward.");
    console.log("\n - To move back type moveBack");
    console.log("\n - To exit the instructions type Simple or Complex to start any of those game modes.");
   
    
    do{
      var to_do = prompt("What do you want to do next?");
      console.log("You haven't chosen a correct option.");
    }while(to_do !== "Simple" || to_do !=="Complex");
    if(to_do == "Simple"){
      simple();
    }
    else{
      complex();
    }
    

}

function simple(){

    sg();

    var what_to_do = prompt("What do you want to do next?");
    if(what_to_do.length > 1 && what_to_do !== "moveBack" && what_to_do !=="moveForward" && what_to_do !== "moveRight" && what_to_do !== "moveLeft")
    {
        var i;
        what_to_do.split();
        for( i < 0; i < what_to_do.length; i++){
            switch(what_to_do[i]){
              case what_to_do = "l":
              west(current_rover_x,current_rover_y);
              break;
              case what_to_do = "r":
              east(current_rover_x,current_rover_y);
              break;
              case what_to_do = "b":
              south(current_rover_x,current_rover_y);
              break;
              case what_to_do = "f":
              north(current_rover_x,current_rover_y);
              break;
              case what_to_do = "f":
              north(current_rover_x,current_rover_y);
              break;
              default:
              console.log("Wrong letter, not executing anything.");
            }
        }
    }
    else{
      do{
    switch(what_to_do){
      case what_to_do = "moveBack":
      south(current_rover_x,current_rover_y);
      break;
      case what_to_do = "moveForward":
      north(current_rover_x, current_rover_y);
      break;
      case what_to_do = "moveRight":
      east(current_rover_x, current_rover_y);
      break;
      case what_to_do = "moveLeft":
      west(current_rover_x, current_rover_y);
      break;
      case what_to_do = "l":
      west(current_rover_x,current_rover_y);
      break;
      case what_to_do = "r":
      east(current_rover_x,current_rover_y);
      break;
      case what_to_do = "b":
      south(current_rover_x,current_rover_y);
      break;
      case what_to_do = "f":
      north(current_rover_x,current_rover_y);
      break;
      case what_to_do = "f":
      north(current_rover_x,current_rover_y);
      break;
      case what_to_do = "tracker":
      tracking();
      break;
      default:
        console.log("Write a specific command to do, if you have doubts restart the game and watch the instructions");
        break;
      }
      if(current_rover_x == win_global_x && current_rover_y == win_global_y){
        console.log("\nYou win, you have brought the Rover to a place of interest for the scientists and humanity has advanced thanks to your efforts! Nice ride pilot.\n");
        what_to_do = "Exit";
      }
     }while(what_to_do != "Exit");
     
     console.log("You have exited the game");
    } 
    }

function complex(){
  

  sg();
  
 
  do{ 
  var what_to_do = prompt("What do you want to do next?");
  switch(what_to_do){
    case what_to_do = "moveBack":
    south(current_rover_x,current_rover_y);
    break;
    case what_to_do = "moveForward":
    north(current_rover_x, current_rover_y);
    break;
    case what_to_do = "moveRight":
    east(current_rover_x, current_rover_y);
    break;
    case what_to_do = "moveLeft":
    west(current_rover_x, current_rover_y);
    break;
    default:
      break;
    }
    if(current_rover_x == win_global_x && current_rover_y == win_global_y){
      console.log("\nYou win, you have brought the Rover to a place of interest for the scientists and humanity has advanced thanks to your efforts! Nice ride pilot.\n");
      what_to_do = "Exit"; // <-- We break the while with a simple trigger
    }
   }while(what_to_do != "Exit");
   
   console.log("You have exited the game");
    
  }
  
  //This puts the rover in the table in a random number (executed once every time a move executes), x y would be the rover position. (current)
function initialize_rover(x,y){
  
  if(x == 10){
    table[x][y] = " 0 |\n";
  }
  if(x == 1){
    table[x][y] = "| 0 ";
  }
  else{
    table[x][y] = "| 0 |";
  }
  
  }  
  //Funtion that sets the table with |  | and puts the rover in the random 1. 
function creating_table(){
    
  for( var i = 0; i < 10; i++)
    {
      for(var j = 0; j < 10; j++){
        table[i][j] = "|  |";
        
        if(j == 9){
          table[i][j] ="  |\n";
        
          }
        if(j == 1){
          table[i][j] ="|  ";
          
          }
           
        }
     } 
}
  //Function to actually print the table
function print_table(){
    for(var i = 0; i < 10; i++){
      for(var j = 0; j < 10; j++){
        console.log(table[i][j]);
      }
    }
  }
   

  
    //Starts the game
function sg(){
      
    //We create the table and the rover in it, then we print it
      
  
    //Position of the rover (initialized once every game)
    var rover_x = math.floor(math.random()*11);
    var rover_y = math.floor(math.random()*11);
    

    current_rover_x = rover_x;
    current_rover_y = rover_y;



    do{
        win_global_x = math.floor(math.random()*11);
        win_global_y = math.floor(math.random()*11);
          
      }while(win_global_x == rover_starter_x || win_global_y == rover_starter_y);

      
      creating_table();
      ini_win(win_global_x, win_global_y);
      ini_obstacles();
      impl_obstacles(); 
      initialize_rover(rover_x, rover_y);
      print_table();
      
    }
   //Function to go south, for this functions we need to reduce the rover_y while changing the rover_current_y to its previous state.
  
  
function south(x,y){
      y--;
      current_rover_y--;
      creating_table();
      ini_win(win_global_x, win_global_y); 
      impl_obstacles();
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves South");
  
  } 
  
function north(x,y){
      y++;
      current_rover_y++;
      creating_table();
      ini_win(win_global_x, win_global_y); 
      initialize_rover(x,y);
      impl_obstacles();
      print_table();
      console.log("The rover moves North");
    }
function east(x,y){
      current_rover_x--;
      creating_table();
      ini_win(win_global_x, win_global_y); 
      impl_obstacles();
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves East");
    }
function west(x,y){
      x++;
      current_rover_x++;
      creating_table();
      ini_win(win_global_x, win_global_y);
      impl_obstacles(); 
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves West");
    }


//Initializing finish line
function ini_win(x,y){
 
  if(win_x == 10){
    table[x][y] = " ! |\n";
  }
  if(x == 1){
    table[x][y] = "| ! ";
  }
  else{
    table[x][y] = "| ! |";
  }

}
//---------------------------------------------------------------------------------------------------------------
//Obstacle initialization and implementing

//Used only once
function ini_obstacles(){
    var number = prompt("How many obstacles do you want? Write the number down.");
    var k, i;
    do{
      global_obs_x[k] = math.floor(math.random()*10);
      global_obs_y[k] = math.floor(math.random()*10);      
    }while(global_obs_x == win_global_x || global_obs_y == win_global_y || global_obs_x == current_rover_x || global_obs_y == current_rover_y);
  }
//used every time
function impl_obstacles(){
for( i = 0; i < number; i++){
    if(global_obs_x == 10){
      table[global_obs_x[i]][global_obs_y[i]] = " - |\n";
    }
    else if(global_obs_x == 1){
      table[global_obs_x[i]][global_obs_y[i]] = "| - ";

    }
    else{
      table[global_obs_x[i]][global_obs_y[i]] = "| - |";
    }
  }
}

    
    
    
