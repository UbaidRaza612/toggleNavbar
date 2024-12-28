console.log("Starting");

let nav = document.querySelector("nav")
let sidebar = document.querySelector(".sidebar")
let menu = document.querySelector(".menu");

menu.addEventListener("click",() => {
    console.log("Clicked");
    nav.style.display = "none";
    sidebar.style.display = "block";
});
 

let cancel = document.querySelector(".cancel");

cancel.addEventListener("click", () => {
    console.log("Cancelled");
    nav.style.display = "flex";
    sidebar.style.display = "none";
});