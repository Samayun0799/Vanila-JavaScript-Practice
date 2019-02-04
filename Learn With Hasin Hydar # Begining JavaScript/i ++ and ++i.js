
var i = 0
while(i++ < 5){
  console.log(i)
  // 0
  // 1
  // 2
  // 3
  // 4

}

i = 0
console.log("\n reset \n" , i)


while( ++i <5){
   console.log(i)
}

// var y = 4
// var x = y++
// console.log(x,y)
var y = 4
--y
var x = --y
console.log(x,y)


/*

x = y++ means 
x = y and
y = y+1
*/