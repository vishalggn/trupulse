import PluginCard from '../components/PluginCard';

const weatherPlugin = {
  name: 'weather',
  trigger: /^\/weather\s+(.+)$/i,
  async execute(city) {
    const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
    if (!res.ok) throw new Error('Weather API error');
    const data = await res.json();
    return {
      pluginName: 'weather',
      pluginData: {
        city,
        tempC: data.current_condition[0].temp_C,
        condition: data.current_condition[0].weatherDesc[0].value
      }
    };
  },
  render(data) {
    return (
      <PluginCard title={`Weather in ${data.city}`} color="blue">
        <div>Temperature: {data.tempC}°C</div>
        <div>Condition: {data.condition}</div>
      </PluginCard>
    );
  }
};

export default weatherPlugin;
