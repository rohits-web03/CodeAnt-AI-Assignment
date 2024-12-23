import React from 'react';
import { Search, RefreshCw, PlusCircle, Database } from 'lucide-react';
import type { Repository } from '../types';

const repositories: Repository[] = [
  {
    name: 'design-system',
    visibility: 'Public',
    language: 'React',
    size: 7320,
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    visibility: 'Private',
    language: 'Javascript',
    size: 5871,
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    visibility: 'Private',
    language: 'Python',
    size: 4521,
    updatedAt: '5 days ago'
  },
  {
    name: 'mobile-app',
    visibility: 'Public',
    language: 'Swift',
    size: 3096,
    updatedAt: '3 days ago'
  },
  {
    name: 'e-commerce-platform',
    visibility: 'Private',
    language: 'Java',
    size: 6210,
    updatedAt: '6 days ago'
  },
  {
    name: 'blog-website',
    visibility: 'Public',
    language: 'HTML/CSS',
    size: 1876,
    updatedAt: '4 days ago'
  },
  {
    name: 'social-network',
    visibility: 'Private',
    language: 'PHP',
    size: 5432,
    updatedAt: '7 days ago'
  }
];

const LanguageIndicator: React.FC<{ language: string }> = ({ language }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="inline">{language}</span>
      <div className={`w-2 h-2 rounded-full bg-[#1570EF]`} />
    </div>
  );
};

export default function RepositoryList() {
  return (
    <div className="max-w-full p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600 text-sm">{repositories.length} total repositories</p>
        </div>
        <div className="flex gap-2 justify-start w-auto">
          <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 flex-1 sm:flex-initial justify-center">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh All</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 justify-center">
            <PlusCircle className="w-4 h-4" />
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-4 overflow-y-auto h-full max-h-[calc(100dvh-280px)] sm:max-h-[calc(100dvh-240px)] lg:max-h-[calc(100dvh-180px)]">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col justify-between gap-2">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium text-blue-600">{repo.name}</h2>
                <span className={`px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600`}>
                  {repo.visibility}
                </span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600">
                <LanguageIndicator language={repo.language} />
                <div className="flex items-center gap-1">
                  <Database className='w-3 h-3'/>
                  <span className="inline">{repo.size} KB</span>
                </div>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}