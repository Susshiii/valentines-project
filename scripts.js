let yesSize = 20;
let noClicks = 0;
let messages = [
    "Please think again 😢", "Are you sure? 🥺", "But I really like you! 💕", "Don't break my heart 💔",
    "I'll be really sad 😭", "You know you want to! 😉", "Pretty please? 🥰", "I made this just for you! ❤️",
    "Last chance! 😖", "Okay... now you HAVE to say yes! 😆"
];
let sadGifs = [
    "https://media.giphy.com/media/d2lcHJTG5Tschttps://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ1NHR4ZTNjNW5hZnJhM2MxYTI3d2F0YTdkZDFsOXF0eDA1dHU2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41lTlEowSJv98r7O/giphy.gifg/giphy.gif", 
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTlkN293eDI0bmFhNXIyZmdkZGZrOWs5a2l6dDNhaGt6cW12eWhsMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12Bpme5pTzGmg8/giphy.gif", 
    "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif?cid=790b7611a9d7owx24naa5r2fgddfk9k9kizt3ahkzqmvyhl3&ep=v1_gifs_search&rid=giphy.gif&ct=g", 
    "https://media.giphy.com/media/GAoJy8Ti2pj3y/giphy.gif?cid=790b7611a9d7owx24naa5r2fgddfk9k9kizt3ahkzqmvyhl3&ep=v1_gifs_search&rid=giphy.gif&ct=g", 
];
let messageIndex = 0;

document.getElementById("yesBtn").addEventListener("click", sayYes);
document.getElementById("noBtn").addEventListener("click", growYesButton);

function sayYes() {
    document.getElementById('message').innerText = "I LOVE YOU THE MOST CUPCAKES! ❤️🥰";
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('gif').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmx3M2R3MWRpYXgwZHRwc3A3bnh0M3k0Mmk3dTV1dXNqejlzeW16NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13G7hmmFr9yuxG/giphy.gif"; // Happy Pikachu
    startHearts();
}

function growYesButton() {
    noClicks++;
    if (noClicks >= 10) {
        document.getElementById('yesBtn').style.width = '100vw';
        document.getElementById('yesBtn').style.height = '100vh';
        document.getElementById('yesBtn').style.fontSize = '50px';
    } else {
        yesSize += 10;
        document.getElementById('yesBtn').style.fontSize = yesSize + 'px';
    }
    document.getElementById('message').innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    document.getElementById('gif').src = sadGifs[Math.min(noClicks, sadGifs.length - 1)];
}

function startHearts() {
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    document.body.appendChild(heart);
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    setTimeout(() => { heart.remove(); }, 2000);
}
