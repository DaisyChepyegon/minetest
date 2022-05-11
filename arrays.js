/*var bucketlist=["morocco","cuba","kenya","tanzania"]
console.log(bucketlist)
console.log(bucketlist[3])
bucketlist[2]="zanzibar"
console.log(bucketlist)
bucketlist.push="canada"
console.log(bucketlist)
console.log(bucketlist.length)*/

/*var packingList=[];
packingList.push("binoculars")
packingList.push("camera")
packingList.unshift("sunglasses")
console.log(packingList)*/

/*var stationary=["books","pencils","pens"];
var snacks=["chocolate","crisps","juice"];
shoppingList=stationary.concat(snacks);
console.log(shoppingList)
console.log(stationary.indexOf("pencils"));
console.log(snacks.join());*/

/*var person ={
    name:"wambui",
    age:26,
    gender:"female"
}
console.log(person);
console.log(person.name);
person.isAwesome = true;
console.log(person);
delete person.age;
console.log(person);
person.hobbies=["dancing","reading","cooking"]
console.log(person);*/

/*var kiro={
    name:"kiro",
    age:15,
    favoriteAnimal:["duck","monkey","whale"]
};

var patty={
    name:"patty",
    age:14,
    favoriteAnimal:["duck","monkey","whale"]

};
var sandy={
    name:"sandy",
    age:17,
    favoriteAnimal:["duck","monkey","whale"]
};

var friends=[kiro, patty, sandy];
console.log(friends[2]);
console.log(friends[2].favoriteAnimal[1]);*/


/*var animals={
    zebra:{
        classification:"mammals",
        appearance:["white and black stripes","4 legs","looks like a donkey"],
        habitat:"greenlands",
        lifespan:"25",
        diet:"herbivore",
        friendly:true
    },

    crocodile:{
        classification:"reptiles",
        appearance:["long,wide mouth with many teeth","close relatives to dinosaurs", " looks like big lizards"],
        habitat:"grassland",
        lifespan:100,
        diet:"carnivores",
        friendly:false
    }
};

var ostrich={
    classification:"bird",
    appearance:["big,tall bird","2 legs","has a long neck"],
    habitat:"grassland",
    lifespan:45,
    diet:"herbivore",
    friendly:true
};

animals.ostrich = ostrich;
console.log(animals)*/

/*var highest= 20;
var lowest=4;

if(20>4)
{
    cons(ole.log(highest);
}

var see="to look";
var sea="a water body";

if(see==sea)
{
    console.log("they mean the same")
}*/

/*var coffee= false;
var tea =false;

if (coffee){
    console.log("one coffee please.");
}
else if(tea){
    console.log("i'd like a tea.");
}
else{
    console.log("i'll have juice,please");
}*/

/*if (confirm("are you ready?")){

for (var steps=0; teps<=10; steps++){
    console.log("i am"+steps+"to the door");

    if(steps==5){
        console.log("turn left");
    }
}
}

else{
    console.log("you are not ready!");
}*/

/*var menu=["sandwich","coffee","cookie","muffins","water"];
for(vari=0;i<menu.length;i++){
    console.log("we are serving"+menui+"today")
}*/

/*for (var x=22.4;x<24000;x=x*2){
    console.log(x);
}

var see="to look";
var sea="a water body";

if (see==sea){
    console.log("they mean the same");
}
else if(see!==sea){
    console.log("they sound the same but they don't mean the same");
}*/

/*var greetings=function(){
    console.log("hello world");
};
greetings();

var greetings=function(name){
    console.log("hello"+name+"!")
};
greetings("mary")*/

/*var jumpingjacks=function(numberoftimes, whattodo){
    for (var i=1;i<numberoftimes;i++){
        console.log(i+"whattodo!");
    }
}
jumpingjacks(11, "jumping jacks");

var double=function(number){
    return number*2;
};
double(3);*/

var car = function (model, numberPlate) {
	var wheels = 4; //this is a local variable
	console.log( "I drive a " + model +  "with a number plate of  " + numberPlate + " and it has " + wheels 
	+ " wheels.");
	
};

car ("Toyota", "KBP 123");