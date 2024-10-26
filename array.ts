                //PART1: EMPLOYEE DATA: 
// Define the union type for the role property
type Role = "Manager" | "Engineer" | "Intern";

// Define the Employee type alias
type Employee = {
    name: string;
    department: string;
    role: Role;
    contact?: {
        phone: string;
        email: string;
    };
    skills?: string[];
};

// Example usage:
const employee1: Employee = {
    name: "Areeba",
    department: "Engineering",
    role: "Engineer",
    contact: {
        phone: "123-456-7890",
        email: "areeba@example.com"
    },
    skills: ["JavaScript", "React", "Node.js"]
};

const employee2: Employee = {
    name: "Sidra Batool",
    department: "HR",
    role: "Manager",
    contact: {
        phone: "987-654-3210",
        email: "sidra@example.com"
    }
};

const employee3: Employee = {
    name: "Ali Ahmed",
    department: "Marketing",
    role: "Intern"
};
console.log(employee1,employee2,employee3)
             
                  //PART 2 : CAR DEATAILS
type car ={
//Nested object named engine containing horse property,
engine:{
    horsepower : number
};
gethorsepower:()=>number
};

// //Example usage
const myCar:car={
    engine:{
        horsepower:200
    },

// //Function to retrive engine's horsepower
gethorsepower (){
return this.engine.horsepower;
}
};
//Get the horsepower of the car's engine
const carHorsepower = myCar.gethorsepower();
console.log("Car's horsepower:",carHorsepower);

              //PART3 : COLOURFUL T-SHIRTS
type Product = {
    name:string;
    price:number;
    colour:string;
    inventory: {
        stock:number;
        colourOption?:string[];
        changeColour:(newColour:string)=>void;

    };
};
  
   //Example usage
const tShirt:Product ={
name:"Cotton T-Shirt",
price:2000,
colour:"red",
inventory:{
stock:100,
colourOption:["Blue","Red","Green"],
changeColour(newColour){
 //Update colour property
 this.colour=newColour;
 //Adjust price based on new colour
switch(newColour.toLowerCase()){
 case"blue":
this.price*=1000;//Increase by 10%
 break;
case"red":
 this.price*=2000;//Decrease by 5%
 break;
                
            }
        }
    }
}
//Change the colour of the t-shirt
tShirt.inventory.changeColour("Red");
console.log("New colour:",tShirt.colour);
console.log("New price:",tShirt.price);

