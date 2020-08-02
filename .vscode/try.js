
let myString = ")";

function isEqual(str){
   let stack = [];

  for(let i = 0; i < str.length; i ++){
    if(str[i] === "("){
      console.log(stack)
      stack.push(str[i])
      console.log(stack)
      continue;
    }
    else if(str[i] === ")"){
      if(stack.length === 0){
        console.log(stack)
        return false;
      }
    }
    else{
      stack.pop()
      console.log(stack)
    }
  }
return stack.length === 0? true:false
}


console.log(isEqual(myString));