'use strict'
//var Tenkisti=[];

class Humans {
constructor (name){
    this.name= name;
    this.demage=this.getDemage();  
}
getDemage(){
if(this instanceof Solder){
    this.demage=Math.floor(Math.random()*(50-30)+30);
}
else if(this instanceof Tenk){
    this.demage=Math.floor(Math.random()*(100-80)+80);
}
return this.demage;

}
}//end of the super class

class Solder extends Humans{
    constructor (name){
    super(name);
    }
}

class Tenk extends Humans{
    constructor(name){
    super(name);
    }
}

let Solder1 = new Solder('Gimly');
let Tenk1 =  new Tenk ('Legolas');
console.log(`Human's name is ${Solder1.name}`);
console.log(`Human's demage is ${Solder1.demage}`);
console.log(`Tenkist's name is ${Tenk1.name}`);
console.log(`Tenkist's demage is ${Tenk1.demage}`);

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

