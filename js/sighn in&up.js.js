var NameInput = document.getElementById('Name');
const wrong = document.getElementById('error1');
NameInput.addEventListener('input', () => {
    const NamePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    if (NamePattern.test(NameInput.value)) {
        wrong.textContent = 'valid user name';
        wrong.style.color = "green"
    } else {
        wrong.textContent = 'please enter a valid user name';
        wrong.style.color = 'red';
    }
});
const emailInput = document.getElementById('email');
const error = document.getElementById('error');

emailInput.addEventListener('input', () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(emailInput.value)) {
        error.textContent = 'Valid email address';
        error.style.color = 'green';
    } else {
        error.textContent = 'please enter a valid email address';
        error.style.color = 'red';
    }
});

const emailIn = document.getElementById('Email');
const text = document.getElementById('text');

emailIn.addEventListener('input', () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(emailIn.value)) {
        text.textContent = 'Valid email address';
        text.style.color = 'green';
    } else {
        text.textContent = 'please enter a valid email address';
        text.style.color = 'red';
    }
});

const passwordInput = document.getElementById('Password');
const message = document.getElementById('message');
passwordInput.addEventListener('input', () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{10}$/;
    if (passwordPattern.test(passwordInput.value)) {
        message.textContent = 'Valid password';
        message.style.color = 'green';
    } else {
        message.textContent = 'please enter a valid password';
        message.style.color = 'red';
    }
});
const passwordIn = document.getElementById('Pass');
const MS = document.getElementById('MS');
passwordIn.addEventListener('input', () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{10}$/;
    if (passwordPattern.test(passwordIn.value)) {
        MS.textContent = 'Valid password';
        MS.style.color = 'green';
        Mesage.remove()
        M.remove()
    } else {
        MS.textContent = 'please enter atleast 1-8 character';
       M.textContent="longer with numbers,symbol,small"
       Mesage.textContent="and capital letter"
       MS.style.color = 'Red';
       M.style.color='Red'
       Mesage.style.color='Red'
    }
});
// الحصول على الزر وجميع العناصر التي تحتوي على نفس الفئة
let SignIn_btn = document.getElementById("SignIn-btn");
var elements = document.querySelectorAll(".pragraph");

// تعريف المحتويات الجديدة
var newContents = ["Welcome, back!", "Enter your personal details to use all of", "site features"];
var originalContents = ["Hello, Friend!", "Rehister with Your personal details to use", "all of the site features"];
var currentIndex = 0;
var isSignedIn = false;

// إضافة حدث الضغط على الزر
SignIn_btn.addEventListener("click", function() {
    // تبديل المحتوى
    if (!isSignedIn) {
        elements.forEach(function(element, index) {
            element.textContent = newContents[(currentIndex + index) % newContents.length];
        });
        this.textContent = 'Sign In';
        isSignedIn = true;
        const cssText = `  .box{position: absolute;
            display: flex;
            flex-direction: column;
            top: 0;
            left: 0;
            background-color: rgb(133, 205, 26);
            width: 275px;
            height: 319px;
            border-bottom-right-radius: 139px;
            border-top-right-radius: 105px;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;}`
        document.querySelector("style").innerText = cssText;
    } else {
        elements.forEach(function(element, index) {
            element.textContent = originalContents[index];
        });
        this.textContent = 'Sign Up';
        isSignedIn = false;
        document.querySelector("style").innerText = "";
    }
});