//First Challenge: "Presidents"

function makePresidents(){
	var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

	for(var i = 0; i<presidents.length; i++){
  		console.log("The value of i is " + i);
  		console.log("The value at Index is " + presidents[i]);
	}
}
makePresidents();

//Second Challenge: "Make String of Numbers"

function makeStringOfNumbers (){
	var stringOfNumbers = '';
	for(var i = 10; i<21; i++){
	  stringOfNumbers = stringOfNumbers+i;
	}
    console.log(stringOfNumbers);
}
makeStringOfNumbers();

//Third Challenge: "Add Only Evens"

function makeEvenNumberArray(){
	var evenNumberArray =[];
	for(var i = 0; i<50; i++){
	  evenNumberArray.push(i*2);
	}
	console.log(evenNumberArray);
}
makeEvenNumberArray();


//Fourth Challenge: "Not Even!"

function makeOopsArray(){
	var oopsArray = ['turn', ,'down', ,'for', ,'what'];
	for(var i = 1; i<6; i+=2){
	  	oopsArray.splice(i,1,"nope");
	}
	console.log(oopsArray);
	return oopsArray;
}
var oopsResult = makeOopsArray();


//Fifth Challenge: "Going Backwards"

function goBackwards(oopsResult){
	for(var i = 6; i>-1; i--){
  		console.log(oopsResult[i]);
	}
}
goBackwards(oopsResult);

//Sixth Challenge: "Naptime"

function makeNapSchedule(){
	var isNapTime = false;
	var napSchedule = [false, false, true, false, true, true];
	function nap(schedule){
		if(schedule[i]===true){
			console.log("ZzZzZzZz");
		}
		if(schedule[i]===false){
			console.log("Gotta get to work!");
		}
	}
  	for(var i = 0; i <6; i++){
      nap(napSchedule);
    }
}
makeNapSchedule();
  