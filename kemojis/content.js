let cursorEl;
let lastMove = Date.now();
let jumpInterval;
let jumpAnimation = null;

// Create the emoji cursor
function createCursor(emoji, size) {
  if (cursorEl) cursorEl.remove();

  cursorEl = document.createElement("div");
  cursorEl.textContent = emoji;
  cursorEl.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    font-size: ${size}px;
    pointer-events: none;
    z-index: 999999;
    transform: translate(-50%, -50%);
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  `;
  document.body.appendChild(cursorEl);
}

// Update position of cursor and reset idle status
function updatePosition(e) {
  cursorEl.style.left = e.clientX + "px";
  cursorEl.style.top = e.clientY + "px";
  lastMove = Date.now();

  // Stop jump animation if user becomes active
  if (jumpAnimation) {
    jumpAnimation.cancel();
    jumpAnimation = null;
  }
}

// Effects like click, scroll, etc.
function applyEffects() {
  // Left Click – Bounce
  document.addEventListener("click", () => {
    cursorEl.style.transform += " scale(0.9)";
    setTimeout(() => {
      cursorEl.style.transform = "translate(-50%, -50%)";
    }, 150);
  });

  // Right Click – Tilt
  document.addEventListener("contextmenu", () => {
    cursorEl.style.transform += " rotate(10deg)";
    setTimeout(() => {
      cursorEl.style.transform = "translate(-50%, -50%)";
    }, 200);
  });

  // Double Click – Full Rotation
  document.addEventListener("dblclick", () => {
    cursorEl.animate([
      { transform: "translate(-50%, -50%) rotate(0deg)" },
      { transform: "translate(-50%, -50%) rotate(360deg)" }
    ], {
      duration: 500
    });
  });

  // Scroll – Rotate Up or Down based on direction
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.addEventListener("scroll", () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const direction = currentScrollTop > lastScrollTop ? "down" : "up";
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    const angle = direction === "down" ? 10 : -10;

    cursorEl.animate([
      { transform: `translate(-50%, -50%) rotate(0deg)` },
      { transform: `translate(-50%, -50%) rotate(${angle}deg)` },
      { transform: `translate(-50%, -50%) rotate(0deg)` }
    ], {
      duration: 300,
      easing: "ease-in-out"
    });
  });
}

// Monitor for idle jump animation
function startIdleMonitor() {
  clearInterval(jumpInterval);
  jumpInterval = setInterval(() => {
    const idleTime = Date.now() - lastMove;

    if (idleTime > 30000 && !jumpAnimation) {
      jumpAnimation = cursorEl.animate([
        { transform: "translate(-50%, -50%) translateY(0px)" },
        { transform: "translate(-50%, -50%) translateY(-10px)" },
        { transform: "translate(-50%, -50%) translateY(0px)" }
      ], {
        duration: 1000,
        iterations: Infinity
      });
    }
  }, 1000);
}

// Load saved emoji and size, and initialize
chrome.storage.sync.get(["emoji", "size"], (data) => {
  const emoji = data.emoji || "💀";
  const size = data.size || 20;

  createCursor(emoji, size);
  applyEffects();
  startIdleMonitor();
  document.body.style.cursor = "none";
  window.addEventListener("mousemove", updatePosition);
});
