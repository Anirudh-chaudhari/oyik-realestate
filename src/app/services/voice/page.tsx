import { Metadata } from "next";

import VoiceServiceClient from "./VoiceServiceClient";

export const metadata: Metadata = {
  title: "AI Voice Agents | oyik.realestate.ai",
  description:
    "Human-sounding voice agents for property calls, lead qualification, and viewing coordination.",
};

export default function VoiceServicePage() {
  return <VoiceServiceClient />;
}
