import { Menu, X } from 'lucide-react';
import { CodeSquare } from './icons/CodeSqaure';

interface MobileHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileHeader({ isOpen, onToggle }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden bg-white">
      <div className="flex items-center gap-2">
        <CodeSquare className="w-8 h-8" />
        <span className="font-semibold text-lg">CodeAnt AI</span>
      </div>
      <button onClick={onToggle} className="p-1">
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}