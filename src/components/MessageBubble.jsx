import { pluginMap } from '../plugins/pluginManager';

export default function MessageBubble({ message }) {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 rounded-lg max-w-xs break-words whitespace-pre-wrap
          ${isUser ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}
      >
        {message.type === 'plugin' && message.pluginName
          ? pluginMap[message.pluginName]?.render(message.pluginData)
          : message.content}
      </div>
    </div>
  );
}
