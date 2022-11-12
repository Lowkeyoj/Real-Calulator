
const input = document.getElementById('input-text');





let add = function(total, num){
  return  total + num;
};

let divide = function(total, num){
   return total / num; 
};

let multiply = function(total, num){
    return total * num;
}

let power = function(num, num2){
    return Math.pow(num, num2);
}

let subtract = function(total, num){
    return total - num;
}

const opp = [add, subtract, divide, multiply, power];

let cal = (num)=>{
    input.value = input.value+num;
}

let cl = () =>{
  input.value = '';  
}

let dl = () =>{
 input.value = input.value.slice(0, -1); 
}

let results = () =>{
  input.value = eval(input.value);
}