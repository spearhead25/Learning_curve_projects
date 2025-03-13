const time = document.getElementById('timeInput');
const btn = document.getElementById('startButton');
const countdown = document.getElementById('countdown');
let intervalId;

function timer() {
    const input = time.value.trim();
    let count = parseInt(input);

    if(isNaN(count)){
        countdown.innerText = "Enter a valid number!";
        return;
    }
    if(count <= 0){
        countdown.innerText = "Enter number greater than 0";
        return;
    }

    time.value = '';
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
        countdown.innerText = `countdown: ${count}`;
        count--;

        if(count < 0){
            clearInterval(intervalId);
            countdown.innerText = "Time's up!";
        }
    }, 1000);
};

btn.addEventListener('click', timer);