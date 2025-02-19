const wrapper = document.querySelector(".wrapper"); 
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
    if (!nextClicked) {
        question.innerHTML = "Thank you for loving me, with all my shortcomings.";
        gif.src = "https://raw.githubusercontent.com/anstrea/anstrea.github.io/main/Respon/Skibidi%201/thanks.gif";
        nextBtn.innerHTML = "Reply";
        nextClicked = true;
    } else {
        window.location.href = "https://wa.me/?text=Terserah%20Mau%20Reply%20Apaaa";
    }
});
