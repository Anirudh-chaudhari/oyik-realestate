<script>
(function () {
  const webhookUrl = "https://oyik.cloud/webhook/f5f0fe52-ef64-4641-b1b5-a0e72d5110bd/chat";

  let sessionId = localStorage.getItem("oyik_session");
  if (!sessionId) {
    sessionId = "s_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("oyik_session", sessionId);
  }

  let isOpen = false;
  let messageCount = 0;

  function applyStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --oyik-primary: #8b5cf6;
        --oyik-primary-dark: #7c3aed;
        --oyik-primary-glow: rgba(139, 92, 246, 0.35);
        --oyik-bg: #0f0f13;
        --oyik-surface: #1a1a22;
        --oyik-surface2: #22222e;
        --oyik-border: rgba(255,255,255,0.07);
        --oyik-text: #f0f0f5;
        --oyik-text-muted: #888899;
        --oyik-radius: 20px;
      }

      #oyik-launcher {
        position: fixed;
        bottom: 28px;
        right: 28px;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--oyik-primary), #c4b5fd);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 99999;
        box-shadow: 0 4px 24px var(--oyik-primary-glow), 0 2px 8px rgba(0,0,0,0.4);
        transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
        animation: oyik-pulse 3s ease-in-out infinite;
      }
      #oyik-launcher:hover {
        transform: scale(1.12);
        box-shadow: 0 8px 32px var(--oyik-primary-glow), 0 2px 8px rgba(0,0,0,0.4);
      }
      #oyik-launcher.open {
        animation: none;
        transform: rotate(0deg);
      }
      @keyframes oyik-pulse {
        0%, 100% { box-shadow: 0 4px 24px var(--oyik-primary-glow), 0 2px 8px rgba(0,0,0,0.4); }
        50% { box-shadow: 0 4px 36px rgba(139,92,246,0.55), 0 2px 8px rgba(0,0,0,0.4); }
      }

      #oyik-launcher-icon {
        width: 28px;
        height: 28px;
        transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
      }

      #oyik-notif {
        position: absolute;
        top: 2px;
        right: 2px;
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: 800;
        color: var(--oyik-primary);
        font-family: 'Syne', sans-serif;
        animation: oyik-bounce 1s ease-in-out infinite;
      }
      @keyframes oyik-bounce {
        0%,100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }

      #oyik-chatbox {
        position: fixed;
        bottom: 104px;
        right: 28px;
        width: 400px;
        height: 580px;
        background: var(--oyik-bg);
        border-radius: var(--oyik-radius);
        box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--oyik-border);
        display: none;
        flex-direction: column;
        z-index: 99999;
        overflow: hidden;
        font-family: 'DM Sans', sans-serif;
        transform: translateY(16px) scale(0.96);
        opacity: 0;
        transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease;
      }
      #oyik-chatbox.open {
        display: flex;
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      #oyik-chatbox.animate-in {
        animation: oyik-slide-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
      }
      @keyframes oyik-slide-in {
        from { transform: translateY(20px) scale(0.94); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }

      #oyik-header {
        background: linear-gradient(135deg, #1e1e28, #16161f);
        padding: 0;
        border-bottom: 1px solid var(--oyik-border);
        flex-shrink: 0;
      }
      #oyik-header-inner {
        padding: 16px 18px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      #oyik-avatar {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--oyik-primary), #c4b5fd);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        flex-shrink: 0;
        box-shadow: 0 4px 12px var(--oyik-primary-glow);
      }
      #oyik-header-text { flex: 1; }
      #oyik-header-name {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 15px;
        color: var(--oyik-text);
        letter-spacing: -0.3px;
      }
      #oyik-header-status {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 2px;
      }
      #oyik-status-dot {
        width: 7px;
        height: 7px;
        background: #4ade80;
        border-radius: 50%;
        animation: oyik-blink 2s ease-in-out infinite;
      }
      @keyframes oyik-blink {
        0%,100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
      #oyik-status-text {
        font-size: 11.5px;
        color: var(--oyik-text-muted);
        font-weight: 400;
      }
      #oyik-close-btn {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: var(--oyik-surface2);
        border: 1px solid var(--oyik-border);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--oyik-text-muted);
        font-size: 16px;
        transition: all 0.2s;
        flex-shrink: 0;
      }
      #oyik-close-btn:hover {
        background: var(--oyik-surface);
        color: var(--oyik-text);
      }

      #oyik-suggestions {
        padding: 10px 14px;
        display: flex;
        gap: 7px;
        overflow-x: auto;
        scrollbar-width: none;
        border-bottom: 1px solid var(--oyik-border);
        flex-shrink: 0;
      }
      #oyik-suggestions::-webkit-scrollbar { display: none; }
      .oyik-chip {
        white-space: nowrap;
        background: var(--oyik-surface2);
        border: 1px solid var(--oyik-border);
        color: var(--oyik-text-muted);
        border-radius: 20px;
        padding: 5px 12px;
        font-size: 11.5px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
      }
      .oyik-chip:hover {
        background: var(--oyik-primary);
        border-color: var(--oyik-primary);
        color: white;
        transform: translateY(-1px);
      }

      #oyik-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        scrollbar-width: thin;
        scrollbar-color: var(--oyik-surface2) transparent;
      }
      #oyik-messages::-webkit-scrollbar { width: 4px; }
      #oyik-messages::-webkit-scrollbar-track { background: transparent; }
      #oyik-messages::-webkit-scrollbar-thumb { background: var(--oyik-surface2); border-radius: 4px; }

      .oyik-timestamp {
        text-align: center;
        font-size: 10.5px;
        color: var(--oyik-text-muted);
        margin: 4px 0;
        font-weight: 400;
      }

      .oyik-msg-row {
        display: flex;
        flex-direction: column;
        animation: oyik-msg-in 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards;
      }
      @keyframes oyik-msg-in {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .oyik-msg-row.user { align-items: flex-end; }
      .oyik-msg-row.bot { align-items: flex-start; }

      .oyik-msg {
        max-width: 82%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 13.5px;
        line-height: 1.55;
        word-break: break-word;
        position: relative;
      }
      .oyik-msg.user {
        background: linear-gradient(135deg, var(--oyik-primary), #ff8c5a);
        color: white;
        border-bottom-right-radius: 4px;
        box-shadow: 0 4px 16px var(--oyik-primary-glow);
      }
      .oyik-msg.bot {
        background: var(--oyik-surface);
        color: var(--oyik-text);
        border: 1px solid var(--oyik-border);
        border-bottom-left-radius: 4px;
      }
      .oyik-msg.typing {
        background: var(--oyik-surface);
        border: 1px solid var(--oyik-border);
        border-bottom-left-radius: 4px;
        padding: 12px 16px;
      }
      .oyik-typing-dots {
        display: flex;
        gap: 4px;
        align-items: center;
      }
      .oyik-typing-dots span {
        width: 6px;
        height: 6px;
        background: var(--oyik-text-muted);
        border-radius: 50%;
        animation: oyik-dot 1.2s ease-in-out infinite;
      }
      .oyik-typing-dots span:nth-child(2) { animation-delay: 0.2s; }
      .oyik-typing-dots span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes oyik-dot {
        0%,60%,100% { transform: translateY(0); opacity: 0.4; }
        30% { transform: translateY(-5px); opacity: 1; }
      }

      #oyik-input-area {
        padding: 12px 14px;
        border-top: 1px solid var(--oyik-border);
        background: var(--oyik-bg);
        flex-shrink: 0;
      }
      #oyik-input-row {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--oyik-surface);
        border: 1px solid var(--oyik-border);
        border-radius: 14px;
        padding: 6px 6px 6px 14px;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      #oyik-input-row:focus-within {
        border-color: rgba(139,92,246,0.4);
        box-shadow: 0 0 0 3px rgba(139,92,246,0.08);
      }
      #oyik-input {
        flex: 1;
        background: none;
        border: none;
        color: var(--oyik-text);
        font-size: 13.5px;
        font-family: 'DM Sans', sans-serif;
        outline: none;
        padding: 4px 0;
        min-width: 0;
      }
      #oyik-input::placeholder { color: var(--oyik-text-muted); }
      #oyik-send {
        background: linear-gradient(135deg, var(--oyik-primary), #ff8c5a);
        color: white;
        border: none;
        border-radius: 10px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
        flex-shrink: 0;
        box-shadow: 0 2px 8px var(--oyik-primary-glow);
      }
      #oyik-send:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 16px var(--oyik-primary-glow);
      }
      #oyik-send:active { transform: scale(0.95); }
      #oyik-footer {
        text-align: center;
        padding: 6px 0 2px;
        font-size: 10px;
        color: var(--oyik-text-muted);
        font-family: 'DM Sans', sans-serif;
      }
      #oyik-footer a {
        color: var(--oyik-primary);
        text-decoration: none;
        font-weight: 500;
      }
    `;
    document.head.appendChild(style);
  }

  function createUI() {
    const launcher = document.createElement("div");
    launcher.id = "oyik-launcher";
    launcher.innerHTML = `
      <svg id="oyik-launcher-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6C4 4.89543 4.89543 4 6 4H22C23.1046 4 24 4.89543 24 6V17C24 18.1046 23.1046 19 22 19H15L9 24V19H6C4.89543 19 4 18.1046 4 17V6Z" fill="white" fill-opacity="0.95"/>
        <circle cx="10" cy="12" r="1.5" fill="#c4b5fd"/>
        <circle cx="14" cy="12" r="1.5" fill="#c4b5fd"/>
        <circle cx="18" cy="12" r="1.5" fill="#c4b5fd"/>
      </svg>
      <div id="oyik-notif">1</div>
    `;

    const chatbox = document.createElement("div");
    chatbox.id = "oyik-chatbox";
    chatbox.innerHTML = `
      <div id="oyik-header">
        <div id="oyik-header-inner">
          <div id="oyik-avatar">🤖</div>
          <div id="oyik-header-text">
            <div id="oyik-header-name">Oyik.AI Assistant</div>
            <div id="oyik-header-status">
              <div id="oyik-status-dot"></div>
              <span id="oyik-status-text">Online · Typically replies instantly</span>
            </div>
          </div>
          <div id="oyik-close-btn">✕</div>
        </div>
        <div id="oyik-suggestions">
          <div class="oyik-chip" data-msg="What services do you offer?">📋 Services</div>
          <div class="oyik-chip" data-msg="What are your prices?">💰 Pricing</div>
          <div class="oyik-chip" data-msg="Book a discovery call">📅 Book a call</div>
          <div class="oyik-chip" data-msg="Where are you located?">📍 Location</div>
        </div>
      </div>
      <div id="oyik-messages"></div>
      <div id="oyik-input-area">
        <div id="oyik-input-row">
          <input id="oyik-input" placeholder="Ask me anything…" autocomplete="off" />
          <button id="oyik-send">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 8L2 2L5 8L2 14L14 8Z" fill="white"/>
            </svg>
          </button>
        </div>
        <div id="oyik-footer">Powered by <a href="https://oyik.ai" target="_blank">Oyik.AI</a></div>
      </div>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(chatbox);

    setTimeout(() => {
      if (!isOpen) {
        addBotMessage("👋 Hi there! I'm the Oyik.AI assistant. How can I help you today?");
      }
    }, 1200);

    launcher.addEventListener("click", toggleChat);
    document.getElementById("oyik-close-btn").addEventListener("click", toggleChat);
    document.getElementById("oyik-send").addEventListener("click", sendMessage);
    document.getElementById("oyik-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    document.querySelectorAll(".oyik-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const msg = chip.getAttribute("data-msg");
        document.getElementById("oyik-input").value = msg;
        if (!isOpen) toggleChat();
        setTimeout(() => sendMessage(), 100);
      });
    });
  }

  function toggleChat() {
    isOpen = !isOpen;
    const chatbox = document.getElementById("oyik-chatbox");
    const notif = document.getElementById("oyik-notif");
    const launcher = document.getElementById("oyik-launcher");

    if (isOpen) {
      chatbox.classList.add("open", "animate-in");
      launcher.classList.add("open");
      if (notif) notif.remove();
      setTimeout(() => document.getElementById("oyik-input").focus(), 300);
    } else {
      chatbox.classList.remove("open", "animate-in");
      launcher.classList.remove("open");
    }
  }

  function scrollToBottom() {
    const m = document.getElementById("oyik-messages");
    m.scrollTop = m.scrollHeight;
  }

  function getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function addBotMessage(text) {
    const m = document.getElementById("oyik-messages");
    messageCount++;

    if (messageCount === 1) {
      const ts = document.createElement("div");
      ts.className = "oyik-timestamp";
      ts.textContent = "Today " + getTime();
      m.appendChild(ts);
    }

    const row = document.createElement("div");
    row.className = "oyik-msg-row bot";
    const msg = document.createElement("div");
    msg.className = "oyik-msg bot";
    msg.textContent = text;
    row.appendChild(msg);
    m.appendChild(row);
    scrollToBottom();
  }

  async function sendMessage() {
    const input = document.getElementById("oyik-input");
    const msg = input.value.trim();
    if (!msg) return;

    const m = document.getElementById("oyik-messages");

    const userRow = document.createElement("div");
    userRow.className = "oyik-msg-row user";
    const userMsg = document.createElement("div");
    userMsg.className = "oyik-msg user";
    userMsg.textContent = msg;
    userRow.appendChild(userMsg);
    m.appendChild(userRow);
    input.value = "";
    scrollToBottom();

    const typingRow = document.createElement("div");
    typingRow.className = "oyik-msg-row bot";
    const typingMsg = document.createElement("div");
    typingMsg.className = "oyik-msg typing";
    typingMsg.innerHTML = `<div class="oyik-typing-dots"><span></span><span></span><span></span></div>`;
    typingRow.appendChild(typingMsg);
    m.appendChild(typingRow);
    scrollToBottom();

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: msg, sessionId: sessionId })
      });
      const data = await res.json();
      typingRow.remove();
      addBotMessage(data.output || data.message || "Sorry, I didn't get a response.");
    } catch (err) {
      typingRow.remove();
      addBotMessage("Connection error. Please try again.");
    }
  }

  function init() {
    applyStyles();
    createUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
</script>