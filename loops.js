var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

function (presidents){
	for(var i = 0; i<presidents.length; i++){
  console.log("The value of i is " + i);
  console.log("The value at Index is " + presidents[i]);
}
}





var stringOfNumbers = ' ';

function (stringOfNumbers){
for(var i = 10; i<21; i++){
  stringOfNumbers = stringOfNumbers+i;
}
console.log(stringOfNumbers);
}


var evenNumberArray =[];

function(evenNumberArray){
for(var i = 0; i<50; i++){
  evenNumberArray.push(i*2);
}
console.log(evenNumberArray);
}

var oopsArray = ['turn', ,'down', ,'for', ,'what'];

function(oopsArray){
for(var i = 1; i<6; i+=2){
  oopsArray.splice(i,1,"nope");
}
console.log(oopsArray);
}


