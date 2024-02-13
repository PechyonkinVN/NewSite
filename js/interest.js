function checkTheme(page) {
    if (localStorage.getItem('theme_id') === null)
    {
        localStorage.setItem('theme_id', 'light');
        localStorage.setItem('theme_url', "../Resources/Images/Selestia.png")
        console.log("Storage of Theme, hadn't been found. Create new.")
    }
    else
    {
        console.log("Load Theme storage");
        img = document.getElementById('light');
        img.id = localStorage.getItem('theme_id');
        if (page) {
            img.src = "../" + localStorage.getItem('theme_url');
        }
        else {
            img.src = localStorage.getItem('theme_url');
        }
        switchTheme(img.id);
    }
}
function changeTheme(img) {
    if (img.id === "light")
    {
        localStorage.setItem('theme_id', 'dark');
        localStorage.setItem('theme_url', "../Resources/Images/Luna.png")
        img.src = "../Resources/Images/Luna.png";
        img.id ="dark";
    }
    else
    {
        localStorage.setItem('theme_id', 'light');
        localStorage.setItem('theme_url', "../Resources/Images/Selestia.png")
        img.src = "../Resources/Images/Selestia.png";
        img.id ="light";
    }
    switchTheme(img.id);
    console.log("Theme have been change to " + img.id)
}
function switchTheme(id) {
    switch (id)
    {
        case 'light': LightTheme(); break;
        case 'dark': DarkTheme(); break;
    }
}
function LightTheme() {
    document.getElementById('body').style.backgroundImage ='linear-gradient(to top, rgb(214, 242, 252), rgb(240, 251, 255))';
}
function DarkTheme() {
    document.getElementById('body').style.backgroundImage ='linear-gradient(to top, rgb(1, 6, 50), rgb(22, 46, 73))'; 
}

let slides = document.querySelectorAll(".slide");
let current = 0;

function Left() {
    slides = document.querySelectorAll(".slide");
    slides[current].style.display = "none";
    if (current === 0) {
        current = slides.length;
    }
    slideLeft();
}
function Right() {
    slides = document.querySelectorAll(".slide");
    slides[current].style.display = "none";
    if (current === slides.length-1) {
        current = -1;
    }
    slideRight();
}
function slideLeft() {
    slides[current - 1].style.display = "block";
    current--;
}
function slideRight() {
    slides[current + 1].style.display = "block";
    current++;
}
let count = 0;
function Add() {
    if (count > 8) {
      return document.getElementById("atext").value = "Достигнут лимит";
    }
    else if (document.getElementById('atext').value =='' || document.getElementById('atext').value =="Пустое поле"){
      document.getElementById('atext').value = "Пустое поле";
    }
    else
    {
      console.log(count);
      let div = document.createElement('div');
      div.style.display = "flex";
      div.style.gap = "0.6vw";
      div.style.paddingBottom = "1.3vw";
      div.class = "elem";
      let text = document.createElement('p');
      text.style.margin = 0;
      text.textContent = document.getElementById('atext').value;
      document.getElementById('atext').value = '';
      let but = document.createElement('button');
      count++;
      but.textContent = "Удалить";
      but.onclick = function() {
        document.getElementById("store").removeChild(div);
        count--;
        if (document.getElementById("atext").value = "Достигнут лимит")
          document.getElementById("atext").value ='';
      }
      document.getElementById("store").appendChild(div);
      div.appendChild(text);
      div.appendChild(but);

    }
} 

function Del(id) {
    
}






const workTimer = document.getElementById('work-timer');
const shortTimer = document.getElementById('short-timer');
const longTimer = document.getElementById('long-timer');

shortTimer.style.display = "none";
longTimer.style.display = "none";

const timerOptionBtns = document.querySelectorAll('.timer-option button');
const timerSettingsBtns = document.querySelectorAll('.timer-settings button');

document.getElementById('reset-button').style.display = "none"
document.getElementById('continue-button').style.display = "none"
document.getElementById('pause-button').style.display = "none"

let intervalId;
let isRunning = false;
let currentTimer = "work";
let minutes, seconds;

function updateTimerDisplay() {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10  && seconds != 0 ? `0${seconds}` : `${seconds}`;
  
    workTimer.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
    }
  

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    intervalId = setInterval(function () {
    if (seconds > 0) {
      seconds--;
    } 
    else {
      if (minutes === 0) {
        clearInterval(intervalId);
        isRunning = false;
        switchTimer();
      } else {
        seconds = 59;
        minutes--;
      }
    }

    updateTimerDisplay();
    }, 1000);
}
function stopTimer() {
    if (!isRunning) return;

    clearInterval(intervalId);
    isRunning = false;
}
function resetTimer() {
    stopTimer();
    if (currentTimer === "work") {
      minutes = 25;
    } else if (currentTimer === "short") {
      minutes = 5;
    } else {
      minutes = 15;
    }
    seconds = '00';
    updateTimerDisplay();
}
function switchTimer() {
    if (currentTimer === "work") {
      currentTimer = "short";
      shortTimer.style.display = "block";
      workTimer.style.display = "none";
      minutes = 5;
    } else if (currentTimer === "short") {
      currentTimer = "long";
      longTimer.style.display = "block";
      shortTimer.style.display = "none";
      minutes = 15;
    } else {
      currentTimer = "work";
      workTimer.style.display = "block";
      longTimer.style.display = "none";
      minutes = 25;
    }
    seconds = '00';
    updateTimerDisplay();
    resetTimer();
}
timerOptionBtns.forEach(button => {
    button.addEventListener('click', () => {
    timerOptionBtns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (button.id === "work-button") {
      currentTimer = "work";
    } else if (button.id === "short-button") {
      currentTimer = "short";
    } else {
      currentTimer = "long";
    }

    resetTimer();
    });
});
timerSettingsBtns.forEach(button => {
    button.addEventListener('click', () => {
    if (button.id === "start-button") {
        document.getElementById('start-button').style.display = "none";
        document.getElementById('reset-button').style.display = "";
        document.getElementById('pause-button').style.display = "";
        startTimer();
    }   else if (button.id === "pause-button") {
          document.getElementById('continue-button').style.display = "";
          document.getElementById('pause-button').style.display = "none";
          stopTimer();
    }   else if (button.id === "continue-button") {
        document.getElementById('pause-button').style.display = "";
        document.getElementById('continue-button').style.display = "none";
        startTimer();
    }   else if (button.id === "reset-button") {
        document.getElementById('start-button').style.display = "";
        document.getElementById('reset-button').style.display = "none";
        document.getElementById('pause-button').style.display = "none";
        document.getElementById('continue-button').style.display = "none";
        resetTimer();
    }
    });
});
resetTimer();