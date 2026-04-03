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
    quickReplies: [
      { id: 1, icon: "Rent", text: "I want to rent a property" },
      { id: 2, icon: "Buy",  text: "I want to buy a property"  }
    ]
  };

  var root = document.getElementById('lk-chat');
  var state = {
    open: !!cfg.autoOpen,
    typing: false,
    sessionId: 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10),
    messages: [{ id: 1, text: cfg.welcomeMessage, user: false, properties: [], time: new Date() }]
  };

  function fmt(date) {
    if (!date) return '';
    var h = date.getHours(), m = date.getMinutes();
    var ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return 'Today ' + String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ' ' + ap;
  }

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
    if (!r || typeof r !== 'object') return { message: text || fallback };
    var node = r;
    if (Object.prototype.hasOwnProperty.call(r, 'output')) {
      var out = r.output;
      if (typeof out === 'string') { var n = parseJson(out); node = n && typeof n === 'object' ? n : { message: out }; }
      else if (out && typeof out === 'object') { node = out; }
    }
    return { message: pick(node.message, node.response, node.reply, node.text) || fallback };
  }

  function renderMessages(box) {
    box.innerHTML = '';
    state.messages.forEach(function(msg, idx) {
      if (idx === 0 && msg.time) {
        var ts = document.createElement('div');
        ts.style.cssText = 'font-size:11px;color:rgba(0,0,0,.35);text-align:center;padding:4px 0 8px;';
        ts.textContent = fmt(msg.time);
        box.appendChild(ts);
      }
      var block = css(document.createElement('div'), { display:'flex', flexDirection:'column', gap:'6px' });
      var row = css(document.createElement('div'), { display:'flex', justifyContent: msg.user ? 'flex-end' : 'flex-start', alignItems:'flex-end', gap:'8px' });
      if (!msg.user) {
        var badge = css(document.createElement('span'), { width:'32px', height:'32px', minWidth:'32px', borderRadius:'12px', background:'#5852CD', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:'16px', flexShrink:'0', marginBottom:'2px' });
        badge.textContent = '\uD83E\uDD16';
        row.appendChild(badge);
      }
      var bubble = document.createElement('div');
      bubble.className = 'lk-bubble';
      bubble.textContent = msg.text;
      css(bubble, { maxWidth:'80%', padding:'11px 14px', borderRadius: msg.user ? '18px 18px 4px 18px' : '18px 18px 18px 4px', color: msg.user ? '#ffffff' : cfg.colors.botText, lineHeight: String(cfg.lineHeight), background: msg.user ? cfg.colors.userBubble : cfg.colors.botBubble, fontSize: cfg.fontSize + 'px' });
      row.appendChild(bubble);
      block.appendChild(row);
      box.appendChild(block);
    });

    if (state.messages.length < 3) {
      var qWrap = css(document.createElement('div'), { display:'flex', flexWrap:'wrap', gap:'8px', paddingLeft:'40px' });
      cfg.quickReplies.forEach(function(q) {
        var btn = document.createElement('button');
        btn.className = 'lk-quick';
        btn.textContent = q.icon + '  ' + q.text;
        css(btn, { border:'1.5px solid rgba(88,82,205,.5)', background:'rgba(88,82,205,.08)', color:'#5852CD', borderRadius:'999px', padding:'8px 14px', cursor:'pointer', fontSize:'12px', fontFamily: cfg.fontFamily });
        btn.onclick = function(){ send(q.text); };
        qWrap.appendChild(btn);
      });
      box.appendChild(qWrap);
    }

    if (state.typing) {
      var tRow = css(document.createElement('div'), { display:'flex', alignItems:'flex-end', gap:'8px' });
      var tBadge = css(document.createElement('span'), { width:'32px', height:'32px', minWidth:'32px', borderRadius:'12px', background:'#5852CD', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:'16px', flexShrink:'0' });
      tBadge.textContent = '\uD83E\uDD16';
      var tBubble = css(document.createElement('div'), { background: cfg.colors.botBubble, borderRadius: '18px 18px 18px 4px' });
      var typing = document.createElement('div');
      typing.className = 'lk-typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      tBubble.appendChild(typing);
      tRow.appendChild(tBadge);
      tRow.appendChild(tBubble);
      box.appendChild(tRow);
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
      var res = await fetch(cfg.webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, timestamp: new Date().toISOString(), sessionId: state.sessionId }) });
      var raw = await res.text();
      var parsed = parseWebhook(raw);
      state.messages.push({ id: Date.now()+1, text: parsed.message, user: false, time: new Date() });
    } catch(e) {
      state.messages.push({ id: Date.now()+1, text: 'Webhook not reachable.', user: false, time: new Date() });
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
      titleEl.textContent = cfg.companyName + ' Assistant';
      var statusRow = css(document.createElement('div'), { display:'flex', alignItems:'center', gap:'6px', marginTop:'3px' });
      var dot = document.createElement('span'); dot.className = 'lk-status-dot';
      var statusTxt = css(document.createElement('span'), { fontSize:'12px', color:'rgba(255,255,255,.75)' });
      statusTxt.textContent = 'Online \u00B7 Typically replies instantly';
      statusRow.appendChild(dot); statusRow.appendChild(statusTxt);
      titleGroup.appendChild(titleEl); titleGroup.appendChild(statusRow);
      headLeft.appendChild(avatar); headLeft.appendChild(titleGroup);
      var closeBtn = css(document.createElement('button'), { border:'none', background:'rgba(255,255,255,.18)', color:'#fff', borderRadius:'999px', width:'32px', height:'32px', cursor:'pointer', fontSize:'20px', lineHeight:'1', display:'flex', alignItems:'center', justifyContent:'center' });
      closeBtn.className = 'lk-close'; closeBtn.innerHTML = '&times;';
      closeBtn.onclick = function(){ state.open = false; render(); };
      head.appendChild(headLeft); head.appendChild(closeBtn);

      var pillsBar = css(document.createElement('div'), { display:'flex', gap:'8px', padding:'10px 14px', background:'#1f1f32', overflowX:'auto', borderBottom:'1px solid rgba(255,255,255,.06)' });
      [{ icon:'\uD83D\uDCCB', label:'Services' },{ icon:'\uD83D\uDD52', label:'Available slots' },{ icon:'\uD83D\uDCC5', label:'Book a call' }].forEach(function(p) {
        var btn = css(document.createElement('button'), { border:'1px solid rgba(255,255,255,.15)', background:'rgba(255,255,255,.06)', color:'rgba(255,255,255,.85)', borderRadius:'999px', padding:'6px 14px', cursor:'pointer', fontSize:'12px', whiteSpace:'nowrap', fontFamily: cfg.fontFamily });
        btn.className = 'pill-btn'; btn.textContent = p.icon + ' ' + p.label;
        pillsBar.appendChild(btn);
      });

      var msgBox = css(document.createElement('div'), { flex:'1', overflowY:'auto', padding:'14px 12px', display:'flex', flexDirection:'column', gap:'10px', background:'#ffffff' });
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

      var powered = css(document.createElement('div'), { fontSize:'11px', color:'rgba(0,0,0,.45)', textAlign:'center', padding:'6px 0 10px', background:'#ffffff', borderTop:'1px solid rgba(0,0,0,.06)' });
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

  if (!root) {
    root = document.createElement('div');
    root.id = 'lk-chat';
    document.body.appendChild(root);
  }

  var style = document.createElement('style');
  style.textContent = '#lk-chat { position: fixed; z-index: 9998; } #lk-chat .lk-widget { transition: opacity .2s ease, transform .2s ease; } #lk-chat .lk-msgs { scrollbar-width: thin; scrollbar-color: rgba(88,82,205,.2) transparent; } #lk-chat .lk-msgs::-webkit-scrollbar { width: 5px; } #lk-chat .lk-msgs::-webkit-scrollbar-thumb { background: rgba(88,82,205,.2); border-radius: 999px; } #lk-chat .lk-bubble { word-break: break-word; } #lk-chat .lk-input { outline: none; caret-color: #5852CD; } #lk-chat .lk-input:focus { box-shadow: none; } #lk-chat .lk-send { transition: filter .2s ease, transform .16s ease; } #lk-chat .lk-send:hover { filter: brightness(1.1); } #lk-chat .lk-send:active { transform: translateY(1px); } #lk-chat .lk-close { transition: background .2s ease, transform .16s ease; } #lk-chat .lk-close:hover { background: rgba(255,255,255,.28) !important; } #lk-chat .lk-close:active { transform: scale(.97); } #lk-chat .lk-quick { transition: background .2s ease, border-color .2s ease; } #lk-chat .lk-quick:hover { background: rgba(88,82,205,.15) !important; } #lk-chat .lk-launcher { transition: transform .18s ease, box-shadow .2s ease; } #lk-chat .lk-launcher:hover { transform: translateY(-2px); box-shadow: 0 20px 36px rgba(88,82,205,.55) !important; } #lk-chat .lk-typing { display: inline-flex; align-items: center; gap: 5px; padding: 10px 14px; } #lk-chat .lk-typing span { width: 7px; height: 7px; border-radius: 999px; background: #5852CD; opacity: 0.5; display: inline-block; animation: lkDot 1.2s infinite ease-in-out; } #lk-chat .lk-typing span:nth-child(2) { animation-delay: .15s; } #lk-chat .lk-typing span:nth-child(3) { animation-delay: .3s; } #lk-chat .lk-status-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; display: inline-block; box-shadow: 0 0 0 2px rgba(34,197,94,.3); animation: lkPulse 2s infinite; } #lk-chat .pill-btn:hover { background: rgba(255,255,255,.12) !important; border-color: rgba(255,255,255,.35) !important; } @keyframes lkDot { 0%, 80%, 100% { transform: translateY(0); opacity: .35; } 40% { transform: translateY(-4px); opacity: 1; } } @keyframes lkPulse { 0%, 100% { box-shadow: 0 0 0 2px rgba(34,197,94,.3); } 50% { box-shadow: 0 0 0 4px rgba(34,197,94,.15); } } @media (max-width: 640px) { #lk-chat #lk-widget { left: 10px !important; right: 10px !important; width: auto !important; max-width: none !important; bottom: 84px !important; border-radius: 18px !important; } #lk-chat #lk-launcher { right: 12px !important; left: auto !important; bottom: max(12px, env(safe-area-inset-bottom)) !important; } } @media (max-width: 420px) { #lk-chat #lk-widget { left: 0 !important; right: 0 !important; bottom: 0 !important; height: 100vh !important; border-radius: 0 !important; max-width: none !important; } #lk-chat #lk-inputbar { padding-bottom: calc(10px + env(safe-area-inset-bottom)) !important; } }';
  document.head.appendChild(style);

  render();
})();
