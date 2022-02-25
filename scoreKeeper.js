const givenName = document.querySelector("#gGame");

const dName = document.querySelector(".displayName");

givenName.addEventListener("input", function (e) {
    dName.innerText = `${givenName.value} Score keeper`;
})