const emojiInput = document.getElementById("emojiInput");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");
const preview = document.getElementById("preview");

function updatePreview() {
  preview.textContent = emojiInput.value;
  preview.style.fontSize = `${sizeSlider.value}px`;
}

emojiInput.addEventListener("input", updatePreview);
sizeSlider.addEventListener("input", () => {
  sizeValue.textContent = `${sizeSlider.value}px`;
  updatePreview();
});

document.getElementById("saveBtn").addEventListener("click", () => {
  chrome.storage.sync.set({
    emoji: emojiInput.value,
    size: sizeSlider.value
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  chrome.storage.sync.clear();
});

chrome.storage.sync.get(["emoji", "size"], (data) => {
  emojiInput.value = data.emoji || "✨";
  sizeSlider.value = data.size || 32;
  sizeValue.textContent = `${sizeSlider.value}px`;
  updatePreview();
});