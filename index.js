function excuse(){
    
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let ale1= Math.floor(Math.random()*(who.length));
let ale2= Math.floor(Math.random()*(action.length));
let ale3= Math.floor(Math.random()*(what.length));
let ale4= Math.floor(Math.random()*(when.length));

document.getElementById("principal").innerHTML = "<h1>"+who[ale1]+" "+action[ale2]+" "+what[ale3]+" "+when[ale4]+"</h1>";

let main = document.getElementById("principal");
let excuseComplete=  who[ale1]+" "+action[ale2]+" "+what[ale3]+" "+when[ale4];
main.innerHTML= "<h1>"+excuseComplete +"</h1>";
}