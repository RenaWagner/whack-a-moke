const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const btn = document.querySelector('.start');
btn.disabled = true;
const easyBtn = document.querySelector('.easy');
const medBtn = document.querySelector('.medium');
const diffBtn = document.querySelector('.difficult');
easyBtn.disabled = false;
medBtn.disabled = false;
diffBtn.disabled = false;
let speed = 0;
let timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare()
{
    square.forEach(function(currentItem) 
    {
        currentItem.classList.remove('mole'); //clear moles
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id; // number 1-9 : Does hitPosition need to be declared?
}

square.forEach(currentItem => {
    currentItem.addEventListener('mouseup',() =>
    {
        if(currentItem.id === hitPosition)
        {
            result++;
            score.textContent = result;
        }
    });
    
});

function moveMole()
{
    let timerId = null;
    timerId = setInterval(randomSquare,speed);
}


function countDown ()
{
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0)
    {
        clearInterval(randomSquare);
        currentTime = 0;
        timeLeft.textContent = currentTime;
        if(confirm(`Game is over! Your final score is ${result}!`))
        {
            location.reload();
        }
        
    }
}


easyBtn.addEventListener('click', ()=>
{
    speed = 1000;
    btn.disabled = false;
});

medBtn.addEventListener('click', ()=>
{
    speed = 600;
    btn.disabled = false;
});

diffBtn.addEventListener('click', ()=>
{
    speed = 300;
    btn.disabled = false;
});


btn.addEventListener('click', ()=>
{
    moveMole();
    let time = setInterval(countDown, 1000);
    result = 0;
    btn.disabled = true;
});