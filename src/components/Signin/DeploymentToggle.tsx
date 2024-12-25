interface DeploymentToggleProps {
  selected: 'saas' | 'self-hosted';
  onChange: (type: 'saas' | 'self-hosted') => void;
}

export function DeploymentToggle({ selected, onChange }: DeploymentToggleProps) {
  return (
    <div className="w-[95%] flex justify-center items-center rounded-lg bg-gray-100 p-1">
      <button
        className={`flex-1 py-3 px-4 rounded-md text-base font-medium transition-colors
          ${selected === 'saas' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-700 hover:bg-gray-200'}`}
        onClick={() => onChange('saas')}
      >
        SAAS
      </button>
      <button
        className={`flex-1 py-3 px-4 rounded-md text-base font-medium transition-colors
          ${selected === 'self-hosted' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-700 hover:bg-gray-200'}`}
        onClick={() => onChange('self-hosted')}
      >
        Self Hosted
      </button>
    </div>
  );
}