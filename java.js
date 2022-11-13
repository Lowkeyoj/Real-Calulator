
const input = document.getElementById('input-text');


//let num = 0;
//let testcase = input.value;
//testcase = testcase.replace('+', ' ');
//testcase = testcase.split(' ');
//testcase = testcase.map(Number)


let add = function(total, num){
 return total + num;
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
  if(input.value.includes('+')){
    let plus = input.value;
    plus = plus.replace('+', ' ');
    plus = plus.split(' ');
    plus = plus.map(Number);
    plus = plus.reduce(add);
    input.value = plus;
  }else if(input.value.includes('-')){
    let sub = input.value;
    sub = sub.replace('-', ' ');
    sub = sub.split(' ');
    sub = sub.map(Number);
    sub = sub.reduce(subtract);
    input.value = sub;
  }else if(input.value.includes('*')){
    let multi = input.value;
    multi = multi.replace('*', ' ');
    multi = multi.split(' ');
    multi = multi.map(Number);
    multi = multi.reduce(multiply);
    input.value = multi;
  }else if(input.value.includes('/')){
    let division = input.value;
    division = division.replace('/', ' ');
    division = division.split(' ');
    division = division.map(Number);
    division = division.reduce(divide);
    input.value = division;
  }else if(input.value.includes('^')){
    let pow = input.value;
    pow = pow.replace('^', ' ');
    pow = pow.split(' ');
    pow = pow.map(Number);
    pow = power(pow[0],pow[1]);
    input.value = pow;
  }
}