function Login(elem) {
    elem.style.color ="black";
}
function LoginW(elem) {
    elem.style.color='red';
}








function Check() {
    if (document.getElementById('password').textContent != document.getElementById('password2').textContent)
    {
        this.target.setCustomValidity('Разные пароли');
    }
    return false;
}