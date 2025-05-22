import weatherPlugin from './weatherPlugin';
import calcPlugin from './calcPlugin';
import definePlugin from './definePlugin';

const plugins = [weatherPlugin, calcPlugin, definePlugin];

export function parseCommand(input) {
  for (const plugin of plugins) {
    const match = input.match(plugin.trigger);
    if (match) {
      return {
        plugin,
        args: match[1]
      };
    }
  }
  return null;
}

export const pluginMap = Object.fromEntries(plugins.map(p => [p.name, p]));
