
var table = [10][10];
var current_rover_x;
var current_rover_y; //Global positions of the rover to be used by all functions. 
var win_global_x;
var win_global_y;
var tracker_x = [100];
var tracker_y = [100];

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
    console.log("\n - To move left type movel¡Left.");
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
  
  //This puts the rover in the table in a random number (executed once every time a move executes), x y would be the rover position. (current)
function initialize_rover(x,y){
  
  if(x == 9){
    table[x][y] = " 0 |";
  }
  if(x == 0){
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
        if(j == 0){
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

  //We create the table and put the rover in it, then print the table  
      ini_win(rover_x, rover_y); 
      creating_table();
      initialize_rover(rover_x, rover_y);
      print_table();
      
    }
   //Function to go south, for this functions we need to reduce the rover_y while changing the rover_current_y to its previous state.
  
  
function south(x,y){
    if(y == -1){
      falling_in_my_skin();
    }
    else{
      y--;
      current_rover_y--;
      creating_table();
      ini_win(x,y);
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves South");
    }
  } 
  
function north(x,y){
      if( y == 10){
        falling_in_my_skin();
      }
      else{
      y++;
      current_rover_y++;
      creating_table();
      ini_win(x,y);
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves North");
      }
    }
function east(x,y){
    if(x == 10){
      falling_in_my_skin();
    }
    else{
      current_rover_x--;
      creating_table();
      ini_win(x,y);
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves East");
      }
    }
function west(x,y){
      if(x == -1){
        falling_in_my_skin();
      }
      else{      
      x++;
      current_rover_x++;
      creating_table();
      ini_win(x,y);
      initialize_rover(x,y);
      print_table();
      console.log("The rover moves West");
      }
    }


//Initializing finish line
function ini_win(rover_starter_x, rover_starter_y){
  var win_x;
  var win_y;
  do{
    win_x = math.floor(math.random()*11);
    win_y = math.floor(math.random()*11);
    win_global_x = win_x;
    win_global_y = win_y;
  }while(win_x == rover_starter_x || win_y == rover_starter_y);
 
  if(win_x == 9){
    table[win_x][win_y] = " ! |";
  }
  if(x == 0){
    table[win_x][win_y] = "| ! ";
  }
  else{
    table[win_x][win_y] = "| ! |";
  }

}

//function to check the rover doesn't fall off the map
function falling_in_my_skin(){
  console.log("You are about to fall off the edge, you can't keep going here, try another direction(check the grid)");
}
//tracking the rover (positions where it has been)
function tracking(rover_x, rover_y){
 var i, j = 0;
  tracker_x[i] = rover_x;
  tracker_y[j] = rover_y;
  for(var k = 0; k <= tracker_x.length; k++ ){
    console.log("- "+tracker_x[k]+", "+tracker_y[k]+".\n");
  }
}




