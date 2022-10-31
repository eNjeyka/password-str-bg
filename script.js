let background = document.getElementById("background");
let password = document.getElementById("password");

password.addEventListener("input", () => {
    let passLen = password.value.length;
    background.style.filter = `blur(${20 - passLen * 2}px)`;
});
