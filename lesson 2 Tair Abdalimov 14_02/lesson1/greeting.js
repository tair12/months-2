// const array = [
//     { git
//         username: "jack"
//         full_name: "jack Barbaro"
//     },
//     {
//         username: "jack"
//         full_name: jack Barbaro
//     },
//     { 
//         username: "jack"
//         full_name: "jack Barbaro"
//     },
// ]
// for( let i = 2; i < array.length; i++){
//     console,log(array[i])
// }
// for(let user of array){
//     console.log(user)
// }
// const obj = {
//     key1: "b1"
//     key2: "b2"
//     key3: "b3"
//     key4: "b4"
//     key5: "b5"
//     key6: "b6"
//     key7: "b7"
//     key8: "b8"
//     key9: "b9"
// }
// for(let key in obj){
//     console.log(obj)
// }
// let i = 0;
//  while( i < 5 ){
//      console.log("hello")
//      i++
//  }
//  const users = [
//      {
//          username: "jack",
//          salary:5000
//      }
//      {
//          username: "john",
//          salary:500
//      }
//      {
//          username: "joe",
//          salary:10000
//      }
//  ]
//  const filteredUsers = users.filter(user=> user.salary > 5000)
//  console.log ( filtredUser)
 
//  const   tests = [
//      {
//          username: "red",
//          power:5000
//      },
//      {
//          username: "black",
//          power:7000
//      },
//      {
//          username: "blue",
//          power:10000
//      },
     
//      {
//          username: "green",
//          power:15000
//      },
//  ]
//  const filteredTests = tests.filter( test => test.power > 10000 )
//  console.log( filteredTests)
 
// const array [
//    {
//       username: "jack",
//       fullname: "Rose"
//    },
//    {
//       username: "jack",
//       fullname: "Rose"
//    },
//    {
//       username: "jack",
//       fullname: "Rose"
//    },
//    {
//       username: "jack",
//       fullname: "Rose"
//    },
//    {
//       username: "jack",
//       fullname: "Rose"
//    }
// ]
// for(let i = 0; i < array.lengh; i++) {
//    console.log(array[i])
// }
// function getFullName(user, age) {
//    console.log(user, age)
// }
// const blabl ={
//    first_name: "john",
//    last_name: "Barbara"
// }
// getFullName(blabl, 34);
// function numbers(number1, number2){
//    if(number1 > number2){
//       console.log("ПЕРВОЕ БОЛЬШЕ")
//    } else if (number1 < number2){
//       console.log("второе больше")
//    }else {
//       console.log(" они равны")
//    }
// }
// const number1 = 13
// const number2 = 11
// numbers (343,343)

// function twoMass (arr1, arr2){
//    console.log(arr1, arr2)
//    if(arr1.length > arr2.length){
//       console.log("arr > arr2")
//    } else if(arr1.length < arr2.length){
//       console.log("arr < arr2 ")
//    } else ("arr1.length === arr2")
// }
// const arr1 = [132,4, 1,]

// function f(){
//    for(let n=1; n < 100; n++){
//       if(n % 15 === 0){
//          console.log("FizzBuzz")
//       } else if (n % 5 === 0){
//          console.log ("Buzz")
//       } else if(n % 3 === 0){
//           console.log ("Fizz")
//       } else {
//    console.log(n)
//       }
//    }
// }
// f();
// function counter(){

//    for( number1 > number2 )
//    console.log( первое больше)
//     if(number1 < number2){
//       console.log(первое менше)
//     } else if (number1 === number2){
//        console.log(они равны )
//     }
//     return(counter)
// }
// const number1 = 0
// const number2 = 100
// counter( );


  function counter ( ){
  if (first_namber > last_namber)
  
   console.log (first_namber + "> " +  last_namber)
} else if( first_namber < last_namber){
   console.log( first_namber + "<" last_namber )
} else{
   console.log(first_namber + "=" + last_namber)
}
return counter

const first_namber = prompt ( "Введите число")
const last_namber = prompt ( "Введите   второе число")

const button = document.getElementById("button");
const input = document.getElementById("input")


button.onclick = () => {
    const div = document.createElement('div')
    const deLeteButton = document.createElement("button")
    deLeteButton.innerText = "delete"
    deLeteButton.onclick = (e) => {
        console.log(e)
    }
    div.setAttribute("class", "block");
    div.innerText = input.value;

    div.append(deLeteButton)
    document.body.append(div)
}
