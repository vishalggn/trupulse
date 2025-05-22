export function mapNaturalToCommand(input) {
  const lower = input.toLowerCase().trim();

  // Weather detection
  const weatherMatch = lower.match(/(?:weather\s+in|what(?:'s| is)?\s+the\s+weather\s+in)\s+([a-zA-Z\s]+)/);
  if (weatherMatch) return `/weather ${weatherMatch[1].trim()}`;

  // Calculator detection
  const calcMatch = lower.match(/(?:calculate|compute|what\s+is|what's)\s+([\d\s+\-*/().]+)/);
  if (calcMatch) return `/calc ${calcMatch[1].trim()}`;

  // Definition detection
  const defineMatch = lower.match(/(?:define|what\s+does)\s+([a-zA-Z\-]+)(?:\s+mean)?/);
  if (defineMatch) return `/define ${defineMatch[1].trim()}`;

  return input; 
}
