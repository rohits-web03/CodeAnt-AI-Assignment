import React from 'react';
import { Home, Code2, Cloud, BookOpen, Settings, PhoneCall, LogOut, X, ChevronDown } from 'lucide-react';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const mainMenuItems: SidebarItem[] = [
  { icon: <Home className="w-5 h-5" />, label: 'Repositories', isActive: true },
  { icon: <Code2 className="w-5 h-5" />, label: 'AI Code Review' },
  { icon: <Cloud className="w-5 h-5" />, label: 'Cloud Security' },
  { icon: <BookOpen className="w-5 h-5" />, label: 'How to Use' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
];

const bottomMenuItems: SidebarItem[] = [
  { icon: <PhoneCall className="w-5 h-5" />, label: 'Support' },
  { icon: <LogOut className="w-5 h-5" />, label: 'Logout' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isMedium = useMediaQuery('(min-width: 768px)');
  
  if (!isOpen && !isDesktop) return null;

  return (
    <>
      {!isDesktop && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={onClose}
        />
      )}
      <div className={`
        ${isDesktop ? 'w-64 relative h-screen' : ''}
        ${!isDesktop && isMedium ? 'fixed inset-y-0 left-0 w-64 z-30' : ''}
        ${!isMedium ? 'fixed inset-x-0 top-0 z-30' : ''}
        bg-white border-r border-gray-200 flex flex-col
      `}>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-[11px]">
            <img src='/logo.png' className='w-[28.5px] h-[32px]'/>
            <span className="font-semibold text-lg">CodeAnt AI</span>
          </div>
          {!isMedium && (
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="flex justify-start items-center mx-4 my-2 px-2 py-1 rounded-md border border-gray-400 bg-white">
          <button className="w-full text-left px-3 py-1.5 text-sm">
            Utkarsh Dhairya Patel
          </button>
          <ChevronDown />
        </div>

        <nav className="flex-1 px-4 py-2">
          {mainMenuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm mb-1
                ${item.isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-4 py-2">
          {bottomMenuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm mb-1 text-gray-700 hover:bg-gray-100"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}