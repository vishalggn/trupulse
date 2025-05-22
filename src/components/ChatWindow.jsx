import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages, isTyping }) {
  return (
    <div className="flex flex-col p-4 space-y-2">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {isTyping && (
        <div className="text-gray-500 italic text-sm px-2 py-1">Assistant is typing…</div>
      )}
    </div>
  );
}
