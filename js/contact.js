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
    document.getElementById("htext").style.color ='rgb(0, 0, 0)';
    for (let elem of document.getElementsByClassName('htext'))
    {
        elem.style.color ='rgb(0, 0, 0)';
    }
    for (let elem of document.getElementsByClassName('otext'))
    {
        elem.style.color ='rgb(0, 0, 0)';
    }
    for (let elem of document.getElementsByClassName('stext'))
    {
        elem.style.color ='rgb(0, 0, 0)';
        elem.style.border = "1px solid black";
    }
    for (let elem of document.getElementsByClassName('borders'))
    {
        elem.style.border = "1px solid black";
    }
}
function DarkTheme() {
    document.getElementById('body').style.backgroundImage ='linear-gradient(to top, rgb(1, 6, 50), rgb(22, 46, 73))';
    document.getElementById("htext").style.color ='rgb(255, 255, 255)';
    for (let elem of document.getElementsByClassName('htext'))
    {
        elem.style.color ='rgb(255, 255, 255)';
    }
    for (let elem of document.getElementsByClassName('otext'))
    {
        elem.style.color ='rgb(255, 255, 255)';
    }
    for (let elem of document.getElementsByClassName('stext'))
    {
        elem.style.color ='rgb(255, 255, 255)';
        elem.style.border = "1px solid white";
    }
    for (let elem of document.getElementsByClassName('borders'))
    {
        elem.style.border = "1px solid white";
    }
}

let lastid = 'phone';
function Choose(id) {
    document.getElementById(lastid).style.display = 'none';
    if (id !== lastid) {
        document.getElementById('r'+ lastid).checked = false;
    }
    if (document.getElementById('rno').checked) {
        document.getElementById('rno').checked = false;
    }
    if (id !== "no") {
        document.getElementById(id).style.display = 'flex';
        lastid = id;
    }
    else {
        document.getElementById('rno').checked = true;
    }
}

function Ask(elem) {
    if (elem.value === "Работа") {
        document.getElementById("check").style.display = "inline";
    }
    else {
        document.getElementById("check").style.display = "none";
    }
}

function Send() {

}
function Clear() {
    /*for (let elem of document.getElementsByClassName('itext'))
    {
        elem.value = "";
    }
    Choose("phone");
    document.getElementById("rphone").checked = true;
    for (let elem of document.getElementsByClassName('check'))
    {
        elem.checked = false;
    }
    document.getElementById("check").style.display = "none";
    for (let elem of document.getElementsByClassName('option'))
    {
        if (elem.value === "Ничего") {
            elem.selected = "selected";
        }
    }
    document.getElementById("text").value = "";*/
}