(function () {
  var cfg = {
    webhookUrl: "https://oyik.cloud/webhook/f5f0fe52-ef64-4641-b1b5-a0e72d5110bd/chat",
    companyName: "Oyik Real Estate",
    welcomeMessage: "Hello! Welcome to Oyik Real Estate. How can I help you today?",
    inputPlaceholder: "Type your message...",
    launcherLabel: "Chat",
    fontSize: 14,
    fontFamily: "Inter, Segoe UI, sans-serif",
    launcherSize: 68,
    launcherRadius: 20,
    widgetRadius: 22,
    lineHeight: 1.4,
    position: "right",
    bottom: "28px",
    autoOpen: false,
    colors: {
      brandA: "#5852CD",
      userBubble: "rgb(88, 82, 205)",
      botBubble: "#f0f0f7",
      botText: "#1a1a2e"
    },
    quickReplies: []
  };

  var root = document.getElementById('lk-chat');
  if (!root) {
    root = document.createElement('div');
    root.id = 'lk-chat';
    document.body.appendChild(root);
  }
  var style = document.createElement('style');
  style.textContent = '@keyframes lkPulse { 0%, 100% { opacity: 1; box-shadow: 0 0 6px 2px #22c55e; } 50% { opacity: 0.4; box-shadow: 0 0 3px 1px #22c55e; } }';
  document.head.appendChild(style);

  var state = {
    open: !!cfg.autoOpen,
    typing: false,
    sessionId: 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10),
    messages: [{ id: 1, text: cfg.welcomeMessage, user: false, properties: [], time: new Date() }]
  };

  function css(el, styles) {
    Object.keys(styles).forEach(function(k){ el.style[k] = styles[k]; });
    return el;
  }

  function parseJson(raw) { try { return JSON.parse(raw); } catch(e) { return null; } }

  function pick() {
    for (var i = 0; i < arguments.length; i++) {
      var v = arguments[i];
      if (typeof v === 'string' && v.trim()) return v.trim();
      if (typeof v === 'number' && isFinite(v)) return String(v);
    }
    return '';
  }

  function parseWebhook(raw) {
    var fallback = 'Thanks for your message.';
    var text = (raw || '').trim();
    var r = parseJson(text);
    if (!r || typeof r !== 'object') {
      var lowerText = text.toLowerCase();
      if (lowerText.indexOf('error') !== -1 && (lowerText.indexOf('workflow') !== -1 || lowerText.indexOf('n8n') !== -1 || lowerText.indexOf('code') !== -1 || lowerText.indexOf('issue') !== -1)) {
        return { message: 'Sorry, something went wrong. Please try again.' };
      }
      return { message: text || fallback };
    }
    var node = r;
    if (Object.prototype.hasOwnProperty.call(r, 'output')) {
      var out = r.output;
      if (typeof out === 'string') { var n = parseJson(out); node = n && typeof n === 'object' ? n : { message: out }; }
      else if (out && typeof out === 'object') { node = out; }
    }
    var msg = pick(node.message, node.response, node.reply, node.text, node.output);
    if (!msg) {
      return { message: fallback };
    }
    var lowerMsg = msg.toLowerCase();
    if (lowerMsg.indexOf('error') !== -1 && (lowerMsg.indexOf('workflow') !== -1 || lowerMsg.indexOf('n8n') !== -1 || lowerMsg.indexOf('code') !== -1 || lowerMsg.indexOf('issue') !== -1)) {
      return { message: 'Sorry, something went wrong. Please try again.' };
    }
    return { message: msg };
  }

  function renderMessages(box) {
    box.innerHTML = '';
    state.messages.forEach(function(msg, idx) {
      if (idx === 0 && msg.time) {
        var ts = document.createElement('div');
        ts.style.cssText = 'font-size:11px;color:rgba(0,0,0,.35);text-align:center;padding:4px 0 8px;';
        var h = msg.time.getHours(), m = msg.time.getMinutes();
        var ap = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        ts.textContent = 'Today ' + String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ' ' + ap;
        box.appendChild(ts);
      }
      var block = css(document.createElement('div'), { display:'flex', flexDirection:'column', gap:'6px' });
      var row = css(document.createElement('div'), { display:'flex', justifyContent: msg.user ? 'flex-end' : 'flex-start', alignItems:'flex-end', gap:'8px' });
      var bubble = document.createElement('div');
      bubble.className = 'lk-bubble';
      bubble.textContent = msg.text;
      css(bubble, { maxWidth:'80%', padding:'11px 14px', borderRadius: msg.user ? '18px 18px 4px 18px' : '18px 18px 18px 4px', color: msg.user ? '#ffffff' : cfg.colors.botText, lineHeight: String(cfg.lineHeight), background: msg.user ? cfg.colors.userBubble : cfg.colors.botBubble, fontSize: cfg.fontSize + 'px' });
      row.appendChild(bubble);
      block.appendChild(row);
      box.appendChild(block);
    });

    if (state.typing) {
      var tBubble = css(document.createElement('div'), { background: cfg.colors.botBubble, borderRadius: '18px 18px 18px 4px', padding:'10px 14px', display:'inline-block', marginLeft:'8px' });
      var typing = document.createElement('div');
      typing.className = 'lk-typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      tBubble.appendChild(typing);
      box.appendChild(tBubble);
    }
    box.scrollTop = box.scrollHeight;
  }

  async function send(forced) {
    var input = document.getElementById('lk-inp');
    var text = (forced || (input ? input.value : '') || '').trim();
    if (!text) return;
    state.messages.push({ id: Date.now(), text: text, user: true, time: new Date() });
    if (input) input.value = '';
    state.typing = true;
    render();
    var since = Date.now();
    try {
      var res = await fetch(cfg.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          action: 'sendMessage',
          chatInput: text,
          message: text,
          sessionId: state.sessionId,
          timestamp: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      var raw = await res.text();
      var parsed = parseWebhook(raw);
      state.messages.push({ id: Date.now()+1, text: parsed.message, user: false, time: new Date() });
    } catch(e) {
      try {
        var res2 = await fetch(cfg.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'sendMessage',
            chatInput: text,
            message: text,
            sessionId: state.sessionId,
            timestamp: new Date().toISOString()
          })
        });
        var raw2 = await res2.text();
        var parsed2 = parseWebhook(raw2);
        state.messages.push({ id: Date.now()+1, text: parsed2.message, user: false, time: new Date() });
      } catch(e2) {
        state.messages.push({ id: Date.now()+1, text: 'Unable to connect. Please check your connection and try again.', user: false, time: new Date() });
      }
    } finally {
      var wait = 550 - (Date.now() - since);
      if (wait > 0) await new Promise(function(r){ setTimeout(r, wait); });
      state.typing = false;
      render();
    }
  }

  function render() {
    root.innerHTML = '';
    var hPos = cfg.position !== 'left' ? { right: '20px', left: 'auto' } : { left: '20px', right: 'auto' };

    if (state.open) {
      var widget = css(document.createElement('div'), Object.assign({ position:'fixed', bottom:'96px', width:'390px', maxWidth:'calc(100vw - 24px)', height:'580px', maxHeight:'calc(100vh - 108px)', borderRadius: cfg.widgetRadius+'px', overflow:'hidden', zIndex:'9999', background:'#ffffff', border:'1px solid rgba(88,82,205,.25)', display:'flex', flexDirection:'column', boxShadow:'0 24px 48px rgba(0,0,0,.18)', fontFamily: cfg.fontFamily, fontSize: cfg.fontSize+'px' }, hPos));
      widget.id = 'lk-widget'; widget.className = 'lk-widget';

      var head = css(document.createElement('div'), { padding:'14px 16px', background: cfg.colors.brandA, color:'#fff', display:'flex', justifyContent:'space-between', alignItems:'center' });
      var headLeft = css(document.createElement('div'), { display:'flex', alignItems:'center', gap:'12px', minWidth:'0' });
      var avatar = css(document.createElement('div'), { width:'42px', height:'42px', minWidth:'42px', borderRadius:'14px', background:'rgba(255,255,255,.18)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px' });
      avatar.textContent = '\uD83E\uDD16';
      var titleGroup = css(document.createElement('div'), { minWidth:'0' });
      var titleEl = css(document.createElement('div'), { fontWeight:'700', fontSize:'15px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' });
      titleEl.textContent = 'Oyik.AI Assistant';
      var statusRow = css(document.createElement('div'), { display:'flex', alignItems:'center', gap:'6px', marginTop:'3px' });
      var dot = document.createElement('span');
      dot.style.cssText = 'width:8px;height:8px;border-radius:50%;background:#22c55e;display:inline-block;box-shadow:0 0 5px 1px #22c55e;animation:lkPulse 1.5s infinite;';
      var statusTxt = css(document.createElement('span'), { fontSize:'12px', color:'rgba(255,255,255,.75)' });
      statusTxt.textContent = 'Online';
      statusRow.appendChild(dot); statusRow.appendChild(statusTxt);
      titleGroup.appendChild(titleEl); titleGroup.appendChild(statusRow);
      headLeft.appendChild(avatar); headLeft.appendChild(titleGroup);
      var closeBtn = css(document.createElement('button'), { border:'none', background:'rgba(255,255,255,.18)', color:'#fff', borderRadius:'999px', width:'32px', height:'32px', cursor:'pointer', fontSize:'20px', lineHeight:'1', display:'flex', alignItems:'center', justifyContent:'center' });
      closeBtn.className = 'lk-close'; closeBtn.innerHTML = '&times;';
      closeBtn.onclick = function(){ state.open = false; render(); };
      head.appendChild(headLeft); head.appendChild(closeBtn);

      var pillsBar = css(document.createElement('div'), { display:'flex', gap:'8px', padding:'10px 14px', background:'#ffffff', overflowX:'auto', borderBottom:'1px solid rgba(0,0,0,.08)' });
      [{ icon:'\uD83D\uDCCB', label:'Services', msg:'What services do you offer?' },{ icon:'\uD83D\uDD52', label:'About company', msg:'Tell me about your company' },{ icon:'\uD83D\uDCC5', label:'Book a call', msg:'Book a call' }].forEach(function(p) {
        var btn = css(document.createElement('button'), { border:'1px solid #6c63ff', background:'#6c63ff', color:'#ffffff', borderRadius:'999px', padding:'6px 14px', cursor:'pointer', fontSize:'12px', whiteSpace:'nowrap', fontFamily: cfg.fontFamily, transition:'all 0.2s ease' });
        btn.className = 'pill-btn'; btn.textContent = p.icon + ' ' + p.label;
        btn.onmouseover = function() { btn.style.background = '#5a52e0'; };
        btn.onmouseout = function() { btn.style.background = '#6c63ff'; };
        btn.onclick = function() {
          send(p.msg);
        };
        pillsBar.appendChild(btn);
      });

      var msgBox = css(document.createElement('div'), { flex:'1', overflowY:'auto', padding:'14px 12px 20px', display:'flex', flexDirection:'column', gap:'10px', background:'#ffffff' });
      msgBox.id = 'lk-msgs'; msgBox.className = 'lk-msgs';

      var inputBar = css(document.createElement('div'), { display:'flex', gap:'8px', borderTop:'1px solid rgba(0,0,0,.08)', padding:'10px 12px', background:'#ffffff', alignItems:'center' });
      inputBar.id = 'lk-inputbar';
      var input = css(document.createElement('input'), { flex:'1', border:'1px solid rgba(0,0,0,.12)', borderRadius:'999px', padding:'10px 16px', fontSize:'13px', background:'#f5f5f8', color:'#1a1a2e', fontFamily: cfg.fontFamily });
      input.id = 'lk-inp'; input.className = 'lk-input'; input.placeholder = cfg.inputPlaceholder;
      input.onkeydown = function(e){ if (e.key === 'Enter') send(); };
      var sendBtn = css(document.createElement('button'), { border:'none', background: cfg.colors.brandA, color:'#fff', borderRadius:'50%', width:'42px', height:'42px', minWidth:'42px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' });
      sendBtn.className = 'lk-send';
      sendBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;display:block;"><path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L15 22 11 13 2 9l20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      sendBtn.onclick = function(){ send(); };
      inputBar.appendChild(input); inputBar.appendChild(sendBtn);

      var powered = css(document.createElement('div'), { fontSize:'11px', color:'rgba(0,0,0,.45)', textAlign:'center', padding:'12px 0 14px', background:'#ffffff', borderTop:'1px solid rgba(0,0,0,.06)' });
      var poweredLink = document.createElement('a');
      poweredLink.href = 'https://oyik.ai'; poweredLink.target = '_blank'; poweredLink.rel = 'noopener noreferrer';
      poweredLink.textContent = 'Powered by Oyik.AI';
      css(poweredLink, { color:'#5852CD', textDecoration:'none', fontWeight:'600', background:'rgba(88,82,205,.08)', padding:'4px 12px', borderRadius:'999px' });
      powered.appendChild(poweredLink);

      widget.appendChild(head); widget.appendChild(pillsBar); widget.appendChild(msgBox); widget.appendChild(inputBar); widget.appendChild(powered);
      root.appendChild(widget);
      renderMessages(msgBox);
    }

    if (!state.open) {
      var launcher = css(document.createElement('button'), Object.assign({ position:'fixed', bottom: cfg.bottom, width: cfg.launcherSize+'px', height: cfg.launcherSize+'px', border:'none', borderRadius: cfg.launcherRadius+'px', color:'#fff', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'3px', zIndex:'9998', background: cfg.colors.brandA, boxShadow:'0 12px 28px rgba(88,82,205,.45)' }, hPos));
      launcher.id = 'lk-launcher'; launcher.className = 'lk-launcher';
      launcher.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:20px;height:20px;"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="font-size:10px;font-weight:600;">' + cfg.launcherLabel + '</span>';
      launcher.onclick = function(){ state.open = true; render(); };
      root.appendChild(launcher);
    }
  }

  render();
})();
