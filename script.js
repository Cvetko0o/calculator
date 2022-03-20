let input = document.getElementById('input');
let numbers = document.querySelectorAll('.numbers button');
let operators = document.querySelectorAll('.operators button');
let point = document.getElementById('point');
let clear = document.getElementById('clear');
let result = document.getElementById('result');
let container;

numbers.forEach( number => { 
    number.addEventListener('click', function(){
        
        if(number.textContent == 'C'){
            
        } else {
            input.textContent += number.textContent;
        }
        container += input.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', function(){
        input.textContent += operator.textContent;
        container += input.textContent;
    });
});

clear.addEventListener('click', function(){
    input.textContent = input.textContent.slice(0, -1);
 });

result.addEventListener('click', function(){

}); 