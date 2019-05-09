// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e) {
    const name = document.getElementById('name');
    const re = /^[A-Za-z\s]{2,20}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip(e) {
    const zip = document.getElementById('zip');
    re = /^[0-9]{4,5}(-[0-9]{4})?$/;

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }

}

function validateEmail(e) {
    const email = document.getElementById('email');
    re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(e) {
    const phone = document.getElementById('phone');
    re = /^[\+0-9]{11,14}$/;
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}