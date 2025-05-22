import { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import { parseCommand } from "./plugins/pluginManager";
import { generateId } from "./utils/uuid";
import { mapNaturalToCommand } from "./utils/nlpMapper";
import bg from '../public/bg.webp'

export default function App() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat");
    return saved ? JSON.parse(saved) : [];
  });

  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (msg) => {
    setMessages((prev) => [
      ...prev,
      {
        ...msg,
        id: generateId(),
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const handleUserInput = async (text) => {
    addMessage({ sender: "user", content: text, type: "text" });

    const interpreted = mapNaturalToCommand(text);
    const result = parseCommand(interpreted);

    if (result) {
      setIsTyping(true);

      const { plugin, args } = result;
      try {
        // Simulate response delay
        await new Promise((res) => setTimeout(res, 1000));

        const response = await plugin.execute(args);
        addMessage({
          sender: "assistant",
          type: "plugin",
          content: "",
          pluginName: response.pluginName,
          pluginData: response.pluginData,
        });
      } catch (err) {
        addMessage({
          sender: "assistant",
          content: "⚠️ Error executing plugin.",
          type: "text",
        });
      } finally {
        setIsTyping(false);
      }
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center p-4 h-screen">
      <div className="flex flex-col h-full max-w-2xl mx-auto border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex-grow overflow-y-auto bg-[#ffffff6e] backdrop-blur-[10px]">
          <ChatWindow messages={messages} isTyping={isTyping} />
        </div>
        <ChatInput onSend={handleUserInput} />
      </div>
    </div>
  );
}
