const redCircle = document.querySelector('.circle1');
const yellowCircle = document.querySelector('.circle2');
const greenCircle = document.querySelector('.circle3');

document.getElementById('btn1').addEventListener('click', function() {
    redCircle.style.backgroundColor = 'red';
    yellowCircle.style.backgroundColor = 'white'; 
    greenCircle.style.backgroundColor = 'white';  
});

document.getElementById('btn2').addEventListener('click', function() {
    redCircle.style.backgroundColor = 'white';    
    yellowCircle.style.backgroundColor = 'white'; 
    greenCircle.style.backgroundColor = 'green';
});

document.getElementById('btn3').addEventListener('click', function() {
    redCircle.style.backgroundColor = 'white';   
    yellowCircle.style.backgroundColor = 'yellow';
    greenCircle.style.backgroundColor = 'white';  
});
