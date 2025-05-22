import PluginCard from '../components/PluginCard';

const definePlugin = {
  name: 'define',
  trigger: /^\/define\s+(.+)$/i,
  async execute(word) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) throw new Error('Definition not found');
    const data = await res.json();
    return {
      pluginName: 'define',
      pluginData: {
        word,
        meanings: data[0]?.meanings?.map(m => m.definitions[0]?.definition).filter(Boolean) || ['Definition not found']
      }
    };
  },
  render(data) {
    return (
      <PluginCard title={`Definition of ${data.word}`} color="green">
        {data.meanings.map((def, i) => (
          <div key={i}>• {def}</div>
        ))}
      </PluginCard>
    );
  }
};

export default definePlugin;
