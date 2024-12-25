import { MoveUp } from 'lucide-react';

export function StatsCard() {
  return (
    <div className="relative w-full h-full pt-24">
      {/* Main Stats Card */}
      <div className="absolute top-28 left-20 w-[90%] bg-white rounded-2xl shadow-xl border border-neutral-300 py-6">
        <div className="flex items-center gap-2 mb-6 px-6">
          <img src='/logo.png' className='w-[28px] h-[31px]'/>
          <h2 className="font-semibold">AI to Detect & Autofix Bad Code</h2>
        </div>
        <div className="grid grid-cols-3 gap-8 text-center border-t pt-3 px-6">
          <div>
            <div className="text-2xl font-bold mb-1">30+</div>
            <div className="text-sm text-gray-600">Language Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">10K+</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">100K+</div>
            <div className="text-sm text-gray-600">Hours Saved</div>
          </div>
        </div>
      </div>

      {/* Issues Fixed Card */}
      <div className="absolute top-[17rem] left-[17.5rem] w-[55%] bg-white rounded-2xl border border-neutral-300 shadow-xl p-6 pt-2">
        <div className="flex justify-between items-center mb-1">
            <img src='/Group4.png'/>
            <div className='flex flex-col justify-end pt-6 items-center'>
                <div className="flex justify-center text-blue-600 font-medium">
                    <MoveUp /> 
                    <p>14%</p>
                </div>
                <div className="text-sm text-gray-500 mb-4">This week</div>
            </div>
        </div>
        <div>
          <div className="text-gray-900 font-bold mb-1">Issues Fixed</div>
          <div className="text-3xl font-bold">500K+</div>
        </div>
      </div>
      <img className='absolute bottom-0 left-0 w-[284px] h-[319px]' src='Subtract.png'/>
    </div>
  );
}