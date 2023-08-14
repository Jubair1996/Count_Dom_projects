let count = 0;

// Plus Count
function plusCount() {
  const plusElement = document.getElementById("count");
  count += 1;
  plusElement.innerText = count;
}

// Minus Count
document.getElementById("minus-btn").addEventListener("click", function () {
  const minusElement = document.getElementById("count");
  count -= 1;
  minusElement.innerText = count;
});
