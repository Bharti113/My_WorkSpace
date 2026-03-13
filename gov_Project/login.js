// TAB SWITCHING
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {

        const tab = button.dataset.tab;

        // remove active from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));

        // remove active from all panels
        tabContents.forEach(content => content.classList.remove("active"));

        // activate clicked button
        button.classList.add("active");

        // activate corresponding panel
        document.getElementById(tab + "-panel").classList.add("active");

    });
});




const otpSection = document.getElementById("otpSection");

function showOtp(){
    otpSection.style.display = "block";
}

const otpBoxes = document.querySelectorAll(".otp-box");

otpBoxes.forEach((box, index) => {

    box.addEventListener("input", () => {

        if(box.value.length === 1 && index < otpBoxes.length - 1){
            otpBoxes[index + 1].focus();
        }

    });

});

let timer = 60;
const timerDisplay = document.getElementById("otpTimer");

function startTimer(){

    const interval = setInterval(() => {

        timer--;
        timerDisplay.textContent = "(" + timer + "s)";

        if(timer <= 0){
            clearInterval(interval);
            timerDisplay.textContent = "(Resend)";
        }

    },1000);
}

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }

});