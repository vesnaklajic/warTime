'use strict'

class Orks {
constructor (name){
    this.name= name;
    this.demage=this.getDemage();  
}
getDemage(){
if(this instanceof WarHammer){
    this.demage=Math.floor(Math.random()*(50-30)+30);
}
else if(this instanceof WarBoss){
    this.demage=Math.floor(Math.random()*(100-80)+80);
}
return this.demage;
}
}//end of the super class

class WarBoss extends Orks{
    constructor (name){
    super(name);
    }
}


class WarHammer extends Orks{
    constructor(name){
    super(name);
    }
}


let WarBoss1 = new WarBoss('Arbuttz');
let WarHammer1 =  new WarHammer('Bork');
console.log(`WarBoss's name is ${WarBoss1.name}`);
console.log(`WarBoss's demage is ${WarBoss1.demage}`);
console.log(`WarHammer's name is ${WarHammer1.name}`);
console.log(`WarHammer's demage is ${WarHammer1.demage}`);

/*
//self invoking function 
(function createTenks(){
 for(let i=1; i<10; i++){
 let Tenks =  new Tenk (`Tank_${i}`);
 Tenkisti.push(Tenks);
 }
})();

console.log(Tenkisti);
*/
