function checkTheme(page) {
    if (localStorage.getItem('theme_id') === null)
    {
        localStorage.setItem('theme_id', 'light');
        localStorage.setItem('theme_url', "Resources/Images/Selestia.png")
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
        localStorage.setItem('theme_url', "Resources/Images/Luna.png")
        img.src = "../Resources/Images/Luna.png";
        img.id ="dark";
    }
    else
    {
        localStorage.setItem('theme_id', 'light');
        localStorage.setItem('theme_url', "Resources/Images/Selestia.png")
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
            if (document.getElementById("atext").value = "Достигнут лимит") {
                document.getElementById("atext").value ='';
            }
        }
        document.getElementById("store").appendChild(div);
        div.appendChild(text);
        div.appendChild(but);

    }
}