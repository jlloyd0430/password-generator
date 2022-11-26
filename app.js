// PASSWORD GENER8OR

const LOWERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBRS = "0123456789";
const SYMBLS = "@#$%^&*_+?!";

const selectPswdLen = document.getElementById("select-pswd-len");

const lowcaseCb = document.getElementById("lowcase-cb");
const upcaseCb = document.getElementById("upcase-cb");
const numbersCb = document.getElementById("num-cb");
const symbolCb = document.getElementById("symbol-cb");
const genPswdBtn = document.getElementById("gen-pswd-btn");
const copyPswdBtn = document.getElementById("copy-btn");

genPswdBtn.addEventListener("click", generatePassword);

copyPswdBtn.addEventListener("click", copyPassword);

const newPswdOutput = document.getElementById("new-pswd-output");

for (let i = 8; i < 25; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  if (i == 15) option.selected = "selected";
  selectPswdLen.appendChild(option);
}

function generatePassword() {
  let charSet = "";
  let randPswd = "";
  if (lowcaseCb.checked) charSet += LOWERS;
  if (upcaseCb.checked) charSet += UPPERS;
  if (numbersCb.checked) charSet += NUMBRS;
  if (symbolCb.checked) charSet += SYMBLS;

  for (let i = 0; i < selectPswdLen.value; i++) {
    let r = Math.floor(Math.random() * charSet.length);
    randPswd += charSet.charAt(r);
  }
  newPswdOutput.value = randPswd;
}

function copyPassword() {
  newPswdOutput.select();
  navigator.clipboard.writeText(newPswdOutput.value);
  document.querySelector(".tooltiptext").innerHTML =
    "Passwoed copied: " + newPswdOutput.value;
}
