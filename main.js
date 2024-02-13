function checkTheme() {
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
        img.src = localStorage.getItem('theme_url');
        switchTheme(img.id);
    }
}
function changeTheme(img) {
    if (img.id === "light")
    {
        localStorage.setItem('theme_id', 'dark');
        localStorage.setItem('theme_url', "Resources/Images/Luna.png")
        img.src = "Resources/Images/Luna.png";
        img.id ="dark";
    }
    else
    {
        localStorage.setItem('theme_id', 'light');
        localStorage.setItem('theme_url', "Resources/Images/Selestia.png")
        img.src = "Resources/Images/Selestia.png";
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
    document.getElementById('me-sec').style.backgroundImage = ' linear-gradient(to bottom right, rgba(207, 70, 150, 0.60), rgba(203, 210, 73, 0.60))';
    for (let elem of document.getElementsByClassName('htext'))
    {
        elem.style.color ='rgb(0, 0, 0)';
    }
    for (let elem of document.getElementsByClassName('itext'))
    {
        elem.style.color ='rgb(0, 0, 0)';
    }
    document.getElementById('skills').style.backgroundImage = 'linear-gradient(to top right, rgba(77, 207, 70, 0.6), rgba(210, 73, 73, 0.6))';
}
function DarkTheme() {
    document.getElementById('body').style.backgroundImage ='linear-gradient(to top, rgb(1, 6, 50), rgb(22, 46, 73))';
    document.getElementById('me-sec').style.backgroundImage = 'linear-gradient(to bottom right, rgba(207, 70, 150, 0.90), rgba(203, 210, 73, 0.90))';
    for (let elem of document.getElementsByClassName('htext'))
    {
        elem.style.color ='rgb(255, 255, 255)';
    }
    for (let elem of document.getElementsByClassName('itext'))
    {
        elem.style.color ='rgb(255, 255, 255)';
    }
    document.getElementById('skills').style.backgroundImage = 'linear-gradient(to top right, rgba(77, 207, 70, 0.9), rgba(210, 73, 73, 0.9))';
}

let videoOn = false;
let mute = true;
function Muted() {
    let video = document.getElementById("pootis");
    video.style.transform = "translateX(-50px)";
    video.play();
    MouseOff();
    videoOn = true;
    if (video.muted) {
        console.log('Video voice on')
        video.muted = false;
        mute = false;
    }
    else {
        console.log('Video voice off')
        video.muted = true;
        mute = true;
    }
}
function MouseOn() {
    if (!videoOn) {
        document.getElementById("dont").style.animation = "shaking 0.05s infinite";
    }
}
function MouseOff() {
    document.getElementById("dont").style.animation = "none";
}

let i = 0;
function Animation() {
    console.log(document.getElementById('listImg1').clientHeight);
    elem = document.getElementById('listground2');
    if (i%2 === 0) {
        //console.log("1");
        elem.style.animation = "fadein 2s linear forwards";
    }
    else {
        //console.log("2");
        elem.style.animation = "fadeout 2s linear forwards"
    }
    i++;
}

let rickroll = true;
let time = setInterval(ButtonHide, 1000);
function Info() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("pootis").muted = true;
    document.getElementById("NGGYU").play();
    rickroll = false;
    console.log("Press Info button");
}
function Choose() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    if (videoOn) {
        if (mute) {
            document.getElementById("pootis").muted = true;
        }
        else {
            document.getElementById("pootis").muted = false;
        }
    }
    document.getElementById("NGGYU").pause();
    document.getElementById("NGGYU").currentTime = 0;
    document.getElementById("btn-container").style.display = "none";
    console.log("Understand, that you have been rickrolled");
}
function ButtonHide() {
    if (!rickroll)
    {
        time++;
        if (time === 10)
        {
            time = 1;
            rickroll = true;
            document.getElementById("btn-container").style.display = "flex";
        }       
    }
}