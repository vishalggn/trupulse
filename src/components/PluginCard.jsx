export default function PluginCard({ title, children, color = 'gray' }) {
  const bgColor = {
    blue: 'bg-blue-100',
    yellow: 'bg-yellow-100',
    green: 'bg-green-100',
    gray: 'bg-gray-100',
  }[color] || 'bg-gray-100';

  return (
    <div className={`${bgColor} p-4 rounded shadow-sm max-w-xs`}>
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div>{children}</div>
    </div>
  );
}
