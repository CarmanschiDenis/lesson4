// let varname = "BOB";
// function funcname(name){
//     console.log("Hello",name)
// }
// funcname(varname)


// let human = {
//     fullname: "Object Name",
//     age: 11,
//     email:"tart.123@email.com"
// }
// console.log(human.fullname)



// let dog = {
//     dogname: "Tazik",
//     age: 89,
//     color: "RGB"

// };
// console.log(dog);
// dog.age = 90;
// console.log(dog);



// elementele/functii -> obiect -> clasa 
//exemplu:
// class Human{
//     let organe = {
//         inima:"Transpota sange",
//         creier:"Gandeste"
//     }
//     function eat(){
//         console.log("eu mananc")
//     }
    
//     age: 233
// }


// let info ="fgdgddfg"
// let n = {
//     info: "Lesson 4",
//     display(parametru){
//         console.log(this.info, parametru);
//     }
// };//ctrl + click p/u vereficre

// n.display("Text")


// let phone = { 
//     brand: "Iphone",
//     color: "midnight",
//     procesor: "A15 Bionic",
//     ac_dc: "este",
    
//     turnOn(){
//         console.log(this.brand,"se porneste");
//     },
//     discharge(){
//         console.log("Recharge me brat")
//     },
//     call(){
//         console.log("eu pot suna")
//     },
//     photo(){
//         console.log("eu fac poze")
//     }
// }
// console.log(phone.brand);



class dog{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    ceaipitea(cat1){
        console.log(cat1, "a venit la",this.name,"sa bea ceai")
    }
}

let barsik = new dog("Barsik", 2);
let garfield = new dog("Garfield", 3);

barsik.ceaipitea(garfield.name);
