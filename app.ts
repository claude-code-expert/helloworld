const input = document.getElementById("userInput") as HTMLInputElement;
const button = document.getElementById("submitBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

function showInput(): void {
  const value = input.value.trim();
  output.textContent = value ? value : "(입력값이 없습니다)";
}

button.addEventListener("click", showInput);

// 엔터 키로도 출력
input.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    showInput();
  }
});
