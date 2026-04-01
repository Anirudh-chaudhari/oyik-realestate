import VoiceShowcase from "@/components/sections/features/VoiceShowcase";
import VoiceSamples from "@/components/sections/features/VoiceSamples";
import ChatbotShowcase from "@/components/sections/features/ChatbotShowcase";
import OperationsShowcase from "@/components/sections/features/OperationsShowcase";

export default function Features() {
  return (
    <>
      <VoiceShowcase />
      <VoiceSamples />
      <ChatbotShowcase />
      <OperationsShowcase />
    </>
  );
}
