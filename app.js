const pwdCell1 = document.querySelector('#pwd');
const pwdCell2 = document.querySelector('#confPwd');
const submit = document.querySelector('#submit');
const msg = document.querySelector('#msg');

submit.disabled = true;

window.addEventListener('input', () => {
    if (pwdCell1.value == "" || pwdCell2.value == "") {
        submit.disabled = true;
        msg.classList = "";
    } else if ( pwdCell1.value != pwdCell2.value) {
        msg.classList = 'errMsg';
        submit.disabled = true;
    } else {
        msg.classList = "";
        submit.disabled = false;
    }
});


