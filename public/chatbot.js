import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
Chatbot.init({
  n8nChatUrl: "https://oyik.cloud/webhook/f5f0fe52-ef64-4641-b1b5-a0e72d5110bd/chat",
  metadata: {},
  theme: {
    button: {
      backgroundColor: "#3F37B8",
      right: 20,
      bottom: 20,
      size: 56,
      iconColor: "#FFFFFF",
      autoWindowOpen: { autoOpen: false, openDelay: 2 },
      borderRadius: "rounded-full",
      draggable: false
    },
    tooltip: {
      showTooltip: true,
      tooltipMessage: "Chat with us",
      tooltipBackgroundColor: "#3F37B8",
      tooltipTextColor: "#FFFFFF",
      tooltipFontSize: 14,
      hideTooltipOnMobile: true
    },
    allowProgrammaticMessage: false,
    chatWindow: {
      borderRadiusStyle: "rounded-2xl",
      avatarBorderRadius: 20,
      messageBorderRadius: 16,
      showTitle: true,
      title: "oyik AI Assistant",
      avatarSize: 38,
      welcomeMessage: "Hello! How can I help you today?",
      errorMessage: "Something went wrong. Please try again.",
      backgroundColor: "#FFFFFF",
      height: 500,
      width: 380,
      fontSize: 15,
      starterPrompts: ["What services do you offer?", "How does it work?", "Book a demo"],
      starterPromptFontSize: 14,
      renderHTML: false,
      clearChatOnReload: false,
      showScrollbar: false,
      botMessage: {
        backgroundColor: "#F2EEE6",
        textColor: "#111111",
        showAvatar: true,
        showCopyToClipboardIcon: false
      },
      userMessage: {
        backgroundColor: "#3F37B8",
        textColor: "#FFFFFF",
        showAvatar: true
      },
      textInput: {
        placeholder: "Type your message...",
        backgroundColor: "#F7F5F0",
        textColor: "#111111",
        sendButtonColor: "#3F37B8",
        maxChars: 500,
        autoFocus: false,
        borderRadius: 12,
        sendButtonBorderRadius: 12
      }
    }
  }
});
