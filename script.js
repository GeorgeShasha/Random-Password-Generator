const inputElement = document.getElementById("input");
const buttonElement = document.querySelector(".btn");
const alertElement = document.querySelector(".alert-container");
const copyIconElement = document.querySelector(".fa-copy");
const alertContainerElement = document.querySelector(".alert-container");

const createPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz<>!@#$%^&*()_+{}|[];?`~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputElement.value = password;
  alertContainerElement.innerHTML = `${inputElement.value} copied!`;
};

const copyPassword = () => {
  inputElement.select();
  inputElement.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputElement.value);
};

buttonElement.addEventListener("click", () => {
  createPassword();
});

copyIconElement.addEventListener("click", () => {
  copyPassword();
  if (inputElement.value) {
    alertContainerElement.classList.remove("active");
    setTimeout(() => {
      alertContainerElement.classList.add("active");
    }, 2000);
  }
});
