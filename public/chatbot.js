import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
Chatbot.init({
  n8nChatUrl: "https://oyik.cloud/webhook/f5f0fe52-ef64-4641-b1b5-a0e72d5110bd/chat",
  metadata: {},
  theme: {
    button: {
      backgroundColor: "#8e2ebf",
      right: 25,
      bottom: 20,
      size: 62,
      iconColor: "#d2acac",
      customIconSrc: "https://www.svgrepo.com/show/388454/robot-one.svg",
      customIconSize: 85,
      customIconBorderRadius: 48,
      autoWindowOpen: {
        autoOpen: false,
        openDelay: 2
      },
      borderRadius: "rounded"
    },
    tooltip: {
      showTooltip: true,
      tooltipMessage: "Chat with our AI agent",
      tooltipBackgroundColor: "#b04040",
      tooltipTextColor: "#fff9f6",
      tooltipFontSize: 14
    },
    chatWindow: {
      borderRadiusStyle: "rounded",
      avatarBorderRadius: 38,
      messageBorderRadius: 9,
      showTitle: true,
      title: "OYIK.AI",
      titleAvatarSrc: "https://www.svgrepo.com/show/388454/robot-one.svg",
      avatarSize: 38,
      welcomeMessage: "Hello👋  , Welcome To Girona AI!",
      errorMessage: "Oops! Something went wrong on my end. Please try again in a moment",
      backgroundColor: "#ebe5e5",
      height: 600,
      width: 400,
      fontSize: 16,
      starterPrompts: [
        "I need a booking !",
        "I need to know more about your services"
      ],
      starterPromptFontSize: 15,
      renderHTML: true,
      clearChatOnReload: true,
      showScrollbar: true,
      botMessage: {
        backgroundColor: "#c093d7",
        textColor: "#fafafa",
        showAvatar: true,
        avatarSrc: "https://www.svgrepo.com/show/108472/robot.svg",
        showCopyToClipboardIcon: false
      },
      userMessage: {
        backgroundColor: "#8e2ebf",
        textColor: "#ffffff",
        showAvatar: true,
        avatarSrc: "https://www.svgrepo.com/show/530412/user.svg"
      },
      textInput: {
        placeholder: "How can I help you today?",
        backgroundColor: "#222034",
        textColor: "#fafaff",
        sendButtonColor: "#f36539",
        maxChars: 200,
        maxCharsWarningMessage: "You exceeded the characters limit. Please input less than 200 characters.",
        autoFocus: true,
        borderRadius: 8,
        sendButtonBorderRadius: 14
      }
    }
  }
});
