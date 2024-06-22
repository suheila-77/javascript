// // document.write("HELLO WORLD FROM EXTERNAL FILE")

// // let num1 = 10;
// // let num2 = 20;

// // let sum = num1 * num2;
// // document.write(sum);



// // //String
// // let myName = "suheila <br>";
// // document.write("Hello" + myName)
// // //integer
// // let myAge = 25;
// // //Boolean
// // let isFemale = true;
// // //Double
// // let price = 5.5;

// // let Name = "Suheila";
// // let age = 25; 
// // document.write("my name is " , Name, " my age is " +age) 



// // let name = "Abdi";
// // let hisAge = 60;

// // document.write("there was once a man called "+ name, "<br>","He was "+hisAge, " years old he liked his name " +name ," but he didnt being "+hisAge, " years old")


// // let num1 = 7;
// // let num2 =5;
// // document.write(num1 + num2, "<br>")
// // document.write(num1 - num2, "<br>")
// // document.write(num1 * num2, "<br>")
// // document.write(num1 / num2, "<br>")
// // document.write(num1 % num2, "<br>")
// // document.write(num1 ** num2, "<br>")


// // let num = 66
// // num +=2
// // num--
// // document.write(num)



// //if else conditions --!


// // let isPassed = true;

// // if(isPassed == false){
// //     document.write("you will have a car as gift")
// // }
// // else{
// // document.write("sorry you failed")
// // }

// // let pass = "pass122"
// // if(pass == "pass122"){
// //     document.write("successful login, welcome")
// // }
// // else{
// //     document.write("password is incorrect")
// // }

// ////f else conditions with comparison operators
// // let age = 14;
// // if(age <14){
// //     document.write("you are adult")
// // }
// // else{
// //     document.write("you are little child")
// // }

// // let age = 18
// // if(age >= 19){
// //     document.write("you can drive")
// // }
// //     else{
// //         document.write("you can not drive")
// //     }

// ////f else conditions with 
//     // let subject1 = 100
//     // let subject2 = 99

//     // if(subject1 == 100 && subject2 == 100){
//     //     document.write("you will have a car as a gift")

//     // }
//     // else{
//     //     document.write("sorry you failed")
//     // }


//     // let subject3 = 100
//     // let subject4 = 100

//     // if(subject1 == 100 || subject2 == 100){
//     //     document.write("<br>", "you will have a car as a gift")

//     // }
//     // else{
//     //     document.write("sorry you failed")
//     // }
// //   let marks  = 45
 
// //    if(marks == 100){
// //     document.write("Grade A")
// //    }
// //    else if(marks >=90 && marks <100){
// //     document.write("Grade A-")
// //    }
// //     else if(marks >=70 && marks <=80){
// //         document.write("Grade B")
// //     }
// //     else if(marks >=50 && marks <=60){
// //         document.write("Grade C")
// //     }
// //     else if(marks>100){
// //         document.write("Unkown grade")
// //     }
// //     else if(marks< 50){
// //         document.write("Failed")
// //     }

// //   let name = prompt("enter your name")
// //   document.write("HEllo "+ name)
        

// //    let number1= parseInt(prompt("enter number1"))
// //   let number2 = parseInt(prompt("enter number2"))

// //   document.write( number1 + number2)


// let password = parseInt(prompt("enter your password"))

// if(password == 9425){
//     const options=["1. Anfac gudaha ", " 2. Anfac dibada"," 3.iska xir"]
//     const userChoice= prompt("mid dooro\n" +options.join("\n"))

//     if (userChoice ==1){
//         const xirmaha=["1. xirmo 1 USD","2. xirmo 2 USD" ," 3. xirmo 3 USD"]
//         const xirmochoice= prompt("fadlan so gali xirmo\n" + xirmaha.join("\n"))
    
//     if(xirmochoice==1){
//         const xaqiijin=["1.Haa", "2.MAYA"]
//         const text =prompt("ma huptaa inaad ku shubatid xirmo 1 USD\n" + xaqiijin.join("\n"))

//         if(text ==1){
//             document.write("waxad ku guleysatay inad ku shubatay 1 USD oo xirmo ah")
//         }
//         else
//         document.write("mahadsanid")
//     }
// }
        
//  if(userChoice==2){
//  const dibada=["1.xirmo USD 5", "2.xirmo USD 10", "3.xirmo USD 20"]
//  const dibadachoice = prompt("mid dooro\n"+ dibada.join("\n"))

//  if(dibadachoice == 1){
//     const xirmo =["1.Haa", "2.Maya"]
//     const text2 =prompt("ma huptaa inaad ku shubatid xirmo USD 5 oo dibada ah\n" + xirmo.join("\n"))
    
//     if(text2 ==1){
//         document.write("waxad ku guleysatay inad ku shubat0 xirmo 5 USD oo dibada ah")
//     }

//     else
//     document.write("mahadsanid")
//  }

//     if(dibadachoice ==2){
//         const choice = ["1.haa" , "2.maya"]
//         const textt = prompt("ma huptaa inad ku shubato xirmo 10 USD oo dibada ah\n" +choice.join("\n"))

//         if(textt==1){
//             document.write("wxad ku guleysatay inad ku shubto xirmo 10 usd oo dibada ah")
//         }
//         else
//         document.write("mahadsanid")
//     }
 

 
//         }
//     }
    



// else
// document.write("incorrect password")


// let number1 = parseInt(prompt("enter number 1"))
// let number2 = parseInt(prompt("enter number 2"))
// let number3 = parseInt(prompt("enter number 3"))

// if(number1>number2 && number1>number3){
//     document.write(number1)
// }
// else if(number2>number1 && number2>number3){
//     document.write(number2)
// }
// else if(number3>number2 && number3>number1){
//     document.write(number3)
// }



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     do {
//         var count = 0;
        
//         while (count < 5) {
//           console.log("Count: " + count);
//           count++;
//         }
//         document.write(count)  
//     } while (condition);
    
// }



// function myName(){
// document.write("My name is Suheila")
// console.log("My name is suheila")
// }

// myName();

// function Addition(){
//   let num1= parseInt(prompt("enter num1"))
//   let num2= parseInt(prompt("enter num1"))
//   document.write(num1+num2)

// }

// Addition();


// function maxNumber(){
// let number1 = parseInt(prompt("enter number 1"))
// let number2 = parseInt(prompt("enter number 2"))

// if(number1>number2){
//     document.write(number1)
// }
//  else if(number2>number1){    
//    document.write(number2)
// }
// else
// document.write("they are equal")
// }

// maxNumber()

// let name = "suheila";
// document.write("hello ", name)


// function myName(name ,age){
//   document.write("Hello ", name , "<br>");
 
  
 
// }
// myName("Suheila ")

// function info(name , age, address){
//   document.write(name, age, address ,"<br>")
// }
// info("Suheila ", 25,  " Hodan")
// info("Sumayya ", 30,  " warta")
// info("hazal ", 33,  " hodan")
// info("Sv7y14 ", 35,  " warta")

// function sum(num1 , num2){
//   return num1 + num2
  
// }
// document.write(sum(5,7))
// sum()

// function multiplication(){
//   let number1 = parseInt(prompt("enter number 1"))
//   let number2 = parseInt(prompt("enter number 2"))
 
//   return number1 * number2
 
// }
// document.write(multiplication())


// let sayHi = ()=>{
//   document.write("hello world")
// }

// sayHi()

// <----- Array-----!>

// let numbers =[1,2,3,4]
// document.write(numbers[3])

// let names  =["Suheila", "Aisha", "Edna"]
// document.write( "<br>",names[0])


// let friends =["Suheila", "Edna", "mounira", "Maria", "Amiira"]

// let num =0
// while(num< friends.length){
//   num++;

// document.write( "<br>",friends[num])

// }

// let friends =["Suheila", "Edna", "mounira", "Maria", "Amiira"]

// let newFriends =friends.join(" * <br>")

// document.write(newFriends)

// friends.pop()// removes last element
// friends.push("Amiira","Hayfa")// inserts to the last element

// friends.shift()// removes first element

// friends.unshift("Malika")/// adds to the first element
// document.write(friends)

// friends.sort()
// friends.reverse()
// friends.splice(0,2)

// document.write(friends)

// let ages = [10,20,30,40]

// let adultAge =ages.filter(function(newAge){
//   return newAge < 16
// })
  
// document.write(adultAge)

// let friends =["Suheila", "Abdi","Edna", "mounira", "Maria", "Amiira"]

// let name = friends.filter(function(newName){
//   return newName == "Abdi"
// })
// document.write(name)

// let friends =["Suheila", "Abdi","Edna", "mounira", "Maria", "Amiira"]

// friends.map(function(names){
//    document.write(names, "<br>")
// })




// let number1 = parseInt(prompt("enter number 1"))
// let number2 = parseInt(prompt("enter number 2"))
// let number3 = parseInt(prompt("enter number 3"))
// let number4 = parseInt(prompt("enter number 4"))
// let number5 = parseInt(prompt("enter number 5"))
// let number6 = parseInt(prompt("enter number 6"))
//  if(number1<number2 && number1<number3 && number1<number4 && number1<number5 &&number1<number6){
//     document.write(number1)
//  } else if(number2<number1 && number2<number3 && number2<number4 && number2<number5 && number2<number6){
//    document.write(number2)
// }
// else if(number3<number1 && number3<number2 && number3<number4 && number3<number5 && number3<number6){
//     document.write(number3)
// }
//  if(number4<number1 && number4<number2 && number4<number3 && number4<number5 && number4<number6){
//     document.write(number4)
//  } else if(number5<number1 && number5<number3 && number5<number4 && number5<number2 && number5<number6){
//    document.write(number5)
// }
// else if(number6<number1 && number6<number3 && number6<number4 && number6<number5 && number6<number2){
//     document.write(number6)
// }
// else
// document.write("they are equal")

// function findSmallestNumber() {
//    // Retrieve the input values
//    let num1 = parseInt(prompt("enter number 1"))
//    let num2 = parseInt(prompt("enter number 1"))
//    let num3 = parseInt(prompt("enter number 1"))
//    let num4 = parseInt(prompt("enter number 1"))
//    let num5 = parseInt(prompt("enter number 1"))
//    let num6 = parseInt(prompt("enter number 1"))

//    // Store the numbers in an array
//    let numbers = [num1, num2, num3, num4, num5, num6];

//    // Initialize the smallest number to the first element of the array
//    let smallestNumber = numbers[0];

//    // Loop through the array to find the smallest number
//    for (let i = 1; i < numbers.length; i++) {
//        if (numbers[i] < smallestNumber) {
//            smallestNumber = numbers[i];
//        }
//        else
//        document.write("they are equal")
//    }

//    // Display the smallest number
//    document.write(smallestNumber)
// }

// let btnElement = document.getElementById("btn")
// let classElement = document.getElementsByClassName("heading")[0]
// let title = document.getElementsByTagName("p")[0]
// let btnClass = document.getElementsByClassName("btn")[0]
// let getForm = document.querySelector("form")
// console.log(btnElement)
// console.log(classElement)
// console.log(title)
// console.log(btnClass)
// console.log(getForm)

// let title = document.querySelector("#title")
// title.innerHTML= "this is the dom js...."
// // changing the css
// title.style.color = "blue"

// let desc = document.querySelector(".desc")
// desc.innerHTML = "this is some description about js"
// desc.style.backgroundColor = "orange"
// desc.style.fontSize = "20px"
// desc.style.height= "200px"
// desc.style.textAlign= "center"
// desc.style.marginTop= "20px"
 

// let btn = document.querySelector("#btn")

// btn.innerHTML = "click here"
// btn.style.backgroundColor = "purple"
// btn.style.fontSize = "20px"
// btn.style.padding ="40px"
// btn.style.height = "200px"
// btn.style.width= "200px"
// btn.style.color = "white"
// btn.style.borderColor = "blue"
// btn.style.marginLeft= "90px";

// let btn = document.querySelector("#btn")
// btn.addEventListener("click", function(){
//    document.body.style.backgroundColor ="pink"
// })


let light = document.querySelector("#light")
let onBtn = document.querySelector("#onBtn")
let ofBtn = document.querySelector("#offBtn")

onBtn.addEventListener("click", function(){
 light.style.backgroundColor = "yellow"
})
ofBtn.addEventListener("click", function(){
 light.style.backgroundColor = "pink"
})

