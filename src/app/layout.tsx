import type { Metadata, Viewport } from "next";
import { Roboto, Urbanist } from "next/font/google";
import AppShell from "@/components/shared/AppShell";
import "@n8n/chat/dist/style.css";
import "./globals.css";

const fontSans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = Roboto({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fontDisplay = Urbanist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f5f0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oyik.realestate.ai"),
  title: {
    default: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    template: "%s | oyik.realestate.ai",
  },
  description:
    "oyik.realestate.ai helps real estate businesses automate website chat, voice calls, lead qualification, viewing bookings, reminders, maintenance intake, and AI property marketing with a premium client experience.",
  keywords: [
    "real estate AI",
    "real estate chatbot",
    "real estate voice agents",
    "property viewing automation",
    "maintenance intake automation",
    "real estate marketing automation",
    "AI employees for real estate",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oyik.realestate.ai",
    title: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    description:
      "Premium AI systems for real estate teams across chat, voice, booking, reminders, maintenance intake, and property marketing.",
    siteName: "oyik.realestate.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "oyik.realestate.ai luxury real estate AI automation website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "oyik.realestate.ai | Luxury AI Automation for Real Estate Growth",
    description:
      "Premium AI systems for real estate businesses that want faster lead response, better qualification, and more booked viewings.",
    creator: "@oyikai",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "oyik.realestate.ai",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "A luxury AI automation platform for real estate businesses, covering website chat, voice agents, lead qualification, viewing bookings, maintenance intake, reminders, email automation, and AI marketing.",
  provider: {
    "@type": "Organization",
    name: "oyik.realestate.ai",
    url: "https://oyik.realestate.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{ __html: `
    (function () {
      var cfg = {
  "chatMode": "webhook",
  "agentId": null,
  "apiBaseUrl": "https://oyik.info",
  "webhookUrl": "https://oyik.cloud/webhook/f5f0fe52-ef64-4641-b1b5-a0e72d5110bd/chat",
  "companyName": "Oyik Real Estate ",
  "welcomeMessage": "Hello! Welcome to Oyik Real Estate. How can I help you today?",
  "inputPlaceholder": "Type your message...",
  "sendLabel": "Send",
  "launcherLabel": "Chat",
  "launcherIcon": "message",
  "launcherIconUrl": "",
  "headerIcon": "bot",
  "headerIconUrl": "",
  "userMessageIcon": "spark",
  "userMessageIconUrl": "",
  "aiMessageIcon": "bot",
  "aiMessageIconUrl": "",
  "fontSize": 14,
  "fontFamily": "Inter",
  "launcherSize": 68,
  "launcherRadius": 20,
  "widgetRadius": 22,
  "lineHeight": 1.4,
  "borderWidth": 1,
  "position": "right",
  "bottom": "28px",
  "autoOpen": false,
  "colors": {
    "primary": "#7C3AED ",
    "chatBackground": "#FFFFFF",
    "sendMessage": "#7C3AED",
    "aiMessage": "rgba(124,58,237,0.12)",
    "brandA": "#7C3AED ",
    "brandB": "#7C3AED ",
    "surface": "#FFFFFF",
    "botBubble": "rgba(124,58,237,0.12)",
    "userBubble": "#7C3AED",
    "page": "#eef3ff",
    "text": "#ffffff"
  },
  "quickReplies": [
    {
      "id": 1,
      "icon": "Rent",
      "text": "I want to rent a property"
    },
    {
      "id": 2,
      "icon": "Buy",
      "text": "I want to buy a property"
    }
  ],
  "fontFamilyCss": "Inter, Segoe UI, sans-serif",
  "launcherIconHtml": "\u003csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\u003cpath d=\"M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\u003c/svg>",
  "headerIconHtml": "\u003csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\u003cpath d=\"M12 2v3M7 10h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm-2 3H3m18 0h-2M9 14h.01M15 14h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\u003c/svg>",
  "userMessageIconHtml": "\u003csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\u003cpath d=\"m12 2 1.8 4.7L18.5 8 13.8 9.3 12 14l-1.8-4.7L5.5 8l4.7-1.3L12 2Zm7 11 1 2.6L22.6 16 20 16.7 19 19.3 18 16.7 15.4 16l2.6-.7L19 13Zm-14 2 1.2 3L9 19l-2.8.8L5 22.8l-1.2-3L1 19l2.8-.8L5 15Z\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\u003c/svg>",
  "aiMessageIconHtml": "\u003csvg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\u003cpath d=\"M12 2v3M7 10h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm-2 3H3m18 0h-2M9 14h.01M15 14h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\u003c/svg>"
};
      var root = document.getElementById('lk-chat');
      if (!root) {
        root = document.createElement('div');
        root.id = 'lk-chat';
        document.body.appendChild(root);
      }

      var fallbackLauncherSvg = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      var state = {
        open: !!cfg.autoOpen,
        typing: false,
        sessionId: 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10),
        messages: [{ id: 1, text: cfg.welcomeMessage, user: false, properties: [] }],
      };

      function ensureThemeStyles() {
        if (document.getElementById('lk-chat-theme')) return;
        var style = document.createElement('style');
        style.id = 'lk-chat-theme';
        style.textContent = [
          '#lk-chat{position:relative;z-index:9998;}',
          '#lk-chat .lk-widget{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:opacity .2s ease,transform .2s ease;}',
          '#lk-chat .lk-msgs{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.28) transparent;}',
          '#lk-chat .lk-msgs::-webkit-scrollbar{width:6px;}',
          '#lk-chat .lk-msgs::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:999px;}',
          '#lk-chat .lk-bubble{box-shadow:inset 0 0 0 1px rgba(255,255,255,.03);}',
          '#lk-chat .lk-input{outline:none;}',
          '#lk-chat .lk-input:focus{box-shadow:0 0 0 2px rgba(255,255,255,.22);}',
          '#lk-chat .lk-send{transition:filter .2s ease,transform .16s ease;}',
          '#lk-chat .lk-send:hover{filter:brightness(1.04);}',
          '#lk-chat .lk-send:active{transform:translateY(1px);}',
          '#lk-chat .lk-close{transition:background .2s ease,transform .16s ease;}',
          '#lk-chat .lk-close:hover{background:rgba(255,255,255,.3);}',
          '#lk-chat .lk-close:active{transform:scale(.97);}',
          '#lk-chat .lk-quick{transition:background .2s ease,border-color .2s ease;}',
          '#lk-chat .lk-quick:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.35);}',
          '#lk-chat .lk-launcher{transition:transform .18s ease,box-shadow .2s ease;}',
          '#lk-chat .lk-launcher:hover{transform:translateY(-1px);box-shadow:0 16px 30px rgba(0,0,0,.28);}',
          '#lk-chat .lk-typing{display:inline-flex;align-items:center;gap:5px;padding:6px 8px;margin-left:2px;}',
          '#lk-chat .lk-typing span{width:6px;height:6px;border-radius:999px;background:rgba(255,255,255,.8);display:inline-block;animation:lkDot 1.2s infinite ease-in-out;}',
          '#lk-chat .lk-typing span:nth-child(2){animation-delay:.15s;}',
          '#lk-chat .lk-typing span:nth-child(3){animation-delay:.3s;}',
          '#lk-chat .lk-powered{font-size:11px;color:rgba(255,255,255,.68);text-align:center;padding:0 0 8px;letter-spacing:.01em;}',
          '#lk-chat .lk-powered a{color:inherit;text-decoration:none;cursor:pointer;}',
          '#lk-chat .lk-powered a:hover{text-decoration:underline;color:#ffffff;}',
          '@keyframes lkDot{0%,80%,100%{transform:translateY(0);opacity:.35;}40%{transform:translateY(-4px);opacity:1;}}',
          '@media (max-width:900px){#lk-chat .lk-widget{width:min(360px,calc(100vw - 18px)) !important;height:min(72vh,560px) !important;bottom:86px !important;}}',
          '@media (max-width:640px)#lk-chat .lk-widget{left:10px !important;right:10px !important;width:auto !important;max-width:none !important;height:min(78vh,620px) !important;bottom:84px !important;border-radius:18px !important;}#lk-chat .lk-launcher{right:12px !important;left:auto !important;bottom:max(12px,env(safe-area-inset-bottom)) !important;}',
          '@media (max-width:420px)#lk-chat .lk-widget{left:0 !important;right:0 !important;bottom:0 !important;height:100vh !important;border-radius:0 !important;max-width:none !important;}#lk-chat .lk-inputbar{padding-bottom:calc(10px + env(safe-area-inset-bottom)) !important;}',
        ].join('');
        document.head.appendChild(style);
      }

      function applyStyles(el, styles) {
        Object.keys(styles).forEach(function (key) {
          el.style[key] = styles[key];
        });
        return el;
      }

      function parseJson(raw) {
        try {
          return JSON.parse(raw);
        } catch (error) {
          return null;
        }
      }

      function pick() {
        for (var i = 0; i < arguments.length; i += 1) {
          var val = arguments[i];
          if (typeof val === 'string' && val.trim()) return val.trim();
          if (typeof val === 'number' && Number.isFinite(val)) return String(val);
        }
        return '';
      }

      function normalizeProperties(list) {
        if (!Array.isArray(list)) return [];
        return list
          .map(function (item, idx) {
            var row = item && typeof item === 'object' ? item : {};
            var bed = pick(row.bedrooms, row.beds, row.bhk, row.bed);
            var bath = pick(row.bathrooms, row.baths, row.bath);
            var bedBath = [bed ? bed + ' bed' : '', bath ? bath + ' bath' : ''].filter(Boolean).join(', ');
            var rawPrice = row.price;
            var price = pick(row.priceText, row.price_text, row.display_price, row.rent, row.amount, row.cost, rawPrice);
            if (typeof rawPrice === 'number' && Number.isFinite(rawPrice) && String(price).indexOf('\u20B9') === -1) {
              price = '\u20B9' + new Intl.NumberFormat('en-IN').format(rawPrice);
            }

            var imageUrl = pick(row.imageUrl, row.image_url, row.image, row.public_url, row.publicUrl, row.thumbnail, row.photo);
            if (!imageUrl && Array.isArray(row.media) && row.media.length > 0) {
              var first = row.media[0];
              if (typeof first === 'string') imageUrl = first;
              if (first && typeof first === 'object') {
                imageUrl = pick(imageUrl, first.url, first.image_url, first.src);
              }
            }

            return {
              id: Date.now() + idx,
              title: pick(row.title, row.name, row.property_name, row.propertyTitle, row.project_name, 'Property'),
              subtitle: pick(row.subtitle, row.description, row.summary, bedBath, row.location, row.address, row.locality),
              price: price,
              imageUrl: imageUrl,
            };
          })
          .filter(function (card) {
            return card.title || card.subtitle || card.price || card.imageUrl;
          })
          .slice(0, 10);
      }

      function parseWebhook(raw) {
        var fallback = 'Thanks for your message.';
        var text = (raw || '').trim();
        var parsedRoot = parseJson(text);
        if (!parsedRoot || typeof parsedRoot !== 'object') {
          return { message: text || fallback, properties: [] };
        }

        var payloadNode = parsedRoot;
        if (Object.prototype.hasOwnProperty.call(parsedRoot, 'output')) {
          var output = parsedRoot.output;
          if (typeof output === 'string') {
            var nested = parseJson(output);
            payloadNode = nested && typeof nested === 'object' ? nested : { message: output };
          } else if (output && typeof output === 'object') {
            payloadNode = output;
          }
        }

        return {
          message: pick(payloadNode.message, payloadNode.response, payloadNode.reply, payloadNode.text) || fallback,
          properties: normalizeProperties(payloadNode.properties || parsedRoot.properties),
        };
      }

      function buildHistory() {
        return state.messages
          .filter(function (message) {
            return message && typeof message.text === 'string' && message.text.trim();
          })
          .map(function (message) {
            return {
              role: message.user ? 'user' : 'assistant',
              content: message.text,
            };
          });
      }

      function normalizedApiBaseUrl() {
        var raw = (cfg.apiBaseUrl || '').trim();
        if (raw) return raw.replace(/\/$/, '');
        return window.location.origin;
      }

      function agentEndpoint() {
        if (!cfg.agentId) return '';
        return normalizedApiBaseUrl() + '/api/agents/' + cfg.agentId + '/test-chat';
      }

      function parseAgentResponse(raw) {
        var fallback = 'Thanks for your message.';
        var text = (raw || '').trim();
        var parsed = parseJson(text);
        if (!parsed || typeof parsed !== 'object') {
          return { message: text || fallback, properties: [] };
        }

        return {
          message: pick(parsed.reply, parsed.message, parsed.response, parsed.text) || fallback,
          properties: normalizeProperties(parsed.properties),
        };
      }

      function launcherPosition() {
        if (cfg.position === 'left') return { left: '20px', right: 'auto' };
        return { left: 'auto', right: '20px' };
      }

      function ensureGlyphSize(host) {
        var iconEl = host.querySelector('svg, img');
        if (!iconEl) {
          host.textContent = 'C';
          host.style.fontSize = '14px';
          host.style.fontWeight = '700';
          host.style.lineHeight = '1';
          host.style.alignItems = 'center';
          host.style.justifyContent = 'center';
          return;
        }
        iconEl.style.width = '100%';
        iconEl.style.height = '100%';
        iconEl.style.display = 'block';
        iconEl.style.objectFit = 'contain';
      }

      function createIconBadge(iconHtml, size, background, extraStyles) {
        var badge = applyStyles(
          document.createElement('span'),
          Object.assign(
            {
              width: size + 'px',
              height: size + 'px',
              minWidth: size + 'px',
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              background: background || 'rgba(255,255,255,.12)',
              overflow: 'hidden',
            },
            extraStyles || {},
          ),
        );
        badge.innerHTML = iconHtml || fallbackLauncherSvg;
        ensureGlyphSize(badge);
        return badge;
      }

      function imageCandidates(raw) {
        var value = (raw || '').trim();
        if (!value) return [];

        function stripProtocol(url) {
          var lower = url.toLowerCase();
          if (lower.indexOf('https://') === 0) return url.slice(8);
          if (lower.indexOf('http://') === 0) return url.slice(7);
          return url;
        }

        function isIpv4(host) {
          var parts = host.split('.');
          if (parts.length !== 4) return false;
          for (var i = 0; i < parts.length; i += 1) {
            var p = parts[i];
            if (!p || p.length > 3) return false;
            if (!/^\d+$/.test(p)) return false;
            var n = Number(p);
            if (!Number.isFinite(n) || n < 0 || n > 255) return false;
          }
          return true;
        }

        var bareInput = stripProtocol(value);
        var hostPart = bareInput.split('/')[0] || '';
        var hostWithoutPort = hostPart.split(':')[0] || '';
        var isIpv4Host = isIpv4(hostWithoutPort);
        var hasCustomPort = /:\d+$/.test(hostPart);

        var primary = value;
        if (primary.indexOf('//') === 0) primary = 'https:' + primary;
        var low = primary.toLowerCase();
        if (!(low.indexOf('https://') === 0 || low.indexOf('http://') === 0)) {
          primary = isIpv4Host || hasCustomPort ? 'http://' + primary : 'https://' + primary;
        }

        function toProxy(url) {
          return 'https://images.weserv.nl/?url=' + encodeURIComponent(stripProtocol(url)) + '&w=640&h=360&fit=cover';
        }

        if (isIpv4Host || hasCustomPort) {
          var httpSource = 'http://' + stripProtocol(primary);
          var first = toProxy(httpSource);
          var second = toProxy(primary);
          return first === second ? [first] : [first, second];
        }

        var proxy = toProxy(primary);
        return primary === proxy ? [primary] : [primary, proxy];
      }

      function addPropertyRail(container, properties) {
        if (!properties || !properties.length) return;

        var rail = applyStyles(document.createElement('div'), {
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          padding: '2px 2px 6px',
          scrollbarWidth: 'thin',
        });

        properties.forEach(function (property) {
          var card = applyStyles(document.createElement('article'), {
            minWidth: '168px',
            maxWidth: '168px',
            background: '#ffffff',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 0 1px rgba(15,23,42,0.08)',
          });

          var imageWrap = applyStyles(document.createElement('div'), {
            height: '96px',
            background: '#e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          });

          if (property.imageUrl) {
            var image = document.createElement('img');
            var candidates = imageCandidates(property.imageUrl);
            image.src = candidates[0] || '';
            image.alt = property.title || 'Property';
            image.loading = 'lazy';
            applyStyles(image, { width: '100%', height: '100%', objectFit: 'cover' });
            if (candidates.length > 1) {
              image.onerror = function () {
                if (image.src === candidates[0]) {
                  image.src = candidates[1];
                  return;
                }
                imageWrap.innerHTML = '<span style="font-size:12px;color:#64748b;">No image</span>';
              };
            } else {
              image.onerror = function () {
                imageWrap.innerHTML = '<span style="font-size:12px;color:#64748b;">No image</span>';
              };
            }
            imageWrap.appendChild(image);
          } else {
            var placeholder = document.createElement('span');
            placeholder.textContent = 'No image';
            applyStyles(placeholder, { fontSize: '12px', color: '#64748b' });
            imageWrap.appendChild(placeholder);
          }

          var body = applyStyles(document.createElement('div'), {
            padding: '8px 9px 9px',
            color: '#0f172a',
          });

          var title = document.createElement('p');
          title.textContent = property.title || 'Property';
          applyStyles(title, { margin: '0', fontSize: '12px', fontWeight: '700', lineHeight: '1.35' });
          body.appendChild(title);

          if (property.subtitle) {
            var subtitle = document.createElement('p');
            subtitle.textContent = property.subtitle;
            applyStyles(subtitle, { margin: '5px 0 0', fontSize: '11px', lineHeight: '1.3', color: '#475569' });
            body.appendChild(subtitle);
          }

          if (property.price) {
            var price = document.createElement('p');
            price.textContent = property.price;
            applyStyles(price, { margin: '7px 0 0', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.02em' });
            body.appendChild(price);
          }

          card.appendChild(imageWrap);
          card.appendChild(body);
          rail.appendChild(card);
        });

        container.appendChild(rail);
      }

      function renderMessages(box) {
        box.innerHTML = '';

        state.messages.forEach(function (message) {
          var block = applyStyles(document.createElement('div'), {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          });

          var row = applyStyles(document.createElement('div'), {
            display: 'flex',
            justifyContent: message.user ? 'flex-end' : 'flex-start',
            alignItems: 'flex-end',
            gap: '8px',
          });

          if (!message.user) {
            row.appendChild(
              createIconBadge(cfg.aiMessageIconHtml, 28, 'rgba(255,255,255,.12)', {
                color: '#fff',
                flexShrink: '0',
                marginBottom: '2px',
              }),
            );
          }

          var bubble = document.createElement('div');
          bubble.className = 'lk-bubble ' + (message.user ? 'is-user' : 'is-bot');
          bubble.textContent = message.text;
          applyStyles(bubble, {
            maxWidth: '84%',
            padding: '9px 11px',
            borderRadius: '12px',
            color: cfg.colors.text,
            lineHeight: String(cfg.lineHeight),
            background: message.user ? cfg.colors.userBubble : cfg.colors.botBubble,
            fontSize: cfg.fontSize + 'px',
          });
          row.appendChild(bubble);

          if (message.user) {
            row.appendChild(
              createIconBadge(cfg.userMessageIconHtml, 28, 'rgba(255,255,255,.12)', {
                color: '#fff',
                flexShrink: '0',
                marginBottom: '2px',
              }),
            );
          }

          block.appendChild(row);

          if (!message.user && Array.isArray(message.properties) && message.properties.length > 0) {
            addPropertyRail(block, message.properties);
          }

          box.appendChild(block);
        });

        if (state.messages.length < 3 && Array.isArray(cfg.quickReplies)) {
          var quickWrap = applyStyles(document.createElement('div'), {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          });

          cfg.quickReplies.forEach(function (quick) {
            var quickButton = document.createElement('button');
            quickButton.className = 'lk-quick';
            quickButton.textContent = quick.icon + ' ' + quick.text;
            applyStyles(quickButton, {
              border: '1px solid rgba(255,255,255,.2)',
              background: 'rgba(255,255,255,.08)',
              color: '#fff',
              borderRadius: '999px',
              padding: '7px 10px',
              cursor: 'pointer',
              fontSize: '12px',
            });
            quickButton.onclick = function () {
              send(quick.text);
            };
            quickWrap.appendChild(quickButton);
          });
          box.appendChild(quickWrap);
        }

        if (state.typing) {
          var typing = document.createElement('div');
          typing.className = 'lk-typing';
          typing.innerHTML = '<span></span><span></span><span></span>';
          box.appendChild(typing);
        }

        box.scrollTop = box.scrollHeight;
      }

      async function send(forcedValue) {
        var input = document.getElementById('lk-inp');
        var text = (forcedValue || (input ? input.value : '') || '').trim();
        if (!text) return;

        state.messages.push({ id: Date.now(), text: text, user: true, properties: [] });
        if (input) input.value = '';
        state.typing = true;
        render();
        var typingSince = Date.now();

        try {
          var useAgentRuntime = cfg.chatMode === 'agent' && !!cfg.agentId;
          var response = await fetch(useAgentRuntime ? agentEndpoint() : cfg.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
              useAgentRuntime
                ? {
                    message: text,
                    history: buildHistory(),
                  }
                : {
                    message: text,
                    timestamp: new Date().toISOString(),
                    sessionId: state.sessionId,
                  }
            ),
          });
          var raw = await response.text();
          var parsed = useAgentRuntime ? parseAgentResponse(raw) : parseWebhook(raw);
          state.messages.push({
            id: Date.now() + 1,
            text: parsed.message,
            user: false,
            properties: parsed.properties,
          });
        } catch (error) {
          state.messages.push({
            id: Date.now() + 1,
            text: cfg.chatMode === 'agent' ? 'Agent chat is not reachable.' : 'Webhook not reachable.',
            user: false,
            properties: [],
          });
        } finally {
          var wait = 550 - (Date.now() - typingSince);
          if (wait > 0) {
            await new Promise(function (resolve) {
              setTimeout(resolve, wait);
            });
          }
          state.typing = false;
          render();
        }
      }

      function render() {
        root.innerHTML = '';
        var position = launcherPosition();
        ensureThemeStyles();

        if (state.open) {
          var widget = applyStyles(document.createElement('div'), {
            position: 'fixed',
            left: position.left,
            right: position.right,
            bottom: '96px',
            width: '390px',
            maxWidth: 'calc(100vw - 24px)',
            height: '560px',
            maxHeight: 'calc(100vh - 108px)',
            borderRadius: cfg.widgetRadius + 'px',
            overflow: 'hidden',
            zIndex: '9999',
            background: cfg.colors.surface,
            border: cfg.borderWidth + 'px solid rgba(255,255,255,.16)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 18px 34px rgba(0,0,0,.35)',
            fontFamily: cfg.fontFamilyCss,
            fontSize: cfg.fontSize + 'px',
          });
          widget.className = 'lk-widget';

          var head = applyStyles(document.createElement('div'), {
            padding: '12px 14px',
            color: cfg.colors.text,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(135deg,' + cfg.colors.brandA + ',' + cfg.colors.brandB + ')',
          });
          head.className = 'lk-head';
          var headLeft = applyStyles(document.createElement('div'), {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: '0',
          });
          var headIcon = createIconBadge(cfg.headerIconHtml, 28, 'rgba(255,255,255,.22)', {
            color: '#fff',
            flexShrink: '0',
          });
          var title = document.createElement('strong');
          title.textContent = cfg.companyName;
          applyStyles(title, {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          });
          var closeButton = document.createElement('button');
          closeButton.id = 'lk-close';
          closeButton.className = 'lk-close';
          closeButton.innerHTML = '&times;';
          applyStyles(closeButton, {
            border: 'none',
            background: 'rgba(255,255,255,.22)',
            color: '#fff',
            borderRadius: '999px',
            width: '28px',
            height: '28px',
            cursor: 'pointer',
            fontSize: '18px',
            lineHeight: '1',
          });
          headLeft.appendChild(headIcon);
          headLeft.appendChild(title);
          head.appendChild(headLeft);
          head.appendChild(closeButton);

          var messageBox = document.createElement('div');
          messageBox.id = 'lk-msgs';
          messageBox.className = 'lk-msgs';
          applyStyles(messageBox, {
            flex: '1',
            overflowY: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          });

          var inputBar = applyStyles(document.createElement('div'), {
            display: 'flex',
            gap: '7px',
            borderTop: '1px solid rgba(255,255,255,.14)',
            padding: '9px 9px 7px',
          });
          inputBar.className = 'lk-inputbar';
          var input = document.createElement('input');
          input.id = 'lk-inp';
          input.className = 'lk-input';
          input.placeholder = cfg.inputPlaceholder;
          applyStyles(input, {
            flex: '1',
            border: 'none',
            borderRadius: '9px',
            padding: '9px 10px',
            fontSize: '13px',
          });
          var sendButton = document.createElement('button');
          sendButton.id = 'lk-send';
          sendButton.className = 'lk-send';
          sendButton.textContent = cfg.sendLabel;
          applyStyles(sendButton, {
            border: 'none',
            background: cfg.colors.brandA,
            color: '#fff',
            borderRadius: '9px',
            padding: '9px 12px',
            cursor: 'pointer',
            fontSize: '13px',
          });
          inputBar.appendChild(input);
          inputBar.appendChild(sendButton);

          widget.appendChild(head);
          widget.appendChild(messageBox);
          widget.appendChild(inputBar);
          var poweredBy = document.createElement('div');
          poweredBy.className = 'lk-powered';
          var poweredByLink = document.createElement('a');
          poweredByLink.href = 'https://oyik.ai';
          poweredByLink.target = '_blank';
          poweredByLink.rel = 'noopener noreferrer';
          poweredByLink.textContent = 'Powered By Oyik.AI';
          poweredBy.appendChild(poweredByLink);
          widget.appendChild(poweredBy);
          root.appendChild(widget);

          renderMessages(messageBox);
          closeButton.onclick = function () {
            state.open = false;
            render();
          };
          sendButton.onclick = function () {
            send();
          };
          input.onkeydown = function (event) {
            if (event.key === 'Enter') send();
          };
        }

        if (!state.open) {
          var launcher = document.createElement('button');
          launcher.className = 'lk-launcher';
          applyStyles(launcher, {
            position: 'fixed',
            left: position.left,
            right: position.right,
            bottom: cfg.bottom,
            width: cfg.launcherSize + 'px',
            height: cfg.launcherSize + 'px',
            border: 'none',
            borderRadius: cfg.launcherRadius + 'px',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            zIndex: '9998',
            background: 'linear-gradient(135deg,' + cfg.colors.brandA + ',' + cfg.colors.brandB + ')',
            boxShadow: '0 12px 24px rgba(0,0,0,.24)',
          });

          var iconWrap = createIconBadge(cfg.launcherIconHtml, 20, 'transparent', {
            color: '#fff',
            borderRadius: '0',
          });
          iconWrap.className = 'lk-launcher-icon';

          var label = document.createElement('span');
          label.className = 'lk-launcher-label';
          label.textContent = cfg.launcherLabel;
          applyStyles(label, { fontSize: '10px', fontWeight: '600' });

          launcher.appendChild(iconWrap);
          launcher.appendChild(label);
          launcher.onclick = function () {
            state.open = true;
            render();
          };
          root.appendChild(launcher);
        }
      }

      render();
    })();
        ` }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
