// THEME
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// COMMENTS
const add = document.getElementById("addComment");
const list = document.getElementById("commentList");
const input = document.getElementById("commentInput");

add.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);

  input.value = "";
});

// DOWNLOAD PDF
document.getElementById("downloadBtn").addEventListener("click", () => {
  const resume = document.getElementById("resume");

  const options = {
    margin: 0.5,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(options).from(resume).save();
});
