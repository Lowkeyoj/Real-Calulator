
const input = document.getElementById('input-text');
const dot = document.getElementById('dot');

let num = 0;

let percent = function (n){
  return n / 100;
}


let fac = function (n){
 let x = 1;
 for(q = n; q > 0; q--){
  x  *= q;
 }return x; 
}

let add = function (total, num) {
  return total + num;
};

let divide = function (total, num) {
  return total / num;
};

let multiply = function (total, num) {
  return total * num;
}

let power = function (num, num2) {
  return Math.pow(num, num2);
}

let subtract = function (total, num) {
  return total - num;
}

const opp = [add, subtract, divide, multiply, power];

let cal = (num) => {
  input.value = input.value + num;
  if(num.includes('.')){
  dot.disabled = true;
  }else dot.disabled = false;
   
}

let cl = () => {
  input.value = '';
}

let dl = () => {
  input.value = input.value.slice(0, -1);
}

let results = () => {
  
  
  if(input.value.includes('+')) {
    let plus = input.value;
    plus = plus.replace('+', ' ');
    plus = plus.split(' ');
    plus = plus.map(Number);
    plus = plus.reduce(add);
    input.value = plus;
  } else if (input.value.includes('-')) {
    let sub = input.value;
    sub = sub.replace('-', ' ');
    sub = sub.split(' ');
    sub = sub.map(Number);
    sub = sub.reduce(subtract);
    input.value = sub;
  } else if (input.value.includes('*')) {
    let multi = input.value;
    multi = multi.replace('*', ' ');
    multi = multi.split(' ');
    multi = multi.map(Number);
    multi = multi.reduce(multiply);
    input.value = multi;
  } else if (input.value.includes('/')) {
    let division = input.value;
    division = division.replace('/', ' ');
    division = division.split(' ');
    division = division.map(Number);
    division = division.reduce(divide);
    input.value = division;
  } else if (input.value.includes('^')) {
    let pow = input.value;
    pow = pow.replace('^', ' ');
    pow = pow.split(' ');
    pow = pow.map(Number);
    pow = power(pow[0], pow[1]);
    input.value = pow;
  }else if(input.value.includes('!')){
    let factorial = input.value;
    factorial = factorial.replace('!', '');
    factorial = parseInt(factorial);
    input.value = fac(factorial);
    }else if(input.value.includes('%')){
    let per = input.value;
    per = per.replace('%', '');
    per = parseInt(per);
    input.value = percent(per); 
    } 
}