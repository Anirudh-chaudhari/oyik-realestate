"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/chat-widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}