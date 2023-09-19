const pwdCell1 = document.querySelector('#pwd');
const pwdCell2 = document.querySelector('#confPwd');
const submit = document.querySelector('#submit');
const msg = document.querySelector('#msg');

submit.disabled = true;

window.addEventListener('input', () => {
    if (pwdCell1.value == "" || pwdCell2.value == "") {
        submit.disabled = true;
        msg.classList = "";
        pwdCell1.classList = '';
        pwdCell2.classList = '';
    } else if ( pwdCell1.value != pwdCell2.value) {
        msg.classList = 'errMsg';
        pwdCell1.classList = 'error';
        pwdCell2.classList = 'error';
        submit.disabled = true;
    } else {
        msg.classList = "";
        submit.disabled = false;
        pwdCell1.classList = '';
        pwdCell2.classList = '';
    }
});


