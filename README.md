# AI Chatbot with Plugin-Style Tools

A React-based chatbot that supports plugin-style tools and natural language commands. Users can interact using either slash commands or natural language, and the bot intelligently routes requests to appropriate plugins like weather, calculator, and dictionary.

---

## Features

- Chat UI with scrollable message history
- Text input with Enter key and button submission
- Plugin command support:
  - `/weather [city]` - fetches weather
  - `/calc [expression]` - evaluates math
  - `/define [word]` - fetches dictionary definitions
- Natural language command parsing
- Rich plugin output (cards)
- Typing indicator with delay simulation
- Markdown message support
- Persistent chat history using `localStorage`

---

## Tech Stack

- React (JSX)
- Tailwind CSS
- Fetch API
- `marked` for markdown rendering

----

## Project Structure

src
- components > ChatInput.jsx, ChatWindow.jsx, MessageBubble.jsx, PluginCard.jsx
- plugins > pluginManager.jsx, weatherPlugin.jsx, calcPlugin.jsx, definePlugin.js
- utils > uuid.jsx, nlpMapper.jsx

app.jsx


## Plugin Commands

/weather [city]
- Fetches current weather using a public API.
- Example: /weather London

/calc [expression]
- Safely evaluates a math expression.
- Example: /calc (4 + 3) * 2

/define [word]
- Fetches a word’s definition using a dictionary API.
- Example: /define innovation


## Natural Language Parsing

This feature maps human-friendly sentences to plugin commands using basic regex.

Examples:

- "What’s the weather in London?" → /weather London
- "Define curiosity" → /define curiosity
- "Calculate 8 + 2" → /calc 8 + 2

Implemented in: utils/nlpMapper.js


## Message Format
{
  id: string,
  sender: 'user' | 'assistant',
  content: string,
  type: 'text' | 'plugin',
  pluginName?: string,
  pluginData?: any,
  timestamp: string
}
