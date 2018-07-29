// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(item){
  drivers.push(item);
}

function destructivelyPrependDriver(item){
  drivers.unshift(item);
}

function  destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(item){
  const newArr = [...drivers,  item];
}









