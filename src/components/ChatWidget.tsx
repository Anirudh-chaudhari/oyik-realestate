"use client";

import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [cacheBuster, setCacheBuster] = useState("");

  useEffect(() => {
    setCacheBuster("?v=" + Date.now());
  }, []);

  useEffect(() => {
    if (!cacheBuster) return;
    const script = document.createElement("script");
    script.src = "/chat-widget.js" + cacheBuster;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [cacheBuster]);

  return null;
}