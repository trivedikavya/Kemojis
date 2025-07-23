const emojiOptions = ["😀", "🔥", "🌟", "💖", "🎯", "🦄", "✨", "🐱", "🍕", "🚀"];
let selectorOpen = false;

function createEmojiSelector() {
  if (document.getElementById("kemojis-selector")) return;

  const container = document.createElement("div");
  container.id = "kemojis-selector";
  container.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    border: 2px solid #ccc;
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    display: flex;
    gap: 8px;
    z-index: 999999;
  `;

  emojiOptions.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.textContent = emoji;
    btn.style.fontSize = "20px";
    btn.onclick = () => {
      chrome.storage.sync.set({ emoji });
      container.remove();
      selectorOpen = false;
    };
    container.appendChild(btn);
  });

  document.body.appendChild(container);
  selectorOpen = true;
}

window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "k") {
    if (selectorOpen) {
      document.getElementById("kemojis-selector")?.remove();
      selectorOpen = false;
    } else {
      createEmojiSelector();
    }
  }
});
