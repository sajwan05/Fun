function showMessage() {
    const messages = ['text-1', 'text-2', 'text-3', 'text-4', 'text-5'];
    messages.forEach((id, index) => {
        setTimeout(() => document.getElementById(id).classList.add("show"), index * 1000);
    });
}


function emojiRain(emoji) {
    for (let i =0; i< 20; i++){
        let fallingEmoji = document.createElement("div");
        fallingEmoji.className = document.createElement("div");
        fallingEmoji.className = "falling-emoji";
        fallingEmoji.innerText = emoji;
        fallingEmoji.style.left = Math.random() * 100 + "vw";
        fallingEmoji.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(fallingEmoji);
        setTimeout( () => fallingEmoji.remove(), 4000);
    }
}


function confettiRain() {
    for (let i = 0; i < 100; i++) { // Reduced confetti count
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (Math.random() * 1.5 + 1.5) + "s"; // Reduced duration
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2500);
    }
}




function spinWheel() {
    const spinner = document.querySelector('.spinner');
    const messages = ["Pucchu idhar aao", "Have a blast!", "kuchi kuchi puchii", "Love you!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    spinner.style.transform = `rotate(${Math.random() * 3600}deg)`;
    setTimeout(() => spinner.querySelector('div').textContent = randomMessage, 1000);
}

function playBirthdayAudio() {
    const audio = document.getElementById('birthdayAudio');
    audio.play();
}


