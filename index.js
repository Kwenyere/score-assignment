const input = document.getElementById("Input");
const button = document.getElementById("button");
const msg = document.getElementById("msg")

button.addEventListener("click", () => {
    const scoreInput = Number(input.value);
    msg.classList.add("msg");
    if (scoreInput >= 0 && scoreInput <= 30) {
        msg.innerHTML = 'Try Harder your score is low!';
    }
    else if(scoreInput >= 31 && scoreInput <= 60) {
        msg.innerHTML = 'Hey that is a good score but you can do better!'
    }
    else if (scoreInput >= 61 && scoreInput <= 100){
        msg.innerHTML = 'Wow you did great!'
    }
    else{
        msg.innerHTML = 'Please insert a valid score!'
    }
    
})