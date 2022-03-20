let input = document.getElementsByClassName('input');
let multiply = document.getElementById('*');
let divide = document.getElementById('/');
let add = document.getElementById('plus');
let subtract = document.getElementById('minus');
let number = document.getElementsByClassName('numbers');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let point = document.getElementById('point');
let clear = document.getElementById('clear');
let result = document.getElementById('result');


add.addEventListener('click', function () {
    input[0].textContent += '+';
});

subtract.addEventListener('click', function () {
    input[0].textContent += '-';
});

multiply.addEventListener('click', function () {
    input[0].textContent += '*';
});

divide.addEventListener('click', function () {
    input[0].textContent += '/';
});

one.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

two.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

three.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

four.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

five.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

six.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

seven.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

eight.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

nine.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

zero.addEventListener('click', function(){
    input[0].textContent += Number(this.id);
});

point.addEventListener('click', function(){
    input[0].textContent += '.';
});

clear.addEventListener('click', function(){
    input[0].textContent = input[0].textContent.slice(0, -1);
});

result.addEventListener('click', function(){

}); 