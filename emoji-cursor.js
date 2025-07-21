export function createEmojiCursor(emoji, size) {
  const el = document.createElement("div");
  el.textContent = emoji;
  el.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    font-size: ${size}px;
    pointer-events: none;
    z-index: 999999;
    transform: translate(-50%, -50%);
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  `;
  document.body.appendChild(el);
  return el;
}
