"use strict";
const input = document.getElementById("userInput");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");
function showInput() {
    const value = input.value.trim();
    output.textContent = value ? value : "(입력값이 없습니다)";
}
button.addEventListener("click", showInput);
// 엔터 키로도 출력
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        showInput();
    }
});
