let number = 0;
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

increase.addEventListener("click", function(){
    number++;
    count.textContent = number;
});
decrease.addEventListener("click", function(){
    number--;
    count.textContent = number
});
reset.addEventListener("click", function () {
    number = 0;
    count.textContent = number;
});