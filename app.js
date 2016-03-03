var taxiLocationCounter = 1;
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

//----------------------listen for the keydown event----------------------//
body.onkeydown = function(event){

  var keyName = keyCodeName(event.keyCode);
  var trafficLight = new TrafficLights(taxiLocationCounter);

  if((keyName ==="right") && trafficLight.color() === "green"){
      if(taxiLocationCounter < 9 ){
        moveForward();
      }
    }
  else if(keyName === "left"){
    if(taxiLocationCounter > 1){
      moveBackward();
    }
  }
  else if(keyName === "up"){
    trafficLight.makeRed();
    if(trafficLight.color === "red"){
      moveBackward();
    }
  }
  else if(keyName === "down"){
    trafficLight.makeGreen();
  }

//Locate taxi's position and display classNames
    var className = createLocationClass(taxiLocationCounter);
    displayMessage(className);
};
//End of onkeydown

//Functionn > createTrafficLightClass

//Returns a string "one-of-nine -> nine-of-nine"
var createTrafficLightClass = function(taxiLocationCounter){
  switch (taxiLocationCounter) {
    case 1:
      return ".one-of-nine";
      break;
    case 2:
      return ".two-of-nine";
      break;
    case 3:
      return ".three-of-nine";
      break;
    case 4:
      return ".four-of-nine";
      break;
    case 5:
      return ".five-of-nine";
      break;
    case 6:
      return ".six-of-nine";
      break;
    case 7:
      return ".seven-of-nine";
      break;
    case 8:
      return ".eight-of-nine";
      break;
    case 9:
      return ".nine-of-nine";
      break;
    default:
      return "";
      break;

  }

};
//Traffic Lights Constructor----------------------------------------
var TrafficLights = function(taxiLocationCounter){
  var className = createTrafficLightClass(taxiLocationCounter);
  var trafficLightElement = document.querySelector(className);

    this.makeGreen = function(){
    trafficLightElement.classList.add("lights-go");
    trafficLightElement.classList.remove("lights-stop");
    trafficLightElement.classList.remove("lights-slowdown");
  };
    this.makeRed = function(){
    trafficLightElement.classList.add("lights-stop");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");

  };
    this.makeOrange = function(){
    trafficLightElement.classList.add("lights-slowdown");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-stop");

  };
    this.color = function(){
    if(trafficLightElement.classList.contains("lights-go")){
      return "green";
    }
    if(trafficLightElement.classList.contains("lights-stop")){
      return "red";
    }
  };
};
//Move Forward function
var moveForward = function(){
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter++;
  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);

};
//Move Backward function
var moveBackward = function(){
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter--;
  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
};
//Translate Counter into a ClassName
//A function to be called when locations of the Taxi changes
var createLocationClass = function(taxiLocationCounter){
	switch (taxiLocationCounter) {
	  case 1:
      return "slot-one-of-nine";
	    break;
    case 2:
      return "slot-two-of-nine";
      break;
    case 3:
      return "slot-three-of-nine";
      break;
    case 4:
      return "slot-four-of-nine";
      break;
    case 5:
      return "slot-five-of-nine";
      break;
    case 6:
      return "slot-six-of-nine";
      break;
    case 7:
      return "slot-seven-of-nine";
      break;
    case 8:
      return "slot-eight-of-nine";
      break;
    case 9:
      return "slot-nine-of-nine";
      break;
	  default:
      return "";
      break;
	}
};
//Function assigning keyCodes to keyCodeNames
var keyCodeName = function(event){
  keyCode = event;
	switch(keyCode){

		case 39:
			return "right";
			break;
		case 37:
			return "left";
			break;
		case 38:
			return "up";
			break;
		case 40:
			return "down";
			break;
		default:
			return "";
    }
};
