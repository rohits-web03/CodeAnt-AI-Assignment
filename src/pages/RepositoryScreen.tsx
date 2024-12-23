import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RepositoryList from '../components/RepositoryList';
import MobileHeader from '../components/MobileHeader';
import { useMediaQuery } from '../hooks/useMediaQuery';

function RepositoryScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileHeader 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <div className="w-full flex justify-center">
        <Sidebar 
          isOpen={isSidebarOpen || isDesktop} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        <main className={`flex-1`}>
          <RepositoryList />
        </main>
      </div>
    </div>
  );
}

export default RepositoryScreen;