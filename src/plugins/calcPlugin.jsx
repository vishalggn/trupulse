import PluginCard from '../components/PluginCard';

const calcPlugin = {
  name: 'calc',
  trigger: /^\/calc\s+(.+)$/i,
  async execute(expr) {
    let result;
    try {
      result = Function(`"use strict"; return (${expr})`)();
    } catch {
      result = 'Invalid expression';
    }
    return {
      pluginName: 'calc',
      pluginData: { expression: expr, result }
    };
  },
  render(data) {
    return (
      <PluginCard title="Calculation Result" color="yellow">
        <div>{data.expression} = {data.result}</div>
      </PluginCard>
    );
  }
};

export default calcPlugin;
